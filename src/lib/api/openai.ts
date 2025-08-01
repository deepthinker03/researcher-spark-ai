import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function analyzeArticle(text: string) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a research assistant that analyzes academic papers. Provide a detailed analysis including: summary, key findings, strengths, weaknesses, and methodology. Return the response in JSON format with these exact keys: summary, keyFindings, strengths, weaknesses, methodology.',
        },
        {
          role: 'user',
          content: text,
        },
      ],
      response_format: { type: 'json_object' },
    })

    return JSON.parse(response.choices[0]?.message?.content || '{}')
  } catch (error) {
    console.error('Error analyzing article with OpenAI:', error)
    throw error
  }
}

export async function generateResearchArticle(prompt: string) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a research article generator. Given a topic, generate a complete research article with proper sections: abstract, introduction, methodology, results, discussion, conclusion, and references. Format it professionally with markdown.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    return response.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error generating research article:', error)
    throw error
  }
}

export async function answerResearchQuestion(question: string, context?: string) {
  try {
    const messages: any[] = [
      {
        role: 'system',
        content: 'You are an expert research assistant specializing in medicine and dentistry. Provide accurate, detailed answers to research questions.',
      },
      {
        role: 'user',
        content: question,
      },
    ]

    if (context) {
      messages.unshift({
        role: 'system',
        content: `Context for the question: ${context}`,
      })
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
    })

    return response.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error answering research question:', error)
    throw error
  }
}