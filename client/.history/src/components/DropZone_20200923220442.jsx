import React, {useMemo, useCallback} from "react";
import {useDropzone} from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function onDrop(acceptedFiles) {
  acceptedFiles.forEach((file) => {
    console.log(file);
    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      // Do whatever you want with the file contents
      const arrayBuffer = reader.result;
      console.log(arrayBuffer);
      var blob = new Blob([arrayBuffer], {type: "image/png"});
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(blob);
    };
    reader.readAsArrayBuffer(file);
  });
}

function Dropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({accept: "image/*", onDrop});

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const files = acceptedFiles.map((file) => console.log(file));

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input
          {...getInputProps((e) => {
            console.log(e);
          })}
        />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <img src={imageUrl}></img>
    </div>
  );
}

export default Dropzone;
