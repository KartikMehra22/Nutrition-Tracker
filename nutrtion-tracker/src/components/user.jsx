import { useState } from "react"
import "./user.css"

export default function UserDashboard() {
const [date, setDate] = useState("06/05/2025")

return (
<div className="dashboard-container">
    {/* Header */}
    <header className="header">
    <div className="logo">Nutrify</div>
    <nav className="nav">
        <ul className="nav-list">
        <li>
            <a href="/" className="nav-link">
            Home
            </a>
        </li>
        <li>
            <a href="/add" className="nav-link">
            Add
            </a>
        </li>
        <li>
            <a href="/blogs" className="nav-link">
            Blogs
            </a>
        </li>
        <li>
            <a href="/user" className="nav-link active">
            User
            </a>
        </li>
        </ul>
    </nav>
    </header>

    {/* Main Content */}
    <main className="main-content">
    {/* Date Selector */}
    <div className="date-selector">
        <span className="date">{date}</span>
        <span className="calendar-icon">📅</span>
    </div>

    {/* Nutrition Summary */}
    <div className="nutrition-summary">
        <div className="total-section">
        <h2 className="total-heading">Total</h2>
        <div className="nutrition-metrics">
            <div className="metric">
            <div className="metric-icon calories">🔥</div>
            <div className="metric-value">0 Kcal</div>
            </div>
            <div className="metric">
            <div className="metric-icon protein">🥩</div>
            <div className="metric-label">Protein</div>
            <div className="metric-value">0g</div>
            </div>
            <div className="metric">
            <div className="metric-icon carbs">🍚</div>
            <div className="metric-label">Carbs</div>
            <div className="metric-value">0g</div>
            </div>
            <div className="metric">
            <div className="metric-icon fat">💧</div>
            <div className="metric-label">Fat</div>
            <div className="metric-value">0g</div>
            </div>
            <div className="metric">
            <div className="metric-icon fiber">🌱</div>
            <div className="metric-label">Fiber</div>
            <div className="metric-value">0g</div>
            </div>
        </div>
        </div>
    </div>

    {/* Food Items */}
    <div className="food-items-section">
        <h2 className="section-heading">Food Items</h2>
        <div className="empty-state">
        <img
            src="/placeholder.svg?height=250&width=250"
            alt="Add food illustration"
            className="empty-state-image"
        />
        <p className="empty-state-text">Add food items...</p>
        </div>
    </div>
    </main>
</div>
)
}