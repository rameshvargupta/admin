import axios from "axios";
import { useParams } from "react-router-dom";
// require('dotenv/config');

//get data from api
export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get('http://localhost:4000' + url);
        return data; // Return API response data
    } catch (error) {
        console.error("Error fetching data:");
        return error;
    }
};


// add category from api
export const postData = async (url, formData) => {
    const { res } = await axios.post('http://localhost:4000' + url, formData)
    return res;
}


// update category from api
export const editData = async (url, updateData) => {
    const { res } = await axios.put(`http://localhost:4000${url}`, updateData)
    return res;
}

// add category from api
export const deleteData = async (url) => {
    const { res } = await axios.delete(`http://localhost:4000${url}`)
    return res;
}
