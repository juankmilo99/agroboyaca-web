"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, Package, ShoppingBag } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const ventasData = [
  { mes: "May", ventas: 20 },
  { mes: "Jun", ventas: 34 },
  { mes: "Jul", ventas: 28 },
  { mes: "Ago", ventas: 40 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Ventas (últimos 30 días)</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3 text-2xl font-semibold">
            <BadgeDollarSign className="h-6 w-6 text-emerald-600" /> $4.2M
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Pedidos</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3 text-2xl font-semibold">
            <ShoppingBag className="h-6 w-6 text-emerald-600" /> 58
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Inventario</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3 text-2xl font-semibold">
            <Package className="h-6 w-6 text-emerald-600" /> 362 uds
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Gráfico de ventas</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ventasData}>
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ventas" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Gestión de inventario</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2 text-sm font-medium text-muted-foreground">
              <div>Producto</div>
              <div>Precio</div>
              <div>Stock</div>
              <div>Acciones</div>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <div className="grid grid-cols-4 gap-2 items-center">
                <div>Manzana criolla</div>
                <div>$6.500/kg</div>
                <div>120</div>
                <div className="text-emerald-700">Editar · Eliminar</div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center">
                <div>Queso campesino</div>
                <div>$12.000</div>
                <div>40</div>
                <div className="text-emerald-700">Editar · Eliminar</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Gestión de pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2 text-sm font-medium text-muted-foreground">
              <div>Pedido</div>
              <div>Cliente</div>
              <div>Estado</div>
              <div>Total</div>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <div className="grid grid-cols-4 gap-2">
                <div>#1042</div>
                <div>Marta</div>
                <div>En preparación</div>
                <div>$48.000</div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div>#1043</div>
                <div>Rest. El Roble</div>
                <div>Entregado</div>
                <div>$320.000</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Módulos premium</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <div className="font-medium">Cosecha Inteligente</div>
            <p className="text-sm text-muted-foreground">Pronósticos de demanda y alertas climáticas.</p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium">Logística Colaborativa</div>
            <p className="text-sm text-muted-foreground">Optimiza rutas entre municipios de Boyacá.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

