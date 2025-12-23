'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import BlogPostCard from './BlogPostCard'

export interface BlogPost {
  id: number
  attributes: {
    title: string
    slug: string
    excerpt: string
    content: string
    publishedAt: string
    updatedAt: string
    coverImage: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView()

  const loadMorePosts = async () => {
    try {
      const response = await fetch(`/api/posts?page=${page}&pageSize=5`)
      const data = await response.json()
      
      if (data.data.length === 0) {
        setHasMore(false)
        return
      }

      setPosts(prevPosts => [...prevPosts, ...data.data])
      setPage(prevPage => prevPage + 1)
    } catch (error) {
      console.error('Error loading more posts:', error)
    }
  }

  useEffect(() => {
    if (inView && hasMore) {
      loadMorePosts()
    }
  }, [inView])

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
      {hasMore && (
        <div ref={ref} className="flex justify-center py-4">
          <div className="animate-pulse">Loading more posts...</div>
        </div>
      )}
    </div>
  )
} 