
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubLink: string;
  demoLink?: string;
}

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "ETL Pipeline with Pandas",
      description: "End-to-end ETL pipeline built using Python & Pandas. Extracted, transformed, and loaded raw data into structured CSVs for reporting.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
      tech: ["Python", "Pandas", "Jupyter"],
      githubLink: "https://github.com/PolojuPoornachandar/ETL-Pipeline-Project",
      demoLink: "#"
    },
    {
      id: 2,
      title: "Spotify Analytics ETL Pipeline on AWS",
      description: "Real-time data pipeline using Spotify API and AWS Serverless services. Extracted weekly top charts → Transformed in Lambda → Loaded into S3 → Queried using Athena.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400",
      tech: ["AWS Lambda", "S3", "CloudWatch", "Glue", "Athena", "Python"],
      githubLink: "https://github.com/PolojuPoornachandar/Spotify-Music-Analytics-Pipeline"
    },
    {
      id: 3,
      title: "Data Warehouse Automation with dbt on Snowflake",
      description: "Automated ELT modeling using dbt, with Git-based version control and CI/CD integration.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      tech: ["dbt", "Snowflake", "Git", "CI/CD", "SQL"],
      githubLink: "#"
    },
    {
      id: 4,
      title: "Real-Time Dashboard for Music Trends",
      description: "Visualized key metrics from Spotify data using Redshift + S3 + QuickSight. Automatically refreshed with Lambda triggers.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400",
      tech: ["AWS QuickSight", "Redshift", "Lambda", "SQL"],
      githubLink: "#"
    }
  ];

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "aws", label: "AWS" },
    { id: "etl", label: "ETL/ELT" },
    { id: "data", label: "Data Viz" }
  ];
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => {
        switch (activeTab) {
          case "aws":
            return project.tech.some(t => t.includes("AWS") || ["S3", "Lambda", "Glue", "Athena", "Redshift", "CloudWatch", "QuickSight"].includes(t));
          case "etl":
            return project.title.toLowerCase().includes("etl") || project.tech.some(t => ["dbt", "Pandas"].includes(t));
          case "data":
            return project.tech.includes("AWS QuickSight") || project.title.includes("Dashboard");
          default:
            return true;
        }
      });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-8">Featured Projects</h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Here are some of the projects I've worked on that demonstrate my skills in data engineering, 
          cloud architecture, and analytics.
        </p>
        
        {/* Project filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-colors",
                activeTab === tab.id
                  ? "bg-portfolio-blue text-white"
                  : "bg-white text-portfolio-darkblue hover:bg-portfolio-blue/10"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-portfolio-darkblue">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-darkblue hover:text-portfolio-blue transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-darkblue hover:text-portfolio-blue transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  
                  <a 
                    href={project.githubLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-portfolio-blue hover:underline"
                  >
                    <span>View Project</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/PolojuPoornachandar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-portfolio-blue hover:text-portfolio-darkblue transition-colors"
          >
            <span>View More Projects on GitHub</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
