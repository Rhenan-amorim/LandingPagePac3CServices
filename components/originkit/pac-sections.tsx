// PAC — Plano Anual de Capacitação · seções de conteúdo
// Sistema visual: Montserrat + azul #1366A4 / verde #1A8B4A / laranja #DD6B38 + cinzas quentes.

import TextLift from "@/components/originkit/ui/textlift";

/** Gradiente quente (verde → laranja) usado na letra C da seção Conceito */
const WARM_GRADIENT = "linear-gradient(120deg,#5cc35a 0%,#ffc79e 52%,#ff8f4d 100%)";

type Accent = "blue" | "green" | "orange";

const accentText: Record<Accent, string> = {
  blue: "text-brand-blue",
  green: "text-brand-green",
  orange: "text-brand-orange",
};
const accentBg: Record<Accent, string> = {
  blue: "bg-brand-blue",
  green: "bg-brand-green",
  orange: "bg-brand-orange",
};
const accentSoft: Record<Accent, string> = {
  blue: "bg-brand-blue/10",
  green: "bg-brand-green/10",
  orange: "bg-brand-orange/10",
};

/* ---------- Ícone genérico em círculo ---------- */
function IconCircle({
  accent,
  children,
}: {
  accent: Accent;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full ${accentBg[accent]} text-white shadow-sm`}
    >
      {children}
    </span>
  );
}

/* Ícones SVG simples (stroke currentColor) */
const I = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="3" /><path d="M22 20v-2a4 4 0 0 0-3-3.87" /><path d="M16 4.13A4 4 0 0 1 16 12" /></svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" /></svg>
  ),
  swap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3l4 4-4 4" /><path d="M21 7H7a4 4 0 0 0-4 4" /><path d="M7 21l-4-4 4-4" /><path d="M3 17h14a4 4 0 0 0 4-4" /></svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="5" /><rect x="12" y="8" width="3" height="9" /><rect x="17" y="5" width="3" height="12" /></svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="size-6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
  ),
  quote: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 11H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4" /><path d="M20 11h-4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4" /></svg>
  ),
  mega: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>
  ),
};

/* ---------- Dados ---------- */
const PILARES: { accent: Accent; icon: React.ReactNode; text: string }[] = [
  { accent: "blue", icon: I.heart, text: "Valorizar histórias de aprendizados e superações." },
  { accent: "green", icon: I.swap, text: "Inspirar a troca e o desejo de ensinar." },
  { accent: "orange", icon: I.chart, text: "Fortalecer nossa cultura de conhecimento e colaboração." },
];

const ETAPAS: { n: string; title: string; desc: string; accent: Accent }[] = [
  { n: "1", title: "3C em Foco — Anunciando o PAC", desc: "Apresentação do PAC e do seu propósito.", accent: "blue" },
  { n: "2", title: "Dados que reforçam os benefícios", desc: "Dados e informações que mostram o impacto de compartilhar conhecimentos.", accent: "green" },
  { n: "3", title: "História de um colaborador", desc: "Depoimento inspirador sobre a jornada de aprendizado e evolução.", accent: "orange" },
  { n: "4", title: "História de um colaborador (2)", desc: "Outra história real, mostrando diferentes trajetórias e aprendizados que transformam.", accent: "blue" },
  { n: "5", title: "Anúncio das inscrições", desc: "Informações práticas sobre como participar, prazos e próximos passos.", accent: "green" },
  { n: "6", title: "Acompanhamento e feedback", desc: "Atualizações sobre o andamento do PAC e espaço para ouvir evoluções e sugestões.", accent: "orange" },
];

const CANAIS = [
  "3C em Foco (e-mail interno)",
  "Intranet",
  "Teams / Comunicados",
  "Reuniões de liderança",
];

const CRONOGRAMA = [
  { etapa: "Apresentação à liderança", prazo: "Semana 1" },
  { etapa: "Início da campanha (Etapa 1)", prazo: "Semana 2" },
  { etapa: "Campanha (Etapas 1 a 6)", prazo: "Semanas 2 a 7" },
  { etapa: "Período de inscrições", prazo: "Semana 5" },
  { etapa: "Acompanhamento e feedback", prazo: "Após inscrições" },
];

const KPIS = [
  "Número de inscritos",
  "Engajamento nas comunicações",
  "Participação nas ações",
  "Feedback dos participantes",
];

const PROXIMOS = [
  "Aprovação da campanha",
  "Alinhamento com a liderança",
  "Preparação dos materiais",
  "Lançamento!",
];

/* ---------- Helpers de layout ---------- */
function SectionTag({ accent, children }: { accent: Accent; children: React.ReactNode }) {
  return (
    <span className={`text-[12px] font-bold uppercase tracking-[0.22em] ${accentText[accent]}`}>
      {children}
    </span>
  );
}

/* ---------- Componente principal ---------- */
export default function PacSections() {
  return (
    <main className="w-full bg-surface font-sans text-body">
      {/* ===== CONTEXTO / OBJETIVO / PÚBLICO ===== */}
      <section id="contexto" className="mx-auto w-full max-w-[1200px] scroll-mt-24 px-6 py-20 md:py-28 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <SectionTag accent="blue">O ponto de partida</SectionTag>
          <h2 className="mt-3 font-sans text-[30px] font-extrabold leading-tight tracking-[-1px] text-ink md:text-[40px]">
            Conhecimento que conecta, transforma e multiplica.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-line bg-white p-7 shadow-[0_2px_20px_rgba(18,21,22,0.04)]">
            <IconCircle accent="blue">{I.users}</IconCircle>
            <h3 className="mt-5 text-[18px] font-bold text-ink">Contexto</h3>
            <p className="mt-3 text-[15px] leading-relaxed">
              Todo profissional, em algum momento, precisou aprender com alguém
              para chegar onde está hoje. Na 3C Services, acreditamos que o
              conhecimento que cada um carrega pode ser o próximo passo de alguém.
            </p>
          </article>

          <article className="rounded-2xl border border-line bg-white p-7 shadow-[0_2px_20px_rgba(18,21,22,0.04)]">
            <IconCircle accent="green">{I.target}</IconCircle>
            <h3 className="mt-5 text-[18px] font-bold text-ink">Objetivo da campanha</h3>
            <p className="mt-3 text-[15px] leading-relaxed">
              Apresentar o PAC aos colaboradores, convidando aqueles que possuem
              conhecimentos, experiências e habilidades específicas a se tornarem
              multiplicadores de conhecimento, compartilhando sua expertise com
              outros profissionais da 3C Services.
            </p>
          </article>

          <article className="rounded-2xl border border-line bg-white p-7 shadow-[0_2px_20px_rgba(18,21,22,0.04)]">
            <IconCircle accent="orange">{I.spark}</IconCircle>
            <h3 className="mt-5 text-[18px] font-bold text-ink">Público-alvo</h3>
            <p className="mt-3 text-[15px] leading-relaxed">
              Colaboradores do time
            </p>
            <p className="mt-2 text-[26px] font-extrabold tracking-tight text-brand-orange">
              Administrativo
            </p>
          </article>
        </div>
      </section>

      {/* ===== GRANDE IDEIA / CONCEITO (faixa azul da marca) ===== */}
      <section id="conceito" className="bg-brand-band scroll-mt-24 text-white">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-6 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:px-10">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/75">
              Grande ideia · Conceito
            </span>
            <h2 className="mt-4 font-sans text-[30px] font-extrabold leading-[1.1] tracking-[-1px] md:text-[46px]">
              Seja o próximo passo de alguém.
              <br />
              <span className="text-gradient-warm">Seja um embaixador do conhecimento.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/80">
              Vamos conectar essa narrativa a um dos nossos “Cs”: o de{" "}
              <span className="font-semibold text-white">Conhecimento</span> — o
              valor que conecta pessoas, transforma trajetórias e se multiplica a
              cada troca.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                { w: "Conecta", c: "text-[#cfe8ff]" },
                { w: "Transforma", c: "text-[#a6e7b8]" },
                { w: "Multiplica", c: "text-[#ffc79e]" },
              ].map((t) => (
                <span
                  key={t.w}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[14px] font-semibold"
                >
                  Conhecimento <span className={t.c}>{t.w.toLowerCase()}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex size-56 items-center justify-center rounded-3xl border border-white/20 bg-white/10 md:size-64">
              <TextLift
                text="C"
                filled
                fade
                stroke={0}
                depth={3}
                spread={3}
                expand={26}
                direction="top"
                frontColor="#ffffff"
                depthColor="#ffffff"
                strokeColor="#ffffff"
                gradient={WARM_GRADIENT}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                font={{
                  fontFamily: '"Montserrat", ui-sans-serif, sans-serif',
                  fontWeight: 900,
                  fontSize: "clamp(120px,15vw,168px)",
                  lineHeight: "1em",
                  letterSpacing: "-0.02em",
                }}
              />
              <span className="absolute bottom-6 text-[12px] font-bold uppercase tracking-[0.3em] text-white/75">
                Conhecimento
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ESTRATÉGIA ===== */}
      <section id="estrategia" className="mx-auto w-full max-w-[1200px] scroll-mt-24 px-6 py-20 md:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="max-w-md">
            <SectionTag accent="green">Estratégia</SectionTag>
            <h2 className="mt-3 font-sans text-[28px] font-extrabold leading-tight tracking-[-1px] text-ink md:text-[36px]">
              Storytelling para inspirar quem ensina.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed">
              Usaremos o storytelling para valorizar trajetórias reais e inspirar
              a cultura de compartilhamento. A campanha será construída em etapas,
              criando engajamento e conexão até o momento das inscrições.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {PILARES.map((p) => (
              <div
                key={p.text}
                className={`rounded-2xl ${accentSoft[p.accent]} border border-line/60 p-6`}
              >
                <IconCircle accent={p.accent}>{p.icon}</IconCircle>
                <p className="mt-4 text-[15px] font-medium leading-relaxed text-ink-soft">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ETAPAS DA CAMPANHA ===== */}
      <section id="etapas" className="scroll-mt-24 bg-surface-2/60">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <SectionTag accent="orange">Etapas da campanha · 3C em Foco</SectionTag>
            <h2 className="mt-3 font-sans text-[30px] font-extrabold leading-tight tracking-[-1px] text-ink md:text-[40px]">
              Uma jornada em 6 passos até as inscrições.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ETAPAS.map((e) => (
              <article
                key={e.n}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-[0_2px_20px_rgba(18,21,22,0.04)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex size-11 items-center justify-center rounded-full ${accentBg[e.accent]} text-[18px] font-black text-white`}
                  >
                    {e.n}
                  </span>
                  <span className={`text-[12px] font-bold uppercase tracking-[0.18em] ${accentText[e.accent]}`}>
                    Etapa {e.n}
                  </span>
                </div>
                <h3 className="mt-5 text-[17px] font-bold leading-snug text-ink">
                  {e.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed">{e.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#participar"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-blue px-8 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(19,102,164,0.28)] transition-transform hover:-translate-y-0.5"
            >
              Quero ser multiplicador
            </a>
          </div>
        </div>
      </section>

      {/* ===== CANAIS · CRONOGRAMA · KPIs ===== */}
      <section className="mx-auto w-full max-w-[1200px] scroll-mt-24 px-6 py-20 md:py-28 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Canais */}
          <div className="rounded-2xl border border-line bg-white p-7">
            <IconCircle accent="blue">{I.mega}</IconCircle>
            <h3 className="mt-5 text-[18px] font-bold text-ink">Canais</h3>
            <ul className="mt-4 space-y-3">
              {CANAIS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[15px]">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-blue" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Cronograma */}
          <div className="rounded-2xl border border-line bg-white p-7">
            <IconCircle accent="green">{I.chart}</IconCircle>
            <h3 className="mt-5 text-[18px] font-bold text-ink">Cronograma</h3>
            <ul className="mt-4 divide-y divide-line">
              {CRONOGRAMA.map((row) => (
                <li key={row.etapa} className="flex items-center justify-between gap-3 py-2.5">
                  <span className="text-[14px] leading-snug text-ink-soft">{row.etapa}</span>
                  <span className="shrink-0 rounded-full bg-brand-green/10 px-3 py-1 text-[12px] font-bold text-brand-green-dark">
                    {row.prazo}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* KPIs */}
          <div className="rounded-2xl border border-line bg-white p-7">
            <IconCircle accent="orange">{I.target}</IconCircle>
            <h3 className="mt-5 text-[18px] font-bold text-ink">Indicadores (KPIs)</h3>
            <ul className="mt-4 space-y-3">
              {KPIS.map((k) => (
                <li key={k} className="flex items-start gap-3 text-[15px]">
                  <span className="mt-0.5 text-brand-orange">{I.check}</span>
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PRÓXIMOS PASSOS / CTA ===== */}
      <section id="participar" className="bg-brand-band scroll-mt-24 text-white">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 md:py-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/75">
                Próximos passos
              </span>
              <h2 className="mt-4 font-sans text-[30px] font-extrabold leading-[1.1] tracking-[-1px] md:text-[42px]">
                Pronto para ser o próximo passo de alguém?
              </h2>
              <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/70">
                O PAC nasce do que cada um já sabe. Compartilhe sua expertise e
                ajude a construir uma cultura em que o conhecimento nunca para de
                se multiplicar.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contexto"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[15px] font-bold text-brand-blue-dark shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5"
                >
                  Quero ser multiplicador
                </a>
                <a
                  href="#conceito"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Rever o conceito
                </a>
              </div>
            </div>

            <ol className="grid gap-3">
              {PROXIMOS.map((p, i) => (
                <li
                  key={p}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-white/10 text-[14px] font-black text-white">
                    {i + 1}
                  </span>
                  <span className="text-[16px] font-semibold">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== RODAPÉ ===== */}
      <footer className="bg-brand-blue-dark text-white/80">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-14 text-center lg:px-10">
          <img
            src="/originkit/hero-06/logo-3c.png"
            alt="3C Services"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            draggable={false}
          />
          <p className="max-w-xl font-sans text-[18px] font-semibold italic text-white md:text-[22px]">
            Conhecimento conecta. Conhecimento transforma. Conhecimento multiplica.
          </p>
          <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-white/50">
            3C Services · Plano Anual de Capacitação
          </p>
        </div>
      </footer>
    </main>
  );
}
