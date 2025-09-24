import Image from "next/image";
import { notFound } from "next/navigation";
import { productos } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = productos.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
          <Image src={product.imagen} alt={product.nombre} fill className="object-cover" />
        </div>
        {product.galeria && (
          <div className="grid grid-cols-4 gap-2">
            {product.galeria.map((g, i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded border">
                <Image src={g} alt={`galeria-${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">{product.nombre}</h1>
          <p className="text-muted-foreground">{product.productor} · {product.ubicacion}</p>
        </div>
        <div className="text-2xl font-semibold">
          ${product.precio.toLocaleString("es-CO")} <span className="text-base text-muted-foreground">/{product.unidad}</span>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{product.descripcion}</p>
        <div className="flex gap-2">
          <Button>Comprar</Button>
          <Button variant="secondary">Añadir al carrito</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Trazabilidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div><span className="font-medium">Productor:</span> {product.productor}</div>
            {product.trazabilidad?.finca && (
              <div><span className="font-medium">Finca:</span> {product.trazabilidad.finca}</div>
            )}
            {product.trazabilidad?.fechaSiembra && (
              <div><span className="font-medium">Siembra:</span> {product.trazabilidad.fechaSiembra}</div>
            )}
            {product.trazabilidad?.fechaCosecha && (
              <div><span className="font-medium">Cosecha:</span> {product.trazabilidad.fechaCosecha}</div>
            )}
            {product.certificaciones && (
              <div><span className="font-medium">Certificaciones:</span> {product.certificaciones.join(", ")}</div>
            )}
            {product.trazabilidad?.historia && (
              <p className="text-muted-foreground">{product.trazabilidad.historia}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

