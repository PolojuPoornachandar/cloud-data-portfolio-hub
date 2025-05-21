
import React from "react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      skills: ["Python", "SQL", "PySpark", "Terraform", "Git", "Jenkins", "Jupyter", "Bash"]
    },
    {
      title: "Cloud Platforms",
      skills: [
        "AWS S3", "Redshift", "AWS Glue", "Athena", "EMR", "Lambda", 
        "CloudWatch", "QuickSight", "Azure Data Factory"
      ]
    },
    {
      title: "Data & DevOps",
      skills: [
        "Apache Spark", "Hive", "Kafka", "Hadoop", "dbt", 
        "Great Expectations", "Docker", "GitHub Actions"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-portfolio-blue mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="tech-pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill level visualization */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-portfolio-blue mb-8">Core Technical Proficiencies</h3>
          
          <div className="space-y-6">
            {[
              { skill: "AWS Cloud Services", level: 90 },
              { skill: "Python & PySpark", level: 85 },
              { skill: "SQL & Data Modeling", level: 88 },
              { skill: "ETL/ELT Pipeline Development", level: 92 },
              { skill: "Data Warehousing", level: 80 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-portfolio-blue">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple h-2.5 rounded-full"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
