

import { useState } from "react"
import "./UserDashboard.css"
import DateSelector from "./DateSelector"
import NutritionSummary from "./NutritionSummary"
import FoodItems from "./FoodItems"

function UserDashboard() {
const [date, setDate] = useState("08/05/2025")

const nutritionData = {
calories: 0,
protein: 0,
carbs: 0,
fat: 0,
fiber: 0,
}

return (
<div className="dashboard-container">
    <DateSelector date={date} setDate={setDate} />
    <NutritionSummary data={nutritionData} />
    <FoodItems />
</div>
)
}

export default UserDashboard
