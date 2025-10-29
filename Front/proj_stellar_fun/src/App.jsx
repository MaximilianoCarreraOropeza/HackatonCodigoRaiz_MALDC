import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LaunchProject from "./pages/LaunchProject"
import ProjectDetail from "./pages/ProjectDetail"

function App() {
  return (
    <Router>
      <div className="stars-bg"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<LaunchProject />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App
