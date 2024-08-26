import { gql } from '@apollo/client';

export const CREATE_INVOICE = gql`
  mutation CreateInvoice($input: CreateInvoiceInput!) {
    createInvoice(input: $input) {
      id
      invoiceDate
      paymentTerms
      projectDescription
      billingFrom {
        id
        companyName
        companyEmail
        billingFromAddress {
          streetAddress
          city
          country
          postalCode
        }
      }
      billingTo {
        id
        clientName
        clientEmail
        billingToAddress {
          streetAddress
          city
          country
          postalCode
        }
      }
      items {
        id
        name
        price
        quantity
      }
      subTotal
      tax
      totalAmount
    }
  }
`;
