"use client"

import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`¡Gracias por suscribirte! 🎉 Te mantendremos informado en ${email}`)
    setEmail("")
  }

  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <span className="text-xl font-bold gradient-text">StellarLaunch</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              La plataforma de crowdfunding blockchain para jóvenes innovadores. Construyendo el futuro Web3 juntos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Plataforma</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="/#projects" className="hover:text-primary transition-colors">
                  Explorar Proyectos
                </a>
              </li>
              <li>
                <a href="/launch" className="hover:text-primary transition-colors">
                  Lanzar Proyecto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Recursos</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Stellar Testnet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Guía de Inversión
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Newsletter 📬</h4>
            <p className="text-sm text-foreground/70 mb-4">Recibe las últimas noticias y proyectos destacados</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <div>© 2025 StellarLaunch. Powered by Stellar Blockchain. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
