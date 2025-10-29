import * as StellarSdk from "@stellar/stellar-sdk"

const server = new StellarSdk.Horizon.Server("https://horizon-testnet.stellar.org")

/**
 * Connect to Freighter wallet
 * @returns {Promise<string>} Public key of the connected wallet
 */
export async function connectWallet() {
  if (!window.freighterApi) {
    throw new Error("Freighter wallet not installed. Please install from https://www.freighter.app/")
  }

  try {
    const isAllowed = await window.freighterApi.isAllowed()

    if (!isAllowed) {
      await window.freighterApi.setAllowed()
    }

    const publicKey = await window.freighterApi.getPublicKey()
    return publicKey
  } catch (error) {
    console.error("Error connecting wallet:", error)
    throw error
  }
}

/**
 * Get account balance in Lumens
 * @param {string} publicKey - Stellar public key
 * @returns {Promise<string>} Balance in XLM
 */
export async function getBalance(publicKey) {
  try {
    const account = await server.loadAccount(publicKey)
    const xlmBalance = account.balances.find((balance) => balance.asset_type === "native")
    return xlmBalance ? xlmBalance.balance : "0"
  } catch (error) {
    console.error("Error getting balance:", error)

    // If account doesn't exist, try to fund it with Friendbot
    if (error.response && error.response.status === 404) {
      console.log("Account not found, attempting to fund with Friendbot...")
      try {
        await fetch(`https://friendbot.stellar.org?addr=${publicKey}`)
        // Try again after funding
        const account = await server.loadAccount(publicKey)
        const xlmBalance = account.balances.find((balance) => balance.asset_type === "native")
        return xlmBalance ? xlmBalance.balance : "0"
      } catch (friendbotError) {
        console.error("Friendbot error:", friendbotError)
        return "0"
      }
    }

    throw error
  }
}

/**
 * Send payment to a destination account
 * @param {string} destination - Destination public key
 * @param {string} amount - Amount in XLM
 * @returns {Promise<object>} Transaction result
 */
export async function sendPayment(destination, amount) {
  if (!window.freighterApi) {
    throw new Error("Freighter wallet not installed")
  }

  try {
    const publicKey = await window.freighterApi.getPublicKey()
    const account = await server.loadAccount(publicKey)

    const transaction = new StellarSdk.TransactionBuilder(account, {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase: StellarSdk.Networks.TESTNET,
    })
      .addOperation(
        StellarSdk.Operation.payment({
          destination: destination,
          asset: StellarSdk.Asset.native(),
          amount: amount.toString(),
        }),
      )
      .setTimeout(180)
      .build()

    const xdr = transaction.toXDR()

    // Sign with Freighter
    const signedXdr = await window.freighterApi.signTransaction(xdr, {
      networkPassphrase: StellarSdk.Networks.TESTNET,
    })

    const signedTransaction = StellarSdk.TransactionBuilder.fromXDR(signedXdr, StellarSdk.Networks.TESTNET)

    // Submit to network
    const result = await server.submitTransaction(signedTransaction)
    console.log("Transaction successful:", result)
    return result
  } catch (error) {
    console.error("Error sending payment:", error)
    throw error
  }
}

/**
 * Create a new Stellar account (for project creation)
 * @returns {Promise<object>} Keypair with publicKey and secret
 */
export function createAccount() {
  const pair = StellarSdk.Keypair.random()
  return {
    publicKey: pair.publicKey(),
    secret: pair.secret(),
  }
}
