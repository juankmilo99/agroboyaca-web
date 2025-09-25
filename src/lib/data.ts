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
  {
    id: "4",
    nombre: "Feijoa fresca",
    precio: 4500,
    unidad: "kg",
    imagen: "/images/feijoba.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Frutas",
    sostenible: ["Orgánico"],
    descripcion: "Fruta tropical dulce y aromática, rica en vitamina C.",
    cantidadDisponible: 80,
  },
  {
    id: "5",
    nombre: "Limón criollo",
    precio: 3200,
    unidad: "kg",
    imagen: "/images/limon.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Frutas",
    sostenible: ["Orgánico"],
    descripcion: "Limón ácido y jugoso, perfecto para bebidas y cocina.",
    cantidadDisponible: 150,
  },
  {
    id: "6",
    nombre: "Mandarina dulce",
    precio: 4200,
    unidad: "kg",
    imagen: "/images/mandarina.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Frutas",
    sostenible: ["Orgánico"],
    descripcion: "Mandarina jugosa y dulce, fácil de pelar.",
    cantidadDisponible: 100,
  },
  {
    id: "7",
    nombre: "Masato artesanal",
    precio: 8500,
    unidad: "litro",
    imagen: "/images/masato.jpg",
    productorId: "p2",
    productor: "Lechería La Esperanza",
    ubicacion: "Duitama",
    tipo: "Lácteos",
    sostenible: ["Comercio Justo"],
    descripcion: "Bebida láctea tradicional, refrescante y nutritiva.",
    cantidadDisponible: 60,
  },
  {
    id: "8",
    nombre: "Naranja valencia",
    precio: 3800,
    unidad: "kg",
    imagen: "/images/naranja.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Frutas",
    sostenible: ["Orgánico"],
    descripcion: "Naranja dulce y jugosa, rica en vitamina C.",
    cantidadDisponible: 120,
  },
  {
    id: "9",
    nombre: "Papa pastusa",
    precio: 3500,
    unidad: "kg",
    imagen: "/images/papapastusa.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Verduras",
    sostenible: [],
    descripcion: "Papa blanca, ideal para papas fritas y purés.",
    cantidadDisponible: 180,
  },
  {
    id: "10",
    nombre: "Plátano verde",
    precio: 2800,
    unidad: "kg",
    imagen: "/images/platano.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Frutas",
    sostenible: ["Orgánico"],
    descripcion: "Plátano verde para cocinar, base de la alimentación colombiana.",
    cantidadDisponible: 200,
  },
  {
    id: "11",
    nombre: "Remolacha fresca",
    precio: 4000,
    unidad: "kg",
    imagen: "/images/remolacha.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Verduras",
    sostenible: ["Orgánico"],
    descripcion: "Remolacha dulce y nutritiva, perfecta para ensaladas y jugos.",
    cantidadDisponible: 90,
  },
  {
    id: "12",
    nombre: "Carne de cerdo fresca",
    precio: 15000,
    unidad: "kg",
    imagen: "/images/carne de cerdo.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Cárnicos",
    sostenible: ["Comercio Justo"],
    descripcion: "Carne de cerdo fresca, criada en libre pastoreo sin hormonas.",
    cantidadDisponible: 50,
  },
  {
    id: "13",
    nombre: "Carne de res premium",
    precio: 25000,
    unidad: "kg",
    imagen: "/images/carne de res.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Cárnicos",
    sostenible: ["Comercio Justo"],
    descripcion: "Carne de res de alta calidad, alimentada con pastos naturales.",
    cantidadDisponible: 30,
  },
  {
    id: "14",
    nombre: "Pollo criollo",
    precio: 12000,
    unidad: "kg",
    imagen: "/images/pollo criollo.jpg",
    productorId: "p1",
    productor: "Finca El Paraíso",
    ubicacion: "Sogamoso",
    tipo: "Cárnicos",
    sostenible: ["Orgánico"],
    descripcion: "Pollo criollo alimentado con maíz y granos naturales.",
    cantidadDisponible: 40,
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

