import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_INVOICE } from "../graphql/mutations";
import BillFrom from "../components/BillFrom";
import BillTo from "../components/BillTo";
import InvoiceDetails from "../components/Invoicedetails";
import ItemsList from "../components/ItemsList";
import RealTimeDisplay from "../components/RealTimeDisplay";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormValues } from "../types";

const initialFormValues: FormValues = {
  invoiceDate: new Date().toISOString().split("T")[0],
  paymentTerms: "NET_10_DAYS",
  projectDescription: "",
  billingToAttributes: {
    clientName: "",
    clientEmail: "",
    billingToAddress: {
      streetAddress: "",
      city: "",
      country: "",
      postalCode: "",
    },
  },
  billingFromAttributes: {
    companyName: "",
    companyEmail: "",
    billingFromAddress: {
      streetAddress: "",
      city: "",
      country: "",
      postalCode: "",
    },
  },
  itemAttributes: [{ id: "", name: "", price: 0, quantity: 0 }],
  totalAmount: null,
};

const InvoiceForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const [createInvoice] = useMutation(CREATE_INVOICE);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const [outerKey, innerKey, nestedKey] = name.split(".");
    setFormValues((prev) => {
      if (nestedKey) {
        return {
          ...prev,
          [outerKey]: {
            ...prev[outerKey],
            [innerKey]: {
              ...prev[outerKey][innerKey],
              [nestedKey]: value,
            },
          },
        };
      } else if (innerKey) {
        return {
          ...prev,
          [outerKey]: {
            ...prev[outerKey],
            [innerKey]: value,
          },
        };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleItemsChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    setFormValues((prev) => {
      const newItems = [...prev.itemAttributes];
      newItems[index] = { ...newItems[index], [field]: value };
      return { ...prev, itemAttributes: newItems };
    });
  };

  const addItem = () => {
    setFormValues((prev) => ({
      ...prev,
      itemAttributes: [
        ...prev.itemAttributes,
        { id: "", name: "", price: null, quantity: null },
      ],
    }));
  };

  const resetForm = () => {
    setFormValues(initialFormValues);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const input = {
      clientMutationId: "random id",
      createInvoiceAttributes: {
        invoiceDate: formValues.invoiceDate,
        paymentTerms: formValues.paymentTerms,
        projectDescription: formValues.projectDescription,
        billingToAttributes: {
          clientName: formValues.billingToAttributes.clientName,
          clientEmail: formValues.billingToAttributes.clientEmail,
          billingToAddressAttributes: {
            streetAddress:
              formValues.billingToAttributes.billingToAddress.streetAddress,
            city: formValues.billingToAttributes.billingToAddress.city,
            country: formValues.billingToAttributes.billingToAddress.country,
            postalCode:
              formValues.billingToAttributes.billingToAddress.postalCode,
          },
        },
        billingFromAttributes: {
          companyName: formValues.billingFromAttributes.companyName,
          companyEmail: formValues.billingFromAttributes.companyEmail,
          billingFromAddressAttributes: {
            streetAddress:
              formValues.billingFromAttributes.billingFromAddress.streetAddress,
            city: formValues.billingFromAttributes.billingFromAddress.city,
            country:
              formValues.billingFromAttributes.billingFromAddress.country,
            postalCode:
              formValues.billingFromAttributes.billingFromAddress.postalCode,
          },
        },
        itemAttributes: formValues.itemAttributes.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    };

    try {
      console.log("input data", input);
      const invoiceResponse = await createInvoice({ variables: { input } });
      console.log("invoice response", invoiceResponse);
      toast.success("Invoice created successfully!");
      resetForm();
    } catch (error) {
      console.error("Error creating invoice:", error.message);
      toast.error("Error creating invoice.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="invoice-header">
        <div>
          <div className="invoice-title">New Invoice</div>
          <div className="invoice-subtitle">
            Create a new invoice for your customers
          </div>
        </div>
        <div>
          <button type="button" onClick={resetForm}>
            Reset
          </button>
          <button type="submit">Save</button>
        </div>
      </div>
      <div className="invoice-card-container">
        <div className="invoice-details-card">
          <BillFrom
            handleInputChange={handleInputChange}
            values={formValues.billingFromAttributes}
          />
          <BillTo
            handleInputChange={handleInputChange}
            values={formValues.billingToAttributes}
          />
          <InvoiceDetails
            handleInputChange={handleInputChange}
            values={formValues}
          />
          <ItemsList
            items={formValues.itemAttributes}
            handleItemsChange={handleItemsChange}
            addItem={addItem}
          />
        </div>
        <div className="invoice-preview-card">
          <RealTimeDisplay data={formValues} />
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default InvoiceForm;
