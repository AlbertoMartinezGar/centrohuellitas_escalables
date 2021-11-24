import React, { useEffect, useState } from "react";

const FileUploader = ({setFile}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setFile(selectedImage);
    }, [selectedImage])

    return (
        <div>
            {selectedImage && (
                <div>
                <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                <br />
                <button onClick={()=>setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <br />
            
            <br /> 
            <input
                type="file"
                name="image"
                onChange={(event) => {
                    //console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
};

export default FileUploader;