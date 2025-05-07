import "./MainContent.css"
import AvocadoImage from "./AvocadoImage"
import FoodArticle from "./FoodArticle"

function MainContent() {
return (
<main className="main-content">
    <section className="hero-section">
    <div className="hero-content">
        <h2 className="hero-title">Find, track and eat healthy food.</h2>
        <p className="hero-subtitle">Discover, Monitor, and Savor Nutrient-Rich Choices</p>
        <p className="hero-description">Explore, Monitor, and Indulge in Healthful Eating Habits</p>
    </div>
    <div className="hero-image">
        <AvocadoImage />
    </div>
    </section>

    <section className="progress-section">
    <div className="progress-content">
        <h2 className="progress-title">Track Your Progress!</h2>
        <p className="progress-subtitle">Monitor Your Journey to Success</p>
        <p className="progress-description">Watch Your Progress Unfold</p>
    </div>
    <div className="progress-action">
        <button className="view-button">View now ▶</button>
    </div>
    </section>

    <section className="articles-section">
    <FoodArticle />
    </section>
</main>
)
}

export default MainContent