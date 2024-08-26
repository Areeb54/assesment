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
      <div className="column">
        <span>Company Name</span>
        <input
          type="text"
          name="billingFromAttributes.companyName"
          placeholder="Your Company Name"
          value={values.companyName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="column">
        <span>Company Email</span>
        <input
          type="email"
          name="billingFromAttributes.companyEmail"
          placeholder="Your Company Email"
          value={values.companyEmail}
          onChange={handleInputChange}
          required
        />
      </div>{" "}
      <div className="column">
        <span>Street Address</span>
        <input
          type="text"
          name="billingFromAttributes.billingFromAddress.streetAddress"
          placeholder="Street"
          value={values.billingFromAddress.streetAddress}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="column">
        <span>City</span>
        <input
          type="text"
          name="billingFromAttributes.billingFromAddress.city"
          placeholder="City"
          value={values.billingFromAddress.city}
          onChange={handleInputChange}
          required
        />
      </div>
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
        <span>Postal Code</span>
        <input
          type="text"
          name="billingFromAttributes.billingFromAddress.postalCode"
          placeholder="Postal Code"
          value={values.billingFromAddress.postalCode}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
};

export default BillFrom;
