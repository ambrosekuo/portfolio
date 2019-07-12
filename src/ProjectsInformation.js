// **********************8
// Purpose of this module is to just store text/links for the site
// Could also store as a JSON file or set up a database, but currently it is much simpler to just
//  change data here to insert it onto the site

/*
TODO/Ideas:
-Add an inputting option, maybe admin setting on the site where I can just insert it directly. But this will require database.

*/

/*
 Project Structure/future schema:
 
 project = {
    name: "",
    description: "",
    imageLinks: [],
  }

*/

let allProjects = [
  {
    name: "Chat Server",
    toolsUsed: ["React.js", "Socket.io"],
    description: "Chat Server made with React/Sockets.IO/NodeJs",
    imageLinks: ["/assets/ChatServer0.png"],
    siteLink: "",
    githubLink: "https://github.com/ambrosekuo/MultiChatServer"
  },
  {
    name: "Multiplayer Game",
    toolsUsed: ["Phaser3.js", "Socket.io"],
    description: "Multiplayer Platformer that was created using sockets and also has a login/logout system to save progress. Also a simpler working version made without l",
    imageLinks: [
      "/assets/MultiplayerGame0.png",
      "/assets/MultiplayerGame1.png"
    ],
    siteLink: "https://aks-world-explorer.herokuapp.com/",
    githubLink: "https://github.com/ambrosekuo/world-explorer-multiplayer"
  },
  {
    name: "Drug Recommendation Site",
    toolsUsed: ["React.js", "Node.js", "string_score", "stream"],
    description:
      "Drug Recommendation site made with a UofT Pharmacology student. They compile an excel sheet through research and academic knowledge. The excel sheet links symptoms to drugs and this web app displays it as an interactive site. Also includes a search function.",
    imageLinks: ["/assets/DrugRecommendation0.png"],
    siteLink: "http://drug-recommendation.herokuapp.com/",
    githubLink: "https://github.com/ambrosekuo/drugRecommendation"
  }
];

let currentIdeas = [
  {
    title: "Issue: Multiplayer Game desyncing",
    difficulty: "Hell",
    description:
      "Currently, you can only see the people that joined after you, so it's multiplayer, but not syncing correctly. The code is messy/not modularize and very long since it was a difficult project."
  },
  {
    title: "Todo: Make this Portfolio look better",
    difficulty: "???",
    description: "Figuring out how to make this site look professional"
  },{
    title: "Expanding on: Chat Server",
    difficulty: "Medium",
    description: "Creating database end and being able to create chat rooms."
  },
];

export { allProjects, currentIdeas };
