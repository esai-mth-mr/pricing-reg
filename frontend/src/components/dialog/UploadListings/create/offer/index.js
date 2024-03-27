import React, { useState, useRef } from "react";
import GiftOptions from "./GiftOptions";
import MainOfferOptions from "./MainOfferOptions";
import ManageOffersInOtherMakretplaces from "./ManageOffersInOtherMarketplaces";

export default function Offer() {
  return (
    <div
      style={{
        width: "90%",
        minWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <MainOfferOptions />
      <GiftOptions />
      <ManageOffersInOtherMakretplaces />
    </div>
  );
}
