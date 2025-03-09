
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewPayment from "./pages/NewPayment";
import PaymentMethod from "./pages/PaymentMethod";
import MyPayments from "./pages/MyPayments";
import PaymentSettings from "./pages/PaymentSettings";
import Assistant from "./pages/Assistant";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new-payment" element={<NewPayment />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/my-payments" element={<MyPayments />} />
          <Route path="/payment-settings" element={<PaymentSettings />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
