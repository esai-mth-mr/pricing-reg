const AmazonData = require("../../../../models/AmazonData");
// const { getMarketplaceIdfromName } = require("../../index");
const SellingPartnerAPI = require("amazon-sp-api");

const refresh_token = process.env.REFRESH_TOKEN;

let sellingPartner = new SellingPartnerAPI({
  credentials: {
    SELLING_PARTNER_APP_CLIENT_ID: process.env.SELLING_PARTNER_APP_CLIENT_ID,
    SELLING_PARTNER_APP_CLIENT_SECRET:
      process.env.SELLING_PARTNER_APP_CLIENT_SECRET,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: "eu", // The region to use for the SP-API endpoints ("eu", "na" or "fe")
  refresh_token: refresh_token, // The refresh token of your app user
});

const getMarketplaceIdfromName = (marketplaceName) => {
  let marketplaceID = "";
  if (marketplaceName == "Amazon.co.uk (UK)") {
    marketplaceID = "A1F83G8C2ARO7P";
  } else if (marketplaceName == "Amazon.de (Germany)") {
    marketplaceID = "A1PA6795UKMFR9";
  } else if (marketplaceName == "Amazon.fr (France)") {
    marketplaceID = "A13V1IB3VIYZZH";
  } else if (marketplaceName == "Amazon.it (Italy)") {
    marketplaceID = "APJ6JRA9NG5V4";
  } else if (marketplaceName == "Amazon.es (Spain)") {
    marketplaceID = "A1RKKUPIHCS9HS";
  } else if (marketplaceName == "Amazon.nl (Netherlands)") {
    marketplaceID = "A1805IZSGTT6HS";
  } else if (marketplaceName == "Amazon.se (Sweden)") {
    marketplaceID = "A2NODRKZP88ZB9";
  } else if (marketplaceName == "Amazon.pl (Poland)") {
    marketplaceID = "A1C3SOZRARQ6R3";
  } else if (marketplaceName == "Amazon.be (Belgium)") {
    marketplaceID = "AMEN7PMS3EDWL";
  } else if (marketplaceName == "Amazon.tr (Turkey)") {
    marketplaceID = "A33AVAJ2PDY3EV";
  }
  return marketplaceID;
};

const getUploadListingItems = async (req, res) => {
  const { marketplaceName, pageIndex, pageSize } = req.body;

  let marketplaceId = getMarketplaceIdfromName(marketplaceName);

  const start = pageSize * (pageIndex - 1);

  const end = pageSize * pageIndex;

  const query = {
    marketplaceName,
  };

  try {
    const amazonData = await AmazonData.findOne(query);

    const pageNumber = Math.floor(amazonData.content.length / pageSize) + 1;

    let data = amazonData.content.slice(start, end);

    let resData = [];
    console.log("start");
    await Promise.all(
      data.map(async (item) => {
        try {
          let res = await sellingPartner.callAPI({
            api_path: `/listings/2021-08-01/items/${process.env.SELLER_ID}/${item.sku}`,
            method: "GET",
            query: {
              marketplaceIds: [marketplaceId],
              includedData: ["summaries"],
            },
          });
          let imageLink = "";
          if (res.summaries[0].mainImage.link != undefined) {
            imageLink = res.summaries[0].mainImage.link;
          }
          const temp = {
            sku: item.sku,
            asin: item.asin,
            fulfilType: item.fulfilType,
            imageLink,
          };

          resData.push(temp);
        } catch (error) {
          let imageLink = "";

          const temp = {
            sku: item.sku,
            asin: item.asin,
            fulfilType: item.fulfilType,
            imageLink,
          };

          resData.push(temp);
        }
      })
    );

    return res.json({
      message: "success",
      data: {
        pageNumber,
        data: resData,
      },
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "error occured. - status : 500",
    });
  }
};

module.exports = {
  getUploadListingItems,
};
