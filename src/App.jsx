import { useRef, useState } from "react";
import "./App.css";
import FolderStructure from "./Components/FolderStructure";
import UseInsertEle from "./Components/CustomHooks/UseInsertEle";

const CONFIG = [
  {
    fileType: "folder",
    name: "src",
    id: self.crypto.randomUUID(),
    childrens: [
      { fileType: "file", name: "app.jsx", id: self.crypto.randomUUID() },
      { fileType: "folder", name: "assets", id: self.crypto.randomUUID() },
      {
        fileType: "folder",
        name: "Components",
        id: self.crypto.randomUUID(),
        childrens: [
          {
            fileType: "folder",
            id: self.crypto.randomUUID(),
            name: "FolderStructure",
            childrens: [
              {
                fileType: "file",
                id: self.crypto.randomUUID(),
                name: "index.jsx",
              },
              {
                fileType: "file",
                id: self.crypto.randomUUID(),
                name: "index.css",
              },
            ],
          },
        ],
      },
    ],
  },
  { fileType: "file", name: "index.html", id: self.crypto.randomUUID() },
  { fileType: "folder", name: "src2", id: self.crypto.randomUUID() },
];

function App() {
  const [data,setData] = useState(CONFIG)
  const insertEle= UseInsertEle()
  const handleInsertNode=(fileName, isFile,parentId)=>{
    let updatedConfig=insertEle(data,fileName, isFile,parentId)
    
    setData(prev=>updatedConfig)
    
  }
  return (
    <>
      <FolderStructure config={data} handleInsertNode={handleInsertNode}/>
    </>
  );
}

export default App;
