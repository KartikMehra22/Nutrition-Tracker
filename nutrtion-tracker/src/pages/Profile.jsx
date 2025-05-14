import { useState } from "react"
import { Link } from "react-router-dom"
import "./Profile.css"

function Profile({ user, onLogout }) {
const [activeTab, setActiveTab] = useState("overview")

return (
<div className="profile-container">
    <header className="profile-header">
    <div className="header-content">
        <div className="greeting-section">
        <h1 className="greeting">Hey kartikk!</h1>
        <p className="subgreeting">Good going today!</p>

        <div className="nutrition-stats">
            <div className="stat">
            <span className="stat-value">0</span>
            <span className="stat-label">Calories</span>
            </div>
            <div className="stat">
            <span className="stat-value">0</span>
            <span className="stat-label">Protein</span>
            </div>
        </div>
        </div>

        <div className="profile-avatar-container">
        <div className="profile-avatar">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
            </svg>
        </div>
        <div className="profile-dropdown">
            <div className="dropdown-menu">
            <Link to="/profile" className="dropdown-item">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>My Profile</span>
            </Link>
            <Link to="/settings" className="dropdown-item">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <span>Settings</span>
            </Link>
            <button onClick={onLogout} className="dropdown-item">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span>Logout</span>
            </button>
            </div>
        </div>
        </div>
    </div>
    </header>

    <main className="profile-content">
    <div className="profile-tabs">
        <button
        className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
        onClick={() => setActiveTab("overview")}
        >
        Overview
        </button>
        <button
        className={`tab-button ${activeTab === "nutrition" ? "active" : ""}`}
        onClick={() => setActiveTab("nutrition")}
        >
        Nutrition
        </button>
        <button
        className={`tab-button ${activeTab === "goals" ? "active" : ""}`}
        onClick={() => setActiveTab("goals")}
        >
        Goals
        </button>
        <button
        className={`tab-button ${activeTab === "history" ? "active" : ""}`}
        onClick={() => setActiveTab("history")}
        >
        History
        </button>
    </div>

    <div className="profile-details">
        {activeTab === "overview" && (
        <div className="overview-section">
            <div className="profile-card">
            <h2 className="card-title">Personal Information</h2>
            <div className="profile-info">
                <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Kartikk Singh</span>
                </div>
                <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">kartikk@example.com</span>
                </div>
                <div className="info-item">
                <span className="info-label">Age:</span>
                <span className="info-value">28</span>
                </div>
                <div className="info-item">
                <span className="info-label">Height:</span>
                <span className="info-value">175 cm</span>
                </div>
                <div className="info-item">
                <span className="info-label">Weight:</span>
                <span className="info-value">70 kg</span>
                </div>
                <div className="info-item">
                <span className="info-label">Goal:</span>
                <span className="info-value">Maintain weight</span>
                </div>
            </div>
            <button className="edit-profile-btn">Edit Profile</button>
            </div>

            <div className="profile-card">
            <h2 className="card-title">Today's Summary</h2>
            <div className="summary-stats">
                <div className="summary-item">
                <div className="summary-icon calories">🔥</div>
                <div className="summary-details">
                    <span className="summary-label">Calories</span>
                    <span className="summary-value">0 / 2,200</span>
                    <div className="progress-bar">
                    <div className="progress" style={{ width: "0%" }}></div>
                    </div>
                </div>
                </div>
                <div className="summary-item">
                <div className="summary-icon protein">🥩</div>
                <div className="summary-details">
                    <span className="summary-label">Protein</span>
                    <span className="summary-value">0g / 120g</span>
                    <div className="progress-bar">
                    <div className="progress" style={{ width: "0%" }}></div>
                    </div>
                </div>
                </div>
                <div className="summary-item">
                <div className="summary-icon carbs">🍚</div>
                <div className="summary-details">
                    <span className="summary-label">Carbs</span>
                    <span className="summary-value">0g / 250g</span>
                    <div className="progress-bar">
                    <div className="progress" style={{ width: "0%" }}></div>
                    </div>
                </div>
                </div>
                <div className="summary-item">
                <div className="summary-icon fat">🧈</div>
                <div className="summary-details">
                    <span className="summary-label">Fat</span>
                    <span className="summary-value">0g / 70g</span>
                    <div className="progress-bar">
                    <div className="progress" style={{ width: "0%" }}></div>
                    </div>
                </div>
                </div>
            </div>
            <button className="add-food-btn">Add Food</button>
            </div>
        </div>
        )}

        {activeTab === "nutrition" && (
        <div className="nutrition-section">
            <h2>Nutrition content will go here</h2>
        </div>
        )}

        {activeTab === "goals" && (
        <div className="goals-section">
            <h2>Goals content will go here</h2>
        </div>
        )}

        {activeTab === "history" && (
        <div className="history-section">
            <h2>History content will go here</h2>
        </div>
        )}
    </div>
    </main>
</div>
)
}

export default Profile

