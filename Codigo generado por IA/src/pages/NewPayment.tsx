
import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PaymentForm, { PaymentFormData } from "@/components/PaymentForm";
import Button from "@/components/Button";

const NewPayment = () => {
  const handleSubmit = (data: PaymentFormData) => {
    console.log("Payment form data:", data);
    // Data is passed to the next screen via navigation
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center">
          <Link to="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">Registrar nuevo pago</h1>
        </div>

        <div className="rounded-2xl bg-card/50 p-1">
          <PaymentForm onSubmit={handleSubmit} />
        </div>
      </div>
    </Layout>
  );
};

export default NewPayment;
