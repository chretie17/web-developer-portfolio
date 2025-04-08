import React from "react";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, Code2Icon, Paintbrush, SparklesIcon, GaugeIcon, MonitorIcon, Globe2Icon, ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import profilePic from './assets/TC Chretie.jpg';

function App() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "JavaScript", proficiency: 90 },
        { name: "HTML", proficiency: 95 },
        { name: "CSS", proficiency: 85 },
        { name: "React", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 85 }
      ]
    },
    {
      category: "WordPress",
      items: [
        { name: "Theme Development", proficiency: 90 },
        { name: "Plugin Customization", proficiency: 85 },
        { name: "WooCommerce", proficiency: 80 },
        { name: "Performance Optimization", proficiency: 85 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "PHP", proficiency: 75 },
        { name: "MySQL", proficiency: 70 },
        { name: "REST API", proficiency: 75 },
        { name: "NODE JS", proficiency: 75 }
      ]
    }
  ];

  const services = [
    {
      title: "WordPress Development",
      description: "Custom WordPress solutions tailored to your business needs",
      icon: <Code2Icon className="w-8 h-8" />
    },
    {
      title: "Frontend Development",
      description: "Responsive, modern interfaces with HTML, CSS, and JavaScript",
      icon: <MonitorIcon className="w-8 h-8" />
    },
    {
      title: "Web Design",
      description: "Intuitive and engaging user experiences focused on conversion",
      icon: <Paintbrush className="w-8 h-8" />
    },
    {
      title: "Performance Optimization",
      description: "Speed up your website for better SEO and user satisfaction",
      icon: <GaugeIcon className="w-8 h-8" />
    }
  ];

  const projects = [
    {
      name: "Kick It Ambassadors",
      url: "https://kickitambassadors.org",
      description: "Premium WordPress-powered Non Profit website",
      features: ["Custom Theme", "Woocommerce", "Mobile Responsive"]
    },
    {
      name: "Elevate Group",
      url: "https://elevatearchitectsgroup.com/",
      description: "Architects Group Website",
      features: ["Design Group", "Project showcasing", "Mobile Responsive"]
    },
    {
      name: "Kigali Concierge",
      url: "https://kigaliconcierge.com",
      description: "Premium WordPress-powered tourism platform with custom booking system",
      features: ["Custom Theme", "Booking System", "Mobile Responsive"]
    },
    {
      name: "RivExcel Tours",
      url: "https://tours.rivexcelgroup.com",
      description: "Dynamic tour booking platform built with WordPress",
      features: ["WooCommerce", "Custom Plugins", "Tour Management"]
    },
    {
      name: "Lightside Adventures",
      url: "https://lightsideadventures.com",
      description: "Adventure tourism site with rich media galleries",
      features: ["Media Optimization", "Tour Booking", "Interactive Maps"]
    },
    {
      name: "RivExcel Health",
      url: "https://health.rivexcelgroup.com",
      description: "Health Website",
      features: ["Healthcare Interface", "Appointment Booking", "Resource Library"]
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
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800/50 p-4 rounded-xl text-blue-200 hover:text-white hover:bg-blue-700/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Globe2Icon className="w-7 h-7" />
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
                      Web Developer & WordPress Specialist
                    </h2>
                    <p className="text-xl text-blue-200 leading-relaxed">
                      Transforming ideas into powerful WordPress solutions with a focus on performance, 
                      user experience, and business growth. Passionate about clean code and intuitive interfaces.
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

      {/* Skills Section */}
      <section className="py-20 px-4 bg-blue-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-blue-900/40 backdrop-blur-sm p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-blue-100 mb-6">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-lg text-blue-200">{skill.name}</span>
                        <span className="text-blue-300">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-blue-800/30 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-blue-950/70">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">
            Services I Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-3xl hover:bg-blue-800/40 transition-all duration-300 hover:-translate-y-2">
                <div className="bg-blue-800/50 p-4 inline-flex rounded-2xl text-blue-300 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-200">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-blue-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">
            Why Clients Love My Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-800/70 w-16 h-16 rounded-full flex items-center justify-center text-blue-200 text-2xl font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Rene Gasana</h4>
                    <p className="text-blue-300">CEO - Elevate</p>
                  </div>
                </div>
                <p className="text-blue-200 text-lg">
                  "Working with Turashimye was an excellent experience. The attention to detail 
                  and commitment to delivering high-quality work exceeded our expectations."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-blue-950/70">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-8 text-center">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-200 text-center mb-12">
            Ready to transform your online presence? Get in touch to discuss your project needs.
          </p>
          
          <div className="bg-blue-900/40 backdrop-blur-sm p-8 rounded-3xl mb-12">
          <form
  action="https://formspree.io/f/xdkeprdw" 
  method="POST"
  className="grid md:grid-cols-2 gap-6"
>
  <div>
    <label className="block text-blue-200 mb-2">Name</label>
    <input 
      type="text" 
      name="name"
      className="w-full bg-blue-800/30 border border-blue-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Your name"
      required
    />
  </div>
  <div>
    <label className="block text-blue-200 mb-2">Email</label>
    <input 
      type="email" 
      name="email"
      className="w-full bg-blue-800/30 border border-blue-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="your.email@example.com"
      required
    />
  </div>
  <div className="md:col-span-2">
    <label className="block text-blue-200 mb-2">Message</label>
    <textarea 
      className="w-full bg-blue-800/30 border border-blue-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
      name="message"
      placeholder="Tell me about your project..."
      required
    ></textarea>
  </div>
  <div className="md:col-span-2">
    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
      Send Message
    </button>
  </div>
</form>

          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-3xl flex flex-col items-center text-center">
              <PhoneIcon className="w-8 h-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-blue-200">+250 788 841 213</p>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-3xl flex flex-col items-center text-center">
              <MailIcon className="w-8 h-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-200">turachretien@gmail.com</p>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-3xl flex flex-col items-center text-center">
              <Globe2Icon className="w-8 h-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-blue-200">Kigali, Rwanda</p>
            </div>
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