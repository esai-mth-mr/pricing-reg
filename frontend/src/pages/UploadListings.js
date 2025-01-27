import Header from "../components/dashboard/Header";
import UploadListings from "../components/dashboard/uploadListings/"
import "../style/home.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ROUTER_SELECTED_TYPES } from '../actions/actionType'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import jwt_decode from "jwt-decode";
import { getPermissions } from "../api/user";

function UploadingListings() {

  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const isLoginSuccess = async () => {

    try {
      const res = await getPermissions();

      if (res != null) {
        const tokenDecode = jwt_decode(localStorage.getItem("token"));
        if (!tokenDecode) {
          Navigate("/login");
        }
      } else {
        Navigate("/dashboard");
      }
    } catch (error) {
      Navigate("/login");
    }
  }

  useEffect(() => {
    isLoginSuccess();
  }, [])

  useEffect(()=> {
    dispatch({ type: ROUTER_SELECTED_TYPES.ROUTER_SELECTED_TITLE, payload: "Upload Listings" });
  }, [])


  return (
    <div className="body">
      <Header />
      <div style={{maxHeight:'800px', marginLeft: '20px', overflow:'auto', marginRight:'20px' }}>
        <UploadListings />
      </div>
    </div>
  );
}

export default UploadingListings;
