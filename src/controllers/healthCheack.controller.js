import {ApiResponse} from "../utils/api-response.js"


const healthCheack = (req, res) => {
  try {
    res
    .status(200)
    .json(new ApiResponse(200, {massage: "Server is runing "}));

  } catch (error) {
    console.log("Server is not runing");


  }

}

export { healthCheack};
