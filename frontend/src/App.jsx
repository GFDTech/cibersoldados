const scoreTable = [
  {
    title: 'Eventos (verificados)',
    items: [
      'Asistencia: +10 (tope anual 100)',
      'Participante: +25 (tope anual 200)',
      'Staff/voluntario: +35 (tope anual 210)',
      'Mentor: +40 (tope anual 240)',
      'Speaker: +60 (tope anual 300)',
      'Podio Top 3: +150 (sin tope)',
      'Top 10: +80',
    ],
  },
  {
    title: 'Comunidades',
    items: [
      'Miembro activo (semestre): +20 (tope anual 40)',
      'Organizador/moderador (semestre): +60 (tope anual 120)',
      'Taller impartido: +50 (tope anual 200)',
    ],
  },
  {
    title: 'Certificaciones',
    items: [
      'Inicial: +80',
      'Intermedio: +160',
      'Avanzado: +300',
      'Experto: +450',
    ],
  },
  {
    title: 'Estudios',
    items: [
      'Curso formal (≥20h): +20 (tope anual 100)',
      'Diplomado/Programa: +150',
      'Título profesional: +250',
      'Postgrado: +350',
    ],
  },
  {
    title: 'Plataformas y rankings',
    items: [
      'Rango básico: +50',
      'Rango intermedio: +120',
      'Rango avanzado: +250',
      'Rango élite: +400',
    ],
  },
  {
    title: 'Contribución técnica',
    items: [
      'Writeup/Artículo: +30 (tope anual 240)',
      'Repo OSS/security: +60 (tope anual 300)',
      'Hallazgo responsable: +120',
    ],
  },
];

const ranks = [
  { name: 'Recluta', range: '0–99', icon: '🛡️' },
  { name: 'Cadete', range: '100–249', icon: '🎖️' },
  { name: 'Explorador', range: '250–499', icon: '🧭' },
  { name: 'Operador', range: '500–899', icon: '⚔️' },
  { name: 'Especialista', range: '900–1399', icon: '🛠️' },
  { name: 'Sargento', range: '1400–1999', icon: '📈' },
  { name: 'Teniente', range: '2000–2799', icon: '⭐' },
  { name: 'Capitán', range: '2800–3799', icon: '⭐⭐' },
  { name: 'Comandante', range: '3800+', icon: '👑' },
];

const badges = [
  {
    title: 'Recluta',
    description:
      'Escudo simple, una traza de circuito y un punto central (“boot”).',
  },
  {
    title: 'Cadete',
    description: 'Escudo con 1 chevron y retícula técnica.',
  },
  {
    title: 'Explorador',
    description: 'Escudo con radar/sonda y 2 chevrons.',
  },
  {
    title: 'Operador',
    description: 'Escudo con espada digital y 3 chevrons.',
  },
  {
    title: 'Especialista',
    description: 'Escudo con engranaje/circuito y estrella.',
  },
  {
    title: 'Sargento',
    description: 'Escudo con laurel parcial y 4 chevrons.',
  },
  {
    title: 'Teniente',
    description: 'Escudo con laurel completo y 1 estrella superior.',
  },
  {
    title: 'Capitán',
    description: 'Escudo con doble laurel, 2 estrellas y borde más grueso.',
  },
  {
    title: 'Comandante',
    description: 'Escudo complejo con corona de laurel, 3 estrellas y glow sutil.',
  },
  {
    title: 'Sello Verificado',
    description: 'Check adicional cuando el score depende mayoritariamente de logros verificados.',
  },
];

const privacyOptions = ['Privado', 'Solo comunidad', 'Público'];

const profileModules = [
  {
    title: 'Identidad pública',
    details: ['Alias, avatar, bio, especialidades', 'Estado: No verificado / Autodeclarado / Verificado'],
  },
  {
    title: 'Logros',
    details: [
      'Eventos, comunidades, certificaciones, estudios, rankings',
      'Portafolio opcional y reconocimientos con moderación',
    ],
  },
  {
    title: 'Historial de participación',
    details: ['Actividad por temporada/campaña', 'Transparencia de reglas de puntuación'],
  },
];

