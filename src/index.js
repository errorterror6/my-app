//use VITE in the future for faster renders!

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.js';
import Body from './components/MainContent.js'
import Footer from './components/Footer.js';





function Page() {
    return (
        <div className="page">
            <Header />
            <Body/>
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Page />);
