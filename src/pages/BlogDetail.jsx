import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Calendar, Clock, Eye, ArrowLeft, Tag, 
  Share2, Loader2, FileText, User 
} from 'lucide-react'

const BlogDetail = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

  useEffect(() => {
    fetchBlog()
  }, [slug])

  const fetchBlog = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`${API_URL}/blogs/${slug}`)
      const data = await response.json()

      if (data.success) {
        setBlog(data.data.blog)
      } else {
        setError('Blog not found')
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
      setError('Failed to load blog')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatReadingTime = (content) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    return Math.ceil(wordCount / wordsPerMinute)
  }

  const shareBlog = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#0067AC]" />
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-xl text-gray-600">{error || 'Blog not found'}</p>
          <Link
            to="/blog"
            className="mt-4 inline-flex items-center text-[#0067AC] hover:text-[#005a94] font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <img
            src={`http://localhost:5000${blog.featuredImage}`}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-[#0067AC] hover:text-[#005a94] font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blogs
          </Link>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Category */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-[#0067AC]/10 text-[#0067AC] rounded-full text-sm font-semibold">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center text-gray-600">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{blog.authorName || 'Admin'}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>{formatReadingTime(blog.content)} min read</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Eye className="w-5 h-5 mr-2" />
                <span>{blog.views || 0} views</span>
              </div>
              <button
                onClick={shareBlog}
                className="ml-auto flex items-center text-[#0067AC] hover:text-[#005a94] transition-colors"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>

            {/* Excerpt */}
            {blog.excerpt && (
              <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border-l-4 border-[#0067AC]">
                <p className="text-lg text-gray-700 italic">{blog.excerpt}</p>
              </div>
            )}

            {/* Content */}
            <div className="mb-8">
              <div className="text-gray-700 leading-relaxed text-lg">
                {(() => {
                  const lines = blog.content.split('\n')
                  const elements = []
                  let currentList = []
                  let listKey = 0

                  lines.forEach((paragraph, index) => {
                    const trimmed = paragraph.trim()
                    
                    if (!trimmed) {
                      if (currentList.length > 0) {
                        elements.push(
                          <ul key={`list-${listKey++}`} className="list-disc ml-6 mb-4 space-y-2">
                            {currentList.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )
                        currentList = []
                      }
                      return
                    }
                    
                    // Check if it's a heading (starts with ##)
                    if (trimmed.startsWith('##')) {
                      if (currentList.length > 0) {
                        elements.push(
                          <ul key={`list-${listKey++}`} className="list-disc ml-6 mb-4 space-y-2">
                            {currentList.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )
                        currentList = []
                      }
                      const text = trimmed.replace(/^##\s*/, '')
                      elements.push(
                        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                          {text}
                        </h2>
                      )
                      return
                    }
                    
                    // Check if it's a main heading (starts with #)
                    if (trimmed.startsWith('#') && !trimmed.startsWith('##')) {
                      if (currentList.length > 0) {
                        elements.push(
                          <ul key={`list-${listKey++}`} className="list-disc ml-6 mb-4 space-y-2">
                            {currentList.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )
                        currentList = []
                      }
                      const text = trimmed.replace(/^#\s*/, '')
                      elements.push(
                        <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                          {text}
                        </h1>
                      )
                      return
                    }
                    
                    // Check if it's a list item
                    if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
                      const text = trimmed.replace(/^[-*]\s*/, '')
                      currentList.push(text)
                      return
                    }
                    
                    // Regular paragraph
                    if (currentList.length > 0) {
                      elements.push(
                        <ul key={`list-${listKey++}`} className="list-disc ml-6 mb-4 space-y-2">
                          {currentList.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )
                      currentList = []
                    }
                    
                    elements.push(
                      <p key={index} className="mb-4">
                        {trimmed}
                      </p>
                    )
                  })

                  // Close any remaining list
                  if (currentList.length > 0) {
                    elements.push(
                      <ul key={`list-${listKey++}`} className="list-disc ml-6 mb-4 space-y-2">
                        {currentList.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )
                  }

                  return elements
                })()}
              </div>
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-gray-200">
                <Tag className="w-5 h-5 text-gray-400" />
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#0067AC] hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.article>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-[#0067AC] to-[#005a94] rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Book an appointment with our expert dental team and take the first step towards a healthier, more confident smile.
          </p>
          <Link
            to="/#book-appointment"
            className="inline-block px-8 py-3 bg-white text-[#0067AC] rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogDetail

