export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "💡",
      title: "Lanza tu Idea",
      description:
        "Crea tu proyecto en minutos. Define tu objetivo de funding en Lumens y comparte tu visión con la comunidad.",
    },
    {
      number: "02",
      icon: "🎯",
      title: "Establece Objetivos",
      description: "Configura metas claras, recompensas para inversores y el timeline de tu proyecto en la blockchain.",
    },
    {
      number: "03",
      icon: "💸",
      title: "Recibe Inversiones",
      description:
        "Los inversores envían Lumens directamente a tu proyecto. Todas las transacciones son transparentes y verificables.",
    },
    {
      number: "04",
      icon: "🏆",
      title: "Remuneración al Éxito",
      description:
        "Al alcanzar tus objetivos, los inversores reciben tokens de equity, NFTs o retornos en Lumens automáticamente.",
    },
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">¿Cómo Funciona?</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">De la idea a la realidad en 4 pasos simples</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-primary/50">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl">{step.icon}</div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/launch"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            Comienza Ahora 🚀
          </a>
        </div>
      </div>
    </section>
  )
}
