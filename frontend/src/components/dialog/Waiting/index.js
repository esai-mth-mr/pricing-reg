import { React, Fragment, useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { ClipLoader } from "react-spinners";

export default function MyModal({ isOpen }) {
  return (
    <>
      <Dialog
        open={isOpen}
        PaperProps={{ sx: { width: "30%", minWidth: "400px" } }}
      >
        <DialogContent>
          <div
            style={{ display: "flex", justifyContent:'space-around', width:'50%', marginLeft:'auto', marginRight:'auto' }}
          >
            <ClipLoader
              color="#13a5e4"
              cssOverride={{}}
              loading={isOpen}
              size={50}
              speedMultiplier={1}
            />
            <div style={{ marginLeft: '10px' ,display: "flex", alignItems: "center"}}>
              Waiting for response
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
