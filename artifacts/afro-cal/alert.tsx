import { Link, useLocation } from "wouter";
import { LayoutDashboard, BookOpen, Camera, TrendingUp, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: LayoutDashboard, label: "Home" },
  { href: "/log", icon: BookOpen, label: "Log" },
  { href: "/scan", icon: Camera, label: "Scan" },
  { href: "/progress", icon: TrendingUp, label: "Progress" },
  { href: "/goals", icon: Target, label: "Goals" },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      <main className="flex-1 pb-20 overflow-auto">
        {children}
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-card border-t border-border z-50 safe-area-pb">
        <div className="flex items-center justify-around py-2 px-2">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = href === "/" ? location === "/" : location.startsWith(href);
            return (
              <Link key={href} href={href}>
                <button
                  className={cn(
                    "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[56px]",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-xl transition-all duration-200",
                    isActive && "bg-primary/10"
                  )}>
                    <Icon className={cn("w-5 h-5", label === "Scan" && "w-6 h-6")} />
                  </div>
                  <span className={cn(
                    "text-[10px] font-medium leading-none",
                    isActive ? "text-primary font-semibold" : "text-muted-foreground"
                  )}>
                    {label}
                  </span>
                </button>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
