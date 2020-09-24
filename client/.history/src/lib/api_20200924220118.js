const apiUrl = process.env.REACT_APP_API_URL;

export const getDropdowns = async () => {
  const response = await fetch(`${apiUrl}/labelizer/dropdowns`);
  const data = await response.json();
  return data;
};
