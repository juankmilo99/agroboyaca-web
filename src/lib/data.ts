export type Product = {
  id: string;
  nombre: string;
  precio: number;
  unidad: string;
  imagen: string;
  productorId: string;
  productor: string;
  ubicacion: string;
  tipo: "Frutas" | "Verduras" | "Lácteos" | "Cárnicos";
  sostenible: ("Orgánico" | "Comercio Justo")[];
  descripcion: string;
  cantidadDisponible: number;
  galeria?: string[];
  certificaciones?: string[];
  trazabilidad?: {
    finca: string;
    fechaSiembra: string;
    fechaCosecha: string;
    historia: string;
  };
};

export type Producer = {
  id: string;
  nombre: string;
  bio: string;
  foto: string;
  ubicacion: string;
  mapaEmbedUrl?: string;
};

export type Testimonial = {
  id: string;
  autor: string;
  rol: "Productor" | "Consumidor";
  mensaje: string;
  foto?: string;
};

export const productores: Producer[] = [
  {
    id: "p1",
    nombre: "Finca El Paraíso",
    bio: "Productores familiares con tres generaciones cultivando con prácticas sostenibles en el Valle de Sugamuxi.",
    foto: "/next.svg",
    ubicacion: "Sogamoso, Boyacá",
    mapaEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63817.227...",
  },
  {
    id: "p2",
    nombre: "Lechería La Esperanza",
    bio: "Lácteos artesanales de vacas en libre pastoreo con estándares de bienestar animal.",
    foto: "/next.svg",
    ubicacion: "Duitama, Boyacá",
  },
];

export const productos: Product[] = [
  {
    id: "1",
    nombre: "Manzana criolla orgánica",
    precio: 6500,
    unidad: "kg",
    imagen: "/images/manzana.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Frutas",
    sostenible: ["Orgánico"],
    descripcion:
      "Manzana dulce y aromática cultivada sin agroquímicos a 2.500 msnm.",
    cantidadDisponible: 120,
    galeria: ["/images/manzana.jpg"],
    certificaciones: ["Orgánico local", "BPA"],
    trazabilidad: {
      finca: "El Paraíso",
      fechaSiembra: "2025-02-10",
      fechaCosecha: "2025-08-20",
      historia:
        "La familia López conserva semillas criollas y riega con agua de páramo.",
    },
  },
  {
    id: "2",
    nombre: "Queso campesino fresco",
    precio: 12000,
    unidad: "unidad",
    imagen: "/images/queso.jpg",
    productorId: "p2",
    productor: "Lechería La Esperanza",
    ubicacion: "Duitama",
    tipo: "Lácteos",
    sostenible: ["Comercio Justo"],
    descripcion:
      "Queso suave, ideal para desayunos y arepas, elaborado el mismo día.",
    cantidadDisponible: 40,
  },
  {
    id: "3",
    nombre: "Papa criolla",
    precio: 3800,
    unidad: "kg",
    imagen: "/images/papacriolla.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Verduras",
    sostenible: [],
    descripcion: "Papa dorada, ideal para guisos y sopas.",
    cantidadDisponible: 200,
  },
];

export const testimonios: Testimonial[] = [
  {
    id: "t1",
    autor: "Marta, cocinera",
    rol: "Consumidor",
    mensaje:
      "La frescura es incomparable. Saber de dónde viene cada producto me da confianza.",
    foto: "/images/user1.jpg",
  },
  {
    id: "t2",
    autor: "Don Álvaro",
    rol: "Productor",
    mensaje:
      "Ahora mis manzanas llegan directo a familias en Tunja y Duitama.",
    foto: "/images/user2.jpg",
  },
];

export const municipiosBoyaca = [
  "Tunja",
  "Duitama",
  "Sogamoso",
  "Paipa",
  "Villa de Leyva",
  "Chiquinquirá",
];

export const tiposProducto = ["Frutas", "Verduras", "Lácteos", "Cárnicos"] as const;
export const filtrosSostenibilidad = ["Orgánico", "Comercio Justo"] as const;

