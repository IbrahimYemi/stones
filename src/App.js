import React from 'react';
import Home from './Pages/Home'
import "./Assets/styles/tailwind.css";
import Contact from './Pages/Contact';
import About from './Pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './Pages/Blog';
import ShowBlog from './Components/ShowBlog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" caseSensitive={false} element={<Home />} />
          <Route path="/about" caseSensitive={false} element={<About />} />
          <Route path="/blog/posts" caseSensitive={false} element={<Blog />} />
          <Route path="/blog/posts/show" caseSensitive={false} element={<ShowBlog />} />
          <Route path="/contact" caseSensitive={false} element={<Contact />} />
          <Route path="*" caseSensitive={false} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
