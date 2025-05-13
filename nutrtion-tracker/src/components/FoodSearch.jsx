import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./FoodSearch.css"
import SearchBar from "./SearchBar"
import EmptyState from "./EmptyState"

function FoodSearch({ onLogout }) {
const [searchQuery, setSearchQuery] = useState("")
const [searchResults, setSearchResults] = useState([])
const navigate = useNavigate()

const handleSearch = (query) => {
setSearchQuery(query)
// In a real app, you would fetch results from an API here
// For now, we'll just keep the empty state
setSearchResults([])
}

const handleLogout = () => {
onLogout()
navigate("/Login")
}

return (
<div className="food-search-container">
    <div className="header">
    <h1 className="logo">Nutrify</h1>
    <button onClick={handleLogout} className="logout-btn">
        Logout
    </button>
    </div>
    <SearchBar onSearch={handleSearch} />
    {searchResults.length === 0 && <EmptyState />}
</div>
)
}

export default FoodSearch

