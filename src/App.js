import Header from "./components/Header";
import SearchField from "./components/SearchField";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <main className="app">
      <section className="app_container">
        <Header />
        <SearchField />
        <UserInfo />
      </section>
    </main>
  );
}

export default App;
