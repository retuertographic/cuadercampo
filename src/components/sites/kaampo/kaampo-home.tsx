/* eslint-disable @next/next/no-img-element -- static clone uses the source's exact image files */
import "./kaampo.css";
import { HeroVideo, Reveal } from "./client-bits";
import {
  asset,
  AUDIENCE,
  BAND,
  CLIENT_ROWS,
  FEATURES,
  FOOTER_LINKS,
  PRODUCTS,
  type Feature,
} from "./content";
import { Header } from "./header";
import { OverlayButton, OverlayProvider } from "./overlays";

function CtaPair() {
  return (
    <div className="kp-btn-row">
      <OverlayButton target="login" className="kp-btn kp-btn--demo">
        Prueba gratis
      </OverlayButton>
      <OverlayButton target="contact" className="kp-btn kp-btn--normal">
        Contacto
      </OverlayButton>
    </div>
  );
}

function FeatureSection({ f }: { f: Feature }) {
  const mediaLeft = f.variant === "plan";
  const media = (
    <div className="kp-feature__media">
      <Reveal>
        <img src={asset(f.img)} alt="" width={f.imgW} height={f.imgH} loading="lazy" />
      </Reveal>
      <Reveal delay={150}>
        <CtaPair />
      </Reveal>
    </div>
  );
  const text = (
    <div className="kp-feature__text">
      <Reveal as="h3" className="kp-feature__title">
        {f.title}
      </Reveal>
      <Reveal as="p" className="kp-body" delay={100}>
        {f.text}
      </Reveal>
    </div>
  );

  return (
    <section id={f.id} className={`kp-feature kp-feature--${f.variant}`}>
      {f.variant !== "plan" && (
        <img className="kp-shape kp-shape--top" src={asset("landpage/shape-01.png")} alt="" />
      )}
      <div className="kp-container">
        <div className="kp-feature__row kp-desk">
          {mediaLeft ? media : text}
          {mediaLeft ? text : media}
        </div>
        <div className="kp-feature__mobile kp-mob" style={{ margin: "48px 0" }}>
          <Reveal as="h3" className="kp-feature__title">
            {f.title}
          </Reveal>
          {f.mobileImg && (
            <Reveal>
              <img src={asset(f.img)} alt="" width={f.imgW} height={f.imgH} loading="lazy" />
            </Reveal>
          )}
          <Reveal as="p" className="kp-body">
            {f.text}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function KaampoHome() {
  return (
    <div className="kp">
      <OverlayProvider>
        <Header />
        <main>
          {/* Hero */}
          <section id="inicio" className="kp-hero">
            <HeroVideo />
            <div className="kp-hero__intro">
              <div className="kp-hero__row">
                <div className="kp-hero__col">
                  <Reveal className="kp-hero__pretitle">Bienvenido a</Reveal>
                  <Reveal as="h1" className="kp-hero__title" delay={100}>
                    KAAMPO
                  </Reveal>
                  <Reveal className="kp-hero__subtitle" delay={200}>
                    Únase a la digitalización agrícola de la mano de la mejor plataforma
                    tecnológica para la gestión de cualquier explotación agrícola
                  </Reveal>
                  <Reveal className="kp-hero__subtitle kp-desk" delay={300}>
                    Cumplimentar el cuaderno de campo, control horario, inventario, registro de
                    labores, analítica de costes, seguimiento de las auditorías de certificación…
                    ¡hasta más de 300 funciones!
                  </Reveal>
                  <Reveal className="kp-hero__actions" delay={400}>
                    <OverlayButton target="login" className="kp-btn kp-hero__btn-dark">
                      <span className="mi" aria-hidden>play_arrow</span>
                      Comenzar ahora
                    </OverlayButton>
                    <span className="kp-desk">
                      <OverlayButton target="contact" className="kp-btn kp-hero__btn-green">
                        <span className="mi" aria-hidden>perm_identity</span>
                        Contacto
                      </OverlayButton>
                    </span>
                  </Reveal>
                </div>
                <div className="kp-hero__col kp-hero__right kp-desk">
                  <img
                    className="kp-hero__badge"
                    src={asset("landpage/2023-08-cuaderno.png")}
                    alt="Incluye nuevo cuaderno de campo digital SIEX"
                    width={200}
                    height={200}
                  />
                  <img
                    className="kp-hero__phone"
                    src={asset("landpage/kaampo-app.png")}
                    alt="Aplicación móvil Kaampo"
                    width={277}
                    height={554}
                  />
                </div>
              </div>
            </div>
            <img className="kp-shape kp-shape--bottom" src={asset("landpage/shape-dark.png")} alt="" />
          </section>

          {/* Slogan */}
          <section id="slogan" className="kp-slogan">
            <div className="kp-container">
              <div className="kp-slogan__row">
                <div className="kp-desk">
                  <Reveal as="h2">Únase a la revolución del Smart Farming</Reveal>
                </div>
                <div>
                  <Reveal as="p" delay={100}>
                    <strong className="kp-green">KAAMPO</strong> es la primera plataforma{" "}
                    <strong>“smarthub farming”</strong> capaz de aglutinar todas las tecnologías
                    aplicadas al campo en un único entorno tecnológico, satisfaciendo así
                    cualquier requerimiento de información relacionado con una explotación
                    agrícola.
                  </Reveal>
                </div>
                <div className="kp-desk">
                  <Reveal delay={200}>
                    <img
                      className="kp-slogan__img"
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
          <section className="kp-audience kp-desk">
            <div className="kp-container">
              <Reveal as="h3">¿A quién va dirigido?...</Reveal>
              <div className="kp-audience__grid">
                {AUDIENCE.map((a, i) => (
                  <Reveal key={a.title} className="kp-audience__item" delay={i * 100}>
                    <img src={asset(a.icon)} alt="" width={a.w} height={a.h} />
                    <p className="kp-body kp-bold">{a.title}</p>
                    <p className="kp-body">{a.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Four-colour band */}
          <section className="kp-desk" style={{ position: "relative" }}>
            <div className="kp-band">
              {BAND.map((b) => (
                <div key={b.title} className="kp-band__col" style={{ background: b.bg }}>
                  <Reveal as="p" className="kp-band__title">
                    {b.title}
                  </Reveal>
                  <Reveal delay={100}>
                    <img src={asset(b.img)} alt="" width={910} height={1596} loading="lazy" />
                  </Reveal>
                  <Reveal as="p" className="kp-band__sub" delay={200}>
                    {b.text}
                  </Reveal>
                </div>
              ))}
            </div>
          </section>

          <FeatureSection f={FEATURES.connect} />
          <FeatureSection f={FEATURES.certify} />
          <FeatureSection f={FEATURES.productivity} />
          <FeatureSection f={FEATURES.costs} />

          {/* Clients */}
          <section className="kp-green-sec">
            <div className="kp-container">
              <div className="kp-clients__head">
                <Reveal as="h1">
                  CLIENTES QUE CONFÍAN
                  <br />
                  EN NOSOTROS
                </Reveal>
                <Reveal as="p" delay={100}>
                  Más de 6.000 agricultores ya confían en KAAMPO y en otros de nuestros productos
                </Reveal>
              </div>
              {CLIENT_ROWS.map((row, r) => (
                <Reveal
                  key={r}
                  delay={r * 100}
                  className={`kp-clients__row kp-clients__row--${row.length}`}
                >
                  {row.map((c) => (
                    <img
                      key={c}
                      src={asset(`clientes/${c}.jpg`)}
                      alt={c.replace(/-/g, " ")}
                      width={271}
                      height={271}
                      loading="lazy"
                    />
                  ))}
                </Reveal>
              ))}
            </div>
          </section>

          {/* Digital notebook / Kit Digital */}
          <section className="kp-green-sec kp-desk">
            <div className="kp-promo">
              <div className="kp-promo__left">
                <Reveal as="h1">
                  Cuaderno de
                  <br />
                  campo digital
                </Reveal>
                <Reveal as="h5" delay={100}>
                  Conoce ya el cuaderno de campo digital más completo y fácil de usar. Adáptate
                  cuanto antes a la nueva normativa obligatoria
                </Reveal>
                <Reveal delay={200}>
                  <OverlayButton target="login" className="kp-btn kp-btn--ghost">
                    PRUEBA GRATIS
                  </OverlayButton>
                </Reveal>
              </div>
              <div className="kp-promo__right">
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
                  <OverlayButton target="contact" className="kp-btn kp-btn--ghost">
                    MAS INFORMACION
                  </OverlayButton>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Banner */}
          <section className="kp-banner">
            <div className="kp-container">
              <div className="kp-banner__inner">
                <Reveal as="h3">INNOVACIÓN AL SERVICIO AGRÍCOLA</Reveal>
                <Reveal as="h2" delay={100}>
                  CON KAAMPO, ÚNETE A LA REVOLUCIÓN DEL SMART FARMING
                </Reveal>
                <Reveal as="p" delay={200}>
                  KAAMPO es la primera plataforma tecnológica “smarthub farming”, que auna todas
                  las tecnologías aplicadas al campo en un único entorno tecnológico, satisfaciendo
                  así cualquier requerimiento de información relacionado con una explotación
                  agrícola.
                </Reveal>
                <Reveal as="p" delay={250}>
                  Disponible para dispositivos iOS y Android
                </Reveal>
                <Reveal className="kp-banner__stores" delay={300}>
                  <img
                    src={asset("landpage/kaampo-android.png")}
                    alt="Aplicacion movil Kaampo en Google Play"
                    width={280}
                    height={80}
                  />
                  <img
                    src={asset("landpage/kaampo-iphone.png")}
                    alt="Aplicacion movil Kaampo en App Store"
                    width={280}
                    height={80}
                  />
                </Reveal>
              </div>
            </div>
          </section>

          <FeatureSection f={FEATURES.hub} />

          {/* Products + contact */}
          <section id="productos" className="kp-products">
            <div className="kp-container">
              <div className="kp-products__head">
                <Reveal as="h2">Nuestros productos</Reveal>
                <Reveal as="p" className="kp-body" delay={100}>
                  Aplicaciones móviles específicamente diseñadas para ajustarse a las necesidades
                  de cada perfil de usuario. Disponibles tanto para dispositivos Android como iOS
                </Reveal>
              </div>
              <div className="kp-products__grid">
                {PRODUCTS.map((p, i) => (
                  <Reveal key={p.name} className="kp-products__cell" delay={(i % 3) * 100}>
                    <div className="kp-card">
                      <img src={asset(p.img)} alt={p.name} width={640} height={799} loading="lazy" />
                      <div className="kp-card__title">
                        <div className="kp-card__name">{p.name}</div>
                        <div className="kp-card__desc">{p.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal className="kp-products__hubwrap">
                <img
                  className="kp-products__hub"
                  src={asset("landpage/front-smarthub.png")}
                  alt="SmartFarm hub"
                  width={2000}
                  height={600}
                  loading="lazy"
                />
              </Reveal>
            </div>
            <div className="kp-contact">
              <div className="kp-contact__text kp-desk">
                <Reveal as="h2">CONTACTA YA CON NOSOTROS</Reveal>
                <Reveal className="kp-contact__sub" delay={50}>
                  Estamos aquí para ayudarte, nuestra aspiración es dar el mejor servicio al sector
                  agrícola.
                </Reveal>
                <Reveal delay={100}>
                  <p className="kp-body">Calle Bethencourt Alfonso, 31</p>
                  <p className="kp-body">38002 Santa Cruz de Tenerife</p>
                  <p className="kp-body">
                    (+34) 637 56 30 16
                    <br />
                    <span>967 819 077</span>
                  </p>
                  <p className="kp-body">contacto@kaampo.com</p>
                  <OverlayButton target="contact" className="kp-btn kp-btn--onblue">
                    Cuéntanos tu caso
                  </OverlayButton>
                </Reveal>
              </div>
              <img
                className="kp-contact__img"
                src={asset("landpage/triptico.jpg")}
                alt=""
                width={834}
                height={631}
                loading="lazy"
              />
            </div>
            <img className="kp-shape kp-shape--top" src={asset("landpage/shape-01.png")} alt="" />
          </section>
        </main>
        <footer className="kp-footer">
          {FOOTER_LINKS.map((l) => (
            <a key={l.label} className="kp-navbtn" href={l.href}>
              {l.label}
            </a>
          ))}
        </footer>
      </OverlayProvider>
    </div>
  );
}
