import "./NutritionSummary.css"

function NutritionSummary({ data }) {
return (
<div className="nutrition-summary">
    <div className="summary-header">
    <h2 className="summary-title">Total</h2>
    </div>

    <div className="nutrition-metrics">
    <div className="metric">
        <div className="metric-icon calories">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#4caf50" strokeWidth="2">
            <path d="M12,22c-4.97,0-9-4.03-9-9c0-4.63,5.29-10.28,7.91-12.68c0.92-0.84,2.34-0.84,3.27,0 C16.71,2.72,21,8.37,21,13C21,17.97,16.97,22,12,22z" />
            <path d="M15.83,15.91c-0.2,0.2-0.51,0.2-0.71,0l-3.12-3.12l-3.12,3.12c-0.2,0.2-0.51,0.2-0.71,0 c-0.2-0.2-0.2-0.51,0-0.71l3.47-3.47c0.2-0.2,0.51-0.2,0.71,0l3.47,3.47C16.02,15.4,16.02,15.72,15.83,15.91z" />
        </svg>
        </div>
        <div className="metric-value">{data.calories} Kcal</div>
    </div>

    <div className="metric">
        <div className="metric-icon protein">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#36454f" strokeWidth="2">
            <path d="M12,2L4,5v6c0,5.55,3.84,10.74,8,12c4.16-1.26,8-6.45,8-12V5L12,2z" />
        </svg>
        </div>
        <div className="metric-label">Protein</div>
        <div className="metric-value">{data.protein}g</div>
    </div>

    <div className="metric">
        <div className="metric-icon carbs">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#36454f" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
            <path d="M12,6v6l4,4" />
        </svg>
        </div>
        <div className="metric-label">Carbs</div>
        <div className="metric-value">{data.carbs}g</div>
    </div>

    <div className="metric">
        <div className="metric-icon fat">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#36454f" strokeWidth="2">
            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 s8,3.59,8,8S16.41,20,12,20z" />
            <path d="M12,6v12" />
            <path d="M6,12h12" />
        </svg>
        </div>
        <div className="metric-label">Fat</div>
        <div className="metric-value">{data.fat}g</div>
    </div>

    <div className="metric">
        <div className="metric-icon fiber">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#36454f" strokeWidth="2">
            <path d="M12,3c0,0-6.186,5.34-6.186,9.314C5.814,16.36,8.87,19,12,19s6.186-2.64,6.186-6.686C18.186,8.34,12,3,12,3z" />
            <path d="M12,3c0,0,6.186,5.34,6.186,9.314" />
            <path d="M12,3c0,0-6.186,5.34-6.186,9.314" />
        </svg>
        </div>
        <div className="metric-label">Fiber</div>
        <div className="metric-value">{data.fiber}g</div>
    </div>
    </div>
</div>
)
}

export default NutritionSummary
