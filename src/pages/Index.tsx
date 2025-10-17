import { Github, Linkedin, Mail, Youtube, ExternalLink, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  const projects = [
    {
      title: "Result Tracker - College Results Management System",
      description: "Full-stack web application for Deccan College of Engineering and Technology to manage student examination results with secure authentication, automated data processing, and real-time analytics. Features dual interface, smart result search, triple data entry methods, and web scraping integration.",
      tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Node.js", "Cheerio", "Tailwind CSS"],
      link: "https://deccan-result.vercel.app/",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning model to detect fraudulent credit card transactions using advanced anomaly detection techniques and ensemble methods.",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      link: "#",
      preview: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "E-Commerce Demand Forecasting",
      description: "Time series forecasting system to predict product demand, optimizing inventory management and reducing operational costs.",
      tech: ["Python", "TensorFlow", "ARIMA", "Prophet"],
      link: "#",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Expense Tracker Application",
      description: "Full-stack web application for personal finance management with data visualization and budgeting features.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      link: "#",
      preview: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center"
    }
  ];

  const experiences = [
    {
      role: "Customer Service Associate",
      company: "Amazon",
      period: "Sep 2023 - Jun 2024",
      achievements: [
        "Achieved a 95% customer satisfaction rate based on feedback surveys.",
        "Successfully handled an average of 150 customer cases per day.",
        "Recognized for consistently exceeding performance targets and resolving customer issues efficiently.",
      ]
    },
    {
      role: "Internship",
      company: "Code for India",
      period: "November 2024",
      achievements: [
        "Collected, cleaned, and analyzed large datasets to support civic and social impact projects.", 
        "Performed exploratory data analysis (EDA) to identify patterns and insights, utilizing Python (Pandas, NumPy, Matplotlib).",
        "Built machine learning models for trend prediction and policy decision-making using Scikit-learn and TensorFlow.",
        "Collaborated with cross-functional teams to ensure alignment of data solutions with project goals.",
        "Created detailed reports and presented findings through data visualizations and progress updates."
      ]
    },
        {
      role: "Student Training Program on AI/ML",
      company: "IIIT - Hyderabad",
      period: "May 2025 - October 2025",
      achievements: [
        "Gained solid foundations in AI/ML concepts and real-world applications.",
        "Built and evaluated classification, prediction, and regression models.",
        "Applied key performance metrics to assess model accuracy and reliability.",
        "Conducted data analysis, clustering, and dimensionality reduction (PCA).",
        "Developed basic neural networks and explored deep learning fundamentals.",
        "Created end-to-end ML/DL applications from data preparation to deployment."
      ]
    }
  ];

  const skills = {
    "Data & ML": ["Python", "TensorFlow", "Scikit-learn", "PyTorch", "SQL", "Pandas"],
    "Web Development": ["React", "TypeScript", "Node.js", "MongoDB", "REST APIs", "FastAPI"],
    "Tools & Cloud": ["Git", "Docker", "AWS", "Jupyter"],
    "Soft Skills": ["Problem Solving", "Communication", "Team Leadership"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed position in top right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 pt-20 md:pt-32 pb-12">
        <div className="space-y-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Raza Abidi
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Data Analyst & Technologist based in Hyderabad.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I build intelligent systems that solve real problems, blending machine learning with practical engineering to create impact.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a 
              href="https://github.com/raza-abidii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/raza-abidi-53675020b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/raza.abidii/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:razaabidi030@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-border"></div>
      </div>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/projects">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 hover:text-accent transition-colors cursor-pointer">
            Featured Projects
          </h2>
        </Link>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <article key={index} className="group">
              <div className="space-y-6">
                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-xl text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <a 
                      href={project.link}
                      className="text-muted-foreground hover:text-accent transition-colors flex-shrink-0"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Preview */}
                <div className="relative overflow-hidden rounded-lg border border-border group-hover:border-accent/50 transition-colors bg-secondary">
                  {project.link !== "#" ? (
                    <div className="relative w-full h-64 md:h-80">
                      <iframe
                        src={project.link}
                        title={`${project.title} live preview`}
                        className="w-full h-full scale-75 origin-top-left"
                        style={{ 
                          width: '133.33%', 
                          height: '133.33%',
                          pointerEvents: 'none'
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-transparent group-hover:bg-accent/5 transition-colors cursor-pointer"
                           onClick={() => window.open(project.link, '_blank')}
                      />
                      <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded px-2 py-1">
                        <span className="text-xs text-muted-foreground">Live Preview</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-64 md:h-80 flex items-center justify-center">
                      <img 
                        src={project.preview} 
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors" />
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Projects Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-border"></div>
      </div>

      {/* Experience Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <article key={index}>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-xl text-foreground">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-muted-foreground mt-1">
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-sm">•</span>
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-secondary">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-border"></div>
      </div>

      {/* Skills Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span 
                    key={i}
                    className="text-sm text-foreground bg-secondary px-3 py-1.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-border"></div>
      </div>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          About Me
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a software engineer, data analyst, and technologist from Hyderabad, India, passionate about using technology to solve meaningful problems. My work sits at the intersection of machine learning, software engineering, and product thinking.
          </p>
          <p>
            Currently, I'm exploring advanced backend architectures, building scalable full-stack applications, and contributing to open-source backend projects. I believe in continuous learning, clean code practices, and sharing knowledge with the developer community.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-border"></div>
      </div>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Get in Touch
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          I'm always open to interesting conversations and collaboration opportunities. Feel free to reach out if you'd like to connect.
        </p>
        <a 
          href="mailto:razaabidi030@gmail.com"
          className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors font-medium"
        >
          <Mail className="w-5 h-5" />
          razaabidi030@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Syed Mohammed Raza Husain Abidi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/raza-abidii" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/raza-abidi-53675020b/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/raza.abidii/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
