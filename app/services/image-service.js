import Image from "../models/image.js";
import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getImageAsync() {
    let res = await imgApi.get("");
    let newImage = new Image(res.data);
    store.commit("images", newImage);
  }
}

const imageService = new ImageService();
export default imageService;
