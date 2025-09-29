import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Calendar, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Name */}
            <div className="text-2xl font-bold text-gray-900">
              Bola Olaniyan
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              
              {/* Resume Link - Update this URL to change resume link */}
              <a 
                href="https://drive.google.com/file/d/1u-wFuPM3l1VTjYyKcIRaPsr1QEhn5nFT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText size={16} />
                <span>Resume</span>
                <ExternalLink size={14} />
              </a>
              
              {/* Calendly Link - Update this URL to change Calendly booking link */}
              <a 
                href="https://calendly.com/hello-workwithbola/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Calendar size={16} />
                <span>Schedule Call</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Product Designer Focused on 
                <span className="text-blue-600"> User Impact</span> & 
                <span className="text-green-600"> Business Outcomes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                6+ years helping startups design digital products that solve real problems, 
                drive user adoption, and deliver measurable business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Calendly CTA Button - Same link as navigation for consistency */}
                <a 
                  href="https://calendly.com/hello-workwithbola/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Calendar className="mr-2" size={20} />
                  Let's Talk About Your Project
                </a>
                {/* Resume CTA Button - Same link as navigation for consistency */}
                <a 
                  href="https://drive.google.com/file/d/1u-wFuPM3l1VTjYyKcIRaPsr1QEhn5nFT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FileText className="mr-2" size={20} />
                  View Resume
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Hero Image - Stock photo from Pexels, replace URL to change image */}
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Product Designer at work" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-gray-900">6+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* About Image - Stock photo from Pexels, replace URL to change image */}
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Designer working on user interface" 
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Designing Products That Users Love & Businesses Need
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I specialize in creating intuitive, user-centered designs for B2B SaaS and fintech products. 
                My approach combines deep user research with business strategy to deliver solutions that 
                drive both user satisfaction and business growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Design Strategy</h3>
                  <p className="text-gray-600 text-sm">Aligning design decisions with business objectives</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">User Research</h3>
                  <p className="text-gray-600 text-sm">Data-driven insights to inform design choices</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Prototyping</h3>
                  <p className="text-gray-600 text-sm">Rapid iteration and validation of concepts</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Design Systems</h3>
                  <p className="text-gray-600 text-sm">Scalable, consistent design frameworks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Experience & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              {/* Experience Card Image - Stock photo from Pexels, replace URL to change image */}
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Dashboard design and analytics" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">B2B SaaS Platforms</h3>
              <p className="text-gray-600 mb-4">
                Designed intuitive dashboards and workflows that increased user engagement by 40% 
                and reduced support tickets by 25%.
              </p>
              <div className="text-sm text-blue-600 font-semibold">
                Dashboard Design • User Flows • Data Visualization
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              {/* Experience Card Image - Stock photo from Pexels, replace URL to change image */}
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Mobile app design and user experience" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fintech Solutions</h3>
              <p className="text-gray-600 mb-4">
                Created secure, user-friendly financial interfaces that improved transaction 
                completion rates by 35% and enhanced user trust.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Mobile Design • Security UX • Payment Flows
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              {/* Experience Card Image - Stock photo from Pexels, replace URL to change image */}
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Team collaboration and design process" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Startup Growth</h3>
              <p className="text-gray-600 mb-4">
                Helped early-stage startups establish their design foundation, leading to 
                successful funding rounds and user base growth of 200%+.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Brand Identity • MVP Design • Growth Strategy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group">
              {/* Project Image - Stock photo from Pexels, replace URL to change image */}
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Financial dashboard interface design" 
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Dashboard Redesign</h3>
                <p className="text-gray-600 mb-4">
                  Complete redesign of a B2B financial platform, focusing on data visualization 
                  and user workflow optimization. Resulted in 50% faster task completion.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">UI/UX Design</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Data Viz</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">B2B SaaS</span>
                </div>
              </div>
            </div>
            
            <div className="group">
              {/* Project Image - Stock photo from Pexels, replace URL to change image */}
              <img 
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mobile payment app interface" 
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Payment App</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end design of a secure mobile payment solution for emerging markets. 
                  Achieved 95% user satisfaction and 40% month-over-month growth.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Mobile Design</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Fintech</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">User Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's discuss how I can help bring your product vision to life and drive meaningful business results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">hello@bolaolaniyan.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Calendar className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Schedule a Call</h3>
              {/* Contact Calendly Link - Same as navigation links */}
              <a 
                href="https://calendly.com/hello-workwithbola/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                Book 30min chat
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Available Worldwide</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA - Calendly Link */}
            <a 
              href="https://calendly.com/hello-workwithbola/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Calendar className="mr-2" size={20} />
              Schedule a Discovery Call
            </a>
            {/* Secondary CTA - Resume Link */}
            <a 
              href="https://drive.google.com/file/d/1u-wFuPM3l1VTjYyKcIRaPsr1QEhn5nFT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <FileText className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Bola Olaniyan</h3>
              <p className="text-gray-400">Product Designer • User Advocate • Business Partner</p>
            </div>
            <div className="flex space-x-6">
              {/* Footer Resume Link */}
              <a 
                href="https://drive.google.com/file/d/1u-wFuPM3l1VTjYyKcIRaPsr1QEhn5nFT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Resume
              </a>
              {/* Footer Calendly Link */}
              <a 
                href="https://calendly.com/hello-workwithbola/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Schedule Call
              </a>
              <a href="mailto:hello@bolaolaniyan.com" className="text-gray-400 hover:text-white transition-colors">
                Contact
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