
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center py-20 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-darkblue mb-6">
              Hey, I'm <span className="text-portfolio-blue">Poorna Chandar Poloju</span>
            </h1>
            <div className="mb-6 relative">
              <div className="h-12 overflow-hidden">
                <div className="animate-[slide_8s_linear_infinite]">
                  <div className="h-12 flex items-center text-xl md:text-2xl font-bold text-portfolio-purple">
                    Data Engineer
                  </div>
                  <div className="h-12 flex items-center text-xl md:text-2xl font-bold text-portfolio-purple">
                    Cloud Enthusiast
                  </div>
                  <div className="h-12 flex items-center text-xl md:text-2xl font-bold text-portfolio-purple">
                    ETL Pipeline Expert
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              I build scalable data pipelines, cloud-native solutions, and analytics systems 
              that turn data into impact. Let's create data-driven solutions together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white px-6 py-6 flex items-center gap-2"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight size={16} />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-6 py-6 flex items-center gap-2"
                asChild
              >
                <a href="#" download>
                  <Download size={16} />
                  Resume
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-300 hover:border-portfolio-blue text-gray-700 hover:text-portfolio-blue px-6 py-6 flex items-center gap-2"
                asChild
              >
                <a href="https://github.com/PolojuPoornachandar" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-portfolio-blue p-2 bg-white shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-portfolio-blue to-portfolio-purple">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=500"
                  alt="Poorna Chandar Poloju"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={cn(
                "absolute -bottom-4 -right-4 bg-white rounded-full w-24 h-24",
                "flex items-center justify-center shadow-lg border-4 border-portfolio-blue"
              )}>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" 
                  alt="AWS"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