const minimumData = [
  'Alias / nickname (público por defecto, editable)',
  'Email (privado, confirmaciones y recuperación)',
  'País / región (granularidad baja)',
  'Consentimientos mínimos: términos, privacidad, comunicaciones operacionales',
];

const optionalData = [
  'Nombre y apellido (privado por defecto)',
  'Foto / avatar (público si se desea)',
  'Biografía breve (público)',
  'Ciudad (público/privado)',
  'RRSS: LinkedIn, GitHub, X, sitio personal, Discord, etc.',
  'Teléfono (privado, opt-in)',
  'Intereses/Especialidades (AppSec, CloudSec, DFIR, GRC, Red/Blue Team, OT)',
  'Disponibilidad: mentorías, charlas, voluntariado, contratación (opt-in)',
];

const flows = [
  {
    title: 'Registro mínimo',
    steps: [
      'Email + alias + país/región',
      'Verificación de email',
      'Consentimientos mínimos',
      'Opcional: completar perfil',
    ],
  },
  {
    title: 'Enrolamiento a evento',
    steps: [
      'Seleccionar evento',
      'Confirmar asistencia con email',
      'Emitir QR/confirmación',
      'Organizador acredita participación post-evento',
    ],
  },
  {
    title: 'Agregar logro',
    steps: [
      'Elegir tipo y nivel',
      'Adjuntar evidencia',
      'Estado pendiente/verificado',
      'Recalcular score y rango',
    ],
  },
  {
    title: 'Publicación del perfil',
    steps: [
      'Toggle perfil público (opt-in)',
      'Toggle mostrar puntaje, RRSS y logros',
    ],
  },
];

const verificationLevels = [
  {
    title: 'Autodeclarado',
    description: 'Ingresado por el usuario con evidencia opcional.',
  },
  {
    title: 'Verificado por evidencia',
    description: 'Links, credenciales, QR/event code o pruebas verificables.',
  },
  {
    title: 'Verificado por entidad',
    description: 'Organizadores, comunidades o partners acreditados.',
  },
];

const antifraud = [
  'Topes por categoría y periodo',
  'Auditoría de cambios (log)',
  'Señales de riesgo: duplicidad de evidencia, explosión de logros',
  'Mecanismo de apelación y moderación',
];

const deliverables = [
  'Taxonomía de especialidades y tipos de logros',
  'Catálogo de certificaciones y niveles (inicial/intermedio/avanzado/experto)',
  'Reglas de puntaje en formato configurable (no hardcode)',
  'Especificación visual de badges (tamaños, SVG layers)',
  'Política de verificación y moderación',
  'Plantillas para organizaciones verificadoras',
];

