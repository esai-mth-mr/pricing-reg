import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { React, Fragment, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import "../../../../style/pricemodal.css";
import { IconButton, Tooltip } from "@mui/material";
import { Label, NoteAdd } from "@mui/icons-material";
import ImageUpload  from "../edit/ImageUpload"
import { getUploadListingItems } from "../../../../api/sp_api/uploadListings";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

export default function MyModal({ isOpen, handleClose, data }) {
  const imageData = [
    {
      data_url: data.image,
      description: data.description,
    },
  ];

  const [value, setValue] = useState("1");

  const [detail, setDetail] = useState(imageData);

  const [loading, setLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBulletPointChange = (event) => {
    console.log(event.target.value);
  };

  const handleOtherAttributesChange = (event) => {
    console.log(event.target.value);
  };

  const handleCentralInformationChange = (event) => {
    console.log(event.target.value);
  };

  const handleImageChange = (handledImageData) => {
    setDetail(handledImageData);
  };

  const handleDescriptionChange = (description) => {
    console.log(description, "--------");
  };

  const hadleSaveUploadListings = async () => {
    const res = await getUploadListingItems("sss");

    if (res == "success") {
    } else {
      toast.error(res.message);
    }
  };

  const initializeData = () => {
    if (isOpen) {
      setDetail(imageData);
    }
  };

  useEffect(() => {
    // getUsers();
    initializeData();
  }, [isOpen]);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "80%",
            minWidth: "400px",
            maxWidth: "1000px",
            height: "auto",
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle>Upload listings</DialogTitle>
        <DialogContent>
          <div>sku : {data.sku}</div>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Image" value="1" />
                  <Tab label="Bullet point" value="2" />
                  <Tab label="Other Attribute" value="3" />
                  <Tab label="Central Information" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <ImageUpload
                  imageDataDisplay={detail}
                  handleImageChange={handleImageChange}
                  handleDescription={handleDescriptionChange}
                />
              </TabPanel>
              <TabPanel value="2">
                <TextField
                  multiline
                  maxRows={9}
                  minRows={9}
                  sx={{ width: "100%", height: "250px" }}
                  defaultValue={data.bullet_points}
                  onChange={handleBulletPointChange}
                />
              </TabPanel>
              <TabPanel value="3">
                <TextField
                  multiline
                  maxRows={9}
                  minRows={9}
                  sx={{ width: "100%", height: "250px" }}
                  defaultValue={data.other_attributes}
                  onChange={handleOtherAttributesChange}
                />
              </TabPanel>
              <TabPanel value="4">
                <TextField
                  multiline
                  maxRows={9}
                  minRows={9}
                  defaultValue={data.central_info}
                  onChange={handleCentralInformationChange}
                  sx={{ width: "100%", height: "250px" }}
                />
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ background: "#2e3539" }}
            onClick={handleClose}
            variant="contained"
          >
            Back
          </Button>
          <LoadingButton
            loading={loading}
            loadingPosition="end"
            endIcon={<SendIcon />}
            variant="contained"
            sx={{ background: "#2e3539" }}
            onClick={hadleSaveUploadListings}
          >
            Save
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
