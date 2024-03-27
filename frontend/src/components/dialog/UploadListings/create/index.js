import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ImageUpload from "./ImageUpload";
import SupplierDescription from "./SupplierDescription";
import ProductIdentity from "./ProductIdentity";
import Offer from "./offer";
import "../../../../style/pricemodal.css";

export default function CreateNewItem() {
  let [isOpen, setIsOpen] = useState(false);

  const [handledImages, setHandledImages] = useState([]);

  const [value, setValue] = useState("1");

  function closeModal() {
    setIsOpen(false);
  }

  const getAccount = () => {};

  async function saveUser() {}

  function openModal() {
    setIsOpen(true);
  }

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

  const handleImageChange = (imageList) => {
    setHandledImages(imageList);
  };

  const handleDescriptionChange = (description) => {
    console.log(description, "--------");
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ marginRight: "10px" }}
      >
        <Button
          aria-label="delete"
          size="medium"
          variant="contained"
          sx={{ background: "#2e3539" }}
          onClick={openModal}
        >
          Create
        </Button>
      </div>
      <Dialog
        open={isOpen}
        // onClose={closeModal}
        PaperProps={{
          sx: {
            width: "70%",
            minWidth: "400px",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle>Create a new item</DialogTitle>
        <DialogContent>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              {/* <div style={{width:'100%', minWidth:'400px', overflowX:'auto'}}> */}
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    sx={{overflowX:'auto', minWidth:'1200px'}}
                  >
                    <Tab label="Supplier Description" value="1" sx={{fontWeight:'bold'}}/>
                    <Tab label="Product Identity" value="2" sx={{fontWeight:'bold'}}/>
                    <Tab label="Offer" value="3" sx={{fontWeight:'bold'}}/>
                    <Tab label="Product Details" value="4" sx={{fontWeight:'bold'}}/>
                    <Tab label="Variations" value="5" sx={{fontWeight:'bold'}}/>
                    <Tab label="Safety & Compiance" value="6" sx={{fontWeight:'bold'}}/>
                    <Tab label="Images" value="7" sx={{fontWeight:'bold'}}/>
                    <Tab label="Shipping" value="8" sx={{fontWeight:'bold'}}/>
                  </TabList>
                </Box>
                <TabPanel value="1" >
                  <SupplierDescription />
                </TabPanel>
                <TabPanel value="2">
                  <ProductIdentity/>
                </TabPanel>
                <TabPanel value="3">
                  <Offer/>
                </TabPanel>
                <TabPanel value="4">
                  <TextField
                    multiline
                    maxRows={9}
                    minRows={9}
                    onChange={handleCentralInformationChange}
                    sx={{ width: "100%", height: "250px" }}
                  />
                </TabPanel>
                <TabPanel value="5">
                  <TextField
                    multiline
                    maxRows={9}
                    minRows={9}
                    sx={{ width: "100%", height: "250px" }}
                    onChange={handleBulletPointChange}
                  />
                </TabPanel>
                <TabPanel value="6">
                  <TextField
                    multiline
                    maxRows={9}
                    minRows={9}
                    sx={{ width: "100%", height: "250px" }}
                    onChange={handleBulletPointChange}
                  />
                </TabPanel>
                <TabPanel value="7">
                  <ImageUpload
                    handleImageChange={handleImageChange}
                    handledImages={handledImages}
                  />
                </TabPanel>
              {/* </div> */}
            </TabContext>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ background: "#2e3539" }}
            onClick={closeModal}
            variant="contained"
          >
            Back
          </Button>
          <Button
            sx={{ background: "#2e3539" }}
            onClick={saveUser}
            variant="contained"
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
