"use client";
import { useMemo, useState } from "react";
import { productos as all, type Product } from "@/lib/data";
import { FiltersSidebar, type CatalogFilters } from "@/components/filters-sidebar";
import { ProductCard } from "@/components/product-card";

export default function CatalogPage() {
  const [filters, setFilters] = useState<CatalogFilters>({
    tipo: undefined,
    municipio: undefined,
    sostenibilidad: [],
  });

  const productos = useMemo(() => {
    return all.filter((p) => {
      if (filters.tipo && p.tipo !== filters.tipo) return false;
      if (filters.municipio && p.ubicacion !== filters.municipio) return false;
      if (filters.sostenibilidad.length) {
        const ok = filters.sostenibilidad.every((s) => p.sostenible.includes(s as any));
        if (!ok) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <FiltersSidebar value={filters} onChange={setFilters} />
      <div className="flex-1">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((p: Product) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

