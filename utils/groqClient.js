const API_URL = 'https://api.groq.com/v1/query' // substitua pela URL correta do seu GROQ

export async function queryGroq(query) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })

  if (!res.ok) {
    throw new Error(`Erro na API GROQ: ${res.statusText}`)
  }

  const data = await res.json()
  return data
    }
