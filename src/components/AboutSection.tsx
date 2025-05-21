
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">About Me</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 order-2 lg:order-1">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A passionate Data Engineer with 3+ years of experience designing and building 
              data platforms that scale. I specialize in AWS cloud services, Spark-based ETL 
              pipelines, and real-time analytics. Whether it's structured or unstructured data, 
              I love turning chaos into clarity.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Currently working at <span className="font-semibold">New York Life Insurance</span> (USA), 
              previously at <span className="font-semibold">Novartis</span> (India), solving data 
              problems across healthcare and finance domains.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-portfolio-blue mb-4">What I Bring to the Table:</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue rounded-full"></div>
                  </div>
                  <span>Building scalable ETL/ELT pipelines using AWS Services and Apache Spark</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue rounded-full"></div>
                  </div>
                  <span>Cloud architecture design focused on data reliability and performance</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue rounded-full"></div>
                  </div>
                  <span>Data quality implementation with tested monitoring solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue rounded-full"></div>
                  </div>
                  <span>SQL optimization for complex analytics workloads</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600"
                  alt="Working on Data Projects" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg bg-white p-3 shadow-lg">
                <div className="w-full h-full bg-portfolio-blue rounded-lg flex items-center justify-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png" 
                    alt="Apache Spark"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-3xl font-bold text-portfolio-blue">3+</div>
                <div className="text-xs text-gray-600">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
