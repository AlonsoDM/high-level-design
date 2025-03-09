
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
}

export interface PaymentFormData {
  serviceName: string;
  paymentDate: string;
  frequency: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PaymentFormData>({
    serviceName: "",
    paymentDate: "",
    frequency: "monthly",
  });
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setFormData((prev) => ({
        ...prev,
        paymentDate: format(selectedDate, "yyyy-MM-dd"),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    navigate("/payment-method");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 animate-slide-up">
      <div className="space-y-2">
        <label htmlFor="serviceName" className="block text-sm font-medium text-muted-foreground">
          Nombre del servicio
        </label>
        <div className="relative">
          <input
            id="serviceName"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
            placeholder="Ej: Netflix, Spotify, etc."
            required
            className="w-full rounded-xl border border-border/50 bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus-effect"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="paymentDate" className="block text-sm font-medium text-muted-foreground">
          Fecha de pago
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="w-full rounded-xl border border-border/50 bg-secondary px-4 py-3 text-left text-foreground focus-effect flex justify-between items-center"
            >
              {formData.paymentDate ? (
                format(new Date(formData.paymentDate), "dd 'de' MMMM 'de' yyyy", { locale: es })
              ) : (
                <span className="text-muted-foreground/70">Selecciona una fecha</span>
              )}
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="p-3 bg-card rounded-lg border border-border/40 shadow-md pointer-events-auto">
              <div className="space-y-2">
                <div className="grid grid-cols-7 gap-1">
                  {["D", "L", "M", "M", "J", "V", "S"].map((day, i) => (
                    <div key={i} className="text-center text-xs text-muted-foreground py-1">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }, (_, i) => {
                    const day = i + 1;
                    const currentDate = new Date();
                    currentDate.setDate(day);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleDateChange(new Date(currentDate))}
                        className={cn(
                          "h-8 w-8 rounded-md text-sm flex items-center justify-center",
                          date && date.getDate() === day
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary/80"
                        )}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <label htmlFor="frequency" className="block text-sm font-medium text-muted-foreground">
          Frecuencia
        </label>
        <div className="relative">
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            required
            className="w-full appearance-none rounded-xl border border-border/50 bg-secondary px-4 py-3 text-foreground focus-effect"
          >
            <option value="weekly">Semanal</option>
            <option value="biweekly">Quincenal</option>
            <option value="monthly">Mensual</option>
          </select>
          <Clock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" size="lg" className="w-full">
          <span className="inline-flex items-center">
            Continuar
            <ChevronRight className="ml-2 h-5 w-5" />
          </span>
        </Button>
      </div>
    </form>
  );
};

export default PaymentForm;
