import { Link } from "react-router-dom"
import "./ErrorPage.css"

function ErrorPage() {
return (
<div className="error-container">
    <div className="error-content">
    <div className="error-icon">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e53935"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
    </div>
    <h1 className="error-title">Oops! Something went wrong</h1>
    <p className="error-message">We can't seem to find the page you're looking for or an error has occurred.</p>
    <div className="error-actions">
        <Link to="/" className="btn error-btn primary">
        Go to Home
        </Link>
        <Link to="/login" className="btn error-btn secondary">
        Back to Login
        </Link>
    </div>
    </div>
</div>
)
}

export default ErrorPage