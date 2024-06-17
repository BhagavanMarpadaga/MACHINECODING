import React from 'react'

const UseInsertEle = () => {

    function insertNewEle(config=[],name, isFile,parentId){
        console.log('parentId',parentId,"isFile",isFile)
        for(let type of config){
            console.log("config",type)
            if(type.id==parentId && type.fileType=='folder'){
                if(type.hasOwnProperty("childrens")){
                    type.childrens.push({
                        name:name,
                        id:self.crypto.randomUUID(),
                        fileType:isFile ? "file":"folder"
                    })
                }else{
                    type["childrens"]=[],
                    type.childrens.push({
                        name:name,
                        id:self.crypto.randomUUID(),
                        fileType:isFile ? "file":"folder"
                    })

                }
                break;
            }else if(type.fileType=='folder'){
                insertNewEle(type.childrens,name,isFile,parentId);
            }

        }
 
        

        return config
    }
    return insertNewEle
 
}

export default UseInsertEle
