import { IconButton, ImageList, TextField } from "@mui/material";
import React, { useState, useRef } from "react";
import ImageUploading from "react-images-uploading";
import { Grid } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export default function ProductIdentity() {
  const [images, setImages] = React.useState([]);

  const maxNumber = 10;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  return (
    <div
      style={{
        width: "70%",
        minWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <a>Item Name</a>
          <a style={{ color: "red" }}> * </a>
          <a> &nbsp;&nbsp;: </a>
        </div>
        <TextField size="small" sx={{ width: "70%" }}></TextField>
      </div>
      <div style={{ height: "30px" }} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <a>Brand Name</a>
          <a style={{ color: "red" }}> * </a>
          <a> &nbsp;&nbsp;: </a>
        </div>
        <TextField size="small" sx={{ width: "70%" }}></TextField>
      </div>
      <div style={{ height: "30px" }} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <a>External Product ID</a>
          <a style={{ color: "red" }}> * </a>
          <a> &nbsp;&nbsp;: </a>
        </div>
        <TextField size="small" sx={{ width: "70%" }}></TextField>
      </div>
      <div style={{ height: "30px" }} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{marginLeft:'-50px'}}>
          <a>Recommended Browse Nodes</a>
          <a style={{ color: "red" }}> * </a>
          <a> &nbsp;&nbsp;: </a>
        </div>
        <TextField size="small" sx={{ width: "70%" }}></TextField>
      </div>
      <div style={{ height: "30px" }} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <a>Model Number</a>
          <a style={{ color: "red" }}> * </a>
          <a> &nbsp;&nbsp;: </a>
        </div>
        <TextField size="small" sx={{ width: "70%" }}></TextField>
      </div>
      <div style={{ height: "30px" }} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <a>Model Name</a>
          <a style={{ color: "red" }}> * </a>
          <a> &nbsp;&nbsp;: </a>
        </div>
        <TextField size="small" sx={{ width: "70%" }}></TextField>
      </div>
      <div style={{ height: "30px" }} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <a>Manufacturer</a>
          <a style={{ color: "red" }}> * </a>
          <a> &nbsp;&nbsp;: </a>
        </div>
        <TextField size="small" sx={{ width: "70%" }}></TextField>
      </div>
    </div>
  );
}
