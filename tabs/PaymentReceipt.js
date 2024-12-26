import React, { useState } from "react";
import jsPDF from "jspdf";
import "../style/PaymentReceipt.css";

const PaymentReceipt = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 100, // Example amount
    transactionId: "TX123456789",
    paymentMethod: "Credit Card",
    customerName: " ak",
    paymentDate: new Date().toLocaleDateString(),
  });

  // Function to generate and download the receipt
  const generateReceipt = () => {
    const doc = new jsPDF();

    // Add title and some details to the receipt
    doc.setFontSize(20);
    doc.text("Payment Receipt", 20, 20);
    doc.setFontSize(12);

    // Add payment details
    doc.text(`Customer Name: ${paymentDetails.customerName}`, 20, 40);
    doc.text(`Amount Paid: $${paymentDetails.amount}`, 20, 50);
    doc.text(`Transaction ID: ${paymentDetails.transactionId}`, 20, 60);
    doc.text(`Payment Method: ${paymentDetails.paymentMethod}`, 20, 70);
    doc.text(`Payment Date: ${paymentDetails.paymentDate}`, 20, 80);

    // Add thank you message
    doc.text("Thank you for your payment!", 20, 100);

    // Save the PDF as a file
    doc.save("receipt.pdf");
  };

  return (
    <div className="payment-receipt-container">
      <h2>Payment Completed</h2>
      <p>Your payment has been successfully processed.</p>

      <div className="payment-details">
        <p>
          <strong>Amount Paid:</strong> ${paymentDetails.amount}
        </p>
        <p>
          <strong>Transaction ID:</strong> {paymentDetails.transactionId}
        </p>
        <p>
          <strong>Payment Method:</strong> {paymentDetails.paymentMethod}
        </p>
        <p>
          <strong>Payment Date:</strong> {paymentDetails.paymentDate}
        </p>
      </div>

      {/* Button to download the receipt */}
      <button onClick={generateReceipt} className="download-receipt-btn">
        Download Receipt
      </button>
    </div>
  );
};

export default PaymentReceipt;
