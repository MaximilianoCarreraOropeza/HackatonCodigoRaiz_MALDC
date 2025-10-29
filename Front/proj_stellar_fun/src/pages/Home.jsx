import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import ProjectsShowcase from "../components/ProjectsShowcase"
import HowItWorks from "../components/HowItWorks"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ProjectsShowcase />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  )
}
