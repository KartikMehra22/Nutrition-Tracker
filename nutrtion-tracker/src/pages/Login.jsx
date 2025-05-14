import { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.css"

function Login({ onLogin }) {
const [formData, setFormData] = useState({
email: "",
password: "",
})

const [errors, setErrors] = useState({})
const [isSubmitting, setIsSubmitting] = useState(false)

const handleChange = (e) => {
const { name, value } = e.target
setFormData({
    ...formData,
    [name]: value,
})
// Clear error when user starts typing
if (errors[name]) {
    setErrors({
    ...errors,
    [name]: "",
    })
}
}

const validateForm = () => {
const newErrors = {}

if (!formData.email) {
    newErrors.email = "Email is required"
} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Email is invalid"
}

if (!formData.password) {
    newErrors.password = "Password is required"
} else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters"
}

return newErrors
}

const handleSubmit = (e) => {
e.preventDefault()
const newErrors = validateForm()

if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors)
    return
}

setIsSubmitting(true)

// Simulate API call
setTimeout(() => {
    onLogin(formData)
    setIsSubmitting(false)
}, 1000)
}

return (
<div className="login-container">
    <div className="login-card">
    <div className="login-header">
        <div className="logo-container">
        <h1 className="logo">Nutrify</h1>
        <div className="logo-icon">🥗</div>
        </div>
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue your nutrition journey</p>
    </div>

    <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="email" className="form-label">
            Email
        </label>
        <div className="input-container">
            <span className="input-icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            </span>
            <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-group">
        <label htmlFor="password" className="form-label">
            Password
        </label>
        <div className="input-container">
            <span className="input-icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            </span>
            <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            />
        </div>
        {errors.password && <div className="error-message">{errors.password}</div>}
        </div>

        <div className="form-options">
        <div className="remember-me">
            <input type="checkbox" id="remember" className="remember-checkbox" />
            <label htmlFor="remember" className="remember-label">
            Remember me
            </label>
        </div>
        <a href="#" className="forgot-password">
            Forgot Password?
        </a>
        </div>

        <div className="form-actions">
        <button type="submit" className="btn login-btn" disabled={isSubmitting}>
            {isSubmitting ? (
            <span className="loading-spinner">
                <span className="spinner"></span>
                Signing in...
            </span>
            ) : (
            "Sign In"
            )}
        </button>
        </div>
    </form>

    <div className="login-divider">
        <span className="divider-text">OR</span>
    </div>

    <div className="social-login">
        <button className="social-btn google-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#DB4437">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
        </svg>
        <span>Continue with Google</span>
        </button>
    </div>

    <div className="login-footer">
        <p>
        Don't have an account?{" "}
        <Link to="/register" className="login-link">
            Sign up
        </Link>
        </p>
    </div>
    </div>
</div>
)
}

export default Login
