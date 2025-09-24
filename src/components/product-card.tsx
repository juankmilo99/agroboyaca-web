import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data";

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.imagen || "/next.svg"}
          alt={product.nombre}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{product.nombre}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {product.productor} · {product.ubicacion}
        </p>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-2">
        <div>
          <span className="text-lg font-semibold">
            ${product.precio.toLocaleString("es-CO")}
          </span>
          <span className="text-sm text-muted-foreground">/{product.unidad}</span>
        </div>
        <Button size="sm">Añadir al carrito</Button>
      </CardContent>
    </Card>
  );
}

