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
