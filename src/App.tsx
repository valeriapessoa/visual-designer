import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/header/navbar/Navigation';
import logoImg from "./assets/images/logo.png";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Article from './components/section/blog/article/Article';
import NotFound from './components/section/404/NotFound';

function App() {
  return (
    <>
    <Navigation posterImg={logoImg} text1="Sobre" text2="Projetos" text3="Serviços" text4="Blog" text5="Contato" />

    <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="blog-posts" element={<Article />} />
          <Route path="blog-posts/:id" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App




