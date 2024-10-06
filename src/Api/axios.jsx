import axios from "axios";

const axiosInstance = axios.create({
    //baseURL: "http://127.0.0.1:5001/gashaw-183a2/us-central1/api"
    //baseURL: "http://localhost:3000"
    //deployed version of amazon server on render .com 
    baseURL:"https://amazon-api-deploy-axbe.onrender.com/"
});


export{axiosInstance}