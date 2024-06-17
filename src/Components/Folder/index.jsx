import React, { useState } from "react";
import FolderStructure from "../FolderStructure";

const Folder = (props) => {
  const { folder ,handleInsertNode} = props;
  const [expand, setExpand] = useState();
  const [displayInput, setDisplayInput] = useState({
    visible: false,
    isFile: false,
  });
  const handleNewFileAdd = () => {
    setExpand(true)
    console.log('handle new file')
    setDisplayInput({
      visible: true,
      isFile: true,
    });
  };
  const handleNewFolderAdd = () => {
    setExpand(true)
    setDisplayInput({
      visible: true,
      isFile: false,
    });
  };
  const handleKeyDown=(e)=>{
    if(e.key=="Enter" && e.target.value){
        console.log(e.target.value)
        handleInsertNode(e.target.value, displayInput.isFile,folder.id)
        setDisplayInput({...displayInput,visible:false})
        setExpand(true)
    }
  }
  return (
    <>
      <li
        onClick={(e) => {
          {
            setExpand(!expand);
          }
        }}
        style={{ cursor: "pointer", padding: "4px" }}
      >
        {" "}
        {expand ? "⬇" : ""} 📁 {folder.name}{" "}
        <span>
          <button
            style={{
              padding: "2px",
              margin: "2px",
              cursor: "pointer",
              border: "1px solid grey",
              borderRadius: "4px",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleNewFileAdd();
            }}
          >
            + {`File`}
          </button>
        </span>
        <span>
          <button
            style={{
              padding: "2px",
              margin: "2px",
              cursor: "pointer",
              border: "1px solid grey",
              borderRadius: "4px",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleNewFolderAdd();
            }}
          >
            + {`Folder`}
          </button>
        </span>
      </li>
      {displayInput.visible ? (
        <li style={{paddingLeft:"40px"}}>
          {displayInput.isFile ? "📄" : "📁"}
          <input
            type="text"
            autoFocus
            onKeyDown={(e)=>{
                handleKeyDown(e)
            }}
            onBlur={() => {
              setDisplayInput(false);
              setExpand(false)
            }}
          />
        </li>
      ) : null}
      {folder.childrens && folder.childrens.length > 0 ? (
        <div style={{ display: expand ? "block" : "none" }}>
          {<FolderStructure config={folder.childrens} handleInsertNode={handleInsertNode}/>}
        </div>
      ) : null}
    </>
  );
};

export default Folder;
