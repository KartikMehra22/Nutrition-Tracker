import "./FoodItems.css"

function FoodItems() {
return (
<div className="food-items-section">
    <h2 className="section-title">Food Items</h2>

    <div className="empty-state">
    <div className="illustration">
        <img
        src="https://static.vecteezy.com/system/resources/thumbnails/023/848/982/small_2x/health-care-food-thinking-concept-young-thoughtful-smiling-pensive-man-boy-character-making-toast-spreading-butter-on-bread-at-breakfast-lunch-dinner-at-home-kitchen-healthy-eating-lifestyle-vector.jpg"
        alt="Person with healthy food"
        className="illustration-image"
        />
    </div>
    <p className="empty-message">Add food items...</p>
    </div>
</div>
)
}

export default FoodItems
