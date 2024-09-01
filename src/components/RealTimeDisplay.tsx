import React from "react";
import { FormValues } from "../types";

const RealTimeDisplay: React.FC<{ data: FormValues }> = ({ data }) => {
  const subtotal = data.itemAttributes.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const tax = subtotal * 0.1;

  const total = subtotal + tax;
  return (
    <div>
      <h3> Preview</h3>
      <div className="invoice-details">
        <h4>New Invoice</h4>
        <hr className="divider" />
        <div className="invoice-details-preview-card">
          <div>
            <label>Invoice Date</label>
            <p className="mb-40">{data.invoiceDate}</p>
            <label>Billed From</label>
            <p>{data.billingFromAttributes.companyName}</p>
            <p>{data.billingFromAttributes.companyEmail}</p>
            <p>{data.billingFromAttributes.billingFromAddress.streetAddress}</p>
            <p>
              {`${
                data.billingFromAttributes.billingFromAddress.city +
                  data.billingFromAttributes.billingFromAddress.city && ","
              } ${data.billingFromAttributes.billingFromAddress.postalCode}`}
            </p>
            <p>{data.billingFromAttributes.billingFromAddress.country}</p>
          </div>
          <div className="payment-terms-section">
            <label>Payment Terms </label>
            <p className="mb-40">{data.paymentTerms}</p>
            <label>Billed To</label>
            <p>{data.billingToAttributes.clientName}</p>
            <p>{data.billingToAttributes.clientEmail}</p>
            <p>{data.billingToAttributes.billingToAddress.streetAddress}</p>
            <p>
              {`${
                data.billingToAttributes.billingToAddress.city +
                  data.billingToAttributes.billingToAddress.city && ","
              } ${data.billingToAttributes.billingToAddress.postalCode}`}
            </p>
            <p>{data.billingToAttributes.billingToAddress.country}</p>
          </div>
        </div>
        <label>Project Description </label>
        <p>{data.projectDescription}</p>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {data?.itemAttributes.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price !== null && `$ ${item.price}`}</td>
                <td>
                  {item.quantity | item.price &&
                    `$ ${item.quantity * item.price}`}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Subtotal</td>
              <td>$ {subtotal}</td>
            </tr>
            <tr>
              <td colSpan={3}>Tax</td>
              <td>10%</td>
            </tr>
            <tr>
              <td colSpan={3}>Total</td>
              <td>$ {total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RealTimeDisplay;
