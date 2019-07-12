import React from "react";
import "./App.css";
import ProjectPanel from "./ProjectPanel.js";
import { allProjects, currentIdeas } from "./ProjectsInformation.js";
import ProjectDescription from "./ProjectDescription.js";
import AboutMe from "./AboutMe.js";

function App() {
  let descToggle = false;

  const toggleExpand = newBool => {
    descToggle = newBool;
  };

  let ProjectPanels = allProjects.map((project, i, projects) => {
    return (
      <ProjectPanel projectInformation={project} key={i}>
        {" "}
      </ProjectPanel>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-title">
          <h1> Ambrose's Projects </h1>
          <div className="Button-Container">
            <ul>
              <li> H O M E</li>
              <li> R E S U M E</li>
              <li> A B O U T &nbsp; M E</li>
            </ul>
          </div>
        </div>
        <AboutMe />
      </header>
      <div className="Favourite-Projects">
        <h2>⭐ Favourites ⭐</h2>
        {ProjectPanels}
      </div>
      <div className="Other-Projects">
        <h2> Others</h2>
      </div>
    </div>
  );
}

/* TO ADD LATER PROJECT NOTEPAD

        <ProjectDescription
          currentIdeas={currentIdeas}
          toggleExpand={toggleExpand}
        >
          {" "}
        </ProjectDescription>

        */
export default App;
