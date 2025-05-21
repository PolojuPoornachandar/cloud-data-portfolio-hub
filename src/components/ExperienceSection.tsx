
import React from "react";

interface WorkExperience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceSection = () => {
  const experiences: WorkExperience[] = [
    {
      id: 1,
      role: "Data Engineer",
      company: "New York Life Insurance",
      location: "Remote",
      period: "Feb 2024 – Present",
      description: [
        "Migrated 15+TB to Redshift reducing latency by 45%",
        "Automated scalable ETL pipelines using Glue, Athena, Hive",
        "Optimized 200+ SQL queries using CTEs and window functions",
        "Spark-based transformation improved batch jobs by 60%",
        "CloudWatch + QuickSight dashboards cut SLA breaches by 35%"
      ]
    },
    {
      id: 2,
      role: "Associate Data Engineer",
      company: "Novartis",
      location: "Hyderabad",
      period: "Jan 2021 – Dec 2022",
      description: [
        "Built Spark ETL pipelines for 2TB+ weekly data",
        "Used Azure Data Factory for source integration",
        "Achieved 98%+ data quality with Great Expectations",
        "Schema-evolving pipelines in Palantir Foundry"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "M.S. Computer Science",
      institution: "William Jessup University, CA",
      period: "2023 – 2024"
    },
    {
      id: 2,
      degree: "B.Tech, ECE",
      institution: "Sri Indu College of Engineering, India",
      period: "2018 – 2022"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect – Associate (in progress)",
    "dbt Fundamentals Certification",
    "Data Engineering with Google Cloud (Coursera)"
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-portfolio-blue mb-8">Work Experience</h3>
              
              <div className="space-y-10">
                {experiences.map((exp) => (
                  <div key={exp.id} className="timeline-item">
                    <div className="mb-2">
                      <h4 className="text-lg font-bold text-portfolio-darkblue">{exp.role}</h4>
                      <div className="flex flex-wrap items-center gap-x-3 text-sm text-gray-600">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-xs">•</span>
                        <span>{exp.location}</span>
                        <span className="text-xs">•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-3 mt-1.5">
                            <div className="w-1.5 h-1.5 bg-portfolio-blue rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Education & Certifications */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-portfolio-blue mb-6">Education</h3>
              
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="timeline-item">
                    <h4 className="font-bold text-portfolio-darkblue">{edu.degree}</h4>
                    <div className="text-sm text-gray-600 mb-1">{edu.institution}</div>
                    <div className="text-xs text-gray-500">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-portfolio-blue mb-6">Certifications</h3>
              
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="w-2 h-2 bg-portfolio-purple rounded-full"></div>
                    </div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
