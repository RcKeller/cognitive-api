const autobind = require('auto-bind')
const axios = require('axios')
const cognitiveServices = require('cognitive-services')
const Azure = require('./Azure')

module.exports = class Vision extends Azure {
  constructor (router) {
    super(router)
    this.client = new cognitiveServices.computerVision(this.azure)
    router.post('/vision', this.getVision)
    console.log('AZUR: Analyzing images using computer vision at .../vision')
  }
  /*
  Example:
  POST http://localhost:3000/api/v1/vision
  {"url":"https://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg"}
  */
  async getVision (req, res) {
    try {
      const { body } = req
      const parameters = req.query.params
      const analysis = await this.client.analyzeImage({ parameters, body })
      res.status(200).json(analysis)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
