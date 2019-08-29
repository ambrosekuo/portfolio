import React, { useState, useEffect } from "react";
import "./ProjectDescription.css";

const ProjectTasks = ({ projectTodo, projectNumber, projectName }) => {
  const listOfProjectTodo = projectTodo.map((task, i, tasks) => {
    return (
      <li key={projectName + i}>
        <div style={{ color: task.priority }}> {task.description}</div>
      </li>
    );
  });

  return (
    <li key={"project" + projectNumber}>
      <ul>{listOfProjectTodo}</ul>
    </li>
  );
};

const ProjectDescription = ({ toggleExpand, allProjects }) => {
  const [isDescriptionExpanded, setDescriptionExpand] = useState(false);

  let tasks;
  if (isDescriptionExpanded) {
    tasks = allProjects.map((project, i, allProjects) => (
      <ul>
        <h2> {project.projectName}</h2>
        <ProjectTasks
          projectTodo={project.todo}
          projectNumber={i}
          projectName={project.projectName}
        ></ProjectTasks>
      </ul>
    ));
  } else {
    tasks =
      allProjects.length >= 1 ? (
        <ul>
          <h2> {allProjects[0].projectName}</h2>
          <ProjectTasks
            projectTodo={allProjects[0].todo}
            projectNumber={0}
          ></ProjectTasks>
        </ul>
      ) : (
        ""
      );
  }

  return (
    <div className="Project-Description">
      <div className="Project-Description-Header">
        <h2> Current Ideas and Issues </h2>
      </div>
      <h3>
        {" "}
        <span style={{ color: "red" }}> Priority Issue </span> ,
        <span style={{ color: "orange" }}> Medium level issue </span> ,
        <span style={{ color: "green" }}> Additional Implementations </span>{" "}
      </h3>
      {tasks}
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
};

export default ProjectDescription;
