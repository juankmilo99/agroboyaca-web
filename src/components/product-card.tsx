"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data";
import { useCart } from "@/contexts/cart-context";
import { ShoppingCart, Plus, Minus } from "lucide-react";

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const { items, addItem, removeItem, updateQuantity } = useCart();
  const cartItem = items.find(item => item.product.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  const handleRemoveFromCart = () => {
    removeItem(product.id);
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  };

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
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold">
              ${product.precio.toLocaleString("es-CO")}
            </span>
            <span className="text-sm text-muted-foreground">/{product.unidad}</span>
          </div>
        </div>
        
        {quantity === 0 ? (
          <Button size="sm" onClick={handleAddToCart} className="w-full">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Añadir al carrito
          </Button>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleUpdateQuantity(quantity - 1)}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-sm font-medium min-w-[2rem] text-center">
                {quantity}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleUpdateQuantity(quantity + 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <Button
              size="sm"
              variant="destructive"
              onClick={handleRemoveFromCart}
              className="h-8 px-2"
            >
              Quitar
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

