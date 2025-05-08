import "./DateSelector.css"

function DateSelector({ date, setDate }) {
return (
<div className="date-selector">
    <div className="date-display">
    <span className="date-text">{date}</span>
    <span className="calendar-icon">📅</span>
    </div>
</div>
)
}

export default DateSelector
