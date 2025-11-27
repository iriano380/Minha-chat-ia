import { queryGroq } from '../../utils/groqClient'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body

    // Query de exemplo, adapte ao seu banco GROQ
    const query = `*[_type == "resposta" && pergunta match "${message}"]{resposta}`

    try {
      const result = await queryGroq(query)
      res.status(200).json({ reply: result[0]?.resposta || "Desculpe, não sei a resposta." })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else {
    res.status(405).json({ error: "Método não permitido" })
  }
}
