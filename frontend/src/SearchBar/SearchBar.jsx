import "./SearchBar.css"

function SearchBar(prop) {

    function handleInputChange(event) {
        process_params.handleSearchChange(event.target.value)
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search boards..." onChange={handleInputChange} />
        </div>
    )
}

export default SearchBar;
