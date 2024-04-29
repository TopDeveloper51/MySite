import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://www.googletagmanager.com/gtag/js?id=G-H8FWQLBDRK";

    // script.src = "https://cdn.useproof.com/proof.js?acc=YbCfTMzo7USBGABtrBveOq9hevv2";
    script.async = true;

    const script1 = document.createElement('script');

    script1.innerText = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-H8FWQLBDRK');`

    document.head.appendChild(script);
    document.head.appendChild(script1);
  }, []);

  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/BlueSea321/React_Portfolio", `color:${theme.tertiary}; font-size:20px`);

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
