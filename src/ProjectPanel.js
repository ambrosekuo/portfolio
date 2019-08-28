import React, { useState, useEffect } from "react";
import "./ProjectPanel.css";
import * as Vibrant from "node-vibrant";

function ProjectPanel({ projectInformation }) {
  //const [projectName, setName] = useState(projectName);

  // Initializes componentColors
  const [componentColors, setColor] = useState({
    titleColor: "black",
    panelColors: "white",
    backgroundColor: "#white"
  });

  // Using Vibrant.js to extract image color and setting the colors of the project component
  const setProjectColors = () => {
    Vibrant.from(projectInformation.imageLinks[0])
      .getPalette()
      .then(palette => {
        // Use destruction operator ... because we want to get a copy, not overwrite the original
        setColor({
          ...componentColors,
          titleColor: RGBarrToRGBA(...palette.DarkVibrant.getRgb(), 1),
          panelColors: RGBarrToRGBA(...palette.LightMuted.getRgb(), 0.4),
          backgroundColor: RGBarrToRGBA(...palette.LightVibrant.getRgb(), 0.4)
        });
      });
  };

  // Takes in 3 values corresponding to rgb inputs and outputs an rgba with desired transparency (4th input) between 0 and 1
  const RGBarrToRGBA = (r, g, b, transparency) => {
    return "rgba(" + r + "," + g + "," + b + "," + transparency + ")";
  };

  let directionToExpandTo;

  let toolsUsed = projectInformation.toolsUsed.map((tool, i, tools) => {
    return (
      <span key={"toolUsed" + i}>
        {" "}
        {tool + (i < tools.length - 1 ? ", " : ".")}{" "}
      </span>
    );
  });
  let websiteLink =
    projectInformation.siteLink != "" ? (
      <a className="Site-Link" href={projectInformation.siteLink}>
        {" "}
        To Site{" "}
      </a>
    ) : (
      <div className="Site-Link" style={{ background: "grey" }}>
        {" "}
        Site not hosted
      </div>
    );
  return (
    <div
      className="ProjectPanel"
      style={{ backgroundColor: componentColors.backgroundColor }}
    >
      <h3
        className="Project-Title"
        style={{ color: componentColors.titleColor }}
      >
        {projectInformation.name}
      </h3>
      <div className="Project-Image">
        <div className="helper-to-center"> </div>
        <img
          src={projectInformation.imageLinks[0]}
          alt={projectInformation.name}
        />
      </div>
      <div
        className="Tools-Used"
        style={{ backgroundColor: componentColors.panelColors }}
      >
        {" "}
        <span> Made with: </span> {toolsUsed}
      </div>
      <div
        className="ProjectPanel-Description"
        style={{ backgroundColor: componentColors.panelColors }}
      >
        {" "}
        {projectInformation.description}{" "}
      </div>
      <div className="Site-Links">
        {websiteLink}
        <a className="Github-Link" href={projectInformation.githubLink}>
          {" "}
          Github{" "}
        </a>
      </div>
    </div>
  );
}

export default ProjectPanel;
