import Header from "./components/Header";
import SearchField from "./components/SearchField";
import UserInfo from "./components/UserInfo";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";

function App() {
  const [ user, setUser ] = useState('');
  const url = 'https://api.github.com/users';
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
      fetch(`${url}/${user}`)
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
      {error && <div>{ error }</div>}
    {loading && <Loading />}
    <main className="app">
      <section className="app_container">
        <Header />
        <SearchField setUser={ setUser } />
        <UserInfo data={ data } />
      </section>
    </main>
      </>
  );
}

export default App;