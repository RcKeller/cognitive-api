const axios = require('axios')
const cognitiveServices = require('cognitive-services')
const Azure = require('./Azure')

module.exports = class Vision extends Azure {
  constructor (router) {
    super(router)
    const client = new cognitiveServices.computerVision(this.azure)
    router.get('/vision', this.getVision)
  }
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
