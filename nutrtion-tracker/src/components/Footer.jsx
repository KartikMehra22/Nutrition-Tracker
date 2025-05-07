import "./Footer.css"

function Footer() {
return (
<footer className="footer">
    <div className="footer-container">
    <div className="footer-section">
        <div className="footer-logo">Nutrify</div>

        <div className="contact-info">
        <h3>Contact</h3>
        <p>
            <strong>Address:</strong> B2/238 Cyber Police Station Road, Rohini Sector 17, New Delhi
        </p>
        <p>
            <strong>Phone:</strong> +01 3333 3665 / (+91) 01 4234 6763
        </p>
        <p>
            <strong>Hours:</strong> 09:00 - 20:00, Mon - Sat
        </p>
        </div>

        <div className="social-links">
        <h3>Follow us</h3>
        <div className="social-icons">
            <a href="#" className="social-icon facebook">
            f
            </a>
            <a href="#" className="social-icon instagram">
            i
            </a>
            <a href="#" className="social-icon linkedin">
            in
            </a>
            <a href="#" className="social-icon twitter">
            t
            </a>
        </div>
        </div>
    </div>

    <div className="footer-section">
        <h3>About</h3>
        <ul className="footer-links">
        <li>
            <a href="#">About Us</a>
        </li>
        <li>
            <a href="#">Delivery Information</a>
        </li>
        <li>
            <a href="#">Privacy Policy</a>
        </li>
        <li>
            <a href="#">Terms & Condition</a>
        </li>
        <li>
            <a href="#">Contact Us</a>
        </li>
        </ul>
    </div>

    <div className="footer-section">
        <h3>Install App</h3>
        <p>From App Store or Google Play</p>
        <div className="app-buttons">
        <a href="#" className="app-button app-store">
            <span className="app-icon">A</span>
            <span className="app-text">
            Download on the
            <br />
            <strong>App Store</strong>
            </span>
        </a>
        <a href="#" className="app-button google-play">
            <span className="app-icon">G</span>
            <span className="app-text">
            GET IT ON
            <br />
            <strong>Google Play</strong>
            </span>
        </a>
        </div>

        <p>Secured Payment Gateways</p>
        <div className="payment-methods">
        <span className="payment-icon visa">Visa</span>
        <span className="payment-icon mastercard">MC</span>
        <span className="payment-icon maestro">Mae</span>
        <span className="payment-icon amex">Amex</span>
        </div>
    </div>
    </div>

    <div className="copyright">
    <p>©2025 Kartik Mehra. All Rights Reserved.</p>
    </div>
</footer>
)
}

export default Footer