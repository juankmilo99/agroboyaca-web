import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo con imagen */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop"
          alt="Campo agrícola de Boyacá"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 p-10 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            Bienvenido a AgroNexo
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Conectamos productores locales con consumidores conscientes. 
            Únete a nuestra comunidad agrícola sostenible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>Productos frescos del campo</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>Precios justos para productores</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>Comunidad agrícola sostenible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Panel derecho con formulario */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12">
        <div className="max-w-md mx-auto w-full">
          {/* Botón de regreso */}
          <Button variant="ghost" asChild className="mb-8 p-0 h-auto">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>

          {/* Formulario de login */}
          <LoginForm />

          {/* Información adicional */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Al iniciar sesión, aceptas nuestros{" "}
              <Button variant="link" className="p-0 h-auto text-sm">
                Términos de servicio
              </Button>{" "}
              y{" "}
              <Button variant="link" className="p-0 h-auto text-sm">
                Política de privacidad
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
