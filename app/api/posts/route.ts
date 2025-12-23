import { NextRequest, NextResponse } from 'next/server'

const STRAPI_URL = process.env.STRAPI_URL || 'https://your-strapi-url.digitalocean.app'
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '5')

  try {
    const response = await fetch(
      `${STRAPI_URL}/api/posts?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc&populate=coverImage`,
      {
        headers: {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
} 