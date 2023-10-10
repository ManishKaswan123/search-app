import React from "react";

const SearchBox = ({searchChange , latestTrand}) => {
    return(
        <div>
            <div>
                <input
                placeholder="search box..."
                type="search"
                onFocus={latestTrand}
                onChange={searchChange}
                />
                <button
                type="submit"
                placeholder="search"
                />
            </div>
        </div>
    )
}

export default SearchBox;