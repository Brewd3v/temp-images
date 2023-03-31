

const handler = async (event) => {
  try {
    const timestamp = new Date().getTime();
    // console.log("timestamp", timestamp);
    const url = `https://stately-axolotl-d70a35.netlify.app/image.png?timestamp=${timestamp}`;
    const response = await fetch(url)
    const buffer = await response.arrayBuffer()
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "image/png",
      },
      body: Buffer.from(buffer).toString("base64"),
      isBase64Encoded: true,
    };
    
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
