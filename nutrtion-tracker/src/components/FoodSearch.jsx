"use client"

import { useState } from "react"
import "./FoodSearch.css"
import SearchBar from "./SearchBar"
import EmptyState from "./EmptyState"

function FoodSearch() {
const [searchQuery, setSearchQuery] = useState("")
const [searchResults, setSearchResults] = useState([])

const handleSearch = (query) => {
setSearchQuery(query)
setSearchResults([])
}

return (
<div className="food-search-container">
    <SearchBar onSearch={handleSearch} />
    {searchResults.length === 0 && <EmptyState />}
</div>
)
}

export default FoodSearch
