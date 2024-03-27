import { IconButton, ImageList, TextField } from "@mui/material";
import React, { useState, useRef } from "react";
import ImageUploading from "react-images-uploading";
import { Grid } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export default function ImageUpload({ handleImageChange, handledImages}) {
  const [images, setImages] = React.useState(handledImages);

  const maxNumber = 10;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    handleImageChange(imageList);
  };

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
          multiple
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
                <a style={{ marginLeft: "auto", marginRight: "auto" }}>
                  CLick or Drag here
                </a>
              </div>
              <div style={{ width: "100%" }}>
                <Grid container spacing={4}>
                  {imageList.map((image, idx) => (
                    <Grid item xs={12} md={6} key={idx}>
                      <div
                        key={idx}
                        style={{
                          width: "300px",
                          height: "350px",
                        }}
                      >
                        <img
                          src={image.data_url}
                          alt=""
                          style={{
                            width: "250px",
                            height: "270px",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                          }}
                        />
                        <IconButton
                          onClick={() => onImageRemove(idx)}
                          color="primary"
                          sx={{ marginTop: "-600px", marginLeft: "250px" }}
                        >
                          <CancelIcon />
                        </IconButton>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </>
          )}
        </ImageUploading>
      </div>
    </div>
  );
}
