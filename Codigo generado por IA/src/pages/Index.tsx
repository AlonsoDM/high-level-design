
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { CreditCard, Settings, PlusCircle, Sparkles, BarChart4 } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8 py-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              PayBuddy
            </span>
          </h1>
          <p className="mt-2 text-muted-foreground">Gestiona tus pagos recurrentes</p>
        </header>

        <div className="grid gap-4">
          <Link to="/new-payment">
            <Card 
              hover 
              className="flex items-center gap-4 p-5 border-primary/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <PlusCircle className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Registrar nuevo pago</h3>
                <p className="text-sm text-muted-foreground">
                  Configura un pago automático
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/my-payments">
            <Card 
              hover 
              className="flex items-center gap-4 p-5 border-border/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BarChart4 className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Mis pagos</h3>
                <p className="text-sm text-muted-foreground">
                  Visualiza y gestiona tus pagos
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/payment-settings">
            <Card 
              hover 
              className="flex items-center gap-4 p-5 border-border/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Settings className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Configuración de pagos</h3>
                <p className="text-sm text-muted-foreground">
                  Actualiza tus métodos de pago y preferencias
                </p>
              </div>
            </Card>
          </Link>
        </div>

        <Card className="bg-card/50 border-primary/10 p-5 mt-8">
          <div>
            <p className="text-sm text-balance font-semibold text-base">
              Recuerda que puedes utilizar nuestra IA assistant: <span className="text-primary">Lana</span>!
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Usa tu voz para gestionar tus pagos automáticos.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
