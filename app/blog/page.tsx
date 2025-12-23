import { Metadata } from 'next'
import BlogPosts from '@/components/BlogPosts'

export const metadata: Metadata = {
  title: 'Blog | Your Name',
  description: 'Read my thoughts on software development, tech, and more.',
}

export default async function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <BlogPosts />
    </main>
  )
} 