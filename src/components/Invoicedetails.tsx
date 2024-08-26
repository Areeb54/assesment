import React from "react";
import { FormValues } from "../types";

interface Props {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  values: Pick<
    FormValues,
    "invoiceDate" | "paymentTerms" | "projectDescription"
  >;
}

const InvoiceDetails: React.FC<Props> = ({ handleInputChange, values }) => {
  return (
    <div>
      {/* <h3>Invoice Details</h3> */}
      <div className="column">
        <span>invoice Date</span>
        <input
          type="date"
          name="invoiceDate"
          value={values.invoiceDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="column">
        <span>payment Terms</span>
        <select
          name="paymentTerms"
          value={values.paymentTerms}
          onChange={handleInputChange}
          required
        >
          <option value="NET_10_DAYS">Net 10 Days</option>
          <option value="NET_20_DAYS">Net 20 Days</option>
          <option value="NET_30_DAYS">Net 30 Days</option>
        </select>
      </div>
      <div className="column">
        <span>project Description</span>
        <input
          type="text"
          name="projectDescription"
          placeholder="Project Description"
          value={values.projectDescription}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
};

export default InvoiceDetails;
