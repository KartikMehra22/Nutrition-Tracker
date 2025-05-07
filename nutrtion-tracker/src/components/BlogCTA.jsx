import "./BlogCTA.css"
import AvocadoIcon from "./AvocadoIcon"

function BlogCTA() {
return (
<div className="blog-cta">
    <div className="cta-content">
    <h2 className="cta-title">Want to Write?</h2>
    <h3 className="cta-subtitle">
        Share Your Nutrition Story on <span className="highlight">BlogSpot!</span>
    </h3>
    <button className="cta-button">Write now ▶</button>
    </div>
    <div className="cta-image">
    <AvocadoIcon />
    </div>
</div>
)
}

export default BlogCTA