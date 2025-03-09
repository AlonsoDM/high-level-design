import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Card, { CardHeader, CardContent, CardFooter } from "@/components/Card";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [destinationAccount, setDestinationAccount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      paymentMethod,
      amount,
      destinationAccount,
    });
    navigate("/");
    // In a real app, you would save the payment and redirect
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center">
          <Link to="/new-payment">
            <Button variant="ghost" size="icon" className="mr-2">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">Configurar pago</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">
              Método de pago
            </label>
            <div className="relative">
              <select
                className="w-full rounded-xl border border-border/50 bg-secondary px-4 py-3 text-foreground focus-effect appearance-none"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="" disabled>Selecciona un método de pago</option>
                <option value="card">Tarjeta</option>
                <option value="wallet">Cuenta</option>
                <option value="cash">Efectivo</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-muted-foreground" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M7 7l3 3 3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-1">
              <p className="text-sm">
                Si eres cliente de uno de nuestros socios comerciales podemos conectarnos para obtener los montos, cuentas destino y fechas de pago automáticamente.
                <br /> 
                <span className="text-primary underline cursor-pointer">Ver socios comerciales</span>
              </p>
              <div className="mt-4">
                <Button className="w-full">
                  <span className="inline-flex items-center">
                    Conectar con servicio
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="relative flex items-center py-1">
            <div className="flex-grow border-t border-border/60"></div>
            <span className="mx-2 flex-shrink text-muted-foreground">o</span>
            <div className="flex-grow border-t border-border/60"></div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="amount" className="block text-sm font-medium text-muted-foreground">
                Monto del pago
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  ₡
                </span>
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  required
                  className="w-full rounded-xl border border-border/50 bg-secondary pl-8 pr-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus-effect"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="destinationAccount"
                className="block text-sm font-medium text-muted-foreground"
              >
                Cuenta destino
              </label>
              <input
                id="destinationAccount"
                value={destinationAccount}
                onChange={(e) => setDestinationAccount(e.target.value)}
                placeholder="Número de cuenta"
                required
                className="w-full rounded-xl border border-border/50 bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus-effect"
              />
            </div>
          </div>

          <div className="pt-4 mb-8">
            <Button type="submit" size="lg" className="w-full">
              <span className="inline-flex items-center">
                Guardar nuevo pago
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PaymentMethod;
