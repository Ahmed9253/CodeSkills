import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import {
  AcademicCapIcon,
  CameraIcon,
  ChartBarIcon,
  CodeBracketIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Landing page scroll animations
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const HomePage = () => (
    <div className="landing-container">
      {/* ... existing landing page content ... */}
    </div>
  );

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#cbd5e1",
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: "rgba(203, 213, 225, 0.1)",
        },
        ticks: {
          color: "#cbd5e1",
        },
      },
      x: {
        grid: {
          color: "rgba(203, 213, 225, 0.1)",
        },
        ticks: {
          color: "#cbd5e1",
        },
      },
    },
  };

  const performanceData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Student Performance",
        data: [65, 78, 85, 92],
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139, 92, 246, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const skillsData = {
    labels: [
      "Problem Solving",
      "Code Quality",
      "Time Management",
      "Optimization",
    ],
    datasets: [
      {
        label: "Skills Assessment",
        data: [85, 92, 78, 88],
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",
          "rgba(139, 92, 246, 0.8)",
          "rgba(59, 130, 246, 0.8)",
          "rgba(45, 212, 191, 0.8)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const engagementData = {
    labels: ["Focused", "Distracted", "Interactive"],
    datasets: [
      {
        data: [65, 20, 15],
        backgroundColor: [
          "rgba(139, 92, 246, 0.8)",
          "rgba(99, 102, 241, 0.4)",
          "rgba(45, 212, 191, 0.6)",
        ],
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", closeMenuOnResize);

    // Disable body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", closeMenuOnResize);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/"
          element={
            <div className="landing-container">
              <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
                {isMobileMenuOpen && (
                  <div
                    className="mobile-menu-backdrop"
                    onClick={() => setIsMobileMenuOpen(false)}
                  ></div>
                )}
                <div className="nav-logo">
                  <CodeBracketIcon className="nav-logo-icon" />
                  CodeSkill
                </div>
                <button
                  className="mobile-menu-toggle"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <div
                    className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
                <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
                  <li>
                    <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="nav-actions">
                  <button
                    className="nav-btn admin"
                    onClick={() => setShowAdminLoginModal(true)}
                    title="Admin Login"
                  >
                    <AcademicCapIcon className="nav-icon" />
                  </button>
                  <button
                    className="nav-btn login"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Log in
                  </button>
                  <button
                    className="nav-btn signup"
                    onClick={() => setShowSignupModal(true)}
                  >
                    Sign up free
                  </button>
                </div>
              </nav>

              {/* Admin Login Modal */}
              {showAdminLoginModal && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3>Admin Login</h3>
                      <button
                        className="modal-close"
                        onClick={() => setShowAdminLoginModal(false)}
                      >
                        <XMarkIcon className="close-icon" />
                      </button>
                    </div>
                    <form
                      className="auth-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        const username = e.target.adminUsername.value;
                        const password = e.target.adminPassword.value;

                        // Check for the specified credentials
                        if (username === "codeskill" && password === "Admin") {
                          window.location.href = "/admin";
                        } else {
                          alert("Invalid admin credentials. Please try again.");
                        }
                      }}
                    >
                      <div className="input-group">
                        <label htmlFor="adminUsername">Username</label>
                        <input type="text" id="adminUsername" required />
                      </div>
                      <div className="input-group">
                        <label htmlFor="adminPassword">Password</label>
                        <input type="password" id="adminPassword" required />
                      </div>
                      <button type="submit" className="cta-btn primary">
                        Login as Admin
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Login Modal */}
              {showLoginModal && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3>Welcome Back</h3>
                      <button
                        className="modal-close"
                        onClick={() => setShowLoginModal(false)}
                      >
                        <XMarkIcon className="close-icon" />
                      </button>
                    </div>
                    <form className="auth-form">
                      <div className="input-group">
                        <label htmlFor="login-email">Email</label>
                        <input type="email" id="login-email" required />
                      </div>
                      <div className="input-group">
                        <label htmlFor="login-password">Password</label>
                        <input type="password" id="login-password" required />
                      </div>
                      <div className="form-actions">
                        <label className="remember-me">
                          <input type="checkbox" />
                          <span>Remember me</span>
                        </label>
                        <a href="#!" className="forgot-password">
                          Forgot password?
                        </a>
                      </div>
                      <button type="submit" className="cta-btn primary">
                        Log in
                      </button>
                    </form>
                    <div className="auth-footer">
                      <p>
                        Don't have an account?{" "}
                        <button
                          className="text-button"
                          onClick={() => {
                            setShowLoginModal(false);
                            setShowSignupModal(true);
                          }}
                        >
                          Sign up
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Signup Modal */}
              {showSignupModal && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3>Create Account</h3>
                      <button
                        className="modal-close"
                        onClick={() => setShowSignupModal(false)}
                      >
                        <XMarkIcon className="close-icon" />
                      </button>
                    </div>
                    <form className="auth-form">
                      <div className="input-group">
                        <label htmlFor="signup-name">Full Name</label>
                        <input type="text" id="signup-name" required />
                      </div>
                      <div className="input-group">
                        <label htmlFor="signup-email">Email</label>
                        <input type="email" id="signup-email" required />
                      </div>
                      <div className="input-group">
                        <label htmlFor="signup-password">Password</label>
                        <input type="password" id="signup-password" required />
                      </div>
                      <div className="terms-checkbox">
                        <input type="checkbox" id="signup-terms" required />
                        <label htmlFor="signup-terms">
                          I agree to the <a href="#!">Terms of Service</a> and{" "}
                          <a href="#!">Privacy Policy</a>
                        </label>
                      </div>
                      <button type="submit" className="cta-btn primary">
                        Create Account
                      </button>
                    </form>
                    <div className="auth-footer">
                      <p>
                        Already have an account?{" "}
                        <button
                          className="text-button"
                          onClick={() => {
                            setShowSignupModal(false);
                            setShowLoginModal(true);
                          }}
                        >
                          Log in
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <section className="hero" id="hero">
                <div className="hero-content">
                  <div className="hero-badge">
                    <span>🚀 Next-Gen Coding Assessment</span>
                  </div>
                  <h1>Master Your Coding Journey</h1>
                  <p className="hero-description">
                    Level up your coding skills with AI-powered assessments and
                    real-time feedback. Start your journey to becoming a better
                    developer today.
                  </p>
                  <div className="hero-actions">
                    <button className="cta-btn primary">Get Started</button>
                    <button className="cta-btn secondary">Watch Demo</button>
                  </div>
                </div>
                <div className="hero-image-wrapper">
                  <img
                    src="/hero.png"
                    alt="Coding education illustration"
                    className="hero-image"
                  />
                </div>
              </section>

              {/* Marquee Divider */}
              <div className="marquee-divider">
                <div className="marquee-content">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} style={{ display: "flex", gap: "2rem" }}>
                      <div className="marquee-item">
                        <span>{"<"}</span>HTML<span>{"/>"}</span>
                      </div>
                      <div className="marquee-item">
                        <span>{"{"}</span>CSS<span>{"}"}</span>
                      </div>
                      <div className="marquee-item">
                        <span>()</span>JavaScript<span>{"=>"}</span>
                      </div>
                      <div className="marquee-item">
                        <span>import</span>React<span>from 'react'</span>
                      </div>
                      <div className="marquee-item">
                        <span>const</span>Python<span>=</span>True
                      </div>
                      <div className="marquee-item">
                        <span>{"{"}</span>JSON<span>{"}"}</span>
                      </div>
                      <div className="marquee-item">
                        <span>git</span>commit<span>-m</span>
                      </div>
                      <div className="marquee-item">
                        <span>npm</span>install<span>--save</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <section
                className={`about-section ${aboutInView ? "fade-in-up" : ""}`}
                id="about"
                ref={aboutRef}
              >
                <div className="section-header">
                  <h2>Essential Code Skills</h2>
                  <p className="about-description">
                    Master the fundamental skills that every modern developer
                    needs. From algorithmic thinking to clean code practices, we
                    help you build a strong foundation in programming. Our
                    comprehensive skill development system ensures you're
                    prepared for real-world challenges in software development.
                  </p>
                </div>
                <div className="about-grid">
                  <div className="about-card">
                    <CodeBracketIcon className="about-icon" />
                    <h3>Problem Solving</h3>
                    <p>
                      Learn to break down complex problems and develop efficient
                      algorithmic solutions through hands-on coding challenges.
                    </p>
                    <div className="stat-pill">
                      <span>Practice Problems</span>
                      <span className="pill-value">500+</span>
                    </div>
                  </div>

                  <div className="about-card">
                    <DocumentCheckIcon className="about-icon" />
                    <h3>Clean Code</h3>
                    <p>
                      Master the art of writing maintainable, readable, and
                      efficient code following industry best practices.
                    </p>
                    <div className="stat-pill">
                      <span>Code Quality</span>
                      <span className="pill-value">A+</span>
                    </div>
                  </div>

                  <div className="about-card">
                    <ChartBarIcon className="about-icon" />
                    <h3>Data Structures</h3>
                    <p>
                      Build expertise in essential data structures and
                      understand when and how to apply them effectively.
                    </p>
                    <div className="stat-pill">
                      <span>Topics Covered</span>
                      <span className="pill-value">25+</span>
                    </div>
                  </div>

                  <div className="about-card">
                    <AcademicCapIcon className="about-icon" />
                    <h3>System Design</h3>
                    <p>
                      Learn to design scalable, efficient, and maintainable
                      software systems for real-world applications.
                    </p>
                    <div className="stat-pill">
                      <span>Projects</span>
                      <span className="pill-value">50+</span>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className={`features ${featuresInView ? "fade-in-up" : ""}`}
                id="features"
                ref={featuresRef}
              >
                <div className="section-header">
                  <h2>Advanced Features</h2>
                  <p className="section-subtitle">
                    Powerful tools for skill assessment
                  </p>
                </div>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon-wrapper">
                      <CodeBracketIcon className="feature-icon" />
                    </div>
                    <h3>Performance Tracking</h3>
                    <p>
                      Track your progress over time with detailed performance
                      metrics
                    </p>
                    <div className="chart-container">
                      <Line options={chartOptions} data={performanceData} />
                    </div>
                    <ul className="feature-list">
                      <li>Real-time progress tracking</li>
                      <li>Performance analytics</li>
                      <li>Improvement suggestions</li>
                    </ul>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon-wrapper">
                      <ChartBarIcon className="feature-icon" />
                    </div>
                    <h3>Skills Analysis</h3>
                    <p>
                      Comprehensive breakdown of your coding skills and
                      abilities
                    </p>
                    <div className="chart-container">
                      <Bar options={chartOptions} data={skillsData} />
                    </div>
                    <ul className="feature-list">
                      <li>Detailed skill assessment</li>
                      <li>Strength identification</li>
                      <li>Areas for improvement</li>
                    </ul>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon-wrapper">
                      <CameraIcon className="feature-icon" />
                    </div>
                    <h3>AI Engagement Metrics</h3>
                    <p>AI-powered analysis of your coding session engagement</p>
                    <div className="chart-container">
                      <Doughnut
                        options={{
                          ...chartOptions,
                          plugins: {
                            ...chartOptions.plugins,
                            legend: {
                              ...chartOptions.plugins.legend,
                              position: "bottom",
                            },
                          },
                        }}
                        data={engagementData}
                      />
                    </div>
                    <ul className="feature-list">
                      <li>Focus time tracking</li>
                      <li>Engagement patterns</li>
                      <li>Behavioral insights</li>
                    </ul>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon-wrapper">
                      <UserGroupIcon className="feature-icon" />
                    </div>
                    <h3>Account Management</h3>
                    <p>
                      Secure and seamless account management with personalized
                      profiles
                    </p>
                    <div className="chart-container">
                      <div className="account-features">
                        <div className="account-feature-item">
                          <div className="feature-progress">
                            <div className="progress-circle completed">
                              <span className="checkmark">✓</span>
                            </div>
                            <div className="feature-text">
                              <h4>Quick Registration</h4>
                              <p>Sign up in less than 2 minutes</p>
                            </div>
                          </div>
                        </div>
                        <div className="account-feature-item">
                          <div className="feature-progress">
                            <div className="progress-circle completed">
                              <span className="checkmark">✓</span>
                            </div>
                            <div className="feature-text">
                              <h4>Secure Authentication</h4>
                              <p>Multi-factor authentication</p>
                            </div>
                          </div>
                        </div>
                        <div className="account-feature-item">
                          <div className="feature-progress">
                            <div className="progress-circle completed">
                              <span className="checkmark">✓</span>
                            </div>
                            <div className="feature-text">
                              <h4>Profile Management</h4>
                              <p>Customizable user profiles</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="feature-list">
                      <li>Social login options</li>
                      <li>Progress tracking</li>
                      <li>Personalized dashboard</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Devices Reel Divider */}
              <div className="devices-reel-divider">
                <div className="devices-reel-content">
                  <div className="device-element smartphone">
                    <div className="screen">
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                    </div>
                  </div>
                  <div className="device-element laptop">
                    <div className="screen">
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                    </div>
                    <div className="keyboard"></div>
                  </div>
                  <div className="device-element tablet">
                    <div className="screen">
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                    </div>
                  </div>
                  <div className="device-element desktop">
                    <div className="monitor">
                      <div className="screen">
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                      </div>
                    </div>
                    <div className="stand"></div>
                  </div>
                  {/* Repeat for continuous scroll effect */}
                  <div className="device-element smartphone">
                    <div className="screen">
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                    </div>
                  </div>
                  <div className="device-element laptop">
                    <div className="screen">
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                    </div>
                    <div className="keyboard"></div>
                  </div>
                  <div className="device-element tablet">
                    <div className="screen">
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                    </div>
                  </div>
                  <div className="device-element desktop">
                    <div className="monitor">
                      <div className="screen">
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                      </div>
                    </div>
                    <div className="stand"></div>
                  </div>
                </div>
              </div>

              <section
                className={`contact-section ${
                  contactInView ? "fade-in-up" : ""
                }`}
                id="contact"
                ref={contactRef}
              >
                <div className="contact-content">
                  <div className="contact-info">
                    <div className="section-header">
                      <h2>Let's Talk!</h2>
                      <p className="contact-subtitle">
                        Get in touch with our team
                      </p>
                    </div>
                    <div className="contact-details">
                      <div className="contact-item">
                        <CodeBracketIcon className="contact-icon" />
                        <div>
                          <h4>Technical Support</h4>
                          <p>support@codeskill.dev</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <UserGroupIcon className="contact-icon" />
                        <div>
                          <h4>Business Inquiries</h4>
                          <p>business@codeskill.dev</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <DocumentCheckIcon className="contact-icon" />
                        <div>
                          <h4>Office Location</h4>
                          <p>123 Tech Street, Silicon Valley, CA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact-form-wrapper">
                    <form className="contact-form">
                      <div className="form-header">
                        <h3>Send us a message</h3>
                        <p>We'll get back to you within 24 hours</p>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <label htmlFor="name">Full Name</label>
                          <input type="text" id="name" required />
                        </div>
                        <div className="input-group">
                          <label htmlFor="email">Email Address</label>
                          <input type="email" id="email" required />
                        </div>
                      </div>
                      <div className="input-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" required />
                      </div>
                      <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="4" required></textarea>
                      </div>
                      <button type="submit" className="cta-btn primary">
                        Send Message <span>→</span>
                      </button>
                    </form>
                  </div>
                </div>
              </section>

              <footer className="footer">
                <div className="footer-content">
                  <div className="footer-main">
                    <div className="footer-brand">
                      <div className="footer-logo">
                        <CodeBracketIcon className="footer-logo-icon" />
                        <h3>CodeSkill</h3>
                      </div>
                      <p>
                        Empowering developers through AI-powered assessments.
                      </p>
                      <div className="footer-social">
                        <a href="#!" className="social-link">
                          <span>Twitter</span>
                        </a>
                        <a href="#!" className="social-link">
                          <span>LinkedIn</span>
                        </a>
                        <a href="#!" className="social-link">
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                    <div className="footer-links-grid">
                      <div className="footer-column">
                        <h4>Platform</h4>
                        <a href="#features">Features</a>
                        <a href="#about">About Us</a>
                        <a href="#contact">Contact</a>
                        <a href="#!">Pricing</a>
                      </div>
                      <div className="footer-column">
                        <h4>Resources</h4>
                        <a href="#!">Documentation</a>
                        <a href="#!">Blog</a>
                        <a href="#!">Support Center</a>
                        <a href="#!">FAQ</a>
                      </div>
                      <div className="footer-column">
                        <h4>Legal</h4>
                        <a href="#!">Privacy Policy</a>
                        <a href="#!">Terms of Service</a>
                        <a href="#!">Security</a>
                        <a href="#!">Compliance</a>
                      </div>
                      <div className="footer-column">
                        <h4>Company</h4>
                        <a href="#!">Careers</a>
                        <a href="#!">Partners</a>
                        <a href="#!">News</a>
                        <a href="#!">Press Kit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <div className="footer-bottom-content">
                    <p>
                      &copy; {new Date().getFullYear()} CodeSkill Platform. All
                      rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                      <a href="#!">Terms</a>
                      <a href="#!">Privacy</a>
                      <a href="#!">Cookies</a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
