import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { EntryPage } from "./pages/EntryPage";
import { Chat } from "./pages/Chat";
import { Comic } from "./pages/Comic";
import { HomePage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Movie } from "./pages/Movie";
import { Regist } from "./pages/Regist";
import { User } from "./pages/User";

function App() {
  return (
    <div>
      <Router>
        {/* <Header hideEntryPage></Header> */}
        <Main>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">EntryPage</Link>
              </li>
              <li>
                <Link to="/homepage">HomePage</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/regist">Regist</Link>
              </li>
              <li>
                <Link to="/movie">Movie</Link>
              </li>
              <li>
                <Link to="/comic">Comic</Link>
              </li>
              <li>
                <Link to="/chat">Chat</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </ul>
          </nav> */}
        </Main>

        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/user" element={<User />} />
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
