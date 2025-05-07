import "./FoodArticles.css"

function FoodArticles() {
return (
<article className="food-article">
    <div className="article-image">
    <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%2011.29.09%E2%80%AFAM-SMNteCyIuTDPvpjHuACiRBERDnSfbD.png"
        alt="Healthy meal with shrimp and vegetables"
    />
    </div>
    <div className="article-content">
    <h2 className="article-title">5-Ingredient Meals for Weight Loss</h2>
    <p className="article-text">
        If weight loss is one of your goals, you may think egg whites and grilled chicken are the only things you can
        eat. Although these foods are great to include in any diet, including one focused on weight loss, you may be
        surprised at how many foods you can include in your weight loss{" "}
        <span className="continue-reading">Continue Reading...</span>
    </p>
    </div>
    <div className="article-footer">
    <button className="read-more-button">READ MORE ▶</button>
    </div>
</article>
)
}

export default FoodArticles