const mvpPhases = [
  {
    title: 'MVP 1',
    description: 'Enrolamiento + perfil básico + eventos con verificación por código + score simple.',
  },
  {
    title: 'MVP 2',
    description: 'Vitrina pública opt-in + módulos de certificaciones/estudios/RRSS + sello verificado.',
  },
  {
    title: 'MVP 3',
    description: 'Partners verificadores, temporadas/campañas, rankings y convocatorias.',
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Plataforma de reputación y enrolamiento</p>
          <h1>Cibersoldados</h1>
          <p className="subtitle">
            Enrolamiento rápido, reputación verificable y vitrina de talento con privacidad granular.
          </p>
          <div className="pill-row">
            <span>Minimización de datos</span>
            <span>Consentimiento granular</span>
            <span>Verificabilidad</span>
            <span>Meritocracia</span>
            <span>Transparencia</span>
          </div>
        </div>
        <div className="hero-card">
          <h3>Objetivo</h3>
          <p>
            Gestionar enrolamientos, reconocer aportes y mostrar talento con reglas claras de
            puntuación y antifraude.
          </p>
          <div className="cta-row">
            <button type="button">Crear cuenta</button>
            <button type="button" className="ghost">
              Ver catálogo
            </button>
          </div>
          <div className="stat-row">
            <div>
              <strong>+3 funciones</strong>
              <span>Enrolamiento · Reconocimiento · Vitrina</span>
            </div>
            <div>
              <strong>9 rangos</strong>
              <span>Con badges y sello verificado</span>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <h2>Datos mínimos vs opcionales</h2>
        <div className="grid two">
          <div className="card">
            <h3>Obligatorios para enrolamiento</h3>
            <ul>
              {minimumData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Opcionales para reconocimiento</h3>
            <ul>
              {optionalData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="privacy-row">
          <h4>Controles de privacidad por campo</h4>
          <div className="pill-row">
            {privacyOptions.map((option) => (
              <span key={option}>{option}</span>
            ))}
            <span>Ocultar puntaje (logro visible)</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Perfil público y vitrina de talento (opt-in)</h2>
        <div className="grid three">
          {profileModules.map((module) => (
            <div className="card" key={module.title}>
              <h3>{module.title}</h3>
              <ul>
                {module.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Catálogo de logros y verificación</h2>
        <div className="grid two">
          <div className="card">
            <h3>Tipos de logros</h3>
            <ul>
              <li>Eventos: asistencia, participación, staff, mentor, speaker, podios.</li>
              <li>Comunidades: antigüedad, moderación, aportes OSS.</li>
              <li>Certificaciones: industria, académicas, microcredenciales.</li>
              <li>Estudios: técnico, profesional, postgrado, cursos relevantes.</li>
              <li>Plataformas: HTB/THM, rangos, seasons, pro labs.</li>
              <li>Portafolio: charlas, writeups, repos, publicaciones.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Mecanismos de verificación</h3>
            <ul>
              <li>Integraciones con plataformas de evento o códigos de verificación.</li>
              <li>Validación por organizadores y partners acreditados.</li>
              <li>Claim con token en bio o evidencia controlada.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Sistema de puntuación (base + actividad)</h2>
        <p className="section-lead">
          Score total = Base (permanente) + Actividad (últimos 12 meses), con topes por categoría y
          mayor peso para logros verificados.
        </p>
        <div className="grid three">
          {scoreTable.map((group) => (
            <div className="card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="card highlight">
          <h3>Multiplicadores</h3>
          <ul>
            <li>Verificado: x1.0</li>
            <li>Autodeclarado: x0.5 (hasta verificar)</li>
            <li>Evidencia fuerte/curaduría: +10% bonus (opcional)</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Jerarquía de rangos</h2>
        <div className="grid four">
          {ranks.map((rank) => (
            <div className="card rank" key={rank.name}>
              <div className="rank-icon">{rank.icon}</div>
              <h3>{rank.name}</h3>
              <p>{rank.range}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Badges digitales</h2>
        <div className="grid two">
          {badges.map((badge) => (
            <div className="card" key={badge.title}>
              <h3>{badge.title}</h3>
              <p>{badge.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Verificación y confianza</h2>
        <div className="grid three">
          {verificationLevels.map((level) => (
            <div className="card" key={level.title}>
              <h3>{level.title}</h3>
              <p>{level.description}</p>
            </div>
          ))}
        </div>
        <div className="card highlight">
          <h3>Controles antifraude</h3>
          <ul>
            {antifraud.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Flujos clave del MVP</h2>
        <div className="grid two">
          {flows.map((flow) => (
            <div className="card" key={flow.title}>
              <h3>{flow.title}</h3>
              <ol>
                {flow.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Roadmap MVP</h2>
        <div className="grid three">
          {mvpPhases.map((phase) => (
            <div className="card" key={phase.title}>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Entregables listos para producción</h2>
        <div className="card">
          <ul className="two-column">
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Cibersoldados</strong>
          <p>Plataforma para construir reputación en ciberseguridad con confianza y privacidad.</p>
        </div>
        <div>
          <span>API base: /api</span>
          <span>Versionado: v1 (MVP)</span>
        </div>
      </footer>
    </div>
  );
}
