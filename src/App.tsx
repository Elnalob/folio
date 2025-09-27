import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  Calendar,
  Download,
  Eye,
  Type,
  Palette,
  Settings,
  Plus,
  Minus,
  RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  dyslexiaFont: boolean;
  highContrast: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    dyslexiaFont: false,
    highContrast: false,
    colorBlindMode: 'none'
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;
    root.style.fontSize = `${accessibilitySettings.fontSize}px`;
    
    if (accessibilitySettings.dyslexiaFont) {
      root.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
    } else {
      root.style.fontFamily = '';
    }

    if (accessibilitySettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    root.className = root.className.replace(/colorblind-\w+/g, '');
    if (accessibilitySettings.colorBlindMode !== 'none') {
      root.classList.add(`colorblind-${accessibilitySettings.colorBlindMode}`);
    }
  }, [accessibilitySettings]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const resetAccessibility = () => {
    setAccessibilitySettings({
      fontSize: 16,
      dyslexiaFont: false,
      highContrast: false,
      colorBlindMode: 'none'
    });
  };

  const projects = [
    {
      title: "Fintech Dashboard Redesign",
      description: "Led the complete redesign of a B2B fintech platform, improving user task completion by 40% and reducing support tickets by 60%.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["B2B SaaS", "Fintech", "Dashboard Design"],
      impact: "40% increase in task completion"
    },
    {
      title: "Mobile Banking App",
      description: "Designed a mobile-first banking experience that increased user engagement by 65% and improved accessibility scores to WCAG AA compliance.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Mobile Design", "Banking", "Accessibility"],
      impact: "65% increase in engagement"
    },
    {
      title: "E-commerce Platform",
      description: "Redesigned checkout flow resulting in 25% reduction in cart abandonment and $2M additional annual revenue.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["E-commerce", "Conversion Optimization", "UX Research"],
      impact: "$2M additional revenue"
    }
  ];

  const websites = [
    {
      title: "TechStartup Landing Page",
      description: "Modern, conversion-focused landing page for a B2B SaaS startup with integrated analytics and A/B testing.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "https://example-startup.com",
      tags: ["Landing Page", "B2B SaaS", "Conversion"]
    },
    {
      title: "Creative Agency Portfolio",
      description: "Award-winning portfolio website featuring interactive animations and seamless user experience.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "https://example-agency.com",
      tags: ["Portfolio", "Animation", "Creative"]
    },
    {
      title: "E-learning Platform",
      description: "Comprehensive online learning platform with course management, progress tracking, and interactive content.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "https://example-learning.com",
      tags: ["E-learning", "Dashboard", "Education"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Accessibility Panel */}
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${showAccessibility ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Accessibility Options</h3>
            <button
              onClick={() => setShowAccessibility(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Type className="w-4 h-4 inline mr-1" />
                Font Size
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setAccessibilitySettings(prev => ({ 
                    ...prev, 
                    fontSize: Math.max(12, prev.fontSize - 2) 
                  }))}
                  className="p-1 border rounded hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm px-2">{accessibilitySettings.fontSize}px</span>
                <button
                  onClick={() => setAccessibilitySettings(prev => ({ 
                    ...prev, 
                    fontSize: Math.min(24, prev.fontSize + 2) 
                  }))}
                  className="p-1 border rounded hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Dyslexia Font */}
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={accessibilitySettings.dyslexiaFont}
                  onChange={(e) => setAccessibilitySettings(prev => ({ 
                    ...prev, 
                    dyslexiaFont: e.target.checked 
                  }))}
                  className="rounded"
                />
                <span className="text-sm">Dyslexia-friendly font</span>
              </label>
            </div>

            {/* High Contrast */}
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={accessibilitySettings.highContrast}
                  onChange={(e) => setAccessibilitySettings(prev => ({ 
                    ...prev, 
                    highContrast: e.target.checked 
                  }))}
                  className="rounded"
                />
                <span className="text-sm">High contrast mode</span>
              </label>
            </div>

            {/* Color Blind Support */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Palette className="w-4 h-4 inline mr-1" />
                Color Vision Support
              </label>
              <select
                value={accessibilitySettings.colorBlindMode}
                onChange={(e) => setAccessibilitySettings(prev => ({ 
                  ...prev, 
                  colorBlindMode: e.target.value as any 
                }))}
                className="w-full p-2 border rounded text-sm"
              >
                <option value="none">Normal vision</option>
                <option value="protanopia">Protanopia (Red-blind)</option>
                <option value="deuteranopia">Deuteranopia (Green-blind)</option>
                <option value="tritanopia">Tritanopia (Blue-blind)</option>
              </select>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetAccessibility}
              className="w-full flex items-center justify-center space-x-2 p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset to defaults</span>
            </button>
          </div>
        </div>
      </div>

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setShowAccessibility(!showAccessibility)}
        className="fixed top-4 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Open accessibility options"
      >
        <Settings className="w-5 h-5" />
      </button>

      {/* Calendly Button - Always Visible */}
      <a
        href="https://calendly.com/hello-workwithbola/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center space-x-2 group"
      >
        <Calendar className="w-5 h-5" />
        <span className="hidden group-hover:inline-block transition-all duration-300">Book a Call</span>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Bola Olaniyan</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1u-wFuPM3l1VTjYyKcIRaPsr1QEhn5nFT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  {item}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1u-wFuPM3l1VTjYyKcIRaPsr1QEhn5nFT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Product Designer Focused on{' '}
                <span className="text-blue-600">User Impact</span> &{' '}
                <span className="text-green-600">Business Outcomes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I help startups design digital products that solve real problems, drive user adoption, 
                and deliver measurable business results. 6+ years of turning complex challenges into 
                intuitive experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('work')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">👋</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm text-gray-600">Available for projects</div>
                <div className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></div>
                <span className="text-sm font-medium">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I believe great design happens when user needs align with business goals. 
              My approach combines data-driven insights with human-centered design principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Design Philosophy</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">User-Centered Approach</h4>
                    <p className="text-gray-600">Every design decision starts with understanding user needs, pain points, and behaviors through research and testing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Impact Focus</h4>
                    <p className="text-gray-600">I measure success through metrics that matter - user adoption, retention, conversion rates, and revenue growth.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Iterative Process</h4>
                    <p className="text-gray-600">Continuous testing, learning, and refinement to ensure designs evolve with user needs and business requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience & Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">Product Design</span>
                    <span className="text-sm text-gray-600">6+ years</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">UX Research</span>
                    <span className="text-sm text-gray-600">5+ years</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">Prototyping</span>
                    <span className="text-sm text-gray-600">6+ years</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">Design Systems</span>
                    <span className="text-sm text-gray-600">4+ years</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of projects that showcase my approach to solving complex design challenges 
              and delivering measurable business results.
            </p>
          </div>

          {/* Product Design Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Product Design Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600">{project.impact}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1">
                        <span>View Case Study</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Websites Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Websites I've Built</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((website, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={website.image} 
                      alt={website.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{website.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{website.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {website.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to create something amazing? I'm always excited to discuss new projects 
            and opportunities to make a meaningful impact through design.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:hello@bolaolaniyan.com"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-gray-600">hello@bolaolaniyan.com</div>
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/bolaolaniyan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">LinkedIn</div>
                <div className="text-gray-600">Connect with me</div>
              </div>
            </a>
            
            <a
              href="https://calendly.com/hello-workwithbola/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Schedule Call</div>
                <div className="text-gray-600">Book 30min chat</div>
              </div>
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start a Project?</h3>
            <p className="text-gray-600 mb-8">
              Whether you're a startup looking to validate your product idea or an established company 
              ready to redesign your user experience, I'd love to hear about your challenges and goals.
            </p>
            <a
              href="https://calendly.com/hello-workwithbola/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule a Discovery Call</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl mb-2">Bola Olaniyan</div>
              <div className="text-gray-400">Product Designer focused on impact</div>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:hello@bolaolaniyan.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/bolaolaniyan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/bolaolaniyan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bola Olaniyan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;