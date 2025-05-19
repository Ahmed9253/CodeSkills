import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import "./AdminDashboard.css";

const placeholderUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    gender: "Male",
    picture: "https://api.dicebear.com/7.x/avatars/svg?seed=john",
    qualifications: "B.Tech in Computer Science",
    joinDate: "2025-05-01",
    testsCompleted: 15,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    gender: "Female",
    picture: "https://api.dicebear.com/7.x/avatars/svg?seed=jane",
    qualifications: "M.Sc in Software Engineering",
    joinDate: "2025-05-05",
    testsCompleted: 12,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    gender: "Male",
    picture: "https://api.dicebear.com/7.x/avatars/svg?seed=mike",
    qualifications: "BSc in Information Technology",
    joinDate: "2025-05-10",
    testsCompleted: 8,
  },
];

const placeholderTestResults = [
  {
    id: 1,
    studentName: "John Doe",
    testName: "JavaScript Basics",
    score: 92,
    date: "2025-05-15",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    testName: "React Fundamentals",
    score: 88,
    date: "2025-05-14",
  },
  {
    id: 3,
    studentName: "Mike Johnson",
    testName: "CSS Advanced",
    score: 95,
    date: "2025-05-13",
  },
];

const placeholderPendingTests = [
  {
    id: 1,
    studentName: "John Doe",
    testName: "Node.js Basics",
    dueDate: "2025-05-20",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    testName: "TypeScript Intro",
    dueDate: "2025-05-21",
  },
  {
    id: 3,
    studentName: "Mike Johnson",
    testName: "Python Fundamentals",
    dueDate: "2025-05-22",
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      id: 1,
      name: "Total Users",
      value: "1,234",
      icon: UserGroupIcon,
      trend: "+12%",
    },
    {
      id: 2,
      name: "Tests Completed",
      value: "5,678",
      icon: ClipboardDocumentCheckIcon,
      trend: "+8%",
    },
    {
      id: 3,
      name: "Pending Tests",
      value: "89",
      icon: ClockIcon,
      trend: "-5%",
    },
    {
      id: 4,
      name: "Avg. Score",
      value: "87%",
      icon: ChartBarIcon,
      trend: "+3%",
    },
  ];

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          {" "}
          <button
            className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <ChartBarIcon className="nav-icon" />
            Overview
          </button>
          <button
            className={`nav-item ${activeTab === "users" ? "active" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            <UserGroupIcon className="nav-icon" />
            Users
          </button>
          <button
            className={`nav-item ${activeTab === "results" ? "active" : ""}`}
            onClick={() => setActiveTab("results")}
          >
            <ClipboardDocumentCheckIcon className="nav-icon" />
            Test Results
          </button>
          <button
            className={`nav-item ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            <ClockIcon className="nav-icon" />
            Pending Tests
          </button>
          <button
            className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            <Cog6ToothIcon className="nav-icon" />
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-search">
            <input type="text" placeholder="Search..." />
          </div>{" "}
          <div className="header-actions">
            <button
              className="logout-btn"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="dashboard-content">
          {activeTab === "overview" && (
            <div className="overview-section">
              <h2>Dashboard Overview</h2>
              <div className="stats-grid">
                {stats.map((stat) => (
                  <div key={stat.id} className="stat-card">
                    <div className="stat-icon">
                      <stat.icon className="icon" />
                    </div>
                    <div className="stat-info">
                      <h3>{stat.name}</h3>
                      <p className="stat-value">{stat.value}</p>{" "}
                      <span
                        className={`stat-trend ${
                          stat.trend.startsWith("+") ? "positive" : "negative"
                        }`}
                      >
                        <ArrowTrendingUpIcon className="trend-icon" />
                        {stat.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="recent-activity">
                <h3>Recent Activity</h3>
                <div className="activity-chart">
                  {/* Placeholder for activity chart */}
                  <div className="chart-placeholder">
                    <div className="chart-bar" style={{ height: "60%" }}></div>
                    <div className="chart-bar" style={{ height: "80%" }}></div>
                    <div className="chart-bar" style={{ height: "40%" }}></div>
                    <div className="chart-bar" style={{ height: "90%" }}></div>
                    <div className="chart-bar" style={{ height: "70%" }}></div>
                    <div className="chart-bar" style={{ height: "50%" }}></div>
                    <div className="chart-bar" style={{ height: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="users-section">
              <h2>Registered Users</h2>
              <div className="users-table">
                <table>
                  {" "}
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>Full Name</th>
                      <th>Email Address</th>
                      <th>Gender Identity</th>
                      <th>Academic Background</th>
                      <th>Enrollment Date</th>
                      <th>Assessments Done</th>
                      <th>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placeholderUsers.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <img
                            src={user.picture}
                            alt={user.name}
                            className="user-avatar"
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                          />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.qualifications}</td>
                        <td>{user.joinDate}</td>
                        <td>{user.testsCompleted}</td>
                        <td>
                          <button className="action-btn">View</button>
                          <button className="action-btn">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "results" && (
            <div className="results-section">
              <h2>Test Results</h2>{" "}
              <div className="results-grid">
                {placeholderTestResults.map((result) => (
                  <div key={result.id} className="result-card">
                    <div className="result-header">
                      <h3>{result.testName}</h3>
                      <span
                        className={`score ${
                          result.score >= 90
                            ? "excellent"
                            : result.score >= 75
                            ? "good"
                            : "average"
                        }`}
                      >
                        {result.score}%
                      </span>
                    </div>
                    <div className="result-details">
                      <p>Student: {result.studentName}</p>
                      <p>Date: {result.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "pending" && (
            <div className="pending-section">
              <h2>Pending Tests</h2>
              <div className="pending-table">
                <table>
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>Test</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placeholderPendingTests.map((test) => (
                      <tr key={test.id}>
                        <td>{test.studentName}</td>
                        <td>{test.testName}</td>
                        <td>{test.dueDate}</td>
                        <td>
                          <span className="status pending">Pending</span>
                        </td>
                        <td>
                          <button className="action-btn">Remind</button>
                          <button className="action-btn">Cancel</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="settings-section">
              <h2>Dashboard Settings</h2>
              <div className="settings-form">
                <div className="form-group">
                  <label>Email Notifications</label>
                  <div className="toggle-switch">
                    <input type="checkbox" id="email-notifications" />
                    <label htmlFor="email-notifications"></label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Dark Mode</label>
                  <div className="toggle-switch">
                    <input type="checkbox" id="dark-mode" />
                    <label htmlFor="dark-mode"></label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Language</label>
                  <select>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
