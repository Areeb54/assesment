import React from "react";
import { FormValues } from "../types";

interface Props {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: FormValues["billingToAttributes"];
}

const BillTo: React.FC<Props> = ({ handleInputChange, values }) => {
  return (
    <div>
      <h3>Bill To</h3>
      <div className="billfrom-container">
        <div className="column">
          <span>Client's Name</span>
          <input
            type="text"
            name="billingToAttributes.clientName"
            value={values.clientName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column ml-15">
          <span>Client's Email</span>
          <input
            type="email"
            name="billingToAttributes.clientEmail"
            value={values.clientEmail}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="billfrom-container input-w-100">
        <div className="column">
          <span>Country</span>
          <input
            type="text"
            name="billingToAttributes.billingToAddress.country"
            placeholder="Country"
            value={values.billingToAddress.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column">
          <span>City</span>
          <input
            type="text"
            name="billingToAttributes.billingToAddress.city"
            value={values.billingToAddress.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column">
          <span>Postal Code</span>
          <input
            type="text"
            name="billingToAttributes.billingToAddress.postalCode"
            value={values.billingToAddress.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="column">
        <span>Street Address</span>
        <input
          type="text"
          name="billingToAttributes.billingToAddress.streetAddress"
          placeholder="Street"
          value={values.billingToAddress.streetAddress}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
};

export default BillTo;
