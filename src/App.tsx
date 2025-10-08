import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Organization } from './components/Organization';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="home">
        <Hero />
        <Experience />
        <Education />
        <Organization />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}