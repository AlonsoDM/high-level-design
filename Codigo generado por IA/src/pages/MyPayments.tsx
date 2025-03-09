import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, BarChart4, ArrowUpRight, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Card from "@/components/Card";

// Sample data - would come from API in real app
const SAMPLE_PAYMENTS = [
  {
    id: 1,
    name: "Netflix",
    amount: 219,
    nextDate: "2023-11-15",
    frequency: "Mensual",
  },
  {
    id: 2,
    name: "Spotify",
    amount: 99,
    nextDate: "2023-11-23",
    frequency: "Mensual",
  },
];

const MyPayments = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center">
          <Link to="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">Mis pagos</h1>
        </div>

        <div className="space-y-4">
          {SAMPLE_PAYMENTS.length > 0 ? (
            SAMPLE_PAYMENTS.map((payment) => (
              <Card key={payment.id} hover className="border-border/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <BarChart4 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{payment.name}</h3>
                      <p className="text-sm text-muted-foreground">₡{payment.amount}/mes</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>
                        {new Date(payment.nextDate).toLocaleDateString("es-MX", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <span className="text-xs">Detalles</span>
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No tienes pagos registrados</p>
              <Link to="/new-payment">
                <Button variant="outline" className="mt-4">
                  Registrar nuevo pago
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MyPayments;
