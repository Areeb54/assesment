export interface Address {
  streetAddress: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice?: number;
}

export interface FormValues {
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  billingToAttributes: {
    clientName: string;
    clientEmail: string;
    billingToAddress: Address;
  };
  billingFromAttributes: {
    companyName: string;
    companyEmail: string;
    billingFromAddress: Address;
  };
  itemAttributes: Item[];
  totalAmount: number;
}
