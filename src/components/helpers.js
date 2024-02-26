async function fetchDataFromApi(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default fetchDataFromApi;