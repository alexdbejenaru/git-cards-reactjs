import { useState } from "react";

const SearchField = ({ user, setUser }) => {
    const [ newUser, setNewUser ] = useState('');

    const handleClick = () => {
        setUser(newUser);
    }

    return ( 
        <>
            <section className="search-container">
                <form className="form">
                    <div className="form_icon">Icon</div>
                    <input type="text" value={user} onChange={e => setNewUser(e.target.value)} required className="form_input" placeholder="Search GitHub username..."/>
                    <button onClick={handleClick} className="form_button">Search</button>
                </form>
            </section>
        </>
     );
}
 
export default SearchField;