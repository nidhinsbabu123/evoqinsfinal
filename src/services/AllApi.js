import { commonApi } from "./commonApi"

const BASE_URL = 'https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace'

export const getList = async()=>{
    // if you are seing a '?' in a URL then you need to understand that it is a query parameter
    return await commonApi("GET",`${BASE_URL}/filter-data`,"")
}

export const postingTheList = async(body,header)=>{
    return await commonApi("POST",`${BASE_URL}/filter`,body,header)
}


export const searchTheList = async(body,header)=>{
    return await commonApi("POST",`${BASE_URL}/search`,body,header)
}