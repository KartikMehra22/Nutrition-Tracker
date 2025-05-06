import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
return (
<header className="header">
    <div className="container">
    <div className="logo">
        <Link href="/">
        <span className="logoText">Nutrify</span>
        </Link>
    </div>
    <nav className="nav">
        <ul className="navList">
        <li className="navItem">
            <Link to="/" className={`$"navLink" $"active"`}>
            Home
            </Link>
        </li>
        <li className="navItem">
            <Link to="/add" className="navLink">
            Add
            </Link>
        </li>
        <li className="navItem">
            <Link to="/blogs" className="navLink">
            Blogs
            </Link>
        </li>
        <li className="navItem">
            <Link to="/user" className="navLink">
            User
            </Link>
        </li>
        </ul>
        <p><Link to="/header">Header</Link></p>
    </nav>
    </div>
</header>
)
}
