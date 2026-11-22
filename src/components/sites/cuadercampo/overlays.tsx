"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { asset, CONTACT, EMAIL } from "./content";
import { Logo } from "./logo";

type Overlay = "none" | "contact" | "login";

const OverlayContext = createContext<(o: Overlay) => void>(() => {});

export function useOverlay() {
  return useContext(OverlayContext);
}

export function OverlayProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<Overlay>("none");
  const close = useCallback(() => setOpen("none"), []);

  useEffect(() => {
    if (open === "none") return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <OverlayContext.Provider value={setOpen}>
      {children}
      {open !== "none" && <div className="cc-backdrop" onClick={close} />}
      {open === "contact" && <ContactDialog onClose={close} />}
      {open === "login" && <LoginDrawer />}
    </OverlayContext.Provider>
  );
}

/** Button that opens one of the page overlays (contact dialog / login drawer). */
export function OverlayButton({
  target,
  className,
  children,
}: {
  target: Exclude<Overlay, "none">;
  className: string;
  children: ReactNode;
}) {
  const setOpen = useOverlay();
  return (
    <button type="button" className={className} onClick={() => setOpen(target)}>
      {children}
    </button>
  );
}

function Field({
  label,
  name,
  type = "text",
  multiline = false,
  autoFocus = false,
}: {
  label: string;
  name: string;
  type?: string;
  multiline?: boolean;
  autoFocus?: boolean;
}) {
  const common = {
    className: "cc-field__input",
    name,
    id: `cc-${name}`,
    required: true,
    placeholder: " ",
    autoFocus,
  };
  return (
    <div className="cc-field">
      {multiline ? <textarea {...common} /> : <input type={type} {...common} />}
      <label className="cc-field__label" htmlFor={`cc-${name}`}>
        {label} <i>*</i>
      </label>
    </div>
  );
}

function useFormValid() {
  const [valid, setValid] = useState(false);
  const onInput = (e: FormEvent<HTMLFormElement>) =>
    setValid(e.currentTarget.checkValidity());
  return { valid, onInput };
}

function ContactDialog({ onClose }: { onClose: () => void }) {
  const { valid, onInput } = useFormValid();

  // No backend yet: hand the request to the visitor's mail client.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Nombre y apellidos: ${d.get("nombre")}`,
      `Empresa: ${d.get("empresa")}`,
      `Correo electrónico: ${d.get("email")}`,
      `Teléfono móvil: ${d.get("telefono")}`,
      "",
      String(d.get("mensaje")),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Formulario de contacto",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="cc-dialog-wrap">
      <div className="cc-dialog" role="dialog" aria-modal="true" aria-label="Formulario de contacto">
        <div className="cc-dialog__body">
          <div className="cc-dialog__info">
            <span className="cc-dialog__label">Formulario de contacto</span>
            <p className="cc-muted">
              Envíanos tus datos de contacto y comprueba cómo podemos ayudarte a mejorar la
              gestión de tu explotación
            </p>
            {CONTACT.phones.map((p) => (
              <a key={p.tel} className="cc-dialog__phone" href={`tel:${p.tel}`}>
                {p.label}
              </a>
            ))}
            <a className="cc-dialog__mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("avisos.jpg")} alt="" width={750} height={500} />
          </div>
          <form className="cc-dialog__form" onInput={onInput} onSubmit={onSubmit}>
            <Field label="Nombre y apellidos" name="nombre" autoFocus />
            <Field label="Empresa" name="empresa" />
            <Field label="Correo electrónico" name="email" type="email" />
            <Field label="Teléfono móvil" name="telefono" type="tel" />
            <Field label="Mensaje" name="mensaje" multiline />
            <button type="submit" className="cc-raised cc-raised--block" disabled={!valid}>
              ENVIAR
            </button>
          </form>
        </div>
        <div className="cc-dialog__actions">
          <button type="button" className="cc-flatbtn" onClick={onClose}>
            <span className="mi" aria-hidden>arrow_back</span> Volver
          </button>
        </div>
      </div>
    </div>
  );
}

function LoginDrawer() {
  const [flipped, setFlipped] = useState(false);
  const login = useFormValid();
  const signup = useFormValid();
  const [notice, setNotice] = useState(false);
  // The CuaderCampo web app is not live yet: tell the visitor how to get access.
  const toApp = (e: FormEvent) => {
    e.preventDefault();
    setNotice(true);
  };
  const noticeBox = notice && (
    <p className="cc-face__notice" role="status">
      El acceso a la plataforma estará disponible muy pronto. Escríbenos a{" "}
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a> y te daremos de alta.
    </p>
  );

  return (
    <aside className="cc-drawer" role="dialog" aria-modal="true" aria-label="Acceso">
      <div className={`cc-flipper${flipped ? " is-flipped" : ""}`}>
        <div className="cc-face" aria-hidden={flipped}>
          <h1>¡Bienvenido!</h1>
          <p className="cc-muted">Introduzca sus credenciales para iniciar sesión</p>
          <div className="cc-face__logo">
            <Logo tone="dark" />
          </div>
          <form onInput={login.onInput} onSubmit={toApp}>
            <Field label="Email" name="login-email" autoFocus />
            <Field label="Contraseña" name="login-pass" type="password" />
            <label className="cc-check">
              <input type="checkbox" name="remember" /> Recordarme
            </label>
            <div className="cc-face__links">
              <button type="submit" className="cc-raised" disabled={!login.valid}>Entrar</button>
              <span>o</span>
              <button type="button" className="cc-link" onClick={() => setFlipped(true)}>
                Aún no estoy registrado
              </button>
            </div>
          </form>
          {!flipped && noticeBox}
          <hr />
          <a
            className="cc-link cc-face__center"
            href={`mailto:${EMAIL}?subject=Recuperar%20contrase%C3%B1a`}
          >
            Vaya, no recuerdo la contraseña
          </a>
        </div>
        <div className="cc-face cc-face--back" aria-hidden={!flipped}>
          <h1>¡Vamos a empezar!</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cc-face__logo" src={asset("login.png")} alt="" width={160} height={98} style={{ marginBottom: 32 }} />
          <form onInput={signup.onInput} onSubmit={toApp}>
            <div className="cc-field-row">
              <Field label="Nombre" name="reg-nombre" />
              <Field label="Apellidos" name="reg-apellidos" />
            </div>
            <Field label="Email" name="reg-email" type="email" />
            <Field label="Teléfono de contacto" name="reg-tel" type="tel" />
            <div className="cc-field-row">
              <Field label="Contraseña" name="reg-pass" type="password" />
              <Field label="Confirmar contraseña" name="reg-pass2" type="password" />
            </div>
            <label className="cc-check">
              <input type="checkbox" name="terms" required /> Acepto los términos y condiciones
            </label>
            <button type="submit" className="cc-raised cc-raised--block" disabled={!signup.valid} style={{ marginTop: 16 }}>
              Registrar
            </button>
          </form>
          {flipped && noticeBox}
          <hr />
          <button type="button" className="cc-link cc-face__center" style={{ width: "100%" }} onClick={() => setFlipped(false)}>
            Ya tengo una cuenta
          </button>
        </div>
      </div>
    </aside>
  );
}
