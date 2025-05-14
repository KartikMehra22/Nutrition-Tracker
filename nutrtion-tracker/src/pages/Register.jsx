import { useState } from "react"
import { Link } from "react-router-dom"
import "./Register.css"

function Register({ onRegister }) {
const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
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

if (!formData.name) {
    newErrors.name = "Name is required"
}

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

if (!formData.confirmPassword) {
    newErrors.confirmPassword = "Please confirm your password"
} else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match"
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
    onRegister(formData)
    setIsSubmitting(false)
}, 1000)
}

return (
<div className="register-container">
    <div className="register-card">
    <div className="register-header">
        <div className="logo-container">
        <h1 className="logo">Nutrify</h1>
        <div className="logo-icon">🥗</div>
        </div>
        <h2 className="register-title">Create an Account</h2>
        <p className="register-subtitle">Join Nutrify to track your nutrition journey</p>
    </div>

    <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name" className="form-label">
            Full Name
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            </span>
            <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            />
        </div>
        {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

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
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            />
        </div>
        {errors.password && <div className="error-message">{errors.password}</div>}
        </div>

        <div className="form-group">
        <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
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
                <line x1="12" y1="16" x2="12" y2="16.01"></line>
            </svg>
            </span>
            <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-input"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            />
        </div>
        {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
        </div>

        <div className="terms-agreement">
        <input type="checkbox" id="terms" className="terms-checkbox" />
        <label htmlFor="terms" className="terms-label">
            I agree to the{" "}
            <a href="#" className="terms-link">
            Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="terms-link">
            Privacy Policy
            </a>
        </label>
        </div>

        <div className="form-actions">
        <button type="submit" className="btn register-btn" disabled={isSubmitting}>
            {isSubmitting ? (
            <span className="loading-spinner">
                <span className="spinner"></span>
                Creating Account...
            </span>
            ) : (
            "Create Account"
            )}
        </button>
        </div>
    </form>

    <div className="register-divider">
        <span className="divider-text">OR</span>
    </div>

    <div className="social-register">
        <button className="social-btn google-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#DB4437">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
        </svg>
        <span>Sign up with Google</span>
        </button>
    </div>

    <div className="register-footer">
        <p>
        Already have an account?{" "}
        <Link to="/login" className="register-link">
            Sign in
        </Link>
        </p>
    </div>
    </div>
</div>
)
}

export default Register


