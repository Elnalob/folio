import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Download, Calendar, Settings, Plus, Minus, RotateCcw, Eye, Type, Palette } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isDyslexiaFont, setIsDyslexiaFont] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [colorBlindMode, setColorBlindMode] = useState('none');

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${fontSize}px`;
    
    if (isDyslexiaFont) {
      root.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
    } else {
      root.style.fontFamily = '';
    }
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    root.className = root.className.replace(/colorblind-\w+/g, '');
    if (colorBlindMode !== 'none') {
      root.classList.add(`colorblind-${colorBlindMode}`);
    }
  }, [fontSize, isDyslexiaFont, isHighContrast, colorBlindMode]);

  const resetAccessibility = () => {
    setFontSize(16);
    setIsDyslexiaFont(false);
    setIsHighContrast(false);
    setColorBlindMode('none');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Fintech Dashboard Redesign",
      description: "Led the complete redesign of a B2B fintech platform, improving user task completion by 40% and reducing support tickets by 60%.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["UI/UX Design", "B2B SaaS", "Fintech", "Dashboard Design"],
      metrics: "40% increase in task completion, 60% reduction in support tickets"
    },
    {
      title: "Mobile Banking App",
      description: "Designed an intuitive mobile banking experience that increased user engagement by 65% and improved customer satisfaction scores.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Mobile Design", "Banking", "User Research", "Prototyping"],
      metrics: "65% increase in user engagement, 4.8/5 customer satisfaction"
    },
    {
      title: "E-commerce Platform",
      description: "Redesigned checkout flow and product discovery, resulting in 35% increase in conversion rates and 50% reduction in cart abandonment.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["E-commerce", "Conversion Optimization", "User Journey", "A/B Testing"],
      metrics: "35% conversion increase, 50% less cart abandonment"
    }
  ];

  const websites = [
    {
      title: "TechStartup Landing Page",
      description: "Built a high-converting landing page for a SaaS startup that increased sign-ups by 120% within the first month.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Tailwind CSS", "Landing Page", "Conversion"],
      link: "https://example-startup.com",
      metrics: "120% increase in sign-ups"
    },
    {
      title: "Restaurant Chain Website",
      description: "Developed a responsive website with online ordering system, boosting online orders by 85% and improving customer experience.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "E-commerce", "Responsive Design", "SEO"],
      link: "https://example-restaurant.com",
      metrics: "85% increase in online orders"
    },
    {
      title: "Healthcare Platform",
      description: "Created a patient portal with appointment booking and medical records access, serving 10,000+ active users monthly.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Vue.js", "Healthcare", "User Portal", "Accessibility"],
      link: "https://example-healthcare.com",
      metrics: "10,000+ monthly active users"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Bola Olaniyan</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'work', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1u-wFuPM3l1VTjYyKcIRaPsr1QEhn5nFT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
            </div>

            {/* Accessibility Button */}
            <button
              onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
              title="Accessibility Settings"
            >
              <Settings size={20} />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'work', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-gray-600 hover:text-gray-900"
                >
                  {section}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1u-wFuPM3l1VTjYyKcIRaPsr1QEhn5nFT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 py-2 text-gray-600 hover:text-gray-900"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
              <button
                onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
                className="flex items-center space-x-2 py-2 text-gray-600 hover:text-gray-900"
              >
                <Settings size={16} />
                <span>Accessibility</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Accessibility Panel */}
      {isAccessibilityOpen && (
        <div className="fixed top-16 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg flex items-center">
              <Eye className="mr-2" size={20} />
              Make it easier to read
            </h3>
            <button
              onClick={() => setIsAccessibilityOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center">
                <Type className="mr-2" size={16} />
                Text Size
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="p-2 bg-gray-100 rounded hover:bg-gray-200"
                  title="Make text smaller"
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm px-3 py-1 bg-gray-50 rounded">{fontSize}px</span>
                <button
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  className="p-2 bg-gray-100 rounded hover:bg-gray-200"
                  title="Make text bigger"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Dyslexia Font */}
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isDyslexiaFont}
                  onChange={(e) => setIsDyslexiaFont(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Easy-to-read font for dyslexia</span>
              </label>
            </div>

            {/* High Contrast */}
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isHighContrast}
                  onChange={(e) => setIsHighContrast(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">High contrast colors</span>
              </label>
            </div>

            {/* Color Blind Support */}
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center">
                <Palette className="mr-2" size={16} />
                Color Vision Help
              </label>
              <select
                value={colorBlindMode}
                onChange={(e) => setColorBlindMode(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm"
              >
                <option value="none">Normal colors</option>
                <option value="protanopia">Red-blind friendly</option>
                <option value="deuteranopia">Green-blind friendly</option>
                <option value="tritanopia">Blue-blind friendly</option>
              </select>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetAccessibility}
              className="w-full flex items-center justify-center space-x-2 p-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
            >
              <RotateCcw size={16} />
              <span>Reset to normal</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Calendly Button */}
      <a
        href="https://calendly.com/hello-workwithbola/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 group hover:pr-6"
        title="Book a call with me"
      >
        <Calendar size={24} />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Book a Call
        </span>
      </a>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Product Designer Focused on{' '}
              <span className="text-blue-600">User Impact</span> &{' '}
              <span className="text-blue-600">Business Outcomes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I help startups design digital products that solve real problems, drive user adoption, 
              and deliver measurable business results. 6+ years of turning complex challenges into 
              intuitive experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('work')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </button>
              <a
                href="https://calendly.com/hello-workwithbola/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <Calendar className="mr-2" size={20} />
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Designing with Purpose, Measuring Success
              </h2>
              <p className="text-gray-600 mb-6">
                I'm a product designer who believes great design isn't just about how it looks—it's about 
                how it performs. With 6+ years of experience working with startups and scale-ups, I've 
                learned that the best designs are those that solve real user problems while driving 
                business growth.
              </p>
              <p className="text-gray-600 mb-6">
                My approach combines user research, data analysis, and iterative design to create 
                products that users love and businesses can measure. I've helped companies increase 
                conversion rates by up to 40%, reduce support tickets by 60%, and improve user 
                satisfaction scores across the board.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Specialties</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• B2B SaaS Design</li>
                    <li>• Fintech & Banking</li>
                    <li>• Dashboard Design</li>
                    <li>• Mobile Apps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Skills</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• User Research</li>
                    <li>• Prototyping</li>
                    <li>• Design Systems</li>
                    <li>• A/B Testing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bola Olaniyan"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that delivered real impact for users and businesses.
            </p>
          </div>

          {/* Product Design Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
              Product Design Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-green-600">{project.metrics}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Websites Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
              Websites I've Built
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((website, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={website.image}
                    alt={website.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{website.title}</h3>
                    <p className="text-gray-600 mb-4">{website.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {website.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-blue-600 mb-3">{website.metrics}</p>
                    </div>
                    <a
                      href={website.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Visit Website
                      <ExternalLink className="ml-1" size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to create something amazing? I'm always excited to work on projects that make a real 
            difference. Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/hello-workwithbola/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Calendar className="mr-2" size={20} />
              Schedule a Call
            </a>
            <a
              href="mailto:hello@workwithbola.com"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2024 Bola Olaniyan. Designed and built with care.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;