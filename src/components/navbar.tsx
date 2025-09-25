"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Leaf, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CartDropdown } from "@/components/cart-dropdown";

export function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Leaf className="h-5 w-5 text-emerald-600" /> AgroBoyacá
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === l.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <CartDropdown />
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Mi cuenta
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsLoggedIn(false)}
              >
                Cerrar sesión
              </Button>
            </div>
          ) : (
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Iniciar sesión</Link>
            </Button>
          )}
          <Button className="hidden sm:inline-flex">Explora el mercado</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

