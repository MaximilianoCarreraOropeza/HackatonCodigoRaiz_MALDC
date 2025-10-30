import { useState, useEffect } from "react";
import { connectWallet, getBalance } from "../utils/stellarService";

export default function WalletConnect() {
  const [publicKey, setPublicKey] = useState(null);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      if (window.freighterApi) {
        const isConnected = await window.freighterApi.isConnected();
        if (isConnected) {
          const key = await window.freighterApi.getPublicKey();
          setPublicKey(key);
          loadBalance(key);
        }
      }
    } catch (error) {
      console.log("Wallet not connected");
    }
  };

  const loadBalance = async (key) => {
    try {
      const bal = await getBalance(key);
      setBalance(bal);
    } catch (error) {
      console.error("Error loading balance:", error);
    }
  };

  const handleConnect = async () => {
    setLoading(true);
    try {
      const key = await connectWallet();
      setPublicKey(key);
      await loadBalance(key);
      alert("¡Wallet conectado exitosamente! 🎉");
    } catch (error) {
      alert(
        "Error al conectar wallet. Asegúrate de tener Freighter instalado. 🔌"
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = () => {
    setPublicKey(null);
    setBalance(null);
  };

  if (publicKey) {
    return (
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
          <span className="text-sm font-medium text-primary">
            {balance
              ? `${Number.parseFloat(balance).toFixed(2)} XLM`
              : "Loading..."}
          </span>
        </div>
        <button
          onClick={handleDisconnect}
          className="px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
          title={publicKey}
        >
          {publicKey.slice(0, 4)}...{publicKey.slice(-4)} <i class="fa-solid fa-lock"></i>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleConnect}
      disabled={loading}
      className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50"
    >
      {loading ? (
        <p>Conectando...</p>
      ) : (
        <p>
          Conectar Wallet <i class="fa-solid fa-link"></i>
        </p>
      )}
    </button>
  );
}
