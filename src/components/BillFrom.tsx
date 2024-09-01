import React from "react";
import { FormValues } from "../types";

interface Props {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: FormValues["billingFromAttributes"];
}

const BillFrom: React.FC<Props> = ({ handleInputChange, values }) => {
  return (
    <div>
      <h3>Bill From</h3>
      <div className="billfrom-container">
        <div className="column">
          <span>Company Name</span>
          <input
            type="text"
            name="billingFromAttributes.companyName"
            value={values.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column ml-15">
          <span>Company Email</span>
          <input
            type="email"
            name="billingFromAttributes.companyEmail"
            value={values.companyEmail}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>{" "}
      <div className="billfrom-container input-w-100">
        <div className="column">
          <span>Country</span>
          <input
            type="text"
            name="billingFromAttributes.billingFromAddress.country"
            placeholder="Country"
            value={values.billingFromAddress.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column">
          <span>City</span>
          <input
            type="text"
            name="billingFromAttributes.billingFromAddress.city"
            value={values.billingFromAddress.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column">
          <span>Postal Code</span>
          <input
            type="text"
            name="billingFromAttributes.billingFromAddress.postalCode"
            value={values.billingFromAddress.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="column">
        <span>Street Address</span>
        <input
          type="text"
          name="billingFromAttributes.billingFromAddress.streetAddress"
          value={values.billingFromAddress.streetAddress}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
};

export default BillFrom;
