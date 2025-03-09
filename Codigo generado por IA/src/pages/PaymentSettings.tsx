
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Bell, Shield, CreditCard, Lock } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Card from "@/components/Card";

const PaymentSettings = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center">
          <Link to="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">Configuración de pagos</h1>
        </div>

        <div className="space-y-4">
          <Card className="border-border/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Notificaciones</h3>
                  <p className="text-sm text-muted-foreground">Alertas de pagos próximos</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Configurar
              </Button>
            </div>
          </Card>

          <Card className="border-border/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Seguridad</h3>
                  <p className="text-sm text-muted-foreground">Autenticación de pagos</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Configurar
              </Button>
            </div>
          </Card>

          <Card className="border-border/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Métodos de pago</h3>
                  <p className="text-sm text-muted-foreground">Administra tus tarjetas y cuentas</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Configurar
              </Button>
            </div>
          </Card>

          <Card className="border-border/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Privacidad</h3>
                  <p className="text-sm text-muted-foreground">Control de datos personales</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Configurar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSettings;
