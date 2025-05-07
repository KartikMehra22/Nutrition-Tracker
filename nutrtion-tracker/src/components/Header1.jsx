import "./Header1.css"

function Header1() {
return (
<header className="header">
    <div className="header-container">
    <div className="header-content">
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
    <div className="avatar-container">
        <div className="avatar"></div>
    </div>
    </div>
</header>
)
}

export default Header1