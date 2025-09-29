import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, ExternalLink, Calendar, ArrowLeft, Menu, X, ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';

// Types
type Page = 'home' | 'about' | 'work' | 'contact' | 'case-auditbar' | 'case-paysure' | 'case-summarizer';

// Enhanced case studies with recruiter-focused structure
const caseStudies = {
  auditbar: {
    title: 'AuditBar',
    subtitle: 'Financial Audit Management for Small Businesses',
    description: 'Transforming complex audit workflows into intuitive digital experiences',
    tags: ['B2B SaaS', 'Dashboard Design', 'Enterprise UX'],
    year: '2024',
    role: 'Product Designer',
    timeline: '13 months',
    client: 'AuditBar Inc.',
    challenge: 'Financial audit teams were drowning in fragmented workflows across multiple tools, leading to 60% of their time spent on administrative tasks instead of actual audit work. With missed deadlines costing firms an average of $50K per audit, we needed to create a unified platform that would streamline processes while maintaining strict compliance standards.',
    process: 'I led a comprehensive design research initiative, conducting 15+ interviews with audit professionals across Big Four firms and mid-sized practices. Through contextual inquiries and workflow mapping, I identified critical pain points and designed solutions using an iterative approach with continuous stakeholder validation. I collaborated closely with engineering to ensure technical feasibility while maintaining design integrity.',
    solution: 'I designed a unified dashboard featuring real-time progress tracking, automated notifications, and intelligent task prioritization. The solution included visual workflow mapping, contextual compliance guidance, and collaborative features that adapt to different audit types and team sizes. The interface provides relevant information at each stage while maintaining the complexity needed for professional audit work.',
    impact: '• 40% reduction in audit completion time\n• 60% improvement in team collaboration scores\n• 95% user satisfaction rating\n• 12+ enterprise clients onboarded in first quarter\n• 89% client renewal rate\n• $2B+ in audited assets processed monthly',
    reflection: 'This project taught me the critical importance of balancing comprehensive functionality with interface simplicity in enterprise software. The iterative approach with continuous user feedback was essential to success, and I learned that understanding complex business processes deeply is prerequisite to designing effective solutions.'
  },
  paysure: {
    title: 'Paysure',
    subtitle: 'Fintech Payment Solutions',
    description: 'Democratizing digital payments for African small businesses',
    tags: ['Fintech', 'Mobile-First', 'Emerging Markets'],
    year: '2023',
    role: 'Lead UI/UX Designer',
    timeline: '8 months',
    client: 'Paysure Technologies',
    challenge: 'Small businesses across Africa faced significant barriers to digital payment adoption: complex interfaces, high fees, low trust in digital systems, and inconsistent connectivity. Existing solutions were designed for Western markets or large enterprises, missing the unique needs of African SMEs who process millions in transactions but lack technical resources.',
    process: 'I conducted extensive field research across Lagos, Nairobi, and Accra, interviewing 50+ merchants and analyzing payment behaviors in real-world contexts. I used human-centered design methodology with culturally-informed prototyping and local market testing. Working with regional teams, I ensured cultural appropriateness while maintaining technical excellence.',
    solution: 'I designed a mobile-first payment application with simplified onboarding, transparent fee structure, and multi-language support. Key innovations included offline transaction capabilities, multiple payment methods integration, and trust-building elements like instant confirmations and accessible dispute resolution. The interface adapts to different literacy levels and technical comfort zones.',
    impact: '• 200% increase in merchant adoption within first year\n• 45% reduction in transaction abandonment\n• 4.7-star average app store rating\n• Successful expansion to 5 new African markets\n• Transaction volume grew from $1M to $15M monthly\n• 78% of users report increased business revenue',
    reflection: 'Working on Paysure reinforced that successful global products require deep cultural adaptation, not just translation. Local insights and community feedback were essential for creating solutions that truly serve users. I learned that inclusive design principles can drive both social impact and business success when applied thoughtfully.'
  },
  summarizer: {
    title: 'Summarizer',
    subtitle: 'AI-Powered Content Intelligence',
    description: 'Making information overload manageable for knowledge workers',
    tags: ['AI/ML', 'Productivity', 'B2B SaaS'],
    year: '2024',
    role: 'Product Designer',
    timeline: '4 months',
    client: 'Summarizer AI',
    challenge: 'Knowledge workers receive 120+ emails daily and struggle with information overload, spending 2+ hours on document review instead of strategic analysis. With 85% of professionals reporting that information volume negatively impacts productivity, we needed to make AI-powered summarization accessible and trustworthy for everyday use.',
    process: 'I collaborated closely with the AI/ML team to understand algorithm capabilities and limitations while surveying 200+ professionals about information consumption habits. I designed multiple interaction models and tested them extensively to find the optimal balance of automation and user control, ensuring transparency in AI decision-making throughout the experience.',
    solution: 'I created an intuitive interface that transforms lengthy documents into actionable summaries with customizable detail levels. The design emphasizes AI transparency through confidence indicators, source referencing, and collaborative annotation tools. Progressive disclosure ensures users can access detailed information when needed without overwhelming the primary workflow.',
    impact: '• 70% reduction in document processing time\n• 90% user satisfaction with summary quality\n• 50K+ active users within first quarter\n• Featured as TechCrunch "AI Tool of the Month"\n• Integration with 10+ productivity tools\n• 85% of users report improved decision-making speed',
    reflection: 'Designing for AI required careful balance between powerful capabilities and user understanding. Transparency and explainability were key to building trust in AI-generated content. I learned that progressive disclosure in AI interfaces is crucial—showing enough information to build confidence without overwhelming users with technical complexity.'
  }
};

