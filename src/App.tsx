import React from "react";
import InvoiceForm from "./pages/InvoiceForm";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import "./App.css";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <InvoiceForm />
      </div>
    </ApolloProvider>
  );
};

export default App;
