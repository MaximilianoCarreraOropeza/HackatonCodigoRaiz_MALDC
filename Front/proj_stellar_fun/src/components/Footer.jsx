import { useState } from "react"
import Logo from "../../public/stellar-projects-foundation-logo.jpg"

function Footer() {
  const [email, setEmail] = useState("")
  const [alertMessage, setAlertMessage] = useState("")
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setAlertMessage(`¡Gracias por suscribirte! Te mantendremos informado en ${email}`)
    setShowAlert(true)
    setEmail("")

    setTimeout(() => {
      setShowAlert(false)
    }, 4000)
  }

  return (
    <footer className="relative py-16 px-4 border-t border-border">
      {/* Alerta elegante */}
      {showAlert && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl shadow-lg flex items-center justify-between animate-fade-in-down">
          <span className="text-sm font-medium">{alertMessage}</span>
          <button
            onClick={() => setShowAlert(false)}
            className="ml-3 text-white/80 hover:text-white transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}

      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="StellarLaunch Logo" className="w-10 h-10 rounded-lg" />
              <span className="text-xl font-bold gradient-text">Stellar Projects Foundation</span>
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

          {/* Recursos */}
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
            <h4 className="font-semibold mb-4 text-foreground">
              <i className="fa-solid fa-envelope text-primary mr-2"></i> Newsletter
            </h4>
            <p className="text-sm text-foreground/70 mb-4">
              Recibe las últimas noticias y proyectos destacados
            </p>
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
          <div>
            © 2025 StellarLaunch. Powered by Stellar Blockchain. Todos los derechos reservados.
          </div>
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
export default Footer;