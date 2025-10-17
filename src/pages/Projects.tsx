import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

const Projects = () => {
  const allProjects = [
    {
      title: "Exam Track - College Results Management System",
      description: "A comprehensive full-stack web application developed for Deccan College of Engineering and Technology to streamline student examination results management. Features include secure authentication, automated data processing, and real-time analytics with a dual interface system for both students and administrators.",
      longDescription: "This project revolutionizes how educational institutions manage and distribute examination results. The system incorporates smart result search functionality using hall ticket-based lookup, triple data entry methods (manual entry, Excel bulk upload, and OU website integration), and real-time analytics with automatic SGPA/CGPA calculations. The web scraping integration automates external marks fetching from Osmania University portal, while the responsive design ensures optimal performance across all devices.",
      tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Node.js", "Cheerio", "Tailwind CSS", "shadcn/ui"],
      features: [
        "Dual Interface: Separate student and admin portals with role-based access",
        "Smart Result Search: Hall ticket-based lookup with comprehensive academic data", 
        "Triple Data Entry: Manual entry, Excel bulk upload, and OU website integration",
        "Real-time Analytics: Automatic SGPA/CGPA calculations with performance visualization",
        "Advanced Grading: CIE (0-30) + External (0-70) marks with 10-point grading system",
        "Web Scraping Integration: Automated external marks fetching from Osmania University portal"
      ],
      impact: [
        "95% Efficiency Gain: Bulk upload vs manual data entry",
        "Real-time Access: Instant result availability for students", 
        "Data Accuracy: Automated validation prevents entry errors",
        "Mobile Ready: 100% responsive across all devices"
      ],
      github: "#",
      live: "#"
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
      live: "#"
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
      live: "#"
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
      live: "#"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <article key={index} className="group border border-border rounded-lg p-6 hover:border-accent/50 transition-colors h-fit">
              {/* Project Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
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

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                {project.description}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                {project.longDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h3 className="font-semibold text-base text-foreground mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h3 className="font-semibold text-base text-foreground mb-2">Key Features</h3>
                <ul className="space-y-1.5">
                  {project.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 4 && (
                    <li className="text-muted-foreground text-sm italic">
                      +{project.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Impact & Results */}
              <div>
                <h3 className="font-semibold text-base text-foreground mb-2">Impact & Results</h3>
                <ul className="space-y-1.5">
                  {project.impact.map((result, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;