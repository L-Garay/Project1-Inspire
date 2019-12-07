export default class Image {
  constructor(data) {
    this.id = data.id || data.data.id;
    this.url = data.url || data.data.url;
  }
}
