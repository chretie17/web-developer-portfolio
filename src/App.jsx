import React from "react";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, Code2Icon, Paintbrush, SparklesIcon, GaugeIcon, MonitorIcon, Globe2Icon, ArrowRightIcon } from "lucide-react";
import profilePic from './assets/TC Chretie.jpg';

function App() {
  const projects = [
    {
      name: "Kigali Concierge",
      url: "https://kigalitour.com",
      description: "Premium WordPress-powered tourism platform with custom booking system",
      features: ["Custom Theme", "Booking System", "Mobile Responsive"]
    },
    {
      name: "RivExcel Group",
      url: "https://rivexcelgroup.com",
      description: "Corporate WordPress site with advanced business features",
      features: ["Business Integration", "Custom Forms"]
    },
    {
      name: "RivExcel Tours",
      url: "https://rivexceltours.com",
      description: "Dynamic tour booking platform built with WordPress",
      features: ["WooCommerce", "Custom Plugins", ]
    },
    {
      name: "Lightside Adventures",
      url: "https://lightsideadventures.com",
      description: "Adventure tourism site with rich media galleries",
      features: ["Media Optimization", "Tour Booking", "Interactive Maps"]
    },
    {
      name: "John Global Marketing",
      url: "https://johnglobalmarketing.com",
      description: "Blog Website",
      features: ["Blog System", "Lead Generation", "Blog"]
    },
    {
      name: "Fiston Tours",
      url: "https://fistontours.com",
      description: "Modern travel website with booking capabilities",
      features: ["Custom Booking", "SEO Optimized", "Fast Loading"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm" />
        <div className="relative w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Profile Image Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl transform -rotate-6 scale-105 group-hover:rotate-6 transition-transform duration-500 opacity-20" />
                <div className="relative bg-blue-900/40 backdrop-blur-sm p-6 rounded-3xl">
                  <div className="aspect-square rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                    {/* Replace this div with your actual image once you provide the filename */}
                    <img
  src={profilePic}
  alt="Turashimye Chretien"
  className="w-full h-full object-cover"
/>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-900/40 backdrop-blur-sm p-6 rounded-3xl space-y-4">
                <div className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+250788841213" className="text-lg">+250 788 841 213</a>
                </div>
                <div className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+250739003950" className="text-lg">+250 739 003 950</a>
                </div>
                <div className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                  <MailIcon className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:turachretien@gmail.com" className="text-lg">turachretien@gmail.com</a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center">
                <a
                  href="https://linkedin.com/in/chretie17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800/50 p-4 rounded-xl text-blue-200 hover:text-white hover:bg-blue-700/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <LinkedinIcon className="w-7 h-7" />
                </a>
                <a
                  href="https://github.com/chretie17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800/50 p-4 rounded-xl text-blue-200 hover:text-white hover:bg-blue-700/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <GithubIcon className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-blue-900/40 backdrop-blur-sm p-8 rounded-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  Turashimye Chretien
                </h1>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl text-blue-100 font-semibold mb-2">
                      Web Developer 
                    </h2>
                    <p className="text-xl text-blue-200 leading-relaxed">
                      Transforming ideas into powerful WordPress solutions with a focus on performance, 
                      user experience, and business growth.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 pt-6">
                    <div className="bg-blue-800/30 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                      <p className="text-blue-200">3+ years designing premium WordPress solutions</p>
                    </div>
                    <div className="bg-blue-800/30 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                      <p className="text-blue-200">Based in Kigali, Rwanda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-blue-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-blue-900/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-blue-800/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[16/10]">
                  <iframe
                    src={project.url}
                    title={project.name}
                    className="absolute inset-0 w-full h-full border-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-blue-200 text-lg mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, i) => (
                      <span key={i} className="text-sm bg-blue-800/50 text-blue-200 px-4 py-2 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 group/btn"
                  >
                    <span>View Live Site</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-blue-200 border-t border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xl flex items-center justify-center gap-2">
            Crafted with <SparklesIcon className="w-6 h-6" /> by Turashimye Chretien © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;