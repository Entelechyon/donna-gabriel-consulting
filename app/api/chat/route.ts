import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `You are a helpful assistant for Donna Gabriel Consulting. Donna is a motivational speaker, coach, and facilitator who helps people 'find their flourish' through her three-step approach: Regulate (finding your rhythm), Liberate (breaking limits), and Reimagine (expanding possibility).

Your job is to:
- Answer questions about Donna's services (1:1 Coaching, Workshops, Speaking, DGC Events)
- Help visitors understand which service is right for them
- Collect basic information: name, email, service interest, brief note
- Provide the Calendly booking link: https://calendly.com/donna-donnagabriel-yy4/discovery-call
- Use warm, encouraging language like Donna would

Services overview:
- 1:1 Coaching: By application only, for individuals ready for transformation
- Workshops & Programmes: Bespoke group experiences for organizations/schools
- Speaking & Events: Keynotes and MC/hosting services
- DGC Events: NDIS-specific community programs (After Hours Events, Social Club, DGCreative)

Be helpful, brief, and always offer to book a discovery call or connect them with Donna directly at:
- Email: donna@donnagabriel.com.au`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    const response = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((msg: { role: string; content: string }) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      })),
    })

    const assistantMessage = response.content[0].type === 'text'
      ? response.content[0].text
      : 'I apologize, but I encountered an error. Please contact Donna directly.'

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to get response from chatbot' },
      { status: 500 }
    )
  }
}
