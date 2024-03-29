import React, { useState, useEffect } from "react";
import "./App.css";
import ProjectPanel from "./ProjectPanel.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { allProjects, projectsTodo } from "./ProjectsInformation.js";
import ProjectDescription from "./ProjectDescription.js";
import AboutMe from "./AboutMe.js";
import posed from "react-pose";
import { Animated } from "react-animated-css";

// import {useRoutes} from 'hookrouter';

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
              <div className="Hamburger" />
              <div className="Hamburger" />
              <div className="Hamburger" />
              <div
                style={{ visibility: visible ? "visible" : "hidden" }}
                className="Mobile-Dropdown"
              >
                <SiteLinks />
              </div>
            </div>
            <h1> Ambrose's Projects </h1>
            <div className="Button-Container">
              <SiteLinks />
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

const SiteLinks = () => {
  return (
    <div className="Site-Links">
        <Link className="link" to="/">
          H O M E
        </Link>
        <Link className="link" to="/projects">
          {" "}
          P R O J E C T S{" "}
        </Link>
        <Link className="link" to="/resume">
          {" "}
          R E S U M E{" "}
        </Link>
        <Link className="link" to="/todo">
          {" "}
          T O D O{" "}
        </Link>
        </div>
  );
};

const todo = () => {
  let descToggle = false;
  const toggleExpand = newBool => {
    descToggle = newBool;
  };
  return (
    <ProjectDescription allProjects={projectsTodo} toggleExpand={toggleExpand}>
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
      <a href="https://www.linkedin.com/in/ambrose-kuo-832147113/"> Linkedln</a>
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
      <div className="Resume-Link">
        {" "}
        <button
          onClick={() => {
            // Building URL
            const resumePDF = require("./assets/AmbroseKuoResume.pdf");
            window.open(resumePDF);
          }}
        >
          {" "}
          View as PDF
        </button>{" "}
      </div>
      <img src={require("./assets/Resume.png")} alt="resume" />
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
        <span>
          {" "}
          Project: {pageCount + 1} of {allProjects.length}
        </span>
        <button
          className="Page-Button"
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
          className="Page-Button"
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

export default App;
