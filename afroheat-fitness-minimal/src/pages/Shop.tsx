import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ShoppingCart, Heart, Star } from 'lucide-react'

const Shop: React.FC = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({})

  const products = [
    {
      id: 1,
      name: 'AfroHeat Sports Bra',
      price: 450,
      originalPrice: 600,
      image: 'https://images.unsplash.com/photo-1506629905607-45c8e8e8e2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Apparel',
      rating: 4.8,
      reviews: 24,
      description: 'High-support sports bra with African-inspired patterns',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Orange', 'Red', 'Yellow'],
      inStock: true,
    },
    {
      id: 2,
      name: 'AfroHeat Leggings',
      price: 650,
      originalPrice: 800,
      image: 'https://images.unsplash.com/photo-1506629905607-45c8e8e8e2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Apparel',
      rating: 4.9,
      reviews: 31,
      description: 'High-waisted leggings with vibrant African prints',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Orange', 'Red', 'Yellow'],
      inStock: true,
    },
    {
      id: 3,
      name: 'AfroHeat Water Bottle',
      price: 200,
      originalPrice: 250,
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Accessories',
      rating: 4.7,
      reviews: 18,
      description: 'Insulated water bottle with AfroHeat logo',
      sizes: ['750ml'],
      colors: ['Orange', 'Black'],
      inStock: true,
    },
    {
      id: 4,
      name: 'AfroHeat Tank Top',
      price: 350,
      originalPrice: 450,
      image: 'https://images.unsplash.com/photo-1506629905607-45c8e8e8e2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Apparel',
      rating: 4.6,
      reviews: 15,
      description: 'Breathable tank top perfect for dance cardio',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Orange', 'Red'],
      inStock: false,
    },
    {
      id: 5,
      name: 'AfroHeat Gym Bag',
      price: 800,
      originalPrice: 1000,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Accessories',
      rating: 4.8,
      reviews: 22,
      description: 'Spacious gym bag with African-inspired design',
      sizes: ['One Size'],
      colors: ['Orange', 'Black'],
      inStock: true,
    },
    {
      id: 6,
      name: 'AfroHeat Resistance Bands',
      price: 300,
      originalPrice: 400,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Equipment',
      rating: 4.9,
      reviews: 28,
      description: 'Set of 3 resistance bands for home workouts',
      sizes: ['Light', 'Medium', 'Heavy'],
      colors: ['Orange Set'],
      inStock: true,
    },
  ]

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }))
  }

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId))
      return total + (product ? product.price * quantity : 0)
    }, 0)
  }

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  }

  return (
    <>
      <Helmet>
        <title>Shop - AfroHeat Fitness | African-Inspired Fitness Apparel & Accessories</title>
        <meta 
          name="description" 
          content="Shop AfroHeat Fitness apparel and accessories. High-quality workout clothes with African-inspired designs, gym equipment, and wellness products." 
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              AfroHeat Shop
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Express your strength and culture with our exclusive collection of 
              African-inspired fitness apparel and accessories.
            </p>
          </div>
        </section>

        {/* Coming Soon Banner */}
        <section className="bg-accent-500 text-white py-4">
          <div className="container-custom text-center">
            <p className="font-medium">
              🎉 Grand Opening Soon! Pre-order now and get 20% off your first purchase
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            {/* Cart Summary */}
            {getCartItemCount() > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-4 mb-8 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5 text-primary-500" />
                  <span className="font-medium">
                    {getCartItemCount()} items in cart
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold">
                    {getCartTotal()} ETB
                  </span>
                  <button className="btn-primary">
                    Checkout
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`card overflow-hidden animate-slide-up animation-delay-${index * 100}`}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white text-neutral-900 px-4 py-2 rounded-lg font-medium">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-neutral-600" />
                    </button>
                    {product.originalPrice > product.price && (
                      <div className="absolute top-4 left-4 bg-secondary-500 text-white px-2 py-1 rounded text-sm font-medium">
                        Sale
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary-500 font-medium">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-accent-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-neutral-500">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm mb-4">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-neutral-900">
                          {product.price} ETB
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-neutral-500 line-through">
                            {product.originalPrice} ETB
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-neutral-700 mb-1 block">
                          Size:
                        </label>
                        <select className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm">
                          {product.sizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-neutral-700 mb-1 block">
                          Color:
                        </label>
                        <div className="flex space-x-2">
                          {product.colors.map(color => (
                            <button
                              key={color}
                              className="w-8 h-8 rounded-full border-2 border-neutral-300 hover:border-primary-500 transition-colors"
                              style={{ 
                                backgroundColor: color.toLowerCase() === 'orange' ? '#f97316' : 
                                                color.toLowerCase() === 'red' ? '#ef4444' :
                                                color.toLowerCase() === 'yellow' ? '#facc15' :
                                                color.toLowerCase() === 'black' ? '#000000' :
                                                '#ffffff'
                              }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                          product.inStock
                            ? 'btn-primary'
                            : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Add to Cart' : 'Coming Soon'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Be the First to Know
              </h3>
              <p className="text-neutral-600 mb-6">
                Sign up for our newsletter to get notified when new products launch 
                and receive exclusive member discounts.
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-neutral-300 rounded-l-lg focus:outline-none focus:border-primary-500"
                />
                <button className="btn-primary rounded-l-none">
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

export default Shop
