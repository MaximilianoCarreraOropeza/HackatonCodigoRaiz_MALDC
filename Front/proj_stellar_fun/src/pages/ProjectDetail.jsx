"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { sendPayment } from "../utils/stellarService"

export default function ProjectDetail() {
  const { id } = useParams()
  const [investAmount, setInvestAmount] = useState("")
  const [investing, setInvesting] = useState(false)

  // Mock project data
  const project = {
    id: Number.parseInt(id),
    title: "EcoApp Joven 🌱",
    description:
      "App móvil para rastrear tu huella de carbono y ganar tokens por acciones sostenibles. Nuestra misión es hacer que la sostenibilidad sea accesible y gratificante para todos.",
    fullDescription: `EcoApp es una aplicación móvil innovadora que permite a los usuarios rastrear su huella de carbono diaria y recibir recompensas en tokens por realizar acciones sostenibles.

Características principales:
• Calculadora de huella de carbono en tiempo real
• Sistema de recompensas basado en blockchain
• Marketplace de productos eco-friendly
• Comunidad de usuarios comprometidos con el medio ambiente
• Integración con dispositivos IoT para tracking automático

El proyecto busca crear una economía circular donde las acciones sostenibles sean recompensadas tangiblemente, incentivando un cambio de comportamiento a gran escala.`,
    image: "/eco-friendly-mobile-app-interface-green-nature-sus.jpg",
    goal: 5000,
    raised: 3000,
    backers: 127,
    category: "Sostenibilidad",
    creator: "María González",
    creatorAvatar: "/young-latina-woman-entrepreneur.jpg",
    daysLeft: 23,
    stellarAccount: "GBXYZ...ABC123",
  }

  const progress = (project.raised / project.goal) * 100

  const handleInvest = async () => {
    if (!investAmount || Number.parseFloat(investAmount) <= 0) {
      alert("Por favor ingresa una cantidad válida")
      return
    }

    setInvesting(true)
    try {
      await sendPayment(project.stellarAccount, investAmount)
      alert(
        `¡Inversión exitosa! 🎉\n\nHas invertido ${investAmount} XLM en ${project.title}.\n\nRecibirás tokens de equity cuando el proyecto alcance su objetivo.`,
      )
      setInvestAmount("")
    } catch (error) {
      alert("Error al procesar la inversión. Asegúrate de tener tu wallet conectado y fondos suficientes.")
      console.error(error)
    } finally {
      setInvesting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a proyectos
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                      {project.category}
                    </div>
                    <h1 className="text-4xl font-bold text-foreground mb-4">{project.title}</h1>
                    <p className="text-xl text-foreground/70">{project.description}</p>
                  </div>
                </div>

                {/* Creator */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <img
                    src={project.creatorAvatar || "/placeholder.svg"}
                    alt={project.creator}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <div className="text-sm text-foreground/60">Creado por</div>
                    <div className="font-semibold text-foreground">{project.creator}</div>
                  </div>
                </div>

                {/* Full Description */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Sobre el Proyecto</h2>
                  <div className="text-foreground/70 leading-relaxed whitespace-pre-line">
                    {project.fullDescription}
                  </div>
                </div>

                {/* Blockchain Info */}
                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    🔗 Información Blockchain
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Red:</span>
                      <span className="text-foreground font-medium">Stellar Testnet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Cuenta del Proyecto:</span>
                      <span className="text-foreground font-mono text-xs">{project.stellarAccount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Transacciones:</span>
                      <a href="#" className="text-primary hover:underline">
                        Ver en Stellar Explorer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Investment Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-2xl bg-card border border-border space-y-6">
                  {/* Stats */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">{project.raised.toLocaleString()} XLM</div>
                      <div className="text-foreground/60">de {project.goal.toLocaleString()} XLM objetivo</div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-foreground/60">{Math.round(progress)}% completado</div>
                    </div>

                    {/* Additional Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div>
                        <div className="text-2xl font-bold text-foreground">{project.backers}</div>
                        <div className="text-sm text-foreground/60">Inversores</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{project.daysLeft}</div>
                        <div className="text-sm text-foreground/60">Días restantes</div>
                      </div>
                    </div>
                  </div>

                  {/* Investment Form */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="space-y-2">
                      <label htmlFor="amount" className="block text-sm font-semibold text-foreground">
                        Cantidad a invertir (XLM)
                      </label>
                      <input
                        type="number"
                        id="amount"
                        value={investAmount}
                        onChange={(e) => setInvestAmount(e.target.value)}
                        min="1"
                        placeholder="100"
                        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <button
                      onClick={handleInvest}
                      disabled={investing}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {investing ? "Procesando..." : "Invertir Ahora 🚀"}
                    </button>

                    <p className="text-xs text-center text-foreground/60">
                      Asegúrate de tener tu wallet Freighter conectado
                    </p>
                  </div>

                  {/* Rewards Info */}
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                    <div className="flex gap-2 mb-2">
                      <span className="text-xl">🎁</span>
                      <h4 className="font-semibold text-foreground">Recompensas</h4>
                    </div>
                    <p className="text-sm text-foreground/70">
                      Los inversores recibirán tokens de equity cuando el proyecto alcance su objetivo de funding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
