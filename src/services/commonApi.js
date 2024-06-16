import axios from "axios";

export const commonApi=async(method,url,data,header)=>{

    let config = {
        method,
        url,
        data,
        headers:header?header:{"content-type":"application/json"}
    }

    return await axios(config).then((data)=>{
        return data
    }).catch((err)=>{
        return err
    })

}










// var axios = require('axios');

// var config = {
//   method: 'get',
// maxBodyLength: Infinity,
//   url: 'https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/filter-data',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
