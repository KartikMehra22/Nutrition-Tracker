import "./EmptyState.css"

function EmptyState() {
return (
<div className="empty-state">
    <div className="illustration">
    <img
        src="https://previews.123rf.com/images/goodshotalan/goodshotalan1204/goodshotalan120400007/13216641-cartoon-of-lazy-overweight-man-with-junk-food.jpg"
        alt="Food search illustration"
        className="illustration-image"
    />
    </div>
    <p className="empty-state-message">Search for your favorite foods to track your nutrition</p>
</div>
)
}

export default EmptyState
