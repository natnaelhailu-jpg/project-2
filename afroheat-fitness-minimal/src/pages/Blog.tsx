import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, ArrowRight, Heart } from 'lucide-react'

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: '5 Traditional Ethiopian Foods That Boost Your Workout Performance',
      excerpt: 'Discover how traditional Ethiopian ingredients like teff, berbere, and honey can enhance your fitness routine and provide sustained energy.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Bethlehem Girma',
      date: '2024-01-15',
      category: 'Nutrition',
      readTime: '5 min read',
      featured: true,
    },
    {
      id: 2,
      title: 'The Cultural Significance of African Dance in Fitness',
      excerpt: 'Explore how traditional African dance movements connect us to our heritage while providing an incredible full-body workout.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Meron Tadesse',
      date: '2024-01-10',
      category: 'Culture',
      readTime: '7 min read',
      featured: false,
    },
    {
      id: 3,
      title: 'Building Confidence Through Strength Training',
      excerpt: 'Learn how strength training goes beyond physical benefits to build mental resilience and self-confidence in women.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Sara Bekele',
      date: '2024-01-05',
      category: 'Fitness',
      readTime: '6 min read',
      featured: false,
    },
    {
      id: 4,
      title: 'Creating a Supportive Fitness Community for Women',
      excerpt: 'The importance of sisterhood in fitness and how AfroHeat creates a safe space for women to grow stronger together.',
      image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Almaz Tesfaye',
      date: '2024-01-01',
      category: 'Community',
      readTime: '4 min read',
      featured: false,
    },
    {
      id: 5,
      title: 'Pre and Post Workout Nutrition for African Cuisine Lovers',
      excerpt: 'Optimize your workout results with traditional Ethiopian meals and snacks that fuel performance and recovery.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Bethlehem Girma',
      date: '2023-12-28',
      category: 'Nutrition',
      readTime: '8 min read',
      featured: false,
    },
    {
      id: 6,
      title: 'Self-Defense Techniques Every Woman Should Know',
      excerpt: 'Essential self-defense moves that can be practiced at home and integrated into your fitness routine for empowerment.',
      image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Hanan Mohammed',
      date: '2023-12-25',
      category: 'Self-Defense',
      readTime: '10 min read',
      featured: false,
    },
  ]

  const categories = ['All', 'Nutrition', 'Fitness', 'Culture', 'Community', 'Self-Defense']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Nutrition': return 'bg-green-100 text-green-700'
      case 'Fitness': return 'bg-primary-100 text-primary-700'
      case 'Culture': return 'bg-secondary-100 text-secondary-700'
      case 'Community': return 'bg-purple-100 text-purple-700'
      case 'Self-Defense': return 'bg-accent-100 text-accent-700'
      default: return 'bg-neutral-100 text-neutral-700'
    }
  }

  return (
    <>
      <Helmet>
        <title>Blog - AfroHeat Fitness | Fitness Tips, Nutrition & Community Stories</title>
        <meta 
          name="description" 
          content="Read AfroHeat Fitness blog for fitness tips, healthy Ethiopian recipes, community stories, and wellness advice for women in Addis Ababa." 
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              AfroHeat Blog
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Fitness tips, healthy recipes, and inspiring stories from our 
              vibrant community of strong African women.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="card overflow-hidden animate-slide-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-neutral-500">{featuredPost.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-neutral-600 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-neutral-400" />
                        <span className="text-sm text-neutral-600">{featuredPost.author}</span>
                        <Calendar className="w-5 h-5 text-neutral-400" />
                        <span className="text-sm text-neutral-600">{formatDate(featuredPost.date)}</span>
                      </div>
                      
                      <button className="btn-primary flex items-center space-x-2">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 bg-neutral-50">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <article
                  key={post.id}
                  className={`card overflow-hidden animate-slide-up animation-delay-${index * 200}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-neutral-600" />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    
                    <button className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center space-x-1 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="card p-8 lg:p-12 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                Stay Updated with Our Latest Posts
              </h2>
              <p className="text-neutral-600 mb-6">
                Get weekly fitness tips, healthy recipes, and inspiring stories 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Blog
