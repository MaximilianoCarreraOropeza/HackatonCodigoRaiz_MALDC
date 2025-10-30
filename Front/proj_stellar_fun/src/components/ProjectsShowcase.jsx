import { Link } from "react-router-dom"

export default function ProjectsShowcase() {
  const projects = [
    {
      id: 1,
      icon: "fa-solid fa-leaf",
      title: "EcoApp Joven",
      description:
        "App móvil para rastrear tu huella de carbono y ganar tokens por acciones sostenibles",
      image: "/eco-friendly-mobile-app-interface-green-nature.jpg",
      goal: 5000,
      raised: 3000,
      backers: 127,
      category: "Sostenibilidad",
    },
    {
      id: 2,
      icon: "fa-solid fa-palette",
      title: "NFT Art Gallery",
      description:
        "Galería descentralizada para artistas emergentes que tokeniza obras de arte digital",
      image: "/digital-art-gallery-nft-colorful-abstract.jpg",
      goal: 8000,
      raised: 6400,
      backers: 203,
      category: "Arte Digital",
    },
    {
      id: 3,
      icon: "fa-solid fa-graduation-cap",
      title: "DeFi Learning Platform",
      description:
        "Plataforma educativa gamificada para aprender sobre finanzas descentralizadas",
      image: "/education-platform-learning-defi-blockchain.jpg",
      goal: 10000,
      raised: 4500,
      backers: 156,
      category: "Educación",
    },
    {
      id: 4,
      icon: "fa-solid fa-handshake",
      title: "Social Impact DAO",
      description:
        "DAO para financiar proyectos de impacto social liderados por jóvenes en Latinoamérica",
      image: "/community-social-impact-collaboration-diverse.jpg",
      goal: 15000,
      raised: 9000,
      backers: 284,
      category: "Impacto Social",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold flex justify-center items-center gap-3">
            <span className="gradient-text">Proyectos Destacados</span>
            <i className="fa-solid fa-star text-accent"></i>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Descubre ideas innovadoras de jóvenes emprendedores buscando hacer realidad sus sueños
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => {
            const progress = (project.raised / project.goal) * 100

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <i className={`${project.icon} text-lg`}></i>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  </div>

                  <p className="text-sm text-foreground/70 leading-relaxed">{project.description}</p>

                  {/* Barra de progreso */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-primary">{project.raised.toLocaleString()} XLM</span>
                      <span className="text-foreground/60">de {project.goal.toLocaleString()} XLM</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-foreground/60">
                      {project.backers} inversores • {Math.round(progress)}% completado
                    </div>
                  </div>

                  <Link
                    to={`/project/${project.id}`}
                    className="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-center hover:shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    Invertir con Stellar <i className="fa-solid fa-rocket"></i>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
