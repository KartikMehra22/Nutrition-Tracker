"use client"

import { useState } from "react"
import "./SearchBar.css"

function SearchBar({ onSearch }) {
const [query, setQuery] = useState("")

const handleSubmit = (e) => {
e.preventDefault()
onSearch(query)
}

const handleChange = (e) => {
setQuery(e.target.value)
}

return (
<div className="search-bar-container">
    <form onSubmit={handleSubmit} className="search-form">
    <div className="search-input-wrapper">
        <span className="search-icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4caf50"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        </span>
        <input
        type="text"
        className="search-input"
        placeholder="Search for food..."
        value={query}
        onChange={handleChange}
        />
    </div>
    </form>
</div>
)
}

export default SearchBar
