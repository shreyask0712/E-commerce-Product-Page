const metadataPath = "/assets1/archive/watches/watches/metadata.csv";

const fetchWatchData = async () => {
  try {
    const response = await fetch(metadataPath);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();

    // Split the CSV into rows and columns
    const result = data.split("\n").map((row) => row.split(","));

    // Function to process data with headers
    const processDataWithHeaders = (data) => {
      const headers = data[0].slice(1);
      const processedData = [];

      for (let i = 1; i < data.length; i++) {
        const row = data[i].slice(1);
        const watchObj = {};

        for (let j = 0; j < headers.length; j++) {
          watchObj[headers[j]] = row[j];
        }
        processedData.push(watchObj);
      }

      return processedData;
    };

    const watchData = processDataWithHeaders(result);
    console.log("Processed Watch Data: ", watchData);

    return watchData;
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
};

export default fetchWatchData;
