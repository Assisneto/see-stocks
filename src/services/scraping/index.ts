import cheerio from 'cheerio'
import fetch from 'node-fetch'

const baseUrl = 'https://statusinvest.com.br'

export const scraping = {
  async getStockPrice (stock:string): Promise<string | null> {
    const bodyStream = await fetch(`${baseUrl}/acoes/${stock}`)
    const body = await bodyStream.text()

    const $ = cheerio.load(body)

    const price = $('strong[class=value]').html()
    return price
  }
}
