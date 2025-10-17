import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

const Projects = () => {
  const allProjects = [
    {
      title: "Result Tracker - College Results Management System",
      description: "A comprehensive full-stack web application developed for Deccan College of Engineering and Technology to streamline student examination results management. Features include secure authentication, automated data processing, and real-time analytics with a dual interface system for both students and administrators.",
      longDescription: "This project revolutionizes how educational institutions manage and distribute examination results. The system incorporates smart result search functionality using hall ticket-based lookup, triple data entry methods (manual entry, Excel bulk upload, and OU website integration), and real-time analytics with automatic SGPA/CGPA calculations. The web scraping integration automates external marks fetching from Osmania University portal, while the responsive design ensures optimal performance across all devices.",
      tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Node.js", "Cheerio", "Tailwind CSS", "shadcn/ui"],
      features: [
        "Dual Interface: Separate student and admin portals with role-based access",
        "Smart Result Search: Hall ticket-based lookup with comprehensive academic data", 
        "Triple Data Entry: Manual entry, Excel bulk upload, and OU website integration",
        "Real-time Analytics: Automatic SGPA/CGPA calculations with performance visualization",
        "Advanced Grading: CIE (0-30) + External (0-70) marks with 10-point grading system",
        "Working on Web Scraping Integration: Automated external marks fetching from Osmania University portal"
      ],
      impact: [
        "95% Efficiency Gain: Bulk upload vs manual data entry",
        "Real-time Access: Instant result availability for students", 
        "Data Accuracy: Automated validation prevents entry errors",
        "Mobile Ready: 100% responsive across all devices"
      ],
      github: "https://github.com/raza-abidii/Result-Tracker",
      live: "https://deccan-result.vercel.app/",
      preview: "https://deccan-result.vercel.app/"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Advanced machine learning model designed to detect fraudulent credit card transactions using sophisticated anomaly detection techniques and ensemble methods.",
      longDescription: "This project implements state-of-the-art machine learning algorithms to identify potentially fraudulent credit card transactions in real-time. The system uses multiple detection techniques including statistical analysis, behavioral pattern recognition, and ensemble methods to achieve high accuracy while minimizing false positives.",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost", "NumPy", "Matplotlib", "Seaborn"],
      features: [
        "Real-time fraud detection with sub-second response times",
        "Ensemble methods combining multiple ML algorithms",
        "Advanced feature engineering for transaction patterns",
        "Anomaly detection using isolation forests and autoencoders",
        "Comprehensive data preprocessing and normalization",
        "Performance metrics tracking and model validation"
      ],
      impact: [
        "99.2% Accuracy: High precision fraud detection",
        "0.1% False Positive Rate: Minimized customer friction",
        "Real-time Processing: Sub-second transaction analysis",
        "Scalable Architecture: Handles millions of transactions daily"
      ],
      github: "#",
      live: "#",
      preview: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "E-Commerce Demand Forecasting",
      description: "Sophisticated time series forecasting system designed to predict product demand, optimize inventory management, and reduce operational costs for e-commerce platforms.",
      longDescription: "This comprehensive forecasting solution leverages advanced time series analysis and machine learning techniques to predict product demand with high accuracy. The system integrates multiple forecasting models, seasonal analysis, and external factor consideration to provide actionable insights for inventory optimization.",
      tech: ["Python", "TensorFlow", "ARIMA", "Prophet", "Pandas", "NumPy", "Plotly", "Scikit-learn"],
      features: [
        "Multi-model forecasting approach for improved accuracy",
        "Seasonal trend analysis and holiday impact consideration",
        "External factors integration (weather, events, promotions)",
        "Automated model selection based on product categories",
        "Interactive dashboards for forecast visualization",
        "Inventory optimization recommendations"
      ],
      impact: [
        "30% Reduction: Inventory holding costs optimized",
        "25% Improvement: Forecast accuracy vs baseline models",
        "Real-time Updates: Dynamic forecasting with new data",
        "Multi-product Support: Scalable across product categories"
      ],
      github: "#",
      live: "#",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Expense Tracker Application",
      description: "Feature-rich full-stack web application for comprehensive personal finance management with advanced data visualization and intelligent budgeting features.",
      longDescription: "A complete personal finance management solution that helps users track expenses, manage budgets, and gain insights into their spending patterns. The application features intuitive data visualization, automated categorization, and intelligent budgeting recommendations based on spending history and financial goals.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js", "Express", "JWT", "Material-UI"],
      features: [
        "Intelligent expense categorization and tracking",
        "Interactive charts and spending analytics",
        "Budget creation and monitoring with alerts",
        "Receipt scanning and automatic data extraction",
        "Multi-currency support for international users",
        "Export capabilities for tax and accounting purposes"
      ],
      impact: [
        "User Engagement: 85% monthly active user retention",
        "Budget Adherence: 40% improvement in budget compliance",
        "Time Savings: 70% reduction in manual expense entry",
        "Financial Insights: Comprehensive spending pattern analysis"
      ],
      github: "#",
      live: "#",
      preview: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed position in top right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            All Projects
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A comprehensive showcase of my technical projects spanning machine learning, 
          full-stack development, and data science solutions.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-12">
          {allProjects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-3 gap-6">
              {/* Project Information Card */}
              <article className="lg:col-span-2 group border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                {/* Project Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex gap-3 flex-shrink-0">
                    <a 
                      href={project.github}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.live}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-6">
                  {/* Project Description */}
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact & Results */}
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">Impact & Results</h3>
                    <ul className="space-y-2">
                      {project.impact.map((result, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              {/* Separate Preview Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors bg-card">
                    <h3 className="font-semibold text-lg text-foreground mb-4">Live Preview</h3>
                    <div className="relative overflow-hidden rounded-lg border border-border bg-secondary">
                      {project.live !== "#" ? (
                        <div className="relative w-full h-64 lg:h-80">
                          <iframe
                            src={project.preview}
                            title={`${project.title} live preview`}
                            className="w-full h-full scale-75 origin-top-left"
                            style={{ 
                              width: '133.33%', 
                              height: '133.33%',
                              pointerEvents: 'none'
                            }}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-transparent hover:bg-accent/5 transition-colors cursor-pointer"
                               onClick={() => window.open(project.live, '_blank')}
                          />
                          <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded px-2 py-1">
                            <span className="text-xs text-muted-foreground">Click to open</span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-64 lg:h-80 flex items-center justify-center">
                          <img 
                            src={project.preview} 
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-background/20 hover:bg-background/10 transition-colors" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;