const NavigationBar: React.FC<{
  currentPage: Page;
  onNavigate: (page: Page) => void;
}> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-white/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <button
          onClick={() => onNavigate('home')}
          className="group text-xl font-medium text-white hover:text-orange-400 transition-all duration-300 tracking-tight"
        >
          <span className="block transform group-hover:scale-105 transition-transform duration-200">
            Bola Olaniyan
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <button
            onClick={() => onNavigate('work')}
            className={`relative text-sm font-medium transition-all duration-300 tracking-wide ${
              currentPage === 'work' || currentPage.startsWith('case-') 
                ? 'text-orange-400' 
                : 'text-gray-300 hover:text-white'
            } group`}
          >
            Work
            <span className={`absolute -bottom-1 left-0 h-px bg-orange-400 transition-all duration-300 ${
              currentPage === 'work' || currentPage.startsWith('case-') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`relative text-sm font-medium transition-all duration-300 tracking-wide ${
              currentPage === 'about' ? 'text-orange-400' : 'text-gray-300 hover:text-white'
            } group`}
          >
            About
            <span className={`absolute -bottom-1 left-0 h-px bg-orange-400 transition-all duration-300 ${
              currentPage === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`relative text-sm font-medium transition-all duration-300 tracking-wide ${
              currentPage === 'contact' ? 'text-orange-400' : 'text-gray-300 hover:text-white'
            } group`}
          >
            Contact
            <span className={`absolute -bottom-1 left-0 h-px bg-orange-400 transition-all duration-300 ${
              currentPage === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </button>
          {/* Resume link - update URL here if needed */}
          <a 
            href="https://drive.google.com/file/d/1u-wFuPM3l1VTjYyKcIRaPsr1QEhn5nFT/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative text-sm font-medium transition-all duration-300 tracking-wide text-gray-300 hover:text-white group"
          >
            Resume
            <span className="absolute -bottom-1 left-0 h-px bg-orange-400 transition-all duration-300 w-0 group-hover:w-full"></span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-2"
          >
            <Mail size={16} />
            <span>Let's Talk</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'max-h-96 bg-black/95 backdrop-blur-xl border-t border-white/5' 
          : 'max-h-0 overflow-hidden'
      }`}>
        <div className="px-6 py-6 space-y-6">
          <button
            onClick={() => {
              onNavigate('work');
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors font-medium"
          >
            Work
          </button>
          <button
            onClick={() => {
              onNavigate('about');
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors font-medium"
          >
            Contact
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
              setIsMobileMenuOpen(false);
            }}
            className="block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-full text-sm font-medium text-center transition-colors"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

const HomePage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h1 className="text-6xl lg:text-8xl font-bold leading-none tracking-tight">
                    <span className="block">Bola</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                      Olaniyan
                    </span>
                  </h1>
                  <div className="h-px w-24 bg-gradient-to-r from-orange-400 to-transparent"></div>
                </div>
                <p className="text-2xl lg:text-3xl text-gray-400 font-light leading-relaxed">
                  Product Designer who makes apps easier to use and helps businesses grow
                </p>
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
                I design digital products that solve real problems, drive user adoption, 
                and deliver measurable business results for growing teams.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <button
                  onClick={() => onNavigate('work')}
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-3"
                >
                  <span>View My Work</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <div className="flex items-center space-x-3 text-green-400">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-sm font-medium tracking-wide">Available for new opportunities</span>
                </div>
              </div>
            </div>

            {/* Hero Visual - Enhanced AuditBar Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative transform hover:scale-105 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 mb-6 border border-gray-600/30">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg w-36 shadow-lg"></div>
                        <div className="h-4 bg-gray-600 rounded w-20"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-3 bg-gray-600 rounded w-full opacity-80"></div>
                        <div className="h-3 bg-gray-600 rounded w-4/5 opacity-60"></div>
                        <div className="h-3 bg-gray-600 rounded w-3/5 opacity-40"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl border border-gray-600/20"></div>
                        <div className="h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl border border-gray-600/20"></div>
                        <div className="h-20 bg-gradient-to-br from-orange-500/20 to-gray-800 rounded-xl border border-orange-500/20"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400 font-medium tracking-wide">AuditBar Dashboard</p>
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Featured Work</h2>
            <div className="h-px w-24 bg-gradient-to-r from-orange-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real projects with measurable impact for startups and growing teams
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {Object.entries(caseStudies).map(([key, study], index) => (
              <div
                key={key}
                className="group cursor-pointer"
                onClick={() => onNavigate(`case-${key}` as Page)}
              >
                <div className="space-y-6">
                  <div className="aspect-[4/3] bg-gradient-to-br from-orange-500/10 via-gray-900 to-gray-950 rounded-2xl overflow-hidden relative border border-gray-800/50 group-hover:border-orange-500/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="h-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-orange-400 group-hover:scale-110 transition-transform duration-300">
                        {study.title}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight size={24} className="text-orange-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-orange-400 tracking-wide">{study.year}</span>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-900 text-xs rounded-full text-gray-400 border border-gray-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-gray-500 mb-3 font-medium">{study.subtitle}</p>
                      <p className="text-gray-400 leading-relaxed">{study.description}</p>
                    </div>

                    <div className="pt-2">
                      <span className="inline-flex items-center space-x-2 text-orange-400 group-hover:text-orange-300 transition-colors font-medium text-sm">
                        <span>View Case Study</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Let's build something great together
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and challenging projects.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 inline-flex items-center space-x-3"
          >
            <Mail size={20} />
            <span>Contact Me</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  );
};

const AboutPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white pt-24">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-12">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">About Bola</h1>
                <div className="h-px w-24 bg-gradient-to-r from-orange-400 to-transparent"></div>
              </div>
              <p className="text-2xl text-gray-300 leading-relaxed font-light">
                I'm a product designer who believes the best solutions emerge when 
                user needs and business goals align perfectly.
              </p>
            </div>

            <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
              <p>
                Over the past 6 years, I've partnered with startups and scale-ups across fintech, 
                SaaS, and AI/ML spaces, helping them design products that users genuinely want to use. 
                My approach combines analytical thinking with creative problem-solving, always 
                grounded in real user research and measurable business outcomes.
              </p>

              <p>
                Starting my career in Lagos, Nigeria, I quickly learned that effective design 
                goes far beyond aesthetics—it's about understanding complex business challenges 
                and crafting solutions that work for both users and organizations. This perspective 
                has shaped my methodology, from initial research through final implementation.
              </p>

              <p>
                I specialize in dashboard design and complex B2B workflows, where I thrive on 
                the challenge of making sophisticated systems feel intuitive and accessible. 
                My work has helped teams reduce task completion time by up to 70% while 
                improving user satisfaction scores across multiple products.
              </p>

              <p>
                When I'm not designing, I contribute to design communities, mentor emerging 
                designers, and explore new tools that push creative boundaries. I believe 
                in continuous learning and sharing knowledge to elevate the entire design community.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-6">My Approach</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg">Research-driven design decisions backed by user data</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg">Systems thinking for scalable, consistent experiences</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg">Collaborative process with cross-functional teams</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg">Measurable impact on user satisfaction and business metrics</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-6">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-3">
                <Download size={20} />
                <span>Download Resume</span>
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
              
              <div className="pt-4">
                <p className="text-gray-400 mb-4">Let's build something great together</p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors font-medium"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-32">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
                <div className="aspect-square bg-gradient-to-br from-orange-500/20 via-gray-800 to-gray-900 rounded-2xl mb-8 flex items-center justify-center border border-gray-700/30">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-orange-400 mb-2 text-sm uppercase tracking-wider">Status</h4>
                    <p className="text-gray-300">Available for new opportunities</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-orange-400 mb-2 text-sm uppercase tracking-wider">Location</h4>
                    <p className="text-gray-300">Lagos, Nigeria (Remote-friendly)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-orange-400 mb-2 text-sm uppercase tracking-wider">Experience</h4>
                    <p className="text-gray-300">6+ years in product design</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-orange-400 mb-2 text-sm uppercase tracking-wider">Focus Areas</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      B2B SaaS • Fintech • Dashboard Design • Enterprise UX • Startup Growth
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-orange-400 mb-2 text-sm uppercase tracking-wider">Recent Impact</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Helped teams achieve 40-70% improvement in task completion times
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-24">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">Selected Work</h1>
          <div className="h-px w-24 bg-gradient-to-r from-orange-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Case studies showcasing how thoughtful design drives user adoption 
            and delivers measurable business results.
          </p>
        </div>

        <div className="space-y-32">
          {Object.entries(caseStudies).map(([key, study], index) => (
            <div key={key} className="group">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">{study.year}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-orange-400/50 to-transparent"></div>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                      {study.title}
                    </h2>
                    <p className="text-2xl text-gray-400 font-light">{study.subtitle}</p>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">{study.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-gray-900 text-sm rounded-full text-gray-300 border border-gray-800/50 hover:border-orange-500/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate(`case-${key}` as Page)}
                    className="group/btn inline-flex items-center space-x-3 text-orange-400 hover:text-orange-300 transition-all duration-300 font-medium text-lg"
                  >
                    <span>View Case Study</span>
                    <ChevronRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-200" />
                  </button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative group/image cursor-pointer" onClick={() => onNavigate(`case-${key}` as Page)}>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl blur-3xl group-hover/image:blur-2xl transition-all duration-700"></div>
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-orange-500/10 via-gray-900 to-gray-950 rounded-3xl flex items-center justify-center border border-gray-800/50 group-hover/image:border-orange-500/30 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <span className="relative text-5xl font-bold text-orange-400 group-hover/image:scale-110 transition-transform duration-500">
                        {study.title}
                      </span>
                      <div className="absolute top-6 right-6 opacity-0 group-hover/image:opacity-100 transition-all duration-300">
                        <ArrowUpRight size={28} className="text-orange-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-32 space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">
            Let's build something great together
          </h2>
          <button
            onClick={() => onNavigate('contact')}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 inline-flex items-center space-x-3"
          >
            <Mail size={20} />
            <span>Contact Me</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">Let's Connect</h1>
          <div className="h-px w-24 bg-gradient-to-r from-orange-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, challenging projects, 
            and ways we can create meaningful impact together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            {/* Left Column - Hero Text Content */}
              <div className="space-y-6">
              {/* Main Headline - Edit the main title here */}
                <a
                  href="mailto:bola@example.com"
                  className="group flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                >
              
              {/* Hero Description - Edit the main description here */}
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors duration-300">
                    <Mail size={24} className="text-orange-400" />
                  </div>
                  <div>
              
              {/* Hero CTA Section - Button and Status aligned horizontally */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
                {/* Primary CTA Button - Edit button text and link here */}
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">bola@example.com</p>
                  </div>
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center sm:text-left"
                </a>

                <a
                
                {/* Availability Status - Edit availability status here */}
                  href="https://linkedin.com/in/bola-olaniyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors duration-300">
            
            {/* Right Column - Hero Image */}
                    <Linkedin size={24} className="text-orange-400" />
              {/* Hero Image - Replace src URL to change the main hero image */}
                  </div>
                  <div>
                    <p className="font-medium text-white">LinkedIn</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Connect professionally</p>
                  </div>
                  <ArrowUpRight size={20} className="text-orange-400 ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>

                <a
                  href="https://calendly.com/bola-olaniyan"
      {/* ABOUT SECTION */}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
            {/* About Image */}
                >
              {/* About Section Image - Replace src URL to change about image */}
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors duration-300">
                    <Calendar size={24} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Schedule a Call</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Book a 30-minute chat</p>
            
            {/* About Content */}
                  </div>
              {/* About Section Title - Edit about section title here */}
                  <ArrowUpRight size={20} className="text-orange-400 ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              
              {/* About Description - Edit about description paragraphs here */}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">What I'm Looking For</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Product design roles at growing startups and scale-ups</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Consulting opportunities for complex B2B workflows</span>
                </li>
                <li className="flex items-start space-x-3">
              
              {/* Skills List - Add/remove/edit skills here */}
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborative projects with cross-functional teams</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mentoring and speaking opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-orange-400 text-sm font-medium uppercase tracking-wider mb-1">Location</p>
                  <p className="text-gray-300">Lagos, Nigeria (Remote-friendly)</p>
      {/* WORK/PORTFOLIO SECTION */}
                </div>
                <div>
          {/* Section Header */}
                  <p className="text-orange-400 text-sm font-medium uppercase tracking-wider mb-1">Availability</p>
            {/* Work Section Title - Edit portfolio section title here */}
                  <p className="text-gray-300">Open to new opportunities</p>
            {/* Work Section Subtitle - Edit portfolio section subtitle here */}
                </div>
                <div>
                  <p className="text-orange-400 text-sm font-medium uppercase tracking-wider mb-1">Response Time</p>
                  <p className="text-gray-300">Usually within 24 hours</p>
                </div>
                <div>
          {/* Projects Grid - Add/remove/edit projects here */}
                  <p className="text-orange-400 text-sm font-medium uppercase tracking-wider mb-1">Time Zone</p>
            {/* PROJECT 1 - E-commerce Dashboard */}
                  <p className="text-gray-300">WAT (UTC+1)</p>
              {/* Project 1 Image - Replace src URL to change project image */}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 via-gray-900 to-gray-950 rounded-3xl p-8 border border-orange-500/20">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Let's Build Something Great</h3>
                {/* Project 1 Title - Edit project title here */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {/* Project 1 Description - Edit project description here */}
                Whether you're looking to improve user experience, streamline complex workflows, 
                or scale your design system, I'd love to hear about your challenges and explore 
                how we can work together.
              </p>
                {/* Project 1 Tags - Edit project technologies/tags here */}
              <div className="flex items-center space-x-3 text-green-400">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-20"></div>
                </div>
                {/* Project 1 Link - Edit project link here */}
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* PROJECT 2 - Mobile Banking App */}
    </div>
              {/* Project 2 Image - Replace src URL to change project image */}
  );
};

const CaseStudyPage: React.FC<{
  caseKey: string;
  onNavigate: (page: Page) => void;
                {/* Project 2 Title - Edit project title here */}
}> = ({ caseKey, onNavigate }) => {
                {/* Project 2 Description - Edit project description here */}
  const study = caseStudies[caseKey as keyof typeof caseStudies];

  if (!study) return null;

                {/* Project 2 Tags - Edit project technologies/tags here */}
  const sections = [
    { title: 'Challenge', content: study.challenge, key: 'challenge' },
    { title: 'Process', content: study.process, key: 'process' },
    { title: 'Solution', content: study.solution, key: 'solution' },
    { title: 'Impact', content: study.impact, key: 'impact' },
                {/* Project 2 Link - Edit project link here */}
    { title: 'Reflection', content: study.reflection, key: 'reflection' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white pt-24">
      {/* Hero Section */}
            {/* PROJECT 3 - SaaS Platform */}
      <div className="max-w-5xl mx-auto px-6 py-20">
              {/* Project 3 Image - Replace src URL to change project image */}
        <button
          onClick={() => onNavigate('work')}
          className="group inline-flex items-center space-x-3 text-gray-400 hover:text-orange-400 transition-all duration-300 mb-12 text-lg"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Work</span>
                {/* Project 3 Title - Edit project title here */}
        </button>
                {/* Project 3 Description - Edit project description here */}

        <div className="space-y-12 mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
                {/* Project 3 Tags - Edit project technologies/tags here */}
              <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">{study.year}</span>
              <h1 className="text-6xl lg:text-8xl font-bold leading-none tracking-tight">
                {study.title}
              </h1>
              <p className="text-3xl text-gray-400 font-light">{study.subtitle}</p>
                {/* Project 3 Link - Edit project link here */}
            </div>
            
            <div className="h-px w-32 bg-gradient-to-r from-orange-400 to-transparent"></div>
            
            <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl font-light">
              {study.description}
            {/* PROJECT 4 - Additional project slot */}
            </p>
              {/* Project 4 Image - Replace src URL to change project image */}
          </div>
          
          <div className="flex flex-wrap gap-3">
            {study.tags.map((tag, index) => (
              <span
                key={index}
                {/* Project 4 Title - Edit project title here */}
                className="px-5 py-2 bg-gray-900 text-sm rounded-full text-gray-300 border border-gray-800/50 font-medium"
                {/* Project 4 Description - Edit project description here */}
              >
                {tag}
              </span>
            ))}
                {/* Project 4 Tags - Edit project technologies/tags here */}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-4 gap-8 mb-20 p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50">
                {/* Project 4 Link - Edit project link here */}
          <div>
            <h4 className="font-bold text-orange-400 mb-3 text-sm uppercase tracking-wider">Role</h4>
            <p className="text-gray-300 font-medium">{study.role}</p>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-3 text-sm uppercase tracking-wider">Timeline</h4>
            <p className="text-gray-300 font-medium">{study.timeline}</p>
          </div>
          <div>
      {/* EXPERIENCE SECTION */}
            <h4 className="font-bold text-orange-400 mb-3 text-sm uppercase tracking-wider">Client</h4>
            <p className="text-gray-300 font-medium">{study.client}</p>
          {/* Experience Section Header */}
          </div>
            {/* Experience Section Title - Edit experience section title here */}
          <div>
            {/* Experience Section Subtitle - Edit experience section subtitle here */}
            <h4 className="font-bold text-orange-400 mb-3 text-sm uppercase tracking-wider">Year</h4>
            <p className="text-gray-300 font-medium">{study.year}</p>
          </div>
        </div>

          {/* Experience Timeline - Add/remove/edit experience entries here */}
        {/* Hero Visual */}
            {/* EXPERIENCE 1 - Current/Most Recent */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl blur-3xl"></div>
                {/* Job Title and Company - Edit job details here */}
          <div className="relative aspect-video bg-gradient-to-br from-orange-500/10 via-gray-900 to-gray-950 rounded-3xl flex items-center justify-center border border-gray-700/50">
            <span className="text-5xl font-bold text-orange-400">{study.title}</span>
          </div>
        </div>
                {/* Employment Period - Edit dates here */}
      </div>

              {/* Job Description - Edit job responsibilities here */}
      {/* Case Study Sections */}
      <div className="max-w-4xl mx-auto px-6 space-y-24 pb-24">
        {sections.map((section, index) => (
          <div key={section.key} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-orange-400 tracking-tight">{section.title}</h2>
              <div className="h-px w-16 bg-gradient-to-r from-orange-400 to-transparent"></div>
            </div>
            {/* EXPERIENCE 2 */}
            <div className="prose prose-lg prose-invert max-w-none">
              {section.key === 'impact' ? (
                {/* Job Title and Company - Edit job details here */}
                <div className="space-y-4">
                  {section.content.split('\n').map((line, lineIndex) => (
                    line.trim() && (
                      <p key={lineIndex} className="text-lg text-gray-300 leading-relaxed font-light flex items-start space-x-3">
                {/* Employment Period - Edit dates here */}
                        {line.startsWith('•') ? (
                          <>
              {/* Job Description - Edit job responsibilities here */}
                            <span className="text-orange-400 font-bold mt-1">•</span>
                            <span>{line.substring(1).trim()}</span>
                          </>
                        ) : (
                          <span>{line}</span>
                        )}
                      </p>
            {/* EXPERIENCE 3 */}
                    )
                  ))}
                {/* Job Title and Company - Edit job details here */}
                </div>
              ) : (
                <p className="text-lg text-gray-300 leading-relaxed font-light">{section.content}</p>
              )}
                {/* Employment Period - Edit dates here */}
            </div>
            {index < sections.length - 1 && (
              {/* Job Description - Edit job responsibilities here */}
              <div className="pt-12">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-24">
      {/* CONTACT SECTION */}
        <div className="text-center space-y-8">
          <h3 className="text-4xl font-bold tracking-tight">Let's build something great together</h3>
          {/* Contact Section Header */}
          {/* Contact Section Title - Edit contact section title here */}
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          {/* Contact Section Description - Edit contact description here */}
            Interested in working together or discussing this project in more detail?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
          {/* Contact Methods Grid - Edit contact information here */}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 inline-flex items-center justify-center space-x-3"
            {/* Email Contact - Edit email address here */}
            >
              <Mail size={20} />
              <span>Contact Me</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
            <button
              onClick={() => onNavigate('work')}
              className="group border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-medium hover:border-orange-400 hover:text-orange-400 transition-all duration-300 inline-flex items-center justify-center space-x-3"
            >
              <span>View More Work</span>
            {/* Phone Contact - Edit phone number here */}
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component - Contains the entire portfolio website
            {/* Location - Edit location here */}
function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
          {/* Primary Contact CTA - Edit main contact button here */}
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigation} />;
      case 'work':
        return <WorkPage onNavigate={handleNavigation} />;
      case 'contact':
        return <ContactPage />;
      {/* FOOTER */}
      case 'case-auditbar':
        return <CaseStudyPage caseKey="auditbar" onNavigate={handleNavigation} />;
      case 'case-paysure':
            {/* Footer Logo/Name - Edit footer name here */}
        return <CaseStudyPage caseKey="paysure" onNavigate={handleNavigation} />;
            {/* Logo/Name - Edit the name here */}
      case 'case-summarizer':
            
            {/* Navigation Links - Add/remove/edit navigation items here */}
            {/* Social Links - Add/remove/edit social media links here */}
        return <CaseStudyPage caseKey="summarizer" onNavigate={handleNavigation} />;
              {/* LinkedIn Link - Edit LinkedIn URL here */}
              {/* About Link */}
      default:
              {/* Work/Portfolio Link */}
              {/* GitHub Link - Edit GitHub URL here */}
        return <HomePage onNavigate={handleNavigation} />;
              {/* Contact Link */}
    }
              {/* Email Link - Edit email address here */}
              {/* Resume Link - Update the URL here to change resume link */}
  };

  return (
    <div className="bg-black min-h-screen">
      {/* NAVIGATION HEADER */}
          {/* Footer Copyright - Edit copyright text here */}
      <NavigationBar currentPage={currentPage} onNavigate={handleNavigation} />
      <main className="transition-all duration-500 ease-out">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

      {/* HERO SECTION */}
export default App;