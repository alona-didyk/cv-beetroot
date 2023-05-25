import "./App.scss";
import "./components/Header/Header.scss";
import { Banner } from "./components/Banner/Banner";
import { Blog } from "./components/Blog/Blog";
// import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__wrapper-logo"></div>
          <h1 className="header__wrapper-name">Blog name</h1>
          <div className="header__span">
            <span className="header__span-item"></span>
            <span className="header__span-item"></span>
            <span className="header__span-item"></span>
            <span className="header__span-item"></span>
            <span className="header__span-item"></span>
          </div>
        </div>
      </header>
      <Banner></Banner>
      <main className="main">
        <Blog></Blog>
      </main>
    </>
  );
}

export default App;
