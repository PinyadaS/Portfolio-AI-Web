import React, { useState, useEffect } from 'react';
import { Mail, Github, Instagram, Download, Plus } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FFF6D8] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FFF6D8] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-[#0F172A] font-bold text-xl">
            Pinyada Sanguansinthukul
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'work'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-[#0F172A] font-medium capitalize relative group transition-colors duration-300 hover:text-[#A4BFA3] ${
                    activeSection === section ? 'text-[#A4BFA3]' : ''
                  }`}
                >
                  {section}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#A4BFA3] transition-all duration-300 group-hover:w-full ${
                    activeSection === section ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a href="https://instagram.com/pinn_s99" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#A4BFA3] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/pinyadaS" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#A4BFA3] transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:pinyada.sanguansinithikul@gmail.com" className="text-black hover:text-[#A4BFA3] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-black text-lg">Hello, I'm Pinn,</p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] leading-tight">
              Year 12<br />Student
            </h1>
            <p className="text-black text-xl">based in Thailand.</p>
            
            <button className="group bg-[#FFF6D8] hover:bg-yellow-300 text-black px-8 py-3 rounded-full font-medium transition-all duration-300 border-2 border-black hover:scale-105 hover:shadow-lg flex items-center space-x-2">
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-float">
                <img 
                  src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Pinyada Sanguansinthukul"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-[#A4BFA3] rounded-full p-2">
                <Plus size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-yellow-300 mb-12 animate-slide-in">
            about.
          </h2>
          
          <div className="max-w-4xl space-y-12">
            <p className="text-black text-lg leading-relaxed animate-slide-in">
              A hardworking and resilient student from Harrow International School Bangkok, with a strong 
              foundation in problem-solving, critical thinking and mathematics. Proven leadership and 
              teamwork skills as Boarding Head Girl, Charity Leader, and Head of Human Resources in 
              student-led company. Proactive and high-achieving in securing numerous awards from math 
              competitions and Olympiads, and music competitions and qualifications.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8 animate-slide-in">
                <div>
                  <h3 className="text-[#0F172A] font-bold text-xl mb-4">Languages</h3>
                  <ul className="space-y-2 text-black">
                    <li>Thai (Fluent)</li>
                    <li>English (Fluent)</li>
                    <li>Mandarin Chinese (Advanced)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-[#0F172A] font-bold text-xl mb-4">Leadership Experience</h3>
                  <ul className="space-y-2 text-black">
                    <li>Vice President of Student Council, member of Student Council for 6 years</li>
                    <li>National Junior Honor Society</li>
                    <li>Boarding Head Girl</li>
                    <li>School Committee and Eco Committee</li>
                    <li>School Charity Leader</li>
                    <li>Head of Human Resources in student-led company</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8 animate-slide-in">
                <div>
                  <h3 className="text-[#0F172A] font-bold text-xl mb-4">Achievements</h3>
                  <ul className="space-y-2 text-black">
                    <li>Proficient in Python, CSS, HTML, Bootstrap extension, JavaScript, React extension, React Native, Dart, Flutter, and SQL</li>
                    <li>Science, Computer Science and Physics Award (best in year) in Harrow Distinctions, merits, golds, silvers and bronzes in olympiads and competitions (eg.UKMt, AMC), scoring 1st place in Thailand in Kangaroo Math Competition</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-[#0F172A] font-bold text-xl mb-4">Interests</h3>
                  <ul className="space-y-2 text-black">
                    <li>Permanent member of Children's International Summer Village, going to international camps to do peace education activities</li>
                    <li>Raised awareness of smoking and respiratory diseases, worked with associate professor from top Thailand university</li>
                    <li>Part of the performance swim team, trains 2-3 times weekly, participating in competitions between schools in Thailand and South East Asia</li>
                    <li>Studying piano grade 8, received piano grade 8 distinction, played piano in concerts for raising money for charity</li>
                    <li>Competes nationally and internationally in singing competitions, awarded 1st place in Thailand and 4th place in the world in HKIYA, takes part in annual school productions and musicals, received singing grade 8 merit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-yellow-300 mb-12 animate-slide-in">
            work.
          </h2>
          
          <div className="max-w-4xl space-y-12">
            <div className="bg-yellow-100 p-6 rounded-lg animate-slide-in">
              <p className="text-black text-lg leading-relaxed">
                2 achieved A* IGCSE grades in Mathematics and Mandarin Chinese Foreign Language.
              </p>
              <p className="text-black text-lg leading-relaxed mt-2">
                9 predicted A* IGCSE grades in Additional Mathematics, Physics, Biology, Chemistry, 
                Computer Science, English First Language, English Literature, Music, and Thai First Language.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-slide-in">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
                    alt="Finance work"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[#0F172A] font-bold text-xl">Finance</h3>
                    <span className="text-sm text-gray-600">July 21 - August 1, 2025</span>
                  </div>
                  <p className="text-black mb-4">
                    Internship at Wealth and Investment Products department at a corporate financial institution.
                  </p>
                  <p className="text-black text-sm">
                    <strong>Tasks:</strong> working alongside senior wealth investment strategists, allocation, 
                    portfolios, and trade management.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-slide-in">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
                    alt="Software development work"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[#0F172A] font-bold text-xl">Software Development</h3>
                    <span className="text-sm text-gray-600">August 4 – 8, 2025</span>
                  </div>
                  <p className="text-black mb-4">
                    Internship in backend and frontend software development team.
                  </p>
                  <p className="text-black text-sm">
                    <strong>Skills:</strong> React extension, JavaScript, HTML, CSS, and backend database integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-yellow-300 mb-12 animate-slide-in">
            contact.
          </h2>
          
          <div className="max-w-4xl grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animate-slide-in">
              <p className="text-black text-lg leading-relaxed">
                Feel free to reach out with any questions, ideas, or opportunities! I'm always open to 
                connecting and happy to help however I can. Looking forward to hearing from you!
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#0F172A] font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:pinyada.sanguansinithikul@gmail.com" className="text-black hover:text-[#A4BFA3] transition-colors">
                    pinyada.sanguansinthukul@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-[#0F172A] font-bold text-lg mb-2">Instagram</h3>
                  <a href="https://instagram.com/pinn_s99" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#A4BFA3] transition-colors">
                    @pinn_s99
                  </a>
                </div>
                
                <div>
                  <h3 className="text-[#0F172A] font-bold text-lg mb-2">GitHub</h3>
                  <a href="https://github.com/pinyadaS" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#A4BFA3] transition-colors">
                    github.com/PinyadaS
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end animate-slide-in">
              <div className="w-48 h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
                  alt="Golden pen decoration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;