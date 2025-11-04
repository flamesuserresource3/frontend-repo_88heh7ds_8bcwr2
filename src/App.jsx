import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-inter text-black selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
