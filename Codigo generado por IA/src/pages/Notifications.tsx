
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, BellRing } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Notifications = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center">
          <Link to="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">Notificaciones</h1>
        </div>

        <div className="space-y-4">
          <Card className="border-primary/20">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BellRing className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">Pago próximo</h3>
                  <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                    Hoy
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tu pago de Netflix por $219 está programado para hoy
                </p>
                <div className="mt-2 flex gap-2">
                  <Button variant="outline" size="sm">
                    Ver detalles
                  </Button>
                  <Button size="sm">Pagar ahora</Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-border/40">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                <BellRing className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Pago exitoso</h3>
                <p className="text-sm text-muted-foreground">
                  Tu pago de Spotify por $99 se realizó exitosamente
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">Hace 2 días</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
