// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const url = "https://stately-axolotl-d70a35.netlify.app/image.png"
    return await fetch(url).then((res) => res.json())
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
