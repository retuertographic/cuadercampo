import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "@/components/sites/cuadercampo/cuadercampo.css";
import { EMAIL, LEGAL_PAGES } from "@/components/sites/cuadercampo/content";
import { Logo } from "@/components/sites/cuadercampo/logo";

export const dynamicParams = false;

export function generateStaticParams() {
  return LEGAL_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = LEGAL_PAGES.find((p) => p.slug === slug);
  return { title: page ? `${page.label} | CuaderCampo` : "CuaderCampo" };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = LEGAL_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <div className="cc cc-legal">
      <header className="cc-nav">
        <Link href="/" aria-label="CuaderCampo, inicio" className="cc-nav__home">
          <Logo />
        </Link>
      </header>
      <main className="cc-legal__main">
        <h1>{page.label}</h1>
        {/* TODO: sustituir por el texto legal definitivo de CuaderCampo. */}
        <p>
          Estamos preparando este documento. Si tienes cualquier consulta sobre{" "}
          {page.label.toLowerCase()}, escríbenos a <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
        <p>
          <Link href="/">← Volver al inicio</Link>
        </p>
      </main>
    </div>
  );
}
