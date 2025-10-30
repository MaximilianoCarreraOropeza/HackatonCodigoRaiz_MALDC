export default function Features() {
  const features = [
    {
      icon: "fa-solid fa-shield-halved",
      title: "Transparencia Blockchain",
      description:
        "Todas las transacciones registradas en Stellar. Verifica cada inversión en tiempo real con total transparencia.",
    },
    {
      icon: "fa-solid fa-sack-dollar",
      title: "Remuneración en Tokens",
      description:
        "Recibe equity tokens o retornos en Lumens cuando los proyectos alcanzan sus objetivos de funding.",
    },
    {
      icon: "fa-solid fa-users",
      title: "Comunidad Jóvenes",
      description:
        "Únete a una red de emprendedores e inversores jóvenes (18-30) construyendo el futuro Web3.",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Transacciones Rápidas",
      description:
        "Aprovecha la velocidad de Stellar: confirmaciones en 3-5 segundos con comisiones mínimas.",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">¿Por qué Stellar Projects Foundation?</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            La plataforma de crowdfunding blockchain diseñada para la nueva generación de innovadores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105 group"
            >
              <div className="text-5xl mb-4 text-white group-hover:scale-110 transition-transform">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
