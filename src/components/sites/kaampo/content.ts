export const asset = (p: string) => `/sites/kaampo/${p}`;

export const SOURCE = "https://www.kaampo.com";

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: `${SOURCE}/home/software-agricola` },
  { label: "Cuaderno de campo", href: `${SOURCE}/home/cuaderno-de-campo-digital` },
  { label: "Certificación", href: `${SOURCE}/home/certificacion` },
  { label: "KIT DIGITAL", href: `${SOURCE}/kit_digital` },
];

export const LANGUAGES = [
  { code: "es", label: "Español", flag: "flags/esp-flag.ico" },
  { code: "en", label: "English", flag: "flags/eng-flag.ico" },
  { code: "fr", label: "Francés", flag: "flags/fr-flag.ico" },
  { code: "pt", label: "Portugés", flag: "flags/por-flag.ico" },
  { code: "pt-br", label: "Portugés (BR)", flag: "flags/brz-flag.ico" },
  { code: "ca", label: "Català", flag: "flags/cat-flag.ico" },
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
    bg: "rgb(254, 237, 201)",
    title: "DESPREOCÚPATE CUMPLIENDO TODAS LAS CERTIFICACIONES",
    img: "landpage/movil1.jpg",
    text: "Ponemos a tu disposición una aplicación que te ayudará a cumplir con todas las normativas vigentes de la forma más sencilla y natural",
  },
  {
    bg: "rgb(200, 149, 111)",
    title: "PRODUCE MÁS Y MEJOR, DESDE HOY MISMO",
    img: "landpage/movil2.jpg",
    text: "Consigue mejorar el rendimiento de tus cultivos de forma inmediata con la información más completa generada por la aplicación",
  },
  {
    bg: "rgb(166, 181, 136)",
    title: "ANALIZA TODOS TUS COSTES EN TIEMPO REAL",
    img: "landpage/movil3.jpg",
    text: "Diseña tu propio plan contable y pondremos a tu disposición, los mejores indicadores y análisis para tu toma de decisiones",
  },
  {
    bg: "rgb(80, 118, 91)",
    title: "REÚNE TODA LA TECNOLOGÍA EN UNA ÚNICA PLATAFORMA",
    img: "landpage/movil4.jpg",
    text: "Conecta todos tus dispositivos a nuestro SmartFarming Hub y analiza toda la información a través de la misma aplicación",
  },
];

export type Feature = {
  variant: "plan" | "terrain" | "olive";
  id?: string;
  title: string;
  text: string;
  img: string;
  imgW: number;
  imgH: number;
  /** Mobile layout shows the screenshot between title and text. */
  mobileImg: boolean;
};

export const FEATURES: Record<string, Feature> = {
  connect: {
    variant: "plan",
    title: "Conecta con cualquier otra plataforma",
    text: "Gracias a su bus de interoperabilidad y a su completa Web API de servicios, usted se podrá conectar a cualquier otra plataforma de gestión disponible en el mercado para compartir su información de forma automatizada",
    img: "landpage/interoperability.png",
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
    title: "Analice sus costes a tiempo real",
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
    mobileImg: false,
  },
};

export const CLIENT_ROWS = [
  ["fruca", "coplaca", "sateljable", "elmurtal", "biogard"],
  ["agro-rincon", "naturvie", "platanos-lito", "agusa", "cultesa", "eea"],
  ["aecom", "pistachos-del-sol", "pladimsa", "raymi", "canarisol", "viverossevilla"],
  ["lycaste", "coisba", "cartagenafresh", "palmafrut", "sanifruit"],
];

export const PRODUCTS = [
  { img: "productos/operario.jpg", name: "Operario", desc: "Tareas y labores de campo" },
  { img: "productos/agricultor.jpg", name: "Agricultor", desc: "Supervisión y control" },
  { img: "productos/tecnico.jpg", name: "Técnico", desc: "Seguimiento y auditorías" },
  { img: "productos/cooperativa.jpg", name: "Cooperativa", desc: "Monitorización y análisis" },
  { img: "productos/transportista.jpg", name: "Transportista", desc: "Logística y recogida de fruta" },
  { img: "productos/barcode.jpg", name: "Trazabilidad", desc: "Agricultura de precisión" },
];

export const FOOTER_LINKS = [
  { label: "Términos y servicios", href: `${SOURCE}/home/politica-de-privacidad` },
  { label: "Política de cookies", href: `${SOURCE}/home/gestion-de-cookies` },
  { label: "Compromiso de igualdad", href: `${SOURCE}/home/compromiso-de-igualdad` },
  { label: "Transparencia", href: "https://creativevending.canariastransparente.org" },
];
