import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // 👈 Importa SweetAlert2
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LaunchProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    category: "Tecnología",
    imageUrl: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    Swal.fire({
      title: "Creando proyecto en Stellar...",
      text: "Por favor, espera unos segundos ",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      Swal.fire({
        title: "¡Proyecto Creado Exitosamente!",
        html: `
          <p><strong>${formData.title}</strong> ha sido creado con éxito.</p>
          <p>Se ha generado una cuenta Stellar para tu proyecto.</p>
          <p class="text-sm text-gray-600">Ahora los inversores pueden comenzar a financiar tu idea.</p>
        `,
        icon: "success",
        confirmButtonText: "Volver al inicio",
        confirmButtonColor: "#4F46E5",
        backdrop: `rgba(0,0,0,0.4)`,
      }).then(() => {
        navigate("/");
      });

      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Lanza Tu Proyecto</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Comparte tu idea con la comunidad y comienza a recibir inversiones
              en Lumens
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-8 rounded-2xl bg-card border border-border space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-foreground"
                >
                  Título del Proyecto *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Ej: App Eco-Joven para Sostenibilidad"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold text-foreground"
                >
                  Categoría *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Tecnología">Tecnología</option>
                  <option value="Arte Digital">Arte Digital</option>
                  <option value="Sostenibilidad">Sostenibilidad</option>
                  <option value="Educación">Educación</option>
                  <option value="Impacto Social">Impacto Social</option>
                  <option value="Gaming">Gaming</option>
                  <option value="DeFi">DeFi</option>
                </select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-foreground"
                >
                  Descripción *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Describe tu proyecto, qué problema resuelve, y por qué los inversores deberían apoyarte..."
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Goal */}
              <div className="space-y-2">
                <label
                  htmlFor="goal"
                  className="block text-sm font-semibold text-foreground"
                >
                  Objetivo de Funding (en Lumens XLM) *
                </label>
                <input
                  type="number"
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  min="100"
                  placeholder="5000"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="text-xs text-foreground/60">
                  Mínimo 100 XLM. Considera costos realistas para tu proyecto.
                </p>
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <label
                  htmlFor="imageUrl"
                  className="block text-sm font-semibold text-foreground"
                >
                  URL de Imagen (opcional)
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://ejemplo.com/imagen.jpg"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Info Box */}
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="flex gap-3">
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-foreground">
                      Sobre tu proyecto en Stellar:
                    </p>
                    <ul className="text-foreground/70 space-y-1 list-disc list-inside">
                      <li>
                        Se creará una cuenta Stellar única para tu proyecto
                      </li>
                      <li>
                        Todas las inversiones serán transparentes en la
                        blockchain
                      </li>
                      <li>Los fondos se liberan al alcanzar tu objetivo</li>
                      <li>
                        Puedes configurar recompensas en tokens para inversores
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <p>Creando Proyecto en Stellar...</p>
              ) : (
                <p>
                  Lanzar Proyecto <i className="fa-solid fa-rocket"></i>
                </p>
              )}
            </button>

            <p className="text-center text-sm text-foreground/60">
              Al lanzar tu proyecto, aceptas nuestros términos y condiciones
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}