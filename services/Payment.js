import React, { useState } from "react";
// import QRCode from "qrcode.react"; // Make sure to install qrcode.react via npm or yarn
// import { QRCodeSVG } from "qrcode.react";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 100, // Example amount
    transactionId: "TX123456789",
    paymentMethod: "Credit Card",
    customerName: " ",
    paymentDate: new Date().toLocaleDateString(),
  });

  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [otp, setOtp] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [upiId, setUpiId] = useState("");
  const [receiptData, setReceiptData] = useState(null);

  // Validate the form input
  const validateForm = () => {
    if (!amount || !paymentMethod) {
      return false;
    }

    if (paymentMethod === "credit-card" && (!cardNumber || !cvv || !otp)) {
      return false;
    }
    if (
      paymentMethod === "bank-transfer" &&
      (!accountNumber || !ifscCode || !otp)
    ) {
      return false;
    }
    if (paymentMethod === "paypal" && !upiId) {
      return false;
    }

    return true;
  };

  // Handle form submission and show confirmation popup
  const handlePayment = () => {
    if (validateForm()) {
      setShowPopup(true);
    } else {
      alert("Please complete all fields.");
    }
  };

  // Simulate sending an email to the user (in reality, backend service is required)
  const sendConfirmationEmail = () => {
    console.log(`Sending confirmation email to user@example.com`);
    alert("A payment confirmation email has been sent!");
  };

  // Confirm the payment and send email notification
  const confirmPayment = () => {
    setPaymentStatus("Payment successful! Thank you for your payment.");
    setReceiptData({
      ...paymentDetails,
      paymentMethod,
      amount,
      transactionId:
        "TX" + Math.random().toString(36).substring(2, 15).toUpperCase(),
      paymentDate: new Date().toLocaleDateString(),
    });
    sendConfirmationEmail(); // Simulate sending email after payment
    setShowPopup(false); // Close the pop-up
  };

  // Cancel the payment and close the pop-up
  const cancelPayment = () => {
    setShowPopup(false);
  };

  // Generate the download receipt
  const generateReceipt = () => {
    const receiptContent = `
      Payment Receipt
      =====================
      Customer Name: ${paymentDetails.customerName}
      Transaction ID: ${paymentDetails.transactionId}
      Amount: ₹${amount}
      Payment Method: ${paymentMethod}
      Payment Date: ${new Date().toLocaleDateString()}
    `;
    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `PaymentReceipt_${paymentDetails.transactionId}.txt`;
    a.click();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Payment Page</h1>

      <div style={styles.formContainer}>
        {/* Payment Amount */}
        <label htmlFor="amount" style={styles.label}>
          Enter Payment Amount₹
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
          placeholder="Enter amount"
        />

        {/* Payment Method */}
        <label htmlFor="payment-method" style={styles.label}>
          Select Payment Method
        </label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Payment Method</option>
          <option value="credit-card">Credit/Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>

        {/* Card Payment Fields */}
        {paymentMethod === "credit-card" && (
          <div>
            <label htmlFor="card-number" style={styles.label}>
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              style={styles.input}
              placeholder="Enter card number"
            />
            <label htmlFor="cvv" style={styles.label}>
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              style={styles.input}
              placeholder="Enter CVV"
            />
            <label htmlFor="otp" style={styles.label}>
              OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={styles.input}
              placeholder="Enter OTP"
            />
          </div>
        )}

        {/* Bank Transfer Fields */}
        {paymentMethod === "bank-transfer" && (
          <div>
            <label htmlFor="account-number" style={styles.label}>
              Account Number
            </label>
            <input
              type="text"
              id="account-number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              style={styles.input}
              placeholder="Enter account number"
            />
            <label htmlFor="ifsc-code" style={styles.label}>
              IFSC Code
            </label>
            <input
              type="text"
              id="ifsc-code"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              style={styles.input}
              placeholder="Enter IFSC code"
            />
            <label htmlFor="otp" style={styles.label}>
              OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={styles.input}
              placeholder="Enter OTP"
            />
          </div>
        )}

        {/* PayPal/UPI Fields */}
        {paymentMethod === "paypal" && (
          <div>
            <label htmlFor="upi-id" style={styles.label}>
              UPI ID
            </label>
            <input
              type="text"
              id="upi-id"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              style={styles.input}
              placeholder="Enter UPI ID"
            />
          </div>
        )}

        {/* Submit Button */}
        <button onClick={handlePayment} style={styles.submitButton}>
          Proceed to Payment
        </button>

        {/* Payment Status */}
        {paymentStatus && (
          <div style={styles.paymentStatus}>
            <p>{paymentStatus}</p>
          </div>
        )}
      </div>

      {/* Transfer Amount Confirmation Popup */}
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <h3>Confirm Payment</h3>
            <p>
              You are about to transfer ₹{amount} using {paymentMethod}.
            </p>

            Show QR Code for payment
            {/* {paymentMethod === "paypal" && (
              <div>
                <QRCode
                  value={`Amount: ₹${amount}, Method: ${paymentMethod}`}
                />
              </div>
            )} */}

            <button onClick={confirmPayment} style={styles.popupButton}>
              Confirm Payment
            </button>
            <button onClick={cancelPayment} style={styles.popupButton}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Download Receipt Button */}
      {receiptData && (
        <div>
          <button onClick={generateReceipt} style={styles.submitButton}>
            Download Receipt
          </button>
        </div>
      )}
    </div>
  );
};

// Styling for the components with a sports background
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    background:
      'url("https://www.example.com/sports-background.jpg") no-repeat center center fixed', // Use your sports-related image URL
    backgroundSize: "cover",
    minHeight: "100vh",
    backdropFilter: "blur(5px)", // Optional blur effect for the background
  },
  heading: {
    fontSize: "3rem",
    color: "#fff",
    marginBottom: "30px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Text shadow for readability
  },
  formContainer: {
    background: "rgba(255, 255, 255, 0.8)", // Slightly transparent white background for contrast
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
    backdropFilter: "blur(10px)", // Slight blur on the form for aesthetic
  },
  label: {
    fontSize: "1rem",
    marginBottom: "8px",
    color: "#555",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    width: "100%",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
  },
  select: {
    padding: "12px",
    fontSize: "1rem",
    width: "100%",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
  },
  submitButton: {
    padding: "12px 24px",
    fontSize: "1.2rem",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.3s ease",
  },
  paymentStatus: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#d4edda",
    borderRadius: "5px",
    color: "#155724",
    border: "1px solid #c3e6cb",
    textAlign: "center",
  },
  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  popupContent: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  popupButton: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    marginRight: "10px",
  },
};

export default PaymentPage;
