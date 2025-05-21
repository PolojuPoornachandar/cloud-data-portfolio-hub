
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      const currentSection = sections.find(section => {
        const el = document.getElementById(section);
        if (!el) return false;
        
        const rect = el.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-portfolio-darkblue">
            <span className="text-portfolio-blue">P</span>oorna
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-portfolio-darkblue focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "nav-link text-portfolio-darkblue hover:text-portfolio-blue transition-colors text-sm font-medium py-2",
                activeSection === item.href.slice(1) ? "active text-portfolio-blue" : ""
              )}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.href.slice(1));
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.name}
            </a>
          ))}
          <Button 
            variant="default" 
            className="bg-portfolio-blue hover:bg-portfolio-darkblue flex items-center gap-2"
            asChild
          >
            <a href="#" download>
              <Download size={16} />
              <span>Resume</span>
            </a>
          </Button>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300",
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMenuOpen(false)}
      ></div>
      
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-portfolio-darkblue">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-portfolio-darkblue focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  activeSection === item.href.slice(1)
                    ? "bg-portfolio-blue bg-opacity-10 text-portfolio-blue"
                    : "text-portfolio-darkblue hover:bg-gray-100"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  const element = document.getElementById(item.href.slice(1));
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-portfolio-blue hover:bg-portfolio-darkblue flex items-center gap-2 justify-center mt-4"
              asChild
            >
              <a href="#" download>
                <Download size={16} />
                <span>Resume</span>
              </a>
            </Button>
            <div className="pt-6 flex justify-center space-x-4">
              <a href="https://github.com/PolojuPoornachandar" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="mailto:polojupoornachandar@gmail.com" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
