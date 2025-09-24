"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { filtrosSostenibilidad, municipiosBoyaca, tiposProducto } from "@/lib/data";

export type CatalogFilters = {
  tipo?: (typeof tiposProducto)[number];
  municipio?: string;
  sostenibilidad: string[];
};

type Props = {
  value: CatalogFilters;
  onChange: (f: CatalogFilters) => void;
};

export function FiltersSidebar({ value, onChange }: Props) {
  return (
    <aside className="w-full md:w-64 shrink-0 space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">Tipo de producto</p>
        <Select
          value={value.tipo}
          onValueChange={(v) => onChange({ ...value, tipo: v as any })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecciona tipo" />
          </SelectTrigger>
          <SelectContent>
            {tiposProducto.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Ubicación</p>
        <Select
          value={value.municipio}
          onValueChange={(v) => onChange({ ...value, municipio: v })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Municipio" />
          </SelectTrigger>
          <SelectContent>
            {municipiosBoyaca.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium">Sostenibilidad</p>
        {filtrosSostenibilidad.map((s) => {
          const checked = value.sostenibilidad.includes(s);
          return (
            <label key={s} className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={checked}
                onCheckedChange={(c) => {
                  const next = c
                    ? [...value.sostenibilidad, s]
                    : value.sostenibilidad.filter((x) => x !== s);
                  onChange({ ...value, sostenibilidad: next });
                }}
              />
              {s}
            </label>
          );
        })}
      </div>
    </aside>
  );
}

