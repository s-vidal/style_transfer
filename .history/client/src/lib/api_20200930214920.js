import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const transferImages = async (images) => {
  // sends as <FileStorage>
  const formData = new FormData();
  formData.append("image_one", images[0]);
  formData.append("image_two", images[1]);
  let response = await axios({
    method: "post",
    url: `http://0.0.0.0:5000/stylize`,
    data: formData,
    headers: {"Content-Type": "multipart/form-data"},
    responseType: "blob",
  });
  const binary_image = response.data;
  return binary_image;
};

export const getSuperResImg = async (images) => {
  // sends as <FileStorage>
  const formData = new FormData();
  formData.append("image_one", images);
  formData.append("image_two", images[1]);
  let response = await axios({
    method: "post",
    url: `http://0.0.0.0:5000/stylize`,
    data: formData,
    headers: {"Content-Type": "multipart/form-data"},
    responseType: "blob",
  });
  const binary_image = response.data;
  return binary_image;
};
