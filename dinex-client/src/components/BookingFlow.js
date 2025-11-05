"use client";
import { useState } from "react";
import BookingForm from "./BookingForm";
import ReviewBooking from "./ReviewBooking";
import Payment from "./Payment";

export default function BookingFlow({ restaurantName }) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState(null);

  const handleBookingSubmit = (data) => {
    setBookingData(data);
    setStep(2);
  };

  const handleProceedToPayment = () => {
    setStep(3);
  };

  const handlePaymentComplete = () => {
    alert("✅ Payment successful! Your table has been reserved.");
    setStep(1);
    setBookingData(null);
  };

  return (
    <div className="mt-10">
      {step === 1 && (
        <BookingForm restaurantName={restaurantName} onSubmit={handleBookingSubmit} />
      )}
      {step === 2 && (
        <ReviewBooking data={bookingData} onProceed={handleProceedToPayment} />
      )}
      {step === 3 && (
        <Payment data={bookingData} onComplete={handlePaymentComplete} />
      )}
    </div>
  );
}
