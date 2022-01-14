import Header from "./components/Header";
import SearchField from "./components/SearchField";
import UserInfo from "./components/UserInfo";
import { useState, useEffect } from "react";

function App() {
  const [ user, setUser ] = useState('');
  // const url = `https://api.github.com/users/${user}`;
  const [ url, setUrl ] = useState('');
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setUrl('https://api.github.com/users/');
      fetch(url + user)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then(response => {
          setData(response);
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        })
    }, [user, url])

    return (
      <>
        <main className="app">
          <section className="app_container">
            <Header />
            <SearchField setUser={ setUser } />
            <UserInfo loading={ loading } error={ error } data={ data } />
          </section>
        </main>
      </>
  );
}

export default App;