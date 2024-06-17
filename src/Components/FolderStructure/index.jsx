import React, { useState } from "react";
import Folder from "../Folder";


const FolderStructure = (props) => {
  let { config,handleInsertNode } = props;
  console.log(config)

  
  return (
    <ul style={{ listStyle: "none" }}>
      {config
        ? config.map((type) => {
            if (type.fileType == "file") {
              return <li key={type.id}><span>📄{type.name} </span></li>;
            } else {
              return (
                <Folder key={type.id} folder={type} handleInsertNode={handleInsertNode}/>
              );
            }
          })
        : ""}
    </ul>
  );
};

export default FolderStructure;
