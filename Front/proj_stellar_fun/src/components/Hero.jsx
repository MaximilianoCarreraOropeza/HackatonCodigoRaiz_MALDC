import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Animated gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-foreground/90">Powered by Stellar Blockchain</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Donde las ideas jóvenes</span>
            <br />
            <span className="text-foreground">se convierten en estrellas</span> ⭐
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Financia proyectos Web3 con Stellar. Invierte hoy y gana retornos en Lumens o tokens.
            <span className="block mt-2">¡Tu idea merece brillar en la blockchain! 🚀</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Explora Proyectos 🔍
            </a>
            <Link
              to="/launch"
              className="px-8 py-4 rounded-xl bg-card border border-primary/30 text-foreground font-semibold text-lg hover:bg-primary/10 transition-all hover:scale-105"
            >
              Lanza Tu Idea 💡
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">500+</div>
              <div className="text-sm text-foreground/60">Proyectos Lanzados</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">2M+</div>
              <div className="text-sm text-foreground/60">Lumens Invertidos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-foreground/60">Inversores Activos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
