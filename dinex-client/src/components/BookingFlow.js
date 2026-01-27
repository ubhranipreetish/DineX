"use client";
import { useState } from "react";
import BookingForm from "./BookingForm";
import ReviewBooking from "./ReviewBooking";
import Payment from "./Payment";
import { useNotification } from "@/context/NotificationContext";

export default function BookingFlow({ restaurantName, restaurantId, offers = [], scrollToTop }) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState(null);
  const { showToast } = useNotification();

  const handleBookingSubmit = (data) => {
    setBookingData(data);
    setStep(2);
    if (scrollToTop) scrollToTop();
  };

  const handleProceedToPayment = () => {
    setStep(3);
    if (scrollToTop) scrollToTop();
  };
  const handlePaymentComplete = () => {
    showToast("Payment successful! Your table has been reserved.", "success");
    setStep(1);
    setBookingData(null);
  };

  return (
    <div className="mt-4">
      {step === 1 && (
        <BookingForm
          restaurantName={restaurantName}
          restaurantId={restaurantId}
          offers={offers}
          onSubmit={handleBookingSubmit}
        />
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
