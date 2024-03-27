import React, { useCallback, useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import { getUploadListingItems } from "../../../../api/sp_api/uploadListings";
import Pagination from "@mui/material/Pagination";
import { BeatLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import ListingEdit from "../../../dialog/UploadListings/edit/listingEdit";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import WatingModal from "../../../dialog/Waiting";
import CreateNewItem from "../../../dialog/UploadListings/create";

const Example = ({ socket }) => {
  const Navigate = useNavigate();

  const [getDataFlag, setGetDataFlag] = useState(false);

  const setMarketPlace = useSelector(
    (FulfilmentType) => FulfilmentType.marketplace.setMarketPlace
  );

  const [allPageSize, setAllPageSize] = useState(0);

  const [tableData, setTableData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [validationErrors, setValidationErrors] = useState({});

  const [detail, setDetail] = useState({});

  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 50, //customize the default page size
  });

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = (data) => {
    // console.log(isOpen);
    setDetail(data);
    setIsOpen(true);
  };

  const handlePaginationChange = (event, value) => {
    getUploadListing(value);
  };

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
      };
    },
    [validationErrors]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "imageLink",
        header: "Image",
        size: 10,
        Cell: (cell) => (
          <div>
            <img
              style={{
                width: "40px",
                height: "40px",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
              src={cell.row.original.imageLink}
            ></img>
          </div>
        ),
      },
      {
        accessorKey: "sku",
        header: "SKU",
        size: 150,
        Cell: (cell) => <div>{cell.row.original.sku}</div>,
      },

      {
        accessorKey: "asin",
        header: "ASIN",
        size: 250,
        Cell: (cell) => <div>{cell.row.original.asin}</div>,
      },
      {
        accessorKey: "fulfilType",
        header: "Fulfilment type",
        size: 250,
        Cell: (cell) => <div>{cell.row.original.fulfilType}</div>,
      },
    ],
    [getCommonEditTextFieldProps]
  );

  const getUploadListing = async (pageIndex) => {
    if (setMarketPlace != "") {
      setGetDataFlag(true);

      const data = {
        pageIndex,
        pageSize: pagination.pageSize,
        marketplaceName: setMarketPlace,
      };

      const res = await getUploadListingItems(data);

      if (res.message == "Unauthorized - invalid token") {
        toast.error(res.message);
        setGetDataFlag(false);
        localStorage.removeItem("token");
        Navigate("/login");
      } else if (res.message != "success") {
        setGetDataFlag(false);
        toast.error(res.message);
      } else {
        console.log(res.data.data, '----------test log')
        setAllPageSize(res.data.pageNumber);
        setTableData(res.data.data);
        setGetDataFlag(false);
      }
    }
  };

  useEffect(() => {
    getUploadListing(1);
  }, [setMarketPlace]);

  return (
    <>
      <ListingEdit isOpen={isOpen} handleClose={handleClose} data={detail} />

      {
        setMarketPlace == "" ? (
          <div
            style={{
              position: "absolute",
              left: "40%",
              top: "50%",
              color: "#7b7b7b",
              fontSize: "20px",
              fontFamily: "monospace",
            }}
          >
            Please drop down the marketplace
          </div>
        ) : (
          <MaterialReactTable
            displayColumnDefOptions={{
              "mrt-row-actions": {
                muiTableHeadCellProps: {
                  align: "center",
                },
                size: 50,
              },
            }}
            columns={columns}
            data={tableData}
            onEditingRowSave={handleSaveRowEdits}
            onEditingRowCancel={handleCancelRowEdits}
            muiTablePaginationProps={{
              showFirstButton: true,
              showLastButton: true,
            }}
            onPaginationChange={setPagination}
            state={{ pagination }}
            renderBottomToolbar={({ table }) => (
              <div>
                <div style={{ float: "right" }}>
                  <Pagination
                    count={allPageSize}
                    shape="rounded"
                    color="primary"
                    sx={{ color: "black" }}
                    onChange={handlePaginationChange}
                  />
                </div>
              </div>
            )}
            renderTopToolbarCustomActions={() => (
              <CreateNewItem />
              // <div style={{ display: 'flex' }}>
              //   <div className='export-button' onClick={handleExport}>
              //     <div className='export-main-button'>
              //       <div className='export-logo'></div>
              //       <a className='export-label'>Export File</a>
              //     </div>
              //   </div>
              //   <div style={{ width: '20px' }} />
              //   <ImportCSV handleModalOpen={setIsOpen} />
              // </div>
            )}
          />
        )
      }
      <WatingModal isOpen={getDataFlag}/>
    </>
  );
};

export default Example;
