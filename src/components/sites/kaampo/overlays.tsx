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
import { asset } from "./content";

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
      {open !== "none" && <div className="kp-backdrop" onClick={close} />}
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
    className: "kp-field__input",
    name,
    id: `kp-${name}`,
    required: true,
    placeholder: " ",
    autoFocus,
  };
  return (
    <div className="kp-field">
      {multiline ? <textarea {...common} /> : <input type={type} {...common} />}
      <label className="kp-field__label" htmlFor={`kp-${name}`}>
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

  // No Kaampo backend here: hand the request to the visitor's mail client.
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
    window.location.href = `mailto:contacto@kaampo.com?subject=${encodeURIComponent(
      "Formulario de contacto",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="kp-dialog-wrap">
      <div className="kp-dialog" role="dialog" aria-modal="true" aria-label="Formulario de contacto">
        <div className="kp-dialog__body">
          <div className="kp-dialog__info">
            <span className="kp-dialog__label">Formulario de contacto</span>
            <p className="kp-muted">
              Envíanos tus datos de contacto y comprueba cómo podemos ayudarte a mejorar la
              gestión de tu explotación
            </p>
            <a className="kp-dialog__phone" href="tel:+34677666596">(+34) 677 66 65 96</a>
            <a className="kp-dialog__phone" href="tel:+34637563016">(+34) 637 56 30 16</a>
            <a className="kp-dialog__mail" href="mailto:contacto@kaampo.com">contacto@kaampo.com</a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("avisos.jpg")} alt="" width={750} height={500} />
          </div>
          <form className="kp-dialog__form" onInput={onInput} onSubmit={onSubmit}>
            <Field label="Nombre y apellidos" name="nombre" autoFocus />
            <Field label="Empresa" name="empresa" />
            <Field label="Correo electrónico" name="email" type="email" />
            <Field label="Teléfono móvil" name="telefono" type="tel" />
            <Field label="Mensaje" name="mensaje" multiline />
            <button type="submit" className="kp-raised kp-raised--block" disabled={!valid}>
              ENVIAR
            </button>
          </form>
        </div>
        <div className="kp-dialog__actions">
          <button type="button" className="kp-flatbtn" onClick={onClose}>
            <span className="mi" aria-hidden>arrow_back</span> Volver
          </button>
        </div>
      </div>
    </div>
  );
}

const APP_URL = "https://www.kaampo.com/";

function LoginDrawer() {
  const [flipped, setFlipped] = useState(false);
  const login = useFormValid();
  const signup = useFormValid();
  // Authentication lives in the real Kaampo app; submitting hands off to it.
  const toApp = (e: FormEvent) => {
    e.preventDefault();
    window.open(APP_URL, "_blank", "noopener");
  };

  return (
    <aside className="kp-drawer" role="dialog" aria-modal="true" aria-label="Acceso">
      <div className={`kp-flipper${flipped ? " is-flipped" : ""}`}>
        <div className="kp-face" aria-hidden={flipped}>
          <h1>¡Bienvenido!</h1>
          <p className="kp-muted">Introduzca sus credenciales para iniciar sesión</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="kp-face__logo" src={asset("reglogo.png")} alt="Kaampo" width={160} height={52} />
          <form onInput={login.onInput} onSubmit={toApp}>
            <Field label="Email" name="login-email" autoFocus />
            <Field label="Contraseña" name="login-pass" type="password" />
            <label className="kp-check">
              <input type="checkbox" name="remember" /> Recordarme
            </label>
            <div className="kp-face__links">
              <button type="submit" className="kp-raised" disabled={!login.valid}>Entrar</button>
              <span>o</span>
              <button type="button" className="kp-link" onClick={() => setFlipped(true)}>
                Aún no estoy registrado
              </button>
            </div>
          </form>
          <hr />
          <a
            className="kp-link kp-face__center"
            href="mailto:contacto@kaampo.com?subject=Recuperar%20contrase%C3%B1a"
          >
            Vaya, no recuerdo la contraseña
          </a>
        </div>
        <div className="kp-face kp-face--back" aria-hidden={!flipped}>
          <h1>¡Vamos a empezar!</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="kp-face__logo" src={asset("login.png")} alt="" width={160} height={98} style={{ marginBottom: 32 }} />
          <form onInput={signup.onInput} onSubmit={toApp}>
            <div className="kp-field-row">
              <Field label="Nombre" name="reg-nombre" />
              <Field label="Apellidos" name="reg-apellidos" />
            </div>
            <Field label="Email" name="reg-email" type="email" />
            <Field label="Teléfono de contacto" name="reg-tel" type="tel" />
            <div className="kp-field-row">
              <Field label="Contraseña" name="reg-pass" type="password" />
              <Field label="Confirmar contraseña" name="reg-pass2" type="password" />
            </div>
            <label className="kp-check">
              <input type="checkbox" name="terms" required /> Acepto los términos y condiciones
            </label>
            <button type="submit" className="kp-raised kp-raised--block" disabled={!signup.valid} style={{ marginTop: 16 }}>
              Registrar
            </button>
          </form>
          <hr />
          <button type="button" className="kp-link kp-face__center" style={{ width: "100%" }} onClick={() => setFlipped(false)}>
            Ya tengo una cuenta
          </button>
        </div>
      </div>
    </aside>
  );
}
