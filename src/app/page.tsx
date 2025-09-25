import Image from "next/image";
import Link from "next/link";
import { productos, testimonios } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import { Sprout, Truck, Handshake } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-xl border">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1600&auto=format&fit=crop"
            alt="Paisaje agrícola"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 p-10 sm:p-16 text-white">
          <h1 className="text-3xl sm:text-5xl font-semibold max-w-2xl">
            Del campo a tu mesa: Productos de Boyacá, directos y con historia
          </h1>
          <div className="mt-6 flex gap-3">
            <Button asChild size="lg">
              <Link href="/productos">Explora el mercado</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/dashboard">Regístrate como productor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Cómo funciona</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Sprout,
              title: "Produce con propósito",
              text: "Productores locales cultivan con prácticas sostenibles.",
            },
            {
              icon: Handshake,
              title: "Conexión directa",
              text: "Compra sin intermediarios, pagando un precio justo.",
            },
            {
              icon: Truck,
              title: "Entrega cercana",
              text: "Logística colaborativa entre municipios de Boyacá.",
            },
          ].map((s, i) => (
            <Card key={i}>
              <CardHeader>
                <s.icon className="h-6 w-6 text-emerald-600" />
                <CardTitle className="text-base">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {s.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* QR de Pago */}
      <section className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-2">
              Pago Rápido y Seguro
            </h2>
            <p className="text-emerald-700">
              Escanea el código QR para realizar pagos instantáneos con tu billetera digital
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-shrink-0">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <Image
                  src="/images/qr_pago.png"
                  alt="Código QR para pagos"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="text-center md:text-left max-w-md">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                Métodos de pago aceptados
              </h3>
              <ul className="space-y-2 text-emerald-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Nequi
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Daviplata
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Bancolombia a la mano
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Transferencia bancaria
                </li>
              </ul>
              <p className="text-sm text-emerald-600 mt-4">
                Pagos procesados de forma segura y instantánea
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Productos destacados</h2>
          <Button asChild variant="outline" size="sm">
            <Link href="/productos">Ver todos</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productos.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Lo que dicen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonios.map((t) => (
            <Card key={t.id}>
              <CardContent className="pt-6 text-sm">“{t.mensaje}”
                <div className="mt-4 text-muted-foreground">— {t.autor} ({t.rol})</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
