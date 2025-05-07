import "./FoodArticles.css"

function FoodArticles() {
return (
<article className="food-article">
    <div className="article-image">
    <img
        src="https://www.shape.com/thmb/Nti_HBKTZCavOIQkCKRJS2sx9W8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_1069332170-2000-364c5bccbb1e4e2a83a0e4cfdc15723a.jpg"
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