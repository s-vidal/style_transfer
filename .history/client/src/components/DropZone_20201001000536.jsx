import React, {useEffect, useState} from "react";
import {useDropzone} from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  margin: "auto",
  // width: "100%",
  // height: "auto",
};

function Dropzone(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        props.setImage(file);
        // const reader = new FileReader();

        // reader.onabort = () => console.log("file reading was aborted");
        // reader.onerror = () => console.log("file reading has failed");
        // reader.onload = () => {
        //   // Do whatever you want with the file contents
        //   const arrayBuffer = reader.result;

        // };
        // reader.readAsArrayBuffer(file);
      });
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt=""
          className="align-self-center"
        />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="text-center" style={{minWidth: 300, maxWidth: 300}}>
      <h5>{props.header}</h5>
      <div
        {...getRootProps({className: "dropzone"})}
        className="bg-light p-5 mt-3"
        style={{
          cursor: "pointer",
          border: "2px dotted green",
        }}
      >
        <input {...getInputProps()} />
        <p className="text-muted">Click or drag and drop image</p>
      </div>
      <aside
        className="d-flex justify-content-start align-items-center mt-5 mb-5"
        style={thumbsContainer}
      >
        {thumbs}
      </aside>
    </section>
  );
}

export default Dropzone;