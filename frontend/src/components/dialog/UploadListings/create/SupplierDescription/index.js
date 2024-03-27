import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function SupplierDescription() {
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
        alignItems: "center",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        <a>Contribution SKU</a>
        <a style={{ color: "red" }}> * </a>
        <a> &nbsp;&nbsp;: </a>
      </div>
      <TextField size="small" sx={{ width: "70%" }}></TextField>
    </div>
  );
}
