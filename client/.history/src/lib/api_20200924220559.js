const apiUrl = process.env.REACT_APP_API_URL;

export const transferImages = async () => {
  const paramsJSON = JSON.stringify();

  const response = await fetch(`${apiUrl}/labelizer/filter`, {
    method: "POST",
    body: paramsJSON,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  return data;
};
