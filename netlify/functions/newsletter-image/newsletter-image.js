

const handler = async (event) => {
  try {
    const url = "https://stately-axolotl-d70a35.netlify.app/image.png"
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
