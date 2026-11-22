/** Set at build time when the site is served under a sub-path (e.g. GitHub Pages without custom domain). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (p: string) => `${BASE_PATH}/sites/cuadercampo/${p}`;

export const BRAND = "CuaderCampo";
export const TAGLINE = "Tu cuaderno de campo, siempre al día";
export const SITE_URL = "https://cuadercampo.com";
export const EMAIL = "contacto@cuadercampo.com";

/**
 * Datos de contacto FICTICIOS de ejemplo. Sustituir por los reales antes de publicar.
 */
export const CONTACT = {
  street: "Calle del Ejemplo, 1",
  city: "00000 Ciudad de Ejemplo",
  phones: [
    { label: "(+34) 600 000 000", tel: "+34600000000" },
    { label: "(+34) 900 000 000", tel: "+34900000000" },
  ],
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/#productos" },
  { label: "Cuaderno de campo", href: "/#cuaderno-de-campo" },
  { label: "Certificación", href: "/#certificaciones" },
  { label: "Kit Digital", href: "/#kit-digital" },
];

export const AUDIENCE = [
  {
    icon: "landpage/farmer.png",
    w: 68,
    h: 58,
    title: "Agricultores",
    text: "Cumplimentación del cuaderno de campo, control horario, registro de labores,...",
  },
  {
    icon: "landpage/technical.png",
    w: 98,
    h: 64,
    title: "Técnicos",
    text: "Elaboración de visitas técnicas, instrucciones de tratamiento y/o fertilización,...",
  },
  {
    icon: "landpage/auditor.png",
    w: 109,
    h: 64,
    title: "Auditores",
    text: "Control y seguimiento de las auditorías de certificación más importantes.",
  },
  {
    icon: "landpage/cooperativa.png",
    w: 82,
    h: 64,
    title: "Cooperativas",
    text: "Gestión y supervisión de todas las explotaciones agrícolas de sus asociados.",
  },
];

export const BAND = [
  {
    bg: "#F1E7CC",
    title: "Despreocúpate cumpliendo todas las certificaciones",
    img: "landpage/movil1.jpg",
    text: "Ponemos a tu disposición una aplicación que te ayudará a cumplir con todas las normativas vigentes de la forma más sencilla y natural",
  },
  {
    bg: "#DCE5D0",
    title: "Produce más y mejor, desde hoy mismo",
    img: "landpage/movil2.jpg",
    text: "Consigue mejorar el rendimiento de tus cultivos de forma inmediata con la información más completa generada por la aplicación",
  },
  {
    bg: "#DCE9E6",
    title: "Analiza todos tus costes en tiempo real",
    img: "landpage/movil3.jpg",
    text: "Diseña tu propio plan contable y pondremos a tu disposición los mejores indicadores y análisis para tu toma de decisiones",
  },
  {
    bg: "#234B2C",
    dark: true,
    title: "Reúne toda la tecnología en una única plataforma",
    img: "landpage/movil4.jpg",
    text: "Conecta todos tus dispositivos a nuestro SmartFarming Hub y analiza toda la información a través de la misma aplicación",
  },
];

export type Feature = {
  variant: "plan" | "terrain" | "olive";
  id?: string;
  title: string;
  text: string;
  /** Screenshot; omitted when the feature renders its own illustration. */
  img?: string;
  imgW: number;
  imgH: number;
  mobileImg: boolean;
};

export const FEATURES: Record<string, Feature> = {
  connect: {
    variant: "plan",
    title: "Conecta con cualquier otra plataforma",
    text: "Gracias a su bus de interoperabilidad y a su completa Web API de servicios, podrás conectarte a cualquier otra plataforma de gestión disponible en el mercado para compartir tu información de forma automatizada",
    imgW: 1586,
    imgH: 992,
    mobileImg: true,
  },
  certify: {
    variant: "terrain",
    id: "certificaciones",
    title: "Cumpla con todas las certificaciones",
    text: "Ponemos a su disposición una herramienta que le ayudará a cumplir con todas las normativas vigentes de la forma más sencilla y eficiente",
    img: "landpage/image5.png",
    imgW: 900,
    imgH: 475,
    mobileImg: true,
  },
  productivity: {
    variant: "plan",
    title: "Mejore de inmediato su productividad",
    text: "Utilice de forma inmediata la información generada por su explotación en su propio beneficio y consiga mejorar el rendimiento de sus cultivos",
    img: "landpage/image3.png",
    imgW: 900,
    imgH: 455,
    mobileImg: true,
  },
  costs: {
    variant: "olive",
    id: "costes",
    title: "Analice sus costes en tiempo real",
    text: "Utilice nuestro plan de cuentas contable o diseñe el suyo propio y pondremos a su disposición análisis e indicadores de gran valor para su toma de decisiones",
    img: "landpage/image4.png",
    imgW: 1536,
    imgH: 1024,
    mobileImg: true,
  },
  hub: {
    variant: "plan",
    title: "Aglutine toda su tecnología en una única plataforma",
    text: "Conecte todos sus dispositivos a nuestro SmartFarming Hub y analice los resultados a través de la misma aplicación.",
    img: "landpage/image6.png",
    imgW: 900,
    imgH: 455,
    mobileImg: true,
  },
};

export const ERP_PARTNERS = ["Microsoft Dynamics", "a3ERP", "Sage", "Odoo", "Holded", "SAP"];

export const PRODUCTS = [
  { img: "productos/operario.jpg", name: "Operario", desc: "Tareas y labores de campo" },
  { img: "productos/agricultor.jpg", name: "Agricultor", desc: "Supervisión y control" },
  { img: "productos/tecnico.jpg", name: "Técnico", desc: "Seguimiento y auditorías" },
  { img: "productos/cooperativa.jpg", name: "Cooperativa", desc: "Monitorización y análisis" },
  { img: "productos/transportista.jpg", name: "Transportista", desc: "Logística y recogida de fruta" },
  { img: "productos/barcode.jpg", name: "Trazabilidad", desc: "Agricultura de precisión" },
];

export const LEGAL_PAGES = [
  { slug: "terminos-y-servicios", label: "Términos y servicios" },
  { slug: "politica-de-cookies", label: "Política de cookies" },
  { slug: "compromiso-de-igualdad", label: "Compromiso de igualdad" },
  { slug: "transparencia", label: "Transparencia" },
];
