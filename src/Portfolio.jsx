import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Mail, ChevronDown, Rocket, Wrench, Users, Award, Code, X, Menu, Check } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterTag, setFilterTag] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const glowX = (mousePosition.x / window.innerWidth) * 100;
  const glowY = (mousePosition.y / window.innerHeight) * 100;

  const experienceItems = [
    {
      id: 'undergraduate',
      icon: Wrench,
      title: 'Undergraduate Nanotechnology Engineer',
      subtitle: 'University of Waterloo',
      date: '2025 - 2030',
      color: 'orange',
      description: [
        'First accredited Nanotechnology program in Canada',
        'Based on principles from biology, chemistry, electronics, and quantum physics to create materials and machines in the nano scale',
        'Intersection of Electrical, Chemical and Materials Engineering',
        'Confident in a large skill set, from lab and manufacturing skills to CAD and programming'
      ]
    },
    {
      id: 'rocketry',
      icon: Rocket,
      title: 'Airframe Subteam Member',
      subtitle: 'Waterloo Rocketry',
      date: '2025 - Present',
      color: 'amber',
      description: [
        'Building reusable composite molds and rocket components using infusion and wet layup techniques',
        'Learning advanced manufacturing processes for aerospace-grade parts',
        'Collaborating with a multidisciplinary team to design and test rocket systems',
        'Gaining hands-on experience with materials science, manufacturing and structural engineering'
      ]
    },
    {
      id: 'computer-club',
      icon: Users,
      title: 'Computer Club Head Executive',
      subtitle: 'St. Aloysius Gonzaga SS',
      date: 'Grade 12, 2024-2025',
      color: 'red',
      description: [
        'Led presentations and tutored club members in programming fundamentals',
        'Introduced Grade 9-10 students to programming concepts, helping them explore coding before committing to a full course',
        'Fostered an inclusive learning environment that made tech accessible to beginners',
        'Organized workshops and coding challenges to build practical skills'
      ]
    },
    {
      id: 'deca',
      icon: Award,
      title: 'DECA Regionals Competitor',
      subtitle: 'DECA',
      date: 'Grade 12, 2024-2025',
      color: 'orange',
      description: [
        'Competed at the regional level, presenting an ethics case study to a panel of judges',
        'Developed critical thinking and presentation skills under pressure',
        'Analyzed complex business scenarios and articulated ethical solutions',
        'Gained experience in professional communication and time-constrained problem-solving'
      ]
    },
    {
      id: 'pyko',
      icon: Code,
      title: 'Frontend UI/UX Designer',
      subtitle: 'Pyko.app',
      date: '2024 - 2025',
      color: 'yellow',
      description: [
        'Designed and implemented prototype landing and login pages using JavaScript and React',
        'Worked with technology to translate product requirements into intuitive user interfaces',
        'Collaborated with a startup team to deliver features under tight deadlines'
      ]
    },
    {
      id: 'tutoring',
      icon: Users,
      title: 'Professional Tutor',
      subtitle: 'BookSmart Tutoring',
      date: '2025',
      color: 'red',
      description: [
        'Delivered personalized tutoring sessions for K-8 students, both online and in-person',
        'Built and adapted teaching strategies to meet individual learning styles',
        'Developed patience and communication skills by explaining complex concepts clearly',
        'Managed scheduling and progress tracking to meet learning objectives'
      ]
    }
  ];

  const projects = [
    {
      id: 'portfolio-website',
      title: 'Personal Portfolio Website',
      shortDesc: 'Interactive portfolio built with React and Tailwind CSS',
      fullDesc: 'Designed and developed a fully responsive personal portfolio website using Claude code to showcase my projects, experience, and skills. Built with React for component-based architecture, Vite for fast development, and Tailwind CSS for modern styling. This project demonstrates my ability to work with new technologies and create polished user interfaces.',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'UI/UX'],
      category: 'Development',
      image: '/Website.png',
      imagePlaceholder: 'Portfolio Website'
    },
    {
      id: 'fin-research',
      title: 'Metal Fin Cap Optimization',
      shortDesc: 'Research on optimal design for rocket fin leading edges',
      fullDesc: 'Conducting independent research to determine the optimal design and manufacturing process for a new feature on our 2025-2026 rocket. Exploring materials selection, manufacturing techniques, and thermal considerations to improve rocket performance and durability. This project combines materials science, CAD design, and practical manufacturing knowledge.',
      skills: ['Materials Science', 'CAD', 'Manufacturing', 'Research'],
      category: 'Engineering',
      imagePlaceholder: 'Rocket Fins'
    },
    {
      id: 'composite',
      title: 'Composite Rocket Parts',
      shortDesc: 'Aerospace-grade composite fabrication',
      fullDesc: 'Building aerospace-grade composite structures for Waterloo Rocketry using infusion and wet layup techniques. Learning to create molds, work with carbon fiber and fiberglass, to produce lightweight, high-strength components for rocket airframes. Hands-on experience with advanced manufacturing processes used in the aerospace industry.',
      skills: ['Composites', 'Manufacturing', 'Aerospace', 'Materials Science'],
      category: 'Engineering',
      imagePlaceholder: 'Composite Parts'
    },
    {
      id: 'pyko-ui',
      title: 'Pyko.app Interface',
      shortDesc: 'Startup landing page design',
      fullDesc: 'Designed and implemented responsive landing and login pages for a startup, focusing on user experience and visual appeal. Learned to work with Claude to create interfaces that balance functionality with aesthetics. Collaborated with a fast-paced startup team to deliver features under tight deadlines.',
      skills: ['React', 'JavaScript', 'UI/UX', 'HTML/CSS'],
      category: 'Development',
      image: '/Website2.png',
      imagePlaceholder: 'Pyko UI'
    },
    {
      id: 'toothbrush',
      title: '3D Printed Toothbrush Cap',
      shortDesc: 'Custom CAD solution for an everyday problem',
      fullDesc: 'A fun personal project where I applied my CAD skills to solve an everyday problem. Designed and 3D printed a custom toothbrush cap to keep my toothbrush clean while traveling (and when my roommate is shaving). This small project demonstrates how engineering thinking can be applied to solve practical problems in daily life, from concept to physical prototype.',
      skills: ['CAD', '3D Printing', 'Problem Solving','SolidWorks'],
      category: 'Personal',
      imagePlaceholder: 'Toothbrush Cap'
    }
  ];

  const allSkills = [...new Set(projects.flatMap(p => p.skills))];
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filterTag === 'All' 
    ? projects 
    : projects.filter(p => p.category === filterTag || p.skills.includes(filterTag));

  const colorClasses = {
    orange: { border: 'border-orange-500/50', bg: 'bg-orange-500/20', text: 'text-orange-400', glow: 'shadow-orange-500/50' },
    red: { border: 'border-red-500/50', bg: 'bg-red-500/20', text: 'text-red-400', glow: 'shadow-red-500/50' },
    amber: { border: 'border-amber-500/50', bg: 'bg-amber-500/20', text: 'text-amber-400', glow: 'shadow-amber-500/50' },
    yellow: { border: 'border-yellow-500/50', bg: 'bg-yellow-500/20', text: 'text-yellow-400', glow: 'shadow-yellow-500/50' },
    pink: { border: 'border-pink-500/50', bg: 'bg-pink-500/20', text: 'text-pink-400', glow: 'shadow-pink-500/50' }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const copyEmailToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('pszymbor@uwaterloo.ca');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-zinc-900 to-stone-900 text-gray-100 overflow-x-hidden">
      {/* Animated Nanotechnology Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient glow */}
        <div
          className="absolute inset-0 opacity-20 transition-all duration-700"
          style={{
            background: `radial-gradient(circle 1200px at ${glowX}% ${glowY}%, rgba(249, 115, 22, 0.2), rgba(220, 38, 38, 0.12), transparent)`
          }}
        />
        
        {/* Molecular nodes and connections */}
        <svg className="absolute inset-0 w-full h-full opacity-25">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Generate molecular structure network */}
          {[...Array(30)].map((_, i) => {
            const x = (i * 7 + 13) % 100;
            const y = (i * 11 + 17) % 100;
            const size = 2 + (i % 3);
            const duration = 15 + (i % 10);
            const delay = (i % 8) * -2;
            
            return (
              <g key={`node-${i}`}>
                <circle
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r={size}
                  fill={i % 3 === 0 ? "#fb923c" : i % 3 === 1 ? "#f87171" : "#fbbf24"}
                  filter="url(#glow)"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    values={`${size};${size + 1};${size}`}
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0.8;0.5"
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
          
          {/* Connection lines between nodes */}
          {[...Array(25)].map((_, i) => {
            const x1 = (i * 7 + 13) % 100;
            const y1 = (i * 11 + 17) % 100;
            const x2 = ((i + 3) * 7 + 13) % 100;
            const y2 = ((i + 3) * 11 + 17) % 100;
            const duration = 20 + (i % 15);
            
            return (
              <line
                key={`line-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke={i % 2 === 0 ? "#fb923c" : "#f87171"}
                strokeWidth="0.75"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.35;0"
                  dur={`${duration}s`}
                  begin={`${(i % 10) * -2}s`}
                  repeatCount="indefinite"
                />
              </line>
            );
          })}
        </svg>
        
        {/* Floating particles representing nanoparticles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => {
            const size = Math.random() * 3 + 1.5;
            const left = Math.random() * 100;
            const top = Math.random() * 150;
            const duration = Math.random() * 30 + 20;
            const delay = Math.random() * -20;
            const color = i % 4 === 0 ? 'bg-orange-400/40' :
                         i % 4 === 1 ? 'bg-red-400/40' :
                         i % 4 === 2 ? 'bg-amber-400/40' : 'bg-yellow-400/40';
            
            return (
              <div
                key={`particle-${i}`}
                className={`absolute rounded-full ${color} blur-sm`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  animation: `nanoFloat ${duration}s ease-in-out infinite`,
                  animationDelay: `${delay}s`
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md z-50 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Philip Szymborski
          </button>
          
          {/* Desktop Menu */}
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-100 hover:text-orange-400 transition-colors duration-300 capitalize"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-100 hover:text-orange-400 transition-colors duration-300 capitalize"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-100 hover:text-orange-400 transition-colors duration-300 capitalize"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-100 hover:text-orange-400 transition-colors duration-300 capitalize"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-100 hover:text-orange-400 transition-colors duration-300 capitalize"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-stone-800">
            <div className="flex flex-col p-4 space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 hover:bg-zinc-800 rounded-lg transition-colors capitalize text-gray-100"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left px-4 py-2 hover:bg-zinc-800 rounded-lg transition-colors capitalize text-gray-100"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left px-4 py-2 hover:bg-zinc-800 rounded-lg transition-colors capitalize text-gray-100"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left px-4 py-2 hover:bg-zinc-800 rounded-lg transition-colors capitalize text-gray-100"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 hover:bg-zinc-800 rounded-lg transition-colors capitalize text-gray-100"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent z-10 leading-tight pb-2">
          PHILIP SZYMBORSKI
        </h1>

        <div className="mb-8 relative group">
          <div className="relative">
            <img
              src="/ProfileHeadshot.JPG"
              alt="Philip Szymborski"
              className="w-56 h-56 rounded-full border-4 border-orange-500/30 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center z-10 pb-1">
          Nanotechnology Engineering Student
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl text-center z-10 leading-relaxed">
          Passionate about learning and exploring the intersection of engineering, design, and innovation. 
          Looking to gain hands-on experience in my first co-op!
        </p>

        <div className="flex gap-6 mb-12 z-10">
          <a
            href="https://www.linkedin.com/in/philip-szymborski07/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-orange-500/20 hover:bg-orange-500/40 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-orange-500/50"
          >
            <Linkedin size={28} />
          </a>
          <button
            onClick={copyEmailToClipboard}
            className="p-4 bg-red-500/20 hover:bg-red-500/40 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-red-500/50 relative"
          >
            {emailCopied ? <Check size={28} className="text-green-400" /> : <Mail size={28} />}
          </button>
        </div>

        <div className="animate-bounce z-10">
          <ChevronDown size={40} className="text-orange-400" />
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={(el) => (sectionRefs.current.about = el)}
        className={`py-24 px-6 transition-all duration-300 ${
          visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent pb-2">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a first-year Nanotechnology Engineering student at the University of Waterloo with a passion
                for engineering at both the macro and nano scales. What excites me most about engineering is the opportunity
                to learn something new every day, whether it's learning a new CAD technique, working hands-on with composite fabrication,
                or diving into webpage development.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
              <p className="text-lg text-gray-300 leading-relaxed">
                Through my experiences with UI/UX design, tutoring, and hands-on work with Waterloo Rocketry, 
                I thrive solving real world problems and picking up new skills along the way. I'm eager to bring this 
                enthusiasm and adaptability to my first co-op experience, where I can contribute while continuing to grow as 
                an engineer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        ref={(el) => (sectionRefs.current.experience = el)}
        className="py-24 px-6 bg-gray-800/20"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-20 text-center bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent pb-2">
            My Journey
          </h2>

          <div className="relative">
            {/* Straight Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-red-500 to-amber-500 opacity-30" />

            {experienceItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const colors = colorClasses[item.color];

              return (
                <div
                  key={item.id}
                  id={`exp-${item.id}`}
                  ref={(el) => (sectionRefs.current[`exp-${item.id}`] = el)}
                  className={`relative mb-16 transition-all duration-300 ${
                    visibleSections[`exp-${item.id}`]
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
                >
                  <div className={`flex items-center justify-center gap-6`}>
                    {/* Content Card */}
                    <div className={`${isLeft ? 'order-1' : 'order-3'} w-5/12 max-w-md ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div 
                        className={`bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border ${colors.border} transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group`}
                      >
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <h3 className={`text-xl font-bold ${colors.text} pb-1`}>{item.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-2 text-sm">{item.subtitle}</p>
                        <p className="text-xs text-gray-500 mb-4">{item.date}</p>
                        <ul className={`space-y-2 text-gray-300 text-sm`}>
                          {item.description.map((desc, i) => (
                            <li key={i} className={`flex items-start gap-2 leading-relaxed ${isLeft ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                              <span className="flex-shrink-0 mt-1">•</span>
                              <span className="flex-1">{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="order-2 relative z-10">
                      <div className={`w-14 h-14 ${colors.bg} rounded-full flex items-center justify-center border-4 border-gray-900 shadow-xl transition-transform duration-500`}>
                        <Icon size={24} className={colors.text} />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className={`${isLeft ? 'order-3' : 'order-1'} w-5/12 max-w-md`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={(el) => (sectionRefs.current.projects = el)}
        className={`py-24 px-6 transition-all duration-300 ${
          visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent pb-2">
            Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Click on any project to learn more
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterTag(category)}
                className={`px-5 py-2 rounded-full transition-all duration-200 transform ${
                  filterTag === category
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50 scale-110'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 cursor-pointer group"
                  style={{
                    animation: `fadeInScale 0.3s ease-out ${index * 0.05}s both`
                  }}
                >
                  {/* 16:9 Aspect Ratio Image Container */}
                  <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                    <img
                      src={project.image || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225'%3E%3Crect width='400' height='225' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%239CA3AF'%3E${project.imagePlaceholder}%3C/text%3E%3C/svg%3E`}
                      alt={project.title}
                      className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors pb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="px-3 py-1 bg-gray-600/50 text-gray-400 rounded-full text-xs">
                          +{project.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        ref={(el) => (sectionRefs.current.skills = el)}
        className={`py-24 px-6 bg-gray-800/20 transition-all duration-300 ${
          visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent pb-2">
            Skills
          </h2>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-red-400 pb-1">
                Technical Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {allSkills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => {
                      setFilterTag(skill);
                      scrollToSection('projects');
                    }}
                    className={`px-4 py-2 rounded-full transition-all duration-200 transform ${
                      filterTag === skill
                        ? 'bg-red-500 text-white shadow-lg shadow-red-500/50 scale-110'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-red-500/30 hover:scale-105'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8 pt-8 border-t border-gray-700/50">
              <h3 className="text-2xl font-bold text-center mb-6 text-amber-400 pb-1">
                Core Strengths
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Communication', 'Adaptability', 'Critical Thinking', 'Teamwork', 'Leadership', 'Eager to Learn'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium hover:bg-amber-500/30 transition-all duration-300 hover:scale-105 border border-amber-500/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-700/50">
              <h3 className="text-2xl font-bold text-center mb-6 text-rose-400 pb-1">
                Lab & Fabrication
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Composite Layup', 'Soldering', 'Micropipette', '3D Printing'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-rose-500/20 text-rose-300 rounded-full text-sm font-medium hover:bg-rose-500/30 transition-all duration-300 hover:scale-105 border border-rose-500/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-orange-500/50 shadow-2xl shadow-orange-500/30 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-900/80 hover:bg-gray-700 rounded-full transition-all duration-300"
              >
                <X size={24} />
              </button>

              <div className="relative overflow-hidden rounded-t-3xl" style={{ paddingTop: '50%' }}>
                <img
                  src={selectedProject.image || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='800' height='400' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%239CA3AF'%3E${selectedProject.imagePlaceholder}%3C/text%3E%3C/svg%3E`}
                  alt={selectedProject.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent" />
              </div>

              <div className="p-8">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent pb-2">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.fullDesc}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-red-400 pb-1">Skills Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full font-medium border border-orange-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-medium">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={(el) => (sectionRefs.current.contact = el)}
        className={`py-24 px-6 transition-all duration-300 ${
          visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent pb-2">
            Let's Connect!
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm excited to explore co-op opportunities where I can learn, contribute, and grow as an engineer. 
            Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={copyEmailToClipboard}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 relative"
            >
              {emailCopied ? (
                <>
                  <Check size={24} />
                  <span className="font-medium">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail size={24} />
                  <span className="font-medium">pszymbor@uwaterloo.ca</span>
                </>
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/philip-szymborski07/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-1"
            >
              <Linkedin size={24} />
              <span className="font-medium">LinkedIn Profile</span>
            </a>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative bg-gray-800/70 backdrop-blur-sm p-10 rounded-2xl border border-gray-700 group-hover:border-orange-500/50 transition-all duration-500">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold text-xl">
                  Currently seeking:
                </span>
                <br />
                <span className="text-xl">
                  First co-op position for Summer/Fall 2025 where I can apply my technical skills 
                  and passion for learning to real-world engineering challenges.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-400 bg-gray-900/50">
        <p className="text-lg mb-2">© 2025 Philip Szymborski</p>
        <p className="text-sm">Nanotechnology Engineering @ University of Waterloo</p>
        <p className="text-xs mt-4 text-gray-500">Built with React & Tailwind CSS</p>
      </footer>

      <style>{`
        @keyframes nanoFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -50px) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(-20px, -100px) rotate(180deg);
            opacity: 0.4;
          }
          75% {
            transform: translate(-40px, -50px) rotate(270deg);
            opacity: 0.7;
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;