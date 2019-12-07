import store from "../store.js";
import imageService from "../services/image-service.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
async function _drawImage() {
  try {
    let image = store.State.images.url;
    document.body.style.backgroundImage = `url('${image}')`;
    console.log(image);
  } catch (e) {
    console.error(e);
  }
}

export default class ImageController {
  constructor() {
    imageService.getImageAsync();
    store.subscribe("images", _drawImage);
  }
}
