/* eslint-disable @next/next/no-img-element -- static page uses fixed-size raster assets */
import Link from "next/link";
import "./cuadercampo.css";
import { HeroVideo, Reveal } from "./client-bits";
import {
  asset,
  AUDIENCE,
  BAND,
  CONTACT,
  EMAIL,
  FEATURES,
  LEGAL_PAGES,
  PRODUCTS,
  type Feature,
} from "./content";
import { Header } from "./header";
import { InteropDiagram } from "./interop-diagram";
import { OverlayButton, OverlayProvider } from "./overlays";

function CtaPair() {
  return (
    <div className="cc-btn-row">
      <OverlayButton target="login" className="cc-btn cc-btn--demo">
        Prueba gratis
      </OverlayButton>
      <OverlayButton target="contact" className="cc-btn cc-btn--normal">
        Contacto
      </OverlayButton>
    </div>
  );
}

function FeatureVisual({ f }: { f: Feature }) {
  return f.img ? (
    <img src={asset(f.img)} alt="" width={f.imgW} height={f.imgH} loading="lazy" />
  ) : (
    <InteropDiagram />
  );
}

function FeatureSection({ f }: { f: Feature }) {
  const mediaLeft = f.variant === "plan";
  const media = (
    <div className="cc-feature__media">
      <Reveal className="cc-feature__visual">
        <FeatureVisual f={f} />
      </Reveal>
      <Reveal delay={150}>
        <CtaPair />
      </Reveal>
    </div>
  );
  const text = (
    <div className="cc-feature__text">
      <Reveal as="h3" className="cc-feature__title">
        {f.title}
      </Reveal>
      <Reveal as="p" className="cc-body" delay={100}>
        {f.text}
      </Reveal>
    </div>
  );

  return (
    <section id={f.id} className={`cc-feature cc-feature--${f.variant}`}>
      {f.variant !== "plan" && (
        <img className="cc-shape cc-shape--top" src={asset("landpage/shape-01.png")} alt="" />
      )}
      <div className="cc-container">
        <div className="cc-feature__row cc-desk">
          {mediaLeft ? media : text}
          {mediaLeft ? text : media}
        </div>
        <div className="cc-feature__mobile cc-mob">
          <Reveal as="h3" className="cc-feature__title">
            {f.title}
          </Reveal>
          {f.mobileImg && (
            <Reveal className="cc-feature__visual">
              <FeatureVisual f={f} />
            </Reveal>
          )}
          <Reveal as="p" className="cc-body">
            {f.text}
          </Reveal>
          <Reveal>
            <CtaPair />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CuaderCampoHome() {
  return (
    <div className="cc">
      <OverlayProvider>
        <Header />
        <main>
          {/* Hero */}
          <section id="inicio" className="cc-hero">
            <div className="cc-hero__media">
              <HeroVideo />
              <img className="cc-shape cc-shape--bottom" src={asset("landpage/shape-dark.png")} alt="" />
            </div>
            <div className="cc-hero__intro">
              <div className="cc-hero__row">
                <div className="cc-hero__col">
                  <Reveal className="cc-hero__pretitle">Bienvenido a</Reveal>
                  <Reveal as="h1" className="cc-hero__title" delay={100}>
                    CUADERCAMPO
                  </Reveal>
                  <Reveal className="cc-hero__subtitle" delay={200}>
                    Únase a la digitalización agrícola de la mano de la mejor plataforma
                    tecnológica para la gestión de cualquier explotación agrícola
                  </Reveal>
                  <Reveal className="cc-hero__subtitle" delay={300}>
                    Cumplimentar el cuaderno de campo, control horario, inventario, registro de
                    labores, analítica de costes, seguimiento de las auditorías de certificación…
                    ¡y mucho más!
                  </Reveal>
                  <Reveal className="cc-hero__actions" delay={400}>
                    <OverlayButton target="login" className="cc-btn cc-hero__btn-dark">
                      <span className="mi" aria-hidden>play_arrow</span>
                      Comenzar ahora
                    </OverlayButton>
                    <OverlayButton target="contact" className="cc-btn cc-hero__btn-green">
                      <span className="mi" aria-hidden>perm_identity</span>
                      Contacto
                    </OverlayButton>
                  </Reveal>
                </div>
                <div className="cc-hero__col cc-hero__right cc-desk">
                  <img
                    className="cc-hero__badge"
                    src={asset("landpage/2023-08-cuaderno.png")}
                    alt="Incluye nuevo cuaderno de campo digital SIEX"
                    width={200}
                    height={200}
                  />
                  <img
                    className="cc-hero__phone"
                    src={asset("landpage/app-movil.png")}
                    alt="Aplicación móvil CuaderCampo"
                    width={277}
                    height={554}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Slogan */}
          <section id="slogan" className="cc-slogan">
            <div className="cc-container">
              <div className="cc-slogan__row">
                <div>
                  <Reveal as="h2">Únase a la revolución del Smart Farming</Reveal>
                </div>
                <div>
                  <Reveal as="p" delay={100}>
                    <strong className="cc-green">CUADERCAMPO</strong> es una plataforma{" "}
                    <strong>“smarthub farming”</strong> capaz de aglutinar todas las tecnologías
                    aplicadas al campo en un único entorno tecnológico, satisfaciendo así
                    cualquier requerimiento de información relacionado con una explotación
                    agrícola.
                  </Reveal>
                </div>
                <div className="cc-slogan__media">
                  <Reveal delay={200}>
                    <img
                      className="cc-slogan__img"
                      src={asset("landpage/inicio.jpg")}
                      alt="Tractor en el campo"
                      width={1280}
                      height={1919}
                    />
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* Audience */}
          <section className="cc-audience">
            <div className="cc-container">
              <Reveal as="h3">¿A quién va dirigido?...</Reveal>
              <div className="cc-audience__grid">
                {AUDIENCE.map((a, i) => (
                  <Reveal key={a.title} className="cc-audience__item" delay={i * 100}>
                    <img src={asset(a.icon)} alt="" width={a.w} height={a.h} />
                    <p className="cc-body cc-bold">{a.title}</p>
                    <p className="cc-body">{a.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Four-colour band */}
          <section className="cc-band">
            {BAND.map((b) => (
              <div
                key={b.title}
                className={`cc-band__col${b.dark ? " cc-band__col--dark" : ""}`}
                style={{ background: b.bg }}
              >
                <Reveal as="p" className="cc-band__title">
                  {b.title}
                </Reveal>
                <Reveal delay={100}>
                  <img src={asset(b.img)} alt="" width={910} height={1596} loading="lazy" />
                </Reveal>
                <Reveal as="p" className="cc-band__sub" delay={200}>
                  {b.text}
                </Reveal>
              </div>
            ))}
          </section>

          <FeatureSection f={FEATURES.connect} />
          <FeatureSection f={FEATURES.certify} />
          <FeatureSection f={FEATURES.productivity} />
          <FeatureSection f={FEATURES.costs} />

          {/* Community (neutral placeholder until there are real clients to show) */}
          <section className="cc-green-sec cc-community">
            <div className="cc-container">
              <Reveal as="h1">
                ÚNETE A LA COMUNIDAD
                <br />
                CUADERCAMPO
              </Reveal>
              <Reveal as="p" className="cc-community__text" delay={100}>
                Agricultores, técnicos y cooperativas que quieren digitalizar su explotación de
                forma sencilla. ¿Quieres ser de los primeros en probarlo?
              </Reveal>
              <Reveal delay={200}>
                <OverlayButton target="contact" className="cc-btn cc-btn--ghost">
                  Quiero saber más
                </OverlayButton>
              </Reveal>
            </div>
          </section>

          {/* Digital notebook / Kit Digital */}
          <section className="cc-green-sec cc-promo-sec">
            <div className="cc-promo">
              <div id="cuaderno-de-campo" className="cc-promo__left">
                <Reveal as="h1">
                  Cuaderno de
                  <br />
                  campo digital
                </Reveal>
                <Reveal as="h5" delay={100}>
                  Conoce el cuaderno de campo digital completo y fácil de usar. Adáptate cuanto
                  antes a la nueva normativa obligatoria
                </Reveal>
                <Reveal delay={200}>
                  <OverlayButton target="login" className="cc-btn cc-btn--ghost">
                    Prueba gratis
                  </OverlayButton>
                </Reveal>
              </div>
              <div id="kit-digital" className="cc-promo__right">
                <Reveal as="h1">
                  Kit digital,
                  <br />
                  ayuda de
                  <br />
                  12.000€
                </Reveal>
                <Reveal as="h5" delay={100}>
                  Aprovecha la subvención de Kit Digital del Gobierno para acceder a nuestra
                  herramienta y mejorar tu negocio.
                </Reveal>
                <Reveal delay={200}>
                  <OverlayButton target="contact" className="cc-btn cc-btn--ghost">
                    Más información
                  </OverlayButton>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Banner */}
          <section className="cc-banner">
            <div className="cc-container">
              <div className="cc-banner__inner">
                <Reveal as="h3">INNOVACIÓN AL SERVICIO AGRÍCOLA</Reveal>
                <Reveal as="h2" delay={100}>
                  CON CUADERCAMPO, ÚNETE A LA REVOLUCIÓN DEL SMART FARMING
                </Reveal>
                <Reveal as="p" delay={200}>
                  CuaderCampo es una plataforma tecnológica “smarthub farming” que aúna todas las
                  tecnologías aplicadas al campo en un único entorno tecnológico, satisfaciendo así
                  cualquier requerimiento de información relacionado con una explotación agrícola.
                </Reveal>
                <Reveal as="p" delay={250}>
                  Próximamente disponible para dispositivos iOS y Android
                </Reveal>
                <Reveal className="cc-banner__stores" delay={300}>
                  <img src={asset("landpage/google-play.png")} alt="Próximamente en Google Play" width={280} height={80} />
                  <img src={asset("landpage/app-store.png")} alt="Próximamente en App Store" width={280} height={80} />
                </Reveal>
              </div>
            </div>
          </section>

          <FeatureSection f={FEATURES.hub} />

          {/* Products + contact */}
          <section id="productos" className="cc-products">
            <div className="cc-container">
              <div className="cc-products__head">
                <Reveal as="h2">Nuestros productos</Reveal>
                <Reveal as="p" className="cc-body" delay={100}>
                  Aplicaciones móviles específicamente diseñadas para ajustarse a las necesidades
                  de cada perfil de usuario. Disponibles tanto para dispositivos Android como iOS
                </Reveal>
              </div>
              <div className="cc-products__grid">
                {PRODUCTS.map((p, i) => (
                  <Reveal key={p.name} className="cc-products__cell" delay={(i % 3) * 100}>
                    <div className="cc-card">
                      <img src={asset(p.img)} alt={p.name} width={640} height={799} loading="lazy" />
                      <div className="cc-card__title">
                        <div className="cc-card__name">{p.name}</div>
                        <div className="cc-card__desc">{p.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal className="cc-products__hubwrap">
                <img
                  className="cc-products__hub"
                  src={asset("landpage/front-smarthub.png")}
                  alt="SmartFarm hub"
                  width={2000}
                  height={600}
                  loading="lazy"
                />
              </Reveal>
            </div>
            <div id="contacto" className="cc-contact">
              <div className="cc-contact__text">
                <Reveal as="h2">CONTACTA YA CON NOSOTROS</Reveal>
                <Reveal className="cc-contact__sub" delay={50}>
                  Estamos aquí para ayudarte, nuestra aspiración es dar el mejor servicio al sector
                  agrícola.
                </Reveal>
                <Reveal delay={100}>
                  <p className="cc-body">{CONTACT.street}</p>
                  <p className="cc-body">{CONTACT.city}</p>
                  <p className="cc-body">
                    {CONTACT.phones.map((p, i) => (
                      <span key={p.tel}>
                        {i > 0 && <br />}
                        <a href={`tel:${p.tel}`}>{p.label}</a>
                      </span>
                    ))}
                  </p>
                  <p className="cc-body">
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </p>
                  <OverlayButton target="contact" className="cc-btn cc-btn--onblue">
                    Cuéntanos tu caso
                  </OverlayButton>
                </Reveal>
              </div>
              <img
                className="cc-contact__img"
                src={asset("landpage/triptico.jpg")}
                alt=""
                width={834}
                height={631}
                loading="lazy"
              />
            </div>
            <img className="cc-shape cc-shape--top" src={asset("landpage/shape-01.png")} alt="" />
          </section>
        </main>
        <footer className="cc-footer">
          <nav className="cc-footer__links" aria-label="Legal">
            {LEGAL_PAGES.map((l) => (
              <Link key={l.slug} className="cc-navbtn" href={`/legal/${l.slug}`}>
                {l.label}
              </Link>
            ))}
          </nav>
          <span className="cc-footer__copy">© {new Date().getFullYear()} CuaderCampo · cuadercampo.com</span>
        </footer>
      </OverlayProvider>
    </div>
  );
}
