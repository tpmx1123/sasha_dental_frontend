import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import ChangePasswordModal from '../components/ChangePasswordModal'
import { 
  LogOut, Calendar, Users, Clock, CheckCircle, XCircle, 
  AlertCircle, Search, Filter, RefreshCw, Loader2,
  Eye, Edit, Trash2, TrendingUp, Key, FileText, Plus, Image as ImageIcon, X
} from 'lucide-react'

const SecretDashboard = () => {
  const { user, logout, checkAuth } = useAuth()
  const [activeTab, setActiveTab] = useState('appointments')
  
  // Appointments state
  const [appointments, setAppointments] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  
  // Blogs state
  const [blogs, setBlogs] = useState([])
  const [blogLoading, setBlogLoading] = useState(false)
  const [blogSearchTerm, setBlogSearchTerm] = useState('')
  const [blogStatusFilter, setBlogStatusFilter] = useState('all')
  const [blogPage, setBlogPage] = useState(1)
  const [blogTotalPages, setBlogTotalPages] = useState(1)
  const [showBlogModal, setShowBlogModal] = useState(false)
  const [editingBlog, setEditingBlog] = useState(null)
  
  // Modal state
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
  
  // Helper function to get image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null
    // If imagePath already starts with http, return as is
    if (imagePath.startsWith('http')) return imagePath
    // Get base URL from API_URL (remove /api)
    const baseUrl = API_URL.replace('/api', '')
    return `${baseUrl}${imagePath}`
  }

  useEffect(() => {
    if (activeTab === 'appointments') {
      fetchDashboardData()
    } else if (activeTab === 'blogs') {
      fetchBlogs()
    }
  }, [activeTab, page, blogStatusFilter, blogPage])

  const fetchDashboardData = async () => {
    setLoading(true)
    try {
      // Fetch stats and appointments in parallel
      const [statsRes, appointmentsRes] = await Promise.all([
        fetch(`${API_URL}/admin/stats`, { credentials: 'include' }),
        fetch(`${API_URL}/admin/appointments?page=${page}&limit=10&search=${searchTerm}`, {
          credentials: 'include'
        })
      ])

      if (statsRes.ok) {
        const statsData = await statsRes.json()
        if (statsData.success) {
          setStats(statsData.data.stats)
        }
      }

      if (appointmentsRes.ok) {
        const appointmentsData = await appointmentsRes.json()
        if (appointmentsData.success) {
          setAppointments(appointmentsData.data.appointments)
          setTotalPages(appointmentsData.pages)
        }
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setPage(1)
    fetchDashboardData()
  }


  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this appointment?')) {
      return
    }

    try {
      const response = await fetch(`${API_URL}/admin/appointments/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      if (response.ok) {
        fetchDashboardData() // Refresh data
      }
    } catch (error) {
      console.error('Error deleting appointment:', error)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }


  // Blog functions
  const fetchBlogs = async () => {
    setBlogLoading(true)
    try {
      const url = `${API_URL}/admin/blogs?status=${blogStatusFilter !== 'all' ? blogStatusFilter : ''}&page=${blogPage}&limit=10&search=${blogSearchTerm}`
      const response = await fetch(url, { credentials: 'include' })
      
      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          setBlogs(data.data.blogs)
          setBlogTotalPages(data.pages)
        }
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setBlogLoading(false)
    }
  }

  const handleBlogSearch = (e) => {
    e.preventDefault()
    setBlogPage(1)
    fetchBlogs()
  }

  const handleDeleteBlog = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) {
      return
    }

    try {
      const response = await fetch(`${API_URL}/admin/blogs/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      if (response.ok) {
        fetchBlogs()
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
    }
  }

  const handleCreateBlog = () => {
    setEditingBlog(null)
    setShowBlogModal(true)
  }

  const handleEditBlog = (blog) => {
    setEditingBlog(blog)
    setShowBlogModal(true)
  }

  const handleBlogModalClose = () => {
    setShowBlogModal(false)
    setEditingBlog(null)
    fetchBlogs()
  }

  const getBlogStatusColor = (status) => {
    const colors = {
      draft: 'bg-gray-100 text-gray-800',
      published: 'bg-green-100 text-green-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#0067AC]">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowChangePasswordModal(true)}
                className="flex items-center space-x-2 px-4 py-2 text-[#0067AC] hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Key className="w-5 h-5" />
                <span>Change Password</span>
              </button>
              <button
                onClick={logout}
                className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('appointments')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'appointments'
                    ? 'text-[#0067AC] border-b-2 border-[#0067AC]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Appointments</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('blogs')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'blogs'
                    ? 'text-[#0067AC] border-b-2 border-[#0067AC]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Blogs</span>
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <>
                {/* Stats Cards */}
            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Appointments</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
                </div>
                <Calendar className="w-12 h-12 text-[#0067AC]" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">This Week</p>
                  <p className="text-3xl font-bold text-blue-600 mt-2">{stats.thisWeek}</p>
                </div>
                <TrendingUp className="w-12 h-12 text-blue-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">{stats.thisMonth}</p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today</p>
                  <p className="text-3xl font-bold text-orange-600 mt-2">{stats.today}</p>
                </div>
                <Clock className="w-12 h-12 text-orange-600" />
              </div>
            </div>
              </div>
            )}

            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, email, phone, or appointment number..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                />
              </div>
            </form>


            {/* Refresh Button */}
            <button
              onClick={fetchDashboardData}
              className="px-4 py-2 bg-[#0067AC] text-white rounded-lg hover:bg-[#005a94] transition-colors flex items-center space-x-2"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Refresh</span>
            </button>
            </div>
            </div>

            {/* Appointments Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Appointments</h2>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-[#0067AC]" />
                </div>
              ) : appointments.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No appointments found</p>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Appointment #
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Phone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {appointments.map((appointment) => (
                          <tr key={appointment._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {appointment.appointmentNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {appointment.fullName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {appointment.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {appointment.phone}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              <div>{formatDate(appointment.preferredDate)}</div>
                              <div className="text-xs text-gray-500">{formatTime(appointment.preferredDate)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <button
                                onClick={() => handleDelete(appointment._id)}
                                className="text-red-600 hover:text-red-800 p-1"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
                      <button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Previous
                      </button>
                      <span className="text-sm text-gray-600">
                        Page {page} of {totalPages}
                      </span>
                      <button
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}

        {/* Blogs Tab */}
        {activeTab === 'blogs' && (
          <>
            {/* Blog Filters and Create Button */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search */}
                <form onSubmit={handleBlogSearch} className="flex-1 w-full">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={blogSearchTerm}
                      onChange={(e) => setBlogSearchTerm(e.target.value)}
                      placeholder="Search blogs by title, content..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                    />
                  </div>
                </form>

                {/* Status Filter */}
                <select
                  value={blogStatusFilter}
                  onChange={(e) => {
                    setBlogStatusFilter(e.target.value)
                    setBlogPage(1)
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                >
                  <option value="all">All Status</option>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>

                {/* Create Blog Button */}
                <button
                  onClick={handleCreateBlog}
                  className="px-4 py-2 bg-[#0067AC] text-white rounded-lg hover:bg-[#005a94] transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Create Blog</span>
                </button>

                {/* Refresh Button */}
                <button
                  onClick={fetchBlogs}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* Blogs Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Blogs</h2>
              </div>

              {blogLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-[#0067AC]" />
                </div>
              ) : blogs.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No blogs found</p>
                  <button
                    onClick={handleCreateBlog}
                    className="mt-4 px-4 py-2 bg-[#0067AC] text-white rounded-lg hover:bg-[#005a94] transition-colors"
                  >
                    Create Your First Blog
                  </button>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Image
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Views
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {blogs.map((blog) => (
                          <tr key={blog._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              {blog.featuredImage ? (
                                <img
                                  src={getImageUrl(blog.featuredImage)}
                                  alt={blog.title}
                                  className="w-16 h-16 object-cover rounded"
                                />
                              ) : (
                                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                                  <ImageIcon className="w-6 h-6 text-gray-400" />
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                                {blog.title}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {blog.excerpt.substring(0, 50)}...
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {blog.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`text-xs px-2 py-1 rounded-full ${getBlogStatusColor(blog.status)}`}>
                                {blog.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {blog.views || 0}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {formatDate(blog.createdAt)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleEditBlog(blog)}
                                  className="text-[#0067AC] hover:text-[#005a94] p-1"
                                  title="Edit"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteBlog(blog._id)}
                                  className="text-red-600 hover:text-red-800 p-1"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  {blogTotalPages > 1 && (
                    <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
                      <button
                        onClick={() => setBlogPage(p => Math.max(1, p - 1))}
                        disabled={blogPage === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Previous
                      </button>
                      <span className="text-sm text-gray-600">
                        Page {blogPage} of {blogTotalPages}
                      </span>
                      <button
                        onClick={() => setBlogPage(p => Math.min(blogTotalPages, p + 1))}
                        disabled={blogPage === blogTotalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </main>

      {/* Change Password Modal */}
      <ChangePasswordModal
        isOpen={showChangePasswordModal}
        onClose={() => setShowChangePasswordModal(false)}
        onSuccess={() => {
          checkAuth() // Refresh auth state after password change
        }}
      />

      {/* Blog Modal */}
      <BlogModal
        isOpen={showBlogModal}
        onClose={handleBlogModalClose}
        blog={editingBlog}
        API_URL={API_URL}
      />
    </div>
  )
}

// Blog Modal Component
const BlogModal = ({ isOpen, onClose, blog, API_URL }) => {
  // Helper function to get image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null
    // If imagePath already starts with http, return as is
    if (imagePath.startsWith('http')) return imagePath
    // Get base URL from API_URL (remove /api)
    const baseUrl = API_URL.replace('/api', '')
    return `${baseUrl}${imagePath}`
  }
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'General',
    tags: '',
    status: 'draft',
    metaDescription: '',
    metaKeywords: ''
  })
  const [featuredImage, setFeaturedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || '',
        excerpt: blog.excerpt || '',
        content: blog.content || '',
        category: blog.category || 'General',
        tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : '',
        status: blog.status || 'draft',
        metaDescription: blog.metaDescription || '',
        metaKeywords: Array.isArray(blog.metaKeywords) ? blog.metaKeywords.join(', ') : ''
      })
      if (blog.featuredImage) {
        setImagePreview(getImageUrl(blog.featuredImage))
      }
    } else {
      // Reset form for new blog
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        category: 'General',
        tags: '',
        status: 'draft',
        metaDescription: '',
        metaKeywords: ''
      })
      setFeaturedImage(null)
      setImagePreview(null)
    }
  }, [blog, isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (error) setError('')
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size must be less than 5MB')
        return
      }
      setFeaturedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('title', formData.title)
      formDataToSend.append('excerpt', formData.excerpt)
      formDataToSend.append('content', formData.content)
      formDataToSend.append('category', formData.category)
      formDataToSend.append('tags', formData.tags)
      formDataToSend.append('status', formData.status)
      formDataToSend.append('metaDescription', formData.metaDescription)
      formDataToSend.append('metaKeywords', formData.metaKeywords)

      if (featuredImage) {
        formDataToSend.append('featuredImage', featuredImage)
      }

      const url = blog 
        ? `${API_URL}/admin/blogs/${blog._id}`
        : `${API_URL}/admin/blogs`
      
      const method = blog ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        credentials: 'include',
        body: formDataToSend
      })

      const data = await response.json()

      if (response.ok && data.success) {
        onClose()
      } else {
        setError(data.message || 'Failed to save blog')
      }
    } catch (err) {
      setError('Network error. Please try again.')
      console.error('Blog save error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full max-h-[90vh] overflow-y-auto">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {blog ? 'Edit Blog' : 'Create New Blog'}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                disabled={loading}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
                <button
                  onClick={() => setError('')}
                  className="text-red-600 hover:text-red-800"
                >
                  ×
                </button>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title */}
                <div className="md:col-span-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                    placeholder="Enter blog title"
                  />
                </div>

                {/* Excerpt */}
                <div className="md:col-span-2">
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    required
                    rows="3"
                    value={formData.excerpt}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                    placeholder="Short description (max 500 characters)"
                    maxLength={500}
                  />
                  <p className="mt-1 text-xs text-gray-500">{formData.excerpt.length}/500</p>
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Content *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    required
                    rows="8"
                    value={formData.content}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                    placeholder="Write your blog content here..."
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <input
                    id="category"
                    name="category"
                    type="text"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                    placeholder="General"
                  />
                </div>

                {/* Status */}
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                {/* Tags */}
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    id="tags"
                    name="tags"
                    type="text"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                    placeholder="health, dental, tips"
                  />
                </div>

                {/* Featured Image */}
                <div>
                  <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image
                  </label>
                  <input
                    id="featuredImage"
                    name="featuredImage"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                  />
                  {imagePreview && (
                    <div className="mt-2">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded"
                      />
                    </div>
                  )}
                  <p className="mt-1 text-xs text-gray-500">Max 5MB (JPEG, PNG, GIF, WEBP)</p>
                </div>

                {/* Meta Description */}
                <div className="md:col-span-2">
                  <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description (SEO)
                  </label>
                  <textarea
                    id="metaDescription"
                    name="metaDescription"
                    rows="2"
                    value={formData.metaDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                    placeholder="SEO description (max 160 characters)"
                    maxLength={160}
                  />
                  <p className="mt-1 text-xs text-gray-500">{formData.metaDescription.length}/160</p>
                </div>

                {/* Meta Keywords */}
                <div className="md:col-span-2">
                  <label htmlFor="metaKeywords" className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Keywords (SEO, comma-separated)
                  </label>
                  <input
                    id="metaKeywords"
                    name="metaKeywords"
                    type="text"
                    value={formData.metaKeywords}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none"
                    placeholder="dental, health, tips"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 flex justify-center items-center space-x-2 px-4 py-2 bg-[#0067AC] text-white rounded-lg hover:bg-[#005a94] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{blog ? 'Updating...' : 'Creating...'}</span>
                    </>
                  ) : (
                    <span>{blog ? 'Update Blog' : 'Create Blog'}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecretDashboard

