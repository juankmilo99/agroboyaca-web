import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productores, productos } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export default async function ProducerProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const producer = productores.find((p) => p.id === id);
  if (!producer) return notFound();
  const items = productos.filter((p) => p.productorId === producer.id);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border">
          <Image src={producer.foto || "/next.svg"} alt={producer.nombre} fill className="object-cover" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">{producer.nombre}</h1>
          <p className="text-muted-foreground">{producer.ubicacion}</p>
          <p className="text-sm leading-6 text-muted-foreground max-w-2xl">{producer.bio}</p>
          <Link href="/productos" className="text-sm underline">Ver todos los productos</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-base font-semibold">Ubicación</h2>
          <div className="aspect-video overflow-hidden rounded border">
            <iframe
              src={producer.mapaEmbedUrl || "https://maps.google.com"}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-base font-semibold">Reseñas</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>“Excelente calidad y trato amable.” — Cliente local</li>
            <li>“Entrega puntual y producto fresco.” — Restaurante en Tunja</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-base font-semibold">Productos</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

