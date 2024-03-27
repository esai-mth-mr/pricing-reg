import { IconButton, ImageList, TextField } from "@mui/material";
import React, { useState, useRef } from "react";
import ImageUploading from "react-images-uploading";
import CancelIcon from "@mui/icons-material/Cancel";

export default function ImageUpload({ imageDataDisplay, handleImageChange, handleDescription }) {

  const [images, setImages] = React.useState(imageDataDisplay);

  const maxNumber = 10;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    handleImageChange(imageList)
  };

  const handleDescriptionChange = (event) => {
    handleDescription(event.target.value)
  }

  return (
    <div
      style={{
        width: "calc(100% - 20px)",
        height: "auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        <ImageUploading
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={["jpg", "png", "svg"]}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <>
              <div
                style={
                  isDragging
                    ? {
                        width: "300px",
                        height: "300px",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        color: "red",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }
                    : {
                        width: "300px",
                        height: "300px",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }
                }
                onClick={onImageUpload}
                {...dragProps}
              >
                <a>{images.length == 0 ? "CLick or Drag here" : ""}</a>
              </div>
              {imageList.map((image, idx) => (
                <div key={idx} style={{ marginTop: "-300px" }}>
                  <img
                    src={image.data_url}
                    alt=""
                    style={{
                      width: "300px",
                      height: "330px",
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <IconButton
                    onClick={() => onImageRemove(idx)}
                    color="primary"
                    sx={{ marginTop: "-600px", marginLeft: "-50px" }}
                  >
                    <CancelIcon />
                  </IconButton>
                </div>
              ))}
            </>
          )}
        </ImageUploading>
      </div>
      <div style={{ width: "calc(100% - 350px)" }}>
        <div>Description</div>
        <div style={{ height: "30px" }}></div>
        <TextField
          multiline
          maxRows={9}
          minRows={9}
          sx={{ width: "100%", height: "250px" }}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
}
