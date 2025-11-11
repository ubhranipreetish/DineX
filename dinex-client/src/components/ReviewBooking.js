import { Calendar, Clock, Users, IndianRupee, CheckCircle, AlertCircle, Tag } from 'lucide-react';

export default function ReviewBooking({ data, onProceed }) {
  return (
    <div className="min-h-screen border border-gray-300 rounded-xl py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Main Details */}
          <div className="lg:col-span-2 space-y-4">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Review Your Booking</h3>
                  <p className="text-sm text-gray-500">Please verify your reservation details</p>
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Dining at</p>
                <h4 className="text-xl font-bold text-gray-800">{data.restaurantName}</h4>
                {data.restaurantAddress && (
                  <p className="text-sm text-gray-600 mt-1">{data.restaurantAddress}</p>
                )}
              </div>
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Reservation Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Calendar className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-medium">Date</p>
                    <p className="text-base font-semibold text-gray-800">
                      {new Date(data.date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-medium">Time</p>
                    <p className="text-base font-semibold text-gray-800">{data.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Users className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-medium">Guests</p>
                    <p className="text-base font-semibold text-gray-800">
                      {data.people} {data.people === 1 ? 'Person' : 'People'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <IndianRupee className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-green-700 font-medium">Booking Amount</p>
                    <p className="text-xl font-bold text-green-800">₹{data.amount}</p>
                  </div>
                </div>
              </div>

              {/* Selected Offer */}
              {data.offer !== null && typeof data.offer === "number" && (
                <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <Tag className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-amber-700 font-medium mb-1">Applied Offer</p>
                      <h5 className="font-bold text-amber-900 mb-1">
                        {data.offers?.[data.offer]?.title || "Selected Offer"}
                      </h5>
                      <p className="text-sm font-semibold text-amber-800">
                        {data.offers?.[data.offer]?.desc}
                      </p>
                      {data.offers?.[data.offer]?.sub && (
                        <p className="text-xs text-amber-600 mt-1">
                          {data.offers[data.offer].sub}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {data.specialRequests && data.specialRequests.trim() !== "" && (
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-600 font-medium mb-1">
                        Special Request
                      </p>
                      <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                        “{data.specialRequests}”
                      </p>
                    </div>
                  </div>
                </div>
              )}


            </div>

            {/* Terms & Conditions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Important Information</h4>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-gray-700">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Booking amount of <strong>₹{data.amount}</strong> is fully redeemable on your final bill</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-700">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Please arrive within <strong>15 minutes</strong> of your reservation time</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-700">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Cancellation within <strong>1 hour</strong> before booking time will forfeit the amount</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-700">
                  <span className="text-red-600 font-bold">•</span>
                  <span>You will receive a confirmation via email and SMS</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Summary & Payment */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              {/* Price Summary */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Payment Summary</h4>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Booking Amount</span>
                    <span className="font-semibold text-gray-800">₹{data.amount}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Platform Fee</span>
                    <span className="font-semibold text-gray-800">₹0</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-base font-bold text-gray-800">Total Amount</span>
                    <span className="text-xl font-bold text-red-600">₹{data.amount}</span>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-xs text-green-700 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Full amount redeemable on your bill
                  </p>
                </div>

                {/* Action Button */}
                <button
                  onClick={onProceed}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <IndianRupee className="w-5 h-5" />
                  Proceed to Payment
                </button>

                {/* Security Badge */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Secure payment
                  </p>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">Need Help?</h4>
                <p className="text-sm text-blue-800 mb-3">
                  Our support team is available 24/7 to assist you with your booking.
                </p>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                  Contact Support →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}