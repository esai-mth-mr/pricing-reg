import axios from 'axios'
import { HEADER } from '../../../../constants';

const getUploadListingItems = async (data) => {
  try {
    let res = await axios.post("api/spapi/getuploadlistingitems", data, HEADER() )
    return res.data;

  } catch (error) {
    return {message : 'error 500'};
  }
};

export { getUploadListingItems };
