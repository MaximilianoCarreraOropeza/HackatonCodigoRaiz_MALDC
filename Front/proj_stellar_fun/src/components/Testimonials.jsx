export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Fundadora de EcoApp",
      avatar: "/young-latina-woman-entrepreneur-smiling.jpg",
      quote:
        "StellarLaunch me permitió financiar mi app sostenible en solo 3 semanas. La transparencia de blockchain me dio credibilidad con los inversores. ¡Increíble! 🌱",
      amount: "5,000 XLM",
    },
    {
      name: "Carlos Ruiz",
      role: "Artista Digital",
      avatar: "/young-latino-man-artist-creative.jpg",
      quote:
        "Como artista joven, conseguir funding era imposible. Con StellarLaunch lancé mi galería NFT y ahora tengo 200+ coleccionistas. ¡Cambió mi vida! 🎨",
      amount: "8,000 XLM",
    },
    {
      name: "Ana Martínez",
      role: "Inversora",
      avatar: "/young-woman-investor-professional.jpg",
      quote:
        "Invertir en proyectos jóvenes nunca fue tan fácil. Ya respaldé 15 proyectos y recibí tokens de 8. La comunidad es increíble. 💎",
      amount: "12,000 XLM invertidos",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Historias de Éxito</span> 💫
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Jóvenes emprendedores e inversores compartiendo sus experiencias
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105 space-y-6"
            >
              {/* Quote */}
              <div className="space-y-4">
                <div className="text-4xl text-primary/30">"</div>
                <p className="text-foreground/80 leading-relaxed italic">{testimonial.quote}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium mt-1">{testimonial.amount}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
