import { useState } from "react";

const SearchField = ({ setUser }) => {
    const [ newUser, setNewUser ] = useState('');

    const handleChange = e => {
        setNewUser(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(newUser);
        setNewUser('');
    }

    return ( 
        <>
            <section className="search-container">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form_icon">Icon</div>
                    <input type="text" value={newUser} onChange={handleChange} required className="form_input" placeholder="Search GitHub username..."/>
                    <button className="form_button">Search</button>
                </form>
            </section>
        </>
     );
}
 
export default SearchField;