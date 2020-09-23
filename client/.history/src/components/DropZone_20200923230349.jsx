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
  width: "auto",
  height: "100%",
};

function Dropzone(props) {
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
      };
      reader.readAsArrayBuffer(file);
    });
  }
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
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
        <img src={file.preview} style={img} />
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
    <section className="">
      <div
        {...getRootProps({className: "dropzone"})}
        className="bg-light p-5"
        style={{
          cursor: "pointer",
          border: "2px dotted grey",
        }}
      >
        <input {...getInputProps()} />
        <p className="">Drag 'n' drop or click to select image</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

export default Dropzone;

// import React, {useMemo, useCallback} from "react";
// import {useDropzone} from "react-dropzone";

// const baseStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "20px",
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: "#eeeeee",
//   borderStyle: "dashed",
//   backgroundColor: "#fafafa",
//   color: "#bdbdbd",
//   outline: "none",
//   transition: "border .24s ease-in-out",
// };

// const activeStyle = {
//   borderColor: "#2196f3",
// };

// const acceptStyle = {
//   borderColor: "#00e676",
// };

// const rejectStyle = {
//   borderColor: "#ff1744",
// };

// function onDrop(acceptedFiles) {
//   acceptedFiles.forEach((file) => {
//     console.log(file);
//     const reader = new FileReader();

//     reader.onabort = () => console.log("file reading was aborted");
//     reader.onerror = () => console.log("file reading has failed");
//     reader.onload = () => {
//       // Do whatever you want with the file contents
//       const arrayBuffer = reader.result;
//       console.log(arrayBuffer);
//     };
//     reader.readAsArrayBuffer(file);
//   });
// }

// function Dropzone(props) {
//   const {
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isDragAccept,
//     isDragReject,
//     acceptedFiles,
//   } = useDropzone({accept: "image/*", onDrop});

//   const style = useMemo(
//     () => ({
//       ...baseStyle,
//       ...(isDragActive ? activeStyle : {}),
//       ...(isDragAccept ? acceptStyle : {}),
//       ...(isDragReject ? rejectStyle : {}),
//     }),
//     [isDragActive, isDragReject, isDragAccept]
//   );

//   const files = acceptedFiles.map((file) => console.log(file));

//   return (
//     <div className="container">
//       <div {...getRootProps({style})}>
//         <input
//           {...getInputProps((e) => {
//             console.log(e);
//           })}
//         />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//     </div>
//   );
// }

// export default Dropzone;
