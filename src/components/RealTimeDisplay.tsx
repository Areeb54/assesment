import React from "react";
import { FormValues } from "../types";

const RealTimeDisplay: React.FC<{ data: FormValues }> = ({ data }) => {
  return (
    <div>
      <h3>Invoice Preview</h3>
      <p>From: {data.billingFromAttributes.companyName}</p>
      <p>From Email: {data.billingFromAttributes.companyEmail}</p>
      <p>
        From Address:{" "}
        {`${data.billingFromAttributes.billingFromAddress.streetAddress}, ${data.billingFromAttributes.billingFromAddress.city}, ${data.billingFromAttributes.billingFromAddress.country}, ${data.billingFromAttributes.billingFromAddress.postalCode}`}
      </p>
      <p>To: {data.billingToAttributes.clientName}</p>
      <p>To Email: {data.billingToAttributes.clientEmail}</p>
      <p>
        To Address:{" "}
        {`${data.billingToAttributes.billingToAddress.streetAddress}, ${data.billingToAttributes.billingToAddress.city}, ${data.billingToAttributes.billingToAddress.country}, ${data.billingToAttributes.billingToAddress.postalCode}`}
      </p>
      <p>Date: {data.invoiceDate}</p>
      <p>Terms: {data.paymentTerms}</p>
      <p>Description: {data.projectDescription}</p>
      <p>Total Amount: ${data.totalAmount.toFixed(2)}</p>
      {data.itemAttributes.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} - {item.quantity} x ${item.price} = ${item.totalPrice}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RealTimeDisplay;
