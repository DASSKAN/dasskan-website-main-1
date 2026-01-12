import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

export default function DasskanWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                DASSKAN
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'What We Do', 'How We Work', 'Team', 'Projects', 'Careers', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'What We Do', 'How We Work', 'Team', 'Projects', 'Careers', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            DASSKAN Technologies
          </h1>
          <p className="text-xl sm:text-2xl text-cyan-400 mb-6 font-light">
            Empowering businesses through purposeful innovation.
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We design and build practical technology solutions by identifying real-world problems and creating systems that make everyday operations smarter, simpler, and more efficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('what-we-do')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center"
            >
              Explore What We Do
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Work With Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Us
          </h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              DASSKAN Technologies is a problem-driven technology company focused on solving everyday business challenges through research, design, and practical engineering.
            </p>
            <p>
              We believe that innovation begins with curiosity — by listening, observing, and truly understanding how people work. From there, we transform those insights into solutions that are intentional, scalable, and grounded in real use cases.
            </p>
            <p>
              Founded by a multidisciplinary team based in Chennai, Tamil Nadu, we combine engineering, software development, and design thinking to build technology that serves real purpose.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-slate-300 text-center mb-12 text-lg max-w-3xl mx-auto">
            We operate across several core domains that collectively bridge understanding and execution:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Problem Discovery & Research',
                description: 'We engage directly with local businesses, shops, and individuals to identify inefficiencies and real constraints within day-to-day operations.'
              },
              {
                title: 'Software & System Solutions',
                description: 'We design software, tools, and internal platforms that improve workflows, reduce friction, and enhance productivity.'
              },
              {
                title: 'Automation & Smart Systems',
                description: 'We explore automation and intelligent system design to reduce manual effort and streamline repetitive processes.'
              },
              {
                title: 'Custom Solutions for Businesses',
                description: 'Every solution is tailored, ensuring the technology matches the problem — not the other way around.'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-semibold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            How We Work
          </h2>
          <p className="text-slate-300 text-center mb-12 text-lg">
            Our approach follows a structured, ground-up process:
          </p>
          <div className="space-y-6">
            {[
              {
                step: 'Step 1',
                title: 'Identify the Problem',
                description: 'We start by discovering real issues faced by people and businesses through field research and observation.'
              },
              {
                step: 'Step 2',
                title: 'Validate & Analyze',
                description: 'Problems are evaluated based on relevance, impact, feasibility, and scalability.'
              },
              {
                step: 'Step 3',
                title: 'Design the Solution',
                description: 'Potential solutions are structured with clarity, practicality, and user needs at the core.'
              },
              {
                step: 'Step 4',
                title: 'Founder Review & Approval',
                description: 'All ideas and prototypes are reviewed by the founding team to ensure alignment and purpose.'
              },
              {
                step: 'Step 5',
                title: 'Build & Execute',
                description: 'Software solutions are built in-house, while hardware-focused solutions are developed through trusted manufacturing and execution partners.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/30 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                    {item.step} — {item.title}
                  </h3>
                  <p className="text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-center mt-8 italic">
            This methodology ensures that our solutions are meaningful, grounded, and execution-ready.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Team
          </h2>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              DASSKAN Technologies is led by a founding team with diverse backgrounds in electronics, software, system design, IT, and digital creative workflows.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              We collaborate, share responsibility, and make decisions collectively — with a unified focus on building solutions that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projects & Current Work
          </h2>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              We are currently in our active development phase, working on internal tools, early-stage prototypes, field-tested concepts, and scalable solutions for small and growing businesses.
            </p>
            <p className="text-cyan-400 text-lg font-semibold">
              Updates on our product releases and deployments will be shared soon.
            </p>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Work With Us
          </h2>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700 mb-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We are always open to connecting with individuals who are curious, driven, and interested in contributing to meaningful innovation from the ground up.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Whether you're looking to collaborate, join our research teams, or explore opportunities with us, feel free to reach out.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Research & Field Problem Discovery',
              'Software & Systems Development',
              'Automation & Hardware',
              'Business & Operations',
              'Design & UX'
            ].map((opportunity, index) => (
              <div 
                key={index}
                className="p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <p className="text-slate-300">{opportunity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
              <MapPin className="mx-auto mb-4 text-cyan-400" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-slate-200">Location</h3>
              <p className="text-slate-300">Chennai, Tamil Nadu</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
              <Mail className="mx-auto mb-4 text-cyan-400" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-slate-200">Email</h3>
              <a href="mailto:dasskantechnologies@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors break-all">
                dasskantechnologies@gmail.com
              </a>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
              <Linkedin className="mx-auto mb-4 text-cyan-400" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-slate-200">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/company/dasskan-technologies/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Visit Our Page
              </a>
            </div>
          </div>
          <p className="text-center text-slate-300 mt-8 text-lg">
            For collaborations, opportunities, or inquiries — reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 mb-2">
            DASSKAN Technologies — Building practical solutions for real-world problems.
          </p>
          <p className="text-slate-500 text-sm">
            © DASSKAN Technologies — Chennai, Tamil Nadu
          </p>
        </div>
      </footer>
    </div>
  );
}