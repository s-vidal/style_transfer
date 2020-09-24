const apiUrl = process.env.REACT_APP_API_URL;

export const transferImages = async (images) => {
  const imagesJSON = JSON.stringify(images);
  const response = await fetch(`${apiUrl}/stylise`, {
    method: "POST",
    body: imagesJSON,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  return data;
};
