const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()
axios(url) = 'https://docs.google.com/forms/d/1TyUCcjs8qtma-vPBgD69diFyqArSoJuasWT9gi7fJUg/edit?pli=1#responses'
  .then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      const articles = []
      $('.myXFAc RjsPE', html).each(function() {
          const title = $(this).text()
          const url = $(this).find('a').attr('href')
          articles.push({
              title,
              url
          })
          console.log(articles)
      }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
})

