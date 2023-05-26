import "./App.scss";
import { Banner } from "./components/Banner/Banner";
import { Blog } from "./components/Blog/Blog";
import { Header } from "./components/Header/Header";
import { News } from "./components/News/News";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Blog></Blog>
      <News></News>
    </>
  );
}

export default App;
