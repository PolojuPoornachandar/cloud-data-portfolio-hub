
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-darkblue text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="text-portfolio-lightblue">P</span>oorna Chandar Poloju
            </div>
            <p className="text-gray-300 max-w-md">
              Data Engineer specializing in building scalable, efficient data pipelines 
              and cloud-native solutions.
            </p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/PolojuPoornachandar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-blue transition-colors"
              >
                <Github size={20} />
              </a>
              
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href="mailto:polojupoornachandar@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-blue transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Poorna Chandar Poloju. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
