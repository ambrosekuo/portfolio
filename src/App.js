import React, { useState, useEffect } from "react";
import "./App.css";
import ProjectPanel from "./ProjectPanel.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { allProjects, currentIdeas } from "./ProjectsInformation.js";
import ProjectDescription from "./ProjectDescription.js";
import AboutMe from "./AboutMe.js";
import posed from "react-pose";
import { Animated } from "react-animated-css";

// import {useRoutes} from 'hookrouter';

/*
const routes = {
  '/': () => <HomePage />,
}
*/

function App() {
  //const Hamburger = posed.div({left: {x:-100}, right: {x:100}});
  const Hamburger = posed.div({
    visible: { x: 50 },
    hidden: { x: -50 }
  });
  //const HamburgerComponent = ({position}) => <Hamburger pose={position} />

  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="App-header-title">
            <div
              className="Button-Container-Mobile"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <AnimatedHamburgerAnimation
                visible={visible}
                animationIn="zoomIn"
                animationOut="zoomOut"
              >
                <div className="Hamburger" />
                <div className="Hamburger" />
                <div className="Hamburger" />
              </AnimatedHamburgerAnimation>
              <div
                style={{ visibility: visible ? "visible" : "hidden" }}
                className="Mobile-Dropdown"
              >
                <ul>
                  <li>
                    <Link className="link" to="/">
                      H O M E
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/projects">
                      {" "}
                      P R O J E C T S{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/resume">
                      {" "}
                      R E S U M E{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/todo">
                      {" "}
                      T O D O{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h1> Ambrose's Projects </h1>
            <div className="Button-Container">
              <ul>
                <li>
                  <Link className="link" to="/">
                    H O M E
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/projects">
                    {" "}
                    P R O J E C T S{" "}
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/resume">
                    {" "}
                    R E S U M E{" "}
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/todo">
                    {" "}
                    T O D O{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <ExternalLinks />
          </div>
          <div className="Content-Panel">
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/todo" component={todo} />
          </div>
        </header>
      </Router>
    </div>
  );
}

const todo = () => {
  let descToggle = false;
  const toggleExpand = newBool => {
    descToggle = newBool;
  };
  return (
    <ProjectDescription currentIdeas={currentIdeas} toggleExpand={toggleExpand}>
      {" "}
    </ProjectDescription>
  );
};

function AnimatedHamburgerAnimation({ visible, children }) {
  const [isVisible, setVisiblity] = useState(!visible);
  useEffect(() => {
    if (!visible) {
      setTimeout(() => setVisiblity(true), 1000);
    } else setVisiblity(false);
  }, [visible]);

  const style = isVisible ? { display: "none" } : null;
  return (
    <Animated
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={visible}
      style={style}
    >
      {children}
    </Animated>
  );
}

const ExternalLinks = () => {
  return (
    <div className="External-Links">
      <a href="https://github.com/ambrosekuo"> Github</a>
      <a href="https://github.com/ambrosekuo"> Linkedln</a>
    </div>
  );
};

const Home = () => {
  return <AboutMe />;
};

const Resume = () => {
  //return <Resume />;
  return (
    <div className="Resume">
      <img src="/assets/resume.png" alt="resume" />
    </div>
  ); //
};

const Projects = () => {
  const [pageCount, setCount] = useState(0);
  

  let ProjectPanels = allProjects.map((project, i, projects) => {
    return (
      <ProjectPanel projectInformation={project} key={i}>
        {" "}
      </ProjectPanel>
    );
  });

  return (
    <div className="Favourite-Projects">
      <h1> Current Projects </h1>
      {ProjectPanels[pageCount]}
      <div className="Page-Buttons">
        <span> Project: {pageCount+1} of {allProjects.length}</span>
        <button
          onClick={() => {
            if (pageCount > 0) {
              setCount(pageCount - 1);
            }
          }}
        >
          {" "}
          &lt;={" "}
        </button>
        <button
          onClick={() => {
            if (pageCount < allProjects.length - 1) {
              setCount(pageCount + 1);
            }
          }}
        >
          {" "}
          =>{" "}
        </button>
      </div>
    </div>
  );
};

/* TO ADD LATER PROJECT NOTEPAD

        

        */

export default App;
