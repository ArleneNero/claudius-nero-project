import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionsSection } from './components/SolutionsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05070B] text-[#F5F7FB] selection:bg-[#277DFF]/30 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Solutions Section */}
        <SolutionsSection />

        {/* 5. Use Cases Section */}
        <UseCasesSection />

        {/* 6. Process Section */}
        <ProcessSection />

        {/* 7. About Section */}
        <AboutSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* 9. Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
