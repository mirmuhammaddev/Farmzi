import React from "react";
import {BrowserRouter, Route , Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage />} />
                    <Route path="About" element={<AboutPage/>}/>
                    <Route path="Blog" element={<BlogPage/>}/>
                    <Route path="Contact" element={<ContactPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
