import React, { useState } from 'react'
import { X, Calendar, Clock, Users, CreditCard, Smartphone } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  className?: string
  classTime?: string
  instructor?: string
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  className = 'African Dance Cardio',
  classTime = 'Monday 6:00 PM',
  instructor = 'Meron Tadesse'
}) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: '',
    paymentMethod: '',
    emergencyContact: '',
    healthConditions: '',
    agreeToTerms: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log('Booking submitted:', formData)
    alert('Booking confirmed! You will receive a confirmation email shortly.')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Book Your Class</h2>
            <p className="text-neutral-600">{className} - {classTime}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-neutral-600">Step {step} of 3</span>
            <span className="text-sm text-neutral-500">
              {step === 1 ? 'Personal Info' : step === 2 ? 'Health & Emergency' : 'Payment'}
            </span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                  placeholder="+251 911 123 456"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Membership Type *
                </label>
                <select
                  name="membershipType"
                  required
                  value={formData.membershipType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                >
                  <option value="">Select membership type</option>
                  <option value="trial">Free Trial (First Time)</option>
                  <option value="drop-in">Drop-in Class (200 ETB)</option>
                  <option value="basic">Basic Member</option>
                  <option value="premium">Premium Member</option>
                  <option value="elite">Elite Member</option>
                </select>
              </div>

              {/* Class Details */}
              <div className="bg-neutral-50 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-neutral-900 mb-3">Class Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span>{classTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary-500" />
                    <span>Instructor: {instructor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary-500" />
                    <span>45 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Health & Emergency Contact */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Health & Emergency Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Emergency Contact *
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  required
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                  placeholder="Name and phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Health Conditions or Injuries
                </label>
                <textarea
                  name="healthConditions"
                  value={formData.healthConditions}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                  placeholder="Please list any health conditions, injuries, or physical limitations we should be aware of..."
                />
              </div>

              <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
                <h4 className="font-semibold text-accent-800 mb-2">Health & Safety Notice</h4>
                <p className="text-sm text-accent-700">
                  Please consult with your doctor before starting any new exercise program. 
                  Our instructors are trained to provide modifications, but it's important 
                  that we know about any conditions that might affect your participation.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Payment Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Payment Method *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="flex items-center p-3 border border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobile-money"
                      checked={formData.paymentMethod === 'mobile-money'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <Smartphone className="w-5 h-5 mr-2 text-green-500" />
                    <span className="text-sm">Mobile Money</span>
                  </label>
                  
                  <label className="flex items-center p-3 border border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="visa"
                      checked={formData.paymentMethod === 'visa'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <CreditCard className="w-5 h-5 mr-2 text-blue-500" />
                    <span className="text-sm">Visa</span>
                  </label>
                  
                  <label className="flex items-center p-3 border border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mastercard"
                      checked={formData.paymentMethod === 'mastercard'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <CreditCard className="w-5 h-5 mr-2 text-red-500" />
                    <span className="text-sm">Mastercard</span>
                  </label>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Class:</span>
                    <span className="font-medium">{className}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{classTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Membership:</span>
                    <span className="font-medium">{formData.membershipType || 'Not selected'}</span>
                  </div>
                  <div className="border-t border-neutral-200 pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span className="text-primary-500">
                        {formData.membershipType === 'trial' ? 'FREE' : 
                         formData.membershipType === 'drop-in' ? '200 ETB' : 
                         'Included in membership'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
                <label className="text-sm text-neutral-600">
                  I agree to the <a href="#" className="text-primary-500 hover:underline">Terms of Service</a> and 
                  <a href="#" className="text-primary-500 hover:underline"> Privacy Policy</a>. 
                  I understand the cancellation policy and health & safety guidelines.
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
            <button
              type="button"
              onClick={step === 1 ? onClose : handlePrevious}
              className="px-6 py-3 text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              {step === 1 ? 'Cancel' : 'Previous'}
            </button>
            
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn-primary"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!formData.agreeToTerms}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingModal
