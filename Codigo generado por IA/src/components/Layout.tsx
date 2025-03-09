
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, Bell, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isHome = location.pathname === "/";

  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1 pt-4 pb-20">
        <div className="mx-auto max-w-md px-4 sm:px-6">
          <div className="animate-fade-in">{children}</div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 nav-blur py-2">
        <div className="mx-auto max-w-md px-8">
          <div className="grid grid-cols-3 items-center">
            <div className="flex justify-center">
              <NavItem
                to="/"
                icon={<Home className="h-5 w-5" />}
                label="Inicio"
                isActive={isActive("/")}
              />
            </div>

            {/* Center AI Assistant Button */}
            <div className="flex justify-center relative">
              <div className="absolute -top-[34px] w-full flex justify-center">
                <span className="text-xs text-white/80 bg-primary/80 px-2 py-1 rounded-full whitespace-nowrap">
                  {isHome ? "Di \"Hey Lana\" para comenzar" : "Di \"Hey Lana\""}
                </span>
              </div>
              <Link
                to="/assistant"
                className={cn(
                  "flex h-16 w-16 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg",
                  "transition-all hover:bg-primary/90",
                  "animate-pulse-green"
                )}
              >
                <Mic className="h-7 w-7" />
                <span className="mt-0.5 text-[8px] font-medium">IA ASSISTANT</span>
              </Link>
            </div>

            <div className="flex justify-center">
              <NavItem
                to="/notifications"
                icon={<Bell className="h-5 w-5" />}
                label="Notificaciones"
                isActive={isActive("/notifications")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive }) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center justify-center space-y-1 px-2",
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <div>{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
};

export default Layout;
