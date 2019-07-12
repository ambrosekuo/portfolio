import React, { useState, useEffect } from "react";
import "./ProjectDescription.css";

function TodoFixes({ currentIdea, keyID }) {
  return (
    <li key={keyID}>
      <h3> {currentIdea.title} </h3>
      <h3> Difficulty Rating: {currentIdea.difficulty} </h3>
      <div> {currentIdea.description} </div>
      <hr style={{ margin: "0", width: "95%" }} />
    </li>
  );
}

function ProjectDescription({ toggleExpand, currentIdeas }) {
  const [isDescriptionExpanded, setDescriptionExpand] = useState(false);

  let description;
  if (isDescriptionExpanded) {
    description = currentIdeas.map((currentIdea, i, currentIdeas) => (
      <TodoFixes currentIdea={currentIdea} key={"currentIdea" + i}>
        {" "}
      </TodoFixes>
    ));
  } else {
    description =
      currentIdeas.length >= 1 ? (
        <TodoFixes currentIdea={currentIdeas[0]} key={"currentIdea" + 0}>
          {" "}
        </TodoFixes>
      ) : (
        ""
      );
  }
  return (
    <div className="Project-Description">
      <div className="Project-Description-Header">
        <h2> Current Issues/Ideas </h2>
      </div>
      <ul>{description}</ul>
      <button
        className="Toggle-Current-Ideas"
        onClick={() => {
          setDescriptionExpand(!isDescriptionExpanded);
          toggleExpand(isDescriptionExpanded);
        }}
      >
        {isDescriptionExpanded ? "Show less ⬆" : "Show more ⬇"}
      </button>
      
    </div>
  );
}

export default ProjectDescription;
