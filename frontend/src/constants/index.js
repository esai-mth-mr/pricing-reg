const BACKEND_URL = "http://localhost:8080";

const THEME = {
  BUTTON_COLOR: "#28c76f",
  LAVEL_COLOR: "#c7cad9",
  HOME_BOARD_COLOR: "#25293c",
  WHITE_COLOR: "#FFF",
  HEADER_COLOR: "#2e3248",
  TABLE_HEADER :"#4a5072",
  TABLE_DEVIDER : "#44475d",
  PRIMARY_COLOR: "#1976d2"
};

const HEADER = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export { BACKEND_URL, HEADER, THEME };

