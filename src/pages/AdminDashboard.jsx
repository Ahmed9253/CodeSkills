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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button 
            className="sidebar-toggle" 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {sidebarCollapsed ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="toggle-icon">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="toggle-icon">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            )}
          </button>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <ChartBarIcon className="nav-icon" />
            <span>Overview</span>
          </button>
          <button
            className={`nav-item ${activeTab === "users" ? "active" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            <UserGroupIcon className="nav-icon" />
            <span>Users</span>
          </button>
          <button
            className={`nav-item ${activeTab === "results" ? "active" : ""}`}
            onClick={() => setActiveTab("results")}
          >
            <ClipboardDocumentCheckIcon className="nav-icon" />
            <span>Test Results</span>
          </button>
          <button
            className={`nav-item ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            <ClockIcon className="nav-icon" />
            <span>Pending Tests</span>
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

              {/* Recent Users Section */}
              <div className="overview-users-section">
                <div className="section-header-with-action">
                  <h3><UserGroupIcon className="section-icon" /> Recent Users</h3>
                  <button className="view-all-btn" onClick={() => setActiveTab("users")}>View All Users</button>
                </div>
                <div className="users-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Profile</th>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Academic Background</th>
                        <th>Assessments Done</th>
                        <th>Manage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {placeholderUsers.slice(0, 3).map((user) => (
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
                          <td>{user.qualifications}</td>
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

              {/* Recent Test Results Section */}
              <div className="overview-results-section">
                <div className="section-header-with-action">
                  <h3><ClipboardDocumentCheckIcon className="section-icon" /> Recent Test Results</h3>
                  <button className="view-all-btn" onClick={() => setActiveTab("results")}>View All Results</button>
                </div>
                <div className="results-grid overview-grid">
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

              {/* Pending Tests Section */}
              <div className="overview-pending-section">
                <div className="section-header-with-action">
                  <h3><ClockIcon className="section-icon" /> Pending Tests</h3>
                  <button className="view-all-btn" onClick={() => setActiveTab("pending")}>View All Pending</button>
                </div>
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
                      {placeholderPendingTests.slice(0, 3).map((test) => (
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


        </div>
      </main>
    </div>
  );
}
