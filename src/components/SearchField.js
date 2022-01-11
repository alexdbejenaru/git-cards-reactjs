const SearchField = () => {
    return ( 
        <>
            <section className="search-container">
                <form className="form">
                    <div className="form_icon">Icon</div>
                    <input type="text" required className="form_input" placeholder="Search GitHub username..."/>
                    <button className="form_button">Search</button>
                </form>
            </section>
        </>
     );
}
 
export default SearchField;