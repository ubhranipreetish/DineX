export default function ReviewBooking({ data, onProceed }) {
    return (
      <div className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Review Your Booking</h3>
  
        <div className="space-y-3 text-gray-700">
          <p><strong>Restaurant:</strong> {data.restaurantName}</p>
          <p><strong>Date:</strong> {data.date}</p>
          <p><strong>Time:</strong> {data.time}</p>
          <p><strong>People:</strong> {data.people}</p>
          <p><strong>Booking Amount:</strong> ₹{data.amount} (redeemable on your bill)</p>
        </div>
  
        <div className="mt-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold mb-2 text-gray-800">Terms & Conditions:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Booking amount is redeemable on your final bill.</li>
            <li>Please arrive within 15 minutes of your booking time.</li>
            <li>Cancellation within 1 hour will forfeit the booking amount.</li>
          </ul>
        </div>
  
        <button
          onClick={onProceed}
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Proceed to Payment
        </button>
      </div>
    );
  }
  