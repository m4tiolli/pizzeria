const SearchResults = ({pizza}) => {
    
    if(!pizza || pizza.length) return null;

    const resultList = pizza.map(({pizza})=>{
        return (
            <div>
                <h1>{pizza.nome}</h1>
            </div>
        )
    });

    return (
        <div className="searchResults">
            <ul>{resultList}</ul>
        </div>
    );
};


export default SearchResults;