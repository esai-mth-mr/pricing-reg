import { Button, Switch, TextField } from "@mui/material";
import React, { useState, useRef } from "react";

export default function GiftOptions() {
  const [checked, setChecked] = React.useState(false);
  
  const [giftAvailableChecked, setGiftAvailableChecked] = React.useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleGiftAvailableChange = (event) => {
    setGiftAvailableChecked(event.target.checked);
  };

  return (
    <>
      <div style={{height:'70px', display:'flex', alignItems:'center'}}>Gift Options</div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Offering Can Be Gift Messaged : </a>
        </div>
        <div style={{ marginLeft: "20px", width: "calc(70% - 20px)" }}>
          <a style={{ color: "red" }}>No</a>
          <Switch
            checked={checked}
            onChange={handleCheckChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <a style={{ color: "green" }}>Yes</a>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Is Gift Wrap Available : </a>
        </div>
        <div style={{ marginLeft: "20px", width: "calc(70% - 20px)" }}>
          <a style={{ color: "red" }}>No</a>
          <Switch
            checked={giftAvailableChecked}
            onChange={handleGiftAvailableChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <a style={{ color: "green" }}>Yes</a>
        </div>
      </div>
      <div style={{ width: "100%", height: "1px", backgroundColor: "gray" }} />
    </>
  );
}
