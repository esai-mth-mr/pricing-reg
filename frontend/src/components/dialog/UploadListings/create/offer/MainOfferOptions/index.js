import { Button, Switch, TextField } from "@mui/material";
import React, { useState, useRef } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function MainOfferOptions() {
  const [checked, setChecked] = React.useState(false);

  const [startDateValue, setStartDateValue] = React.useState("");

  const [endDateValue, setEndDateValue] = React.useState("");

  const [offeringReleaseDateValue, setOfferingReleaseDateValue] =
    React.useState("");

  const [offeringConditionType, setOfferingConditionType] =
    React.useState("none");

  const [releaseDateValue, setReleaseDateValue] = React.useState("");

  const handleOfferingConditionTypeChange = (event) => {
    setOfferingConditionType(event.target.value);
  };

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleStartDateChange = (newValue) => {
    setStartDateValue(newValue);
  };

  const handleEndDateChange = (newValue) => {
    setEndDateValue(newValue);
  };

  const handleOfferingReleaseDateChange = (newValue) => {
    setOfferingReleaseDateValue(newValue);
  };

  const handleReleaseDateChange = (newValue) => {
    setReleaseDateValue(newValue);
  };

  const handleApply = () => {};

  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Minimum Order Quantity : </a>
        </div>
        <div style={{ marginLeft: "20px", width: "calc(70% - 20px)" }}>
          <TextField size="small" sx={{ width: "100%" }} />
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Sell Remainder : </a>
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
          <a style={{ float: "right" }}>Sale Price : </a>
        </div>
        <div
          style={{
            marginLeft: "20px",
            width: "calc(70% - 20px)",
            display: "flex",
          }}
        >
          <div
            style={{
              border: "solid 1px gray",
              borderRadius: "5px",
              width: "70px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <a style={{ marginLeft: "auto", marginRight: "auto" }}>GBP ₤</a>
          </div>
          <TextField
            size="small"
            type="number"
            placeholder="Ex : 50.00"
            sx={{ width: "50%", marginLeft: "10px" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Sale Start Date : </a>
        </div>
        <div
          style={{
            marginLeft: "20px",
            width: "calc(70% - 20px)",
            display: "flex",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Start Sale Date"
              inputFormat="MM/DD/YYYY"
              value={startDateValue}
              onChange={handleStartDateChange}
              renderInput={(params) => <TextField {...params} />}
              size="small"
            />
          </LocalizationProvider>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Sale End Date : </a>
        </div>
        <div
          style={{
            marginLeft: "20px",
            width: "calc(70% - 20px)",
            display: "flex",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="End Sale Date"
              inputFormat="MM/DD/YYYY"
              value={endDateValue}
              onChange={handleEndDateChange}
              renderInput={(params) => <TextField {...params} />}
              size="small"
            />
          </LocalizationProvider>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Offering Release Date : </a>
        </div>
        <div
          style={{
            marginLeft: "20px",
            width: "calc(70% - 20px)",
            display: "flex",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Offering Release Date"
              inputFormat="MM/DD/YYYY"
              value={offeringReleaseDateValue}
              onChange={handleOfferingReleaseDateChange}
              renderInput={(params) => <TextField {...params} />}
              size="small"
            />
          </LocalizationProvider>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <div style={{ float: "right" }}>
            <a style={{ color: "red" }}> * </a>
            <a>Your Price</a>
            <a> : </a>
          </div>
        </div>
        <div
          style={{
            marginLeft: "20px",
            width: "calc(70% - 20px)",
            display: "flex",
          }}
        >
          <div
            style={{
              border: "solid 1px gray",
              borderRadius: "5px",
              width: "70px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <a style={{ marginLeft: "auto", marginRight: "auto" }}>GBP ₤</a>
          </div>
          <TextField
            size="small"
            type="number"
            placeholder="Ex : 50.00"
            sx={{ width: "50%", marginLeft: "10px" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Currency Conversion : </a>
        </div>
        <div style={{ marginLeft: "20px", width: "calc(70% - 20px)" }}>
          <Button
            aria-label="delete"
            sx={{ background: "gray" }}
            variant="contained"
            onClick={handleApply}
          >
            Apply
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Offering Condition Type : </a>
        </div>
        <div style={{ marginLeft: "20px", width: "calc(70% - 20px)" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-checkbox-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={offeringConditionType}
              label="Age"
              onChange={handleOfferingConditionTypeChange}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="type1">Type 1</MenuItem>
              <MenuItem value="type2">Type 2</MenuItem>
              <MenuItem value="type3">Type 3</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>List Price with Tax : </a>
        </div>
        <div
          style={{
            marginLeft: "20px",
            width: "calc(70% - 20px)",
            display: "flex",
          }}
        >
          <div
            style={{
              border: "solid 1px gray",
              borderRadius: "5px",
              width: "70px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <a style={{ marginLeft: "auto", marginRight: "auto" }}>GBP ₤</a>
          </div>
          <TextField
            size="small"
            type="number"
            placeholder="Ex : 50.00"
            sx={{ width: "50%", marginLeft: "10px" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Product Tax Code : </a>
        </div>
        <div style={{ marginLeft: "20px", width: "calc(70% - 20px)" }}>
          <TextField
            size="small"
            placeholder="A_GEN_NOTAX"
            sx={{ width: "100%" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Release Date : </a>
        </div>
        <div
          style={{
            marginLeft: "20px",
            width: "calc(70% - 20px)",
            display: "flex",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Release Date"
              inputFormat="MM/DD/YYYY"
              value={releaseDateValue}
              onChange={handleReleaseDateChange}
              renderInput={(params) => <TextField {...params} />}
              size="small"
            />
          </LocalizationProvider>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Merchant Shipping Group : </a>
        </div>
        <div style={{ marginLeft: "20px", width: "calc(70% - 20px)" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-checkbox-label">Group</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={offeringConditionType}
              label="Age"
              onChange={handleOfferingConditionTypeChange}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="group1">Group 1</MenuItem>
              <MenuItem value="group2">Group 2</MenuItem>
              <MenuItem value="group3">Group 3</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "70px" }}>
        <div style={{ width: "25%" }}>
          <a style={{ float: "right" }}>Maximum Order Quantity : </a>
        </div>
        <div style={{ marginLeft: "20px", width: "calc(70% - 20px)" }}>
          <TextField
            size="small"
            placeholder="Example : 3"
            sx={{ width: "100%" }}
          />
        </div>
      </div>
      <div style={{width:'100%', height:'1px', backgroundColor:'gray'}}/>
    </>
  );
}
