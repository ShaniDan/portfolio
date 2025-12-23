import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from './BlogPosts'

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { attributes } = post
  const formattedDate = new Date(attributes.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${attributes.slug}`}>
        <div className="relative h-48 w-full">
          {attributes.coverImage?.data && (
            <Image
              src={attributes.coverImage.data.attributes.url}
              alt={attributes.title}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {attributes.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {formattedDate}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {attributes.excerpt}
          </p>
        </div>
      </Link>
    </article>
  )
} 