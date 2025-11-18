import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Calendar, Clock, Eye, Search, Filter, 
  ChevronRight, Tag, Loader2, FileText 
} from 'lucide-react'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [tagFilter, setTagFilter] = useState('')
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

  useEffect(() => {
    fetchBlogs()
  }, [page, categoryFilter, searchTerm])

  const fetchBlogs = async () => {
    setLoading(true)
    try {
      let url = `${API_URL}/blogs?page=${page}&limit=9`
      if (categoryFilter !== 'all') {
        url += `&category=${categoryFilter}`
      }
      if (searchTerm) {
        url += `&search=${searchTerm}`
      }
      if (tagFilter) {
        url += `&tag=${tagFilter}`
      }

      const response = await fetch(url)
      const data = await response.json()

      if (data.success) {
        setBlogs(data.data.blogs)
        setCategories(data.data.categories || [])
        setTags(data.data.tags || [])
        setTotalPages(data.pages)
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setPage(1)
    fetchBlogs()
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white pt-20 sm:pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0067AC] via-[#005a94] to-[#0067AC] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our Blog
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
              Discover expert dental care tips, health insights, and the latest updates from Sasha Smiles
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search blogs..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-[#0067AC] outline-none transition-all"
              />
            </div>
          </form>

          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value)
                  setPage(1)
                }}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-[#0067AC] outline-none"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 8).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setTagFilter(tagFilter === tag ? '' : tag)
                      setPage(1)
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      tagFilter === tag
                        ? 'bg-[#0067AC] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Tag className="w-3 h-3 inline mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-[#0067AC]" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">No blogs found</p>
          </div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {blogs.map((blog) => (
                <motion.div
                  key={blog._id}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <Link to={`/blog/${blog.slug}`}>
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-[#0067AC] to-[#005a94]">
                      {blog.featuredImage ? (
                        <img
                          src={`http://localhost:5000${blog.featuredImage}`}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-16 h-16 text-white opacity-50" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-[#0067AC]/10 text-[#0067AC] rounded-full text-xs font-semibold">
                        {blog.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(blog.publishedAt || blog.createdAt)}
                      </div>
                    </div>

                    {/* Title */}
                    <Link to={`/blog/${blog.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0067AC] transition-colors">
                        {blog.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Tags & Views */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex items-center space-x-2">
                          <Tag className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            {blog.tags.slice(0, 2).join(', ')}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center text-gray-500 text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        {blog.views || 0}
                      </div>
                    </div>

                    {/* Read More */}
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="mt-4 inline-flex items-center text-[#0067AC] font-semibold hover:text-[#005a94] transition-colors group/link"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mb-8">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-6 py-2 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                <span className="px-6 py-2 bg-[#0067AC] text-white rounded-xl font-semibold">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-6 py-2 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Blogs

