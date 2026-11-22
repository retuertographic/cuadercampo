import { ERP_PARTNERS } from "./content";
import { LogoMark } from "./logo";

/** "Your farm platform, connected to your ERP": CuaderCampo hub linked to ERP systems. */
export function InteropDiagram() {
  const top = 150;
  const step = 132;
  const pillX = 1080;
  const hub = { x: 560, y: 496 };

  return (
    <svg
      className="cc-interop"
      viewBox="0 0 1586 992"
      role="img"
      aria-label="CuaderCampo conectado con Microsoft Dynamics, a3ERP, Sage, Odoo, Holded y SAP"
    >
      <rect x="0" y="0" width="1586" height="992" rx="32" fill="#f4f8fb" />

      {ERP_PARTNERS.map((name, i) => {
        const y = top + i * step;
        return (
          <g key={name}>
            <path
              d={`M${hub.x + 150} ${hub.y} C ${hub.x + 330} ${hub.y}, ${pillX - 200} ${y + 40}, ${pillX} ${y + 40}`}
              stroke="#5ab0e0"
              strokeWidth="5"
              strokeDasharray="4 14"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx={pillX} cy={y + 40} r="9" fill="#5ab0e0" />
            <rect
              x={pillX + 24}
              y={y}
              width="380"
              height="80"
              rx="18"
              fill="#fff"
              stroke="#d5e3ee"
              strokeWidth="3"
            />
            <text
              x={pillX + 214}
              y={y + 52}
              textAnchor="middle"
              fontFamily="var(--font-roboto), Roboto, sans-serif"
              fontSize="38"
              fontWeight="700"
              fill="#004a71"
            >
              {name}
            </text>
          </g>
        );
      })}

      <circle cx={hub.x} cy={hub.y} r="150" fill="#090d33" />
      <circle cx={hub.x} cy={hub.y} r="172" fill="none" stroke="#00c853" strokeWidth="6" strokeDasharray="2 18" strokeLinecap="round" />
      <g transform={`translate(${hub.x - 70} ${hub.y - 100})`} color="#fff">
        <LogoMark size={140} />
      </g>
      <text
        x={hub.x}
        y={hub.y + 92}
        textAnchor="middle"
        fontFamily="var(--font-archivo), Archivo, sans-serif"
        fontSize="40"
        fontWeight="700"
        fill="#fff"
      >
        cuader<tspan fill="#00c853">campo</tspan>
      </text>

      <g transform="translate(110 210)">
        <rect width="250" height="54" rx="27" fill="#00c853" />
        <text x="125" y="36" textAnchor="middle" fontFamily="var(--font-archivo), Archivo, sans-serif" fontSize="24" fontWeight="700" fill="#fff" letterSpacing="2">
          WEB API
        </text>
      </g>

      <text x="110" y="830" fontFamily="var(--font-archivo), Archivo, sans-serif" fontSize="44" fill="#004a71">
        Tu plataforma agrícola,
      </text>
      <text x="110" y="890" fontFamily="var(--font-archivo), Archivo, sans-serif" fontSize="48" fontWeight="700" fill="#004a71">
        conectada con tu ERP
      </text>
      <rect x="110" y="910" width="120" height="8" rx="4" fill="#5ab0e0" />
    </svg>
  );
}
