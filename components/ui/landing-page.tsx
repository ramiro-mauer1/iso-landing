"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  MapPin,
  Calendar,
  Car,
  Wrench,
  Shield,
  Wind,
  Search,
  Zap,
  Hammer,
  Star,
  ChevronDown,
  MessageCircle,
  Award,
  Clock,
  Users,
  Package,
  Check,
  TrendingUp,
  Banknote,
  Briefcase,
  AlertCircle,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// ─── types ───────────────────────────────────────────────────────────────────
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// ─── animation variants ──────────────────────────────────────────────────────
const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// ─── constants ───────────────────────────────────────────────────────────────
const WA_LINK =
  "https://wa.me/5491134404433?text=Hola%2C%20quiero%20inscribirme%20al%20curso%20de%20Refrigeraci%C3%B3n"

const LAUNCH_DATE = new Date("2026-05-14T10:00:00-03:00")

function trackAndOpen() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact", { content_name: "WhatsApp CTA" })
  }
  window.open(WA_LINK, "_blank")
}

// ─── sub-components ──────────────────────────────────────────────────────────

function WhatsAppButton({
  label = "Quiero inscribirme",
  large = false,
  variant = "default",
}: {
  label?: string
  large?: boolean
  variant?: "default" | "outline"
}) {
  if (variant === "outline") {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={trackAndOpen}
        className={`inline-flex items-center gap-2 border border-accent text-accent font-semibold transition-all hover:bg-accent/10 cursor-pointer ${
          large ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm"
        }`}
      >
        <MessageCircle className={large ? "h-5 w-5" : "h-4 w-4"} />
        {label}
      </motion.button>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={trackAndOpen}
      className={`inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold transition-colors hover:bg-[#d4921a] cursor-pointer ${
        large ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm"
      }`}
    >
      <MessageCircle className={large ? "h-5 w-5" : "h-4 w-4"} />
      {label}
    </motion.button>
  )
}

// ─── TRUST BAR ───────────────────────────────────────────────────────────────
function TrustBar() {
  const stats = [
    { value: "15", unit: "AÑOS", label: "formando técnicos" },
    { value: "+400", unit: "EGRESADOS", label: "ya trabajan en el rubro" },
    { value: "6", unit: "MESES", label: "para salir habilitado" },
    { value: "1", unit: "DÍA/SEM", label: "solo los viernes" },
  ]

  return (
    <div className="w-full bg-primary border-y border-primary/80">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/10"
        >
          {stats.map(({ value, unit, label }) => (
            <motion.div
              key={unit}
              variants={itemFadeIn}
              className="flex flex-col items-center py-5 px-4 text-center"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl md:text-5xl text-accent leading-none">
                  {value}
                </span>
                <span className="font-mono text-xs text-accent/80 tracking-widest">{unit}</span>
              </div>
              <p className="text-primary-foreground/60 text-xs mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// ─── QUALIFICATION SECTION ────────────────────────────────────────────────────
function QualificationSection() {
  const checks = [
    "Querés aprender un oficio concreto con salida laboral real, no otro título que no sirve",
    "Buscás independizarte o sumar un ingreso extra trabajando por tu cuenta",
    "Podés dedicar un sábado por semana — solo 2 horas, de 10 a 12 hs o de 12 a 14 hs",
    "Estás cansado de no tener una habilidad técnica que te diferencie",
    "Querés un certificado profesional reconocido en toda la industria",
  ]

  const nopes = [
    "Si ya sos técnico matriculado y solo buscás cursos avanzados",
    "Si no podés comprometerte con la cursada presencial",
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-card/40">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <span className="section-label">Calificación</span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4 leading-none tracking-wide">
              ¿ESTE CURSO<br />
              <span className="text-accent">ES PARA VOS?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-start">
            {/* SÍ */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-3"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-accent/70 mb-4">
                ✓ Sí es para vos si...
              </p>
              {checks.map((text, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  className="flex gap-4 items-start border-l-2 border-accent/30 pl-4 py-1 hover:border-accent transition-colors duration-300"
                >
                  <div className="mt-0.5 flex-shrink-0 h-5 w-5 bg-accent/15 flex items-center justify-center">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* NO */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-3"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                ✗ No es para vos si...
              </p>
              {nopes.map((text, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  className="flex gap-4 items-start border-l-2 border-white/10 pl-4 py-1"
                >
                  <AlertCircle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
                </motion.div>
              ))}

              <motion.div
                variants={itemFadeIn}
                className="mt-8 border border-accent/20 bg-accent/5 p-5"
              >
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Si te identificaste con los primeros 5 puntos,{" "}
                  <span className="text-accent font-semibold">este es tu lugar</span>.
                  Hay 10 cupos disponibles para la comisión de abril.
                </p>
                <div className="mt-4">
                  <WhatsAppButton label="Reservar mi lugar" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── MARKET SECTION ───────────────────────────────────────────────────────────
function MarketSection() {
  const dataPoints = [
    {
      Icon: Banknote,
      number: "$300K–$600K",
      label: "por mes",
      desc: "Ingreso promedio de un técnico con experiencia en el AMBA. En temporada alta, más.",
    },
    {
      Icon: TrendingUp,
      number: "+15.000",
      label: "equipos/año",
      desc: "Solo en Buenos Aires. Cada equipo instalado requiere service, reparaciones y mantenimiento.",
    },
    {
      Icon: Briefcase,
      number: "70%",
      label: "trabaja por su cuenta",
      desc: "De nuestros egresados empieza a facturar de manera independiente antes de los 6 meses post-egreso.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12"
        >
          <span className="section-label">Mercado laboral</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4 leading-none tracking-wide">
            EL RUBRO QUE<br />
            <span className="text-accent">NO PARA DE CRECER</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            El verano trae calor, el invierno trae frío. Los técnicos en refrigeración trabajan todo el año,
            con demanda que supera a la oferta de profesionales habilitados.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-px bg-white/5"
        >
          {dataPoints.map(({ Icon, number, label, desc }) => (
            <motion.div
              key={label}
              variants={itemFadeIn}
              className="bg-background p-8 space-y-4 group hover:bg-card transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 border border-primary/30 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              <div>
                <span className="font-display text-5xl md:text-6xl text-accent tracking-wide leading-none block">
                  {number}
                </span>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed border-t border-white/5 pt-4">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-6 border border-primary/20 bg-primary/5 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-sm text-foreground/70 max-w-lg">
            <span className="text-foreground font-semibold">Técnico en Refrigeración desde $100.000/mes. Intensivo Automotriz $200.000 (o $300.000 los 2 si venís con alguien).</span>{" "}
            Un trabajo de un fin de semana como técnico habilitado puede recuperar ese monto.
          </p>
          <WhatsAppButton label="Quiero saber más" />
        </motion.div>
      </div>
    </section>
  )
}

// ─── COUNTDOWN ───────────────────────────────────────────────────────────────
function CountdownBlock() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    function calc() {
      const diff = LAUNCH_DATE.getTime() - Date.now()
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0 })
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      })
    }
    calc()
    const id = setInterval(calc, 30000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <section className="w-full py-12 md:py-16 bg-primary">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/60 mb-2">
              Próximo inicio
            </p>
            <p className="font-display text-4xl md:text-5xl text-primary-foreground tracking-wide">
              14 DE MAYO 2026
            </p>
            <div className="mt-3 border border-accent/30 bg-accent/10 px-4 py-2 inline-block">
              <p className="text-sm text-accent font-semibold">
                Solo quedan <span className="font-bold">10 cupos</span> — cuando se llenan, la siguiente apertura es en meses
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {[
              { label: "Días", value: pad(timeLeft.days) },
              { label: "Horas", value: pad(timeLeft.hours) },
              { label: "Min", value: pad(timeLeft.minutes) },
            ].map(({ label, value }, i) => (
              <div key={label} className="flex items-center gap-3 md:gap-6">
                <div className="flex flex-col items-center">
                  <span className="font-display text-6xl md:text-8xl text-accent tabular-nums leading-none">
                    {value}
                  </span>
                  <span className="font-mono text-xs text-primary-foreground/50 uppercase tracking-widest mt-1">
                    {label}
                  </span>
                </div>
                {i < 2 && (
                  <span className="font-display text-4xl text-primary-foreground/30 pb-4">:</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex-shrink-0">
            <WhatsAppButton label="Reservar mi lugar" large />
            <p className="text-primary-foreground/40 text-xs mt-2 text-center">
              Respondemos en &lt; 15 min
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── MODULES ─────────────────────────────────────────────────────────────────
function ModulesSection() {
  const modules = [
    {
      num: "01",
      title: "Fundamentos de refrigeración",
      desc: "Ciclo de refrigeración, presiones, temperaturas y componentes principales del sistema.",
      Icon: Wind,
    },
    {
      num: "02",
      title: "Herramientas y seguridad",
      desc: "Manejo de manómetros, vacuómetro, soldadura y normas de seguridad con gases refrigerantes.",
      Icon: Shield,
    },
    {
      num: "03",
      title: "Instalación de equipos split",
      desc: "Montaje completo: unidad interior, exterior, conexiones frigoríficas, vacío y carga de gas.",
      Icon: Wrench,
    },
    {
      num: "04",
      title: "Diagnóstico y reparación",
      desc: "Detección de fallas, lectura de presiones, cambio de componentes y puesta en marcha.",
      Icon: Search,
    },
    {
      num: "05",
      title: "Electricidad aplicada",
      desc: "Circuitos de control, lectura de diagramas eléctricos, testeo de motores y compresores.",
      Icon: Zap,
    },
    {
      num: "06",
      title: "Práctica real en taller",
      desc: "Trabajás sobre equipos reales desde el primer mes. Te vas con experiencia, no solo teoría.",
      Icon: Hammer,
    },
  ]

  return (
    <section id="modulos" className="w-full py-16 md:py-24 bg-card/40">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12"
        >
          <span className="section-label">Plan de estudios</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4 leading-none tracking-wide">
            QUÉ VAS A<br />
            <span className="text-accent">APRENDER</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            6 módulos progresivos diseñados por alguien que trabaja en el rubro todos los días.
            De cero a técnico habilitado.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3"
        >
          {modules.map(({ num, title, desc, Icon }) => (
            <motion.div
              key={num}
              variants={itemFadeIn}
              className="group bg-background hover:bg-card p-6 space-y-4 transition-colors duration-300 relative overflow-hidden"
            >
              {/* número de fondo */}
              <span className="absolute top-2 right-3 font-display text-7xl text-white/[0.03] leading-none select-none pointer-events-none">
                {num}
              </span>

              <div className="flex items-center justify-between">
                <div className="h-9 w-9 border border-primary/30 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{num}</span>
              </div>

              <div className="border-l-2 border-accent/20 group-hover:border-accent/60 pl-3 transition-colors duration-300">
                <h3 className="font-semibold text-foreground mb-1 text-sm">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-8 flex items-center gap-4 border-l-4 border-accent pl-5"
        >
          <Hammer className="h-5 w-5 text-accent flex-shrink-0" />
          <p className="text-sm text-foreground/70">
            <span className="text-foreground font-semibold">Práctica desde el día uno.</span>{" "}
            No hay módulo teórico sin su correspondiente práctica en taller con equipos reales.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── INSTRUCTOR ───────────────────────────────────────────────────────────────
function InstructorSection() {
  return (
    <section id="instructor" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="overflow-hidden border border-white/5"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-0">
            {/* imagen */}
            <div className="relative aspect-[3/4] md:aspect-auto md:min-h-full min-h-[300px]">
              <Image
                src="/ivan-profe.jpg"
                alt="Iván — Instructor de Refrigeración"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/30" />
              {/* badge sobre la imagen */}
              <div className="absolute bottom-4 left-4 bg-primary px-3 py-1.5">
                <p className="font-mono text-xs text-primary-foreground/80 uppercase tracking-widest">
                  Tu instructor
                </p>
              </div>
            </div>

            {/* contenido */}
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 bg-card">
              <div>
                <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide leading-none mb-3">
                  IVÁN
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Técnico en refrigeración con 15 años de experiencia en el rubro. Capacitó a más de 400 alumnos
                  y sigue trabajando activamente en instalaciones y service, llevando al aula lo que vive todos
                  los días en el campo.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  No es solo un docente: es el dueño del instituto y trabaja en el rubro mientras te enseña.
                  Lo que te explica hoy, lo hizo ayer.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "15", unit: "AÑOS", label: "en el rubro" },
                  { value: "+400", unit: "ALUMNOS", label: "capacitados" },
                ].map(({ value, unit, label }) => (
                  <div key={label} className="border border-white/5 bg-background p-4">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl text-accent leading-none">{value}</span>
                      <span className="font-mono text-xs text-accent/60 tracking-widest">{unit}</span>
                    </div>
                    <p className="text-muted-foreground text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground border-l-2 border-accent/30 pl-3">
                <Award className="h-4 w-4 text-accent flex-shrink-0" />
                Técnico matriculado · Dueño del Instituto Superior de Oficios
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Arranqué sin saber nada y hoy hago instalaciones por mi cuenta. En 3 meses ya había recuperado lo que invertí en el curso.",
      name: "Martín G.",
      role: "Egresado 2025",
      outcome: "Instalador independiente",
    },
    {
      quote:
        "Lo mejor es que cursás un solo día por semana. Yo seguí trabajando mientras estudiaba y hoy me dedico full a esto.",
      name: "Lucas C.",
      role: "Egresado 2025",
      outcome: "Técnico en empresa de HVAC",
    },
    {
      quote:
        "Las clases son muy prácticas, no es puro pizarrón. Tocás equipos reales desde el principio y eso marca la diferencia.",
      name: "Diego F.",
      role: "Egresado 2024",
      outcome: "Service técnico propio",
    },
  ]

  return (
    <section id="testimonios" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12"
        >
          <span className="section-label">Egresados</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4 leading-none tracking-wide">
            LO QUE DICEN<br />
            <span className="text-accent">LOS ALUMNOS</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-px bg-white/5 md:grid-cols-3"
        >
          {testimonials.map(({ quote, name, role, outcome }) => (
            <motion.div
              key={name}
              variants={itemFadeIn}
              className="bg-background hover:bg-card transition-colors duration-300 p-8 space-y-5 group"
            >
              {/* comillas grandes */}
              <span className="font-display text-7xl text-primary/20 leading-none block -mb-2">
                &ldquo;
              </span>

              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed text-sm">{quote}</p>

              <div className="border-t border-white/5 pt-4 flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{name}</p>
                  <p className="text-muted-foreground text-xs">{role}</p>
                </div>
                <div className="bg-accent/10 border border-accent/20 px-2 py-1">
                  <p className="text-accent text-xs font-mono">{outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── CARHAA ───────────────────────────────────────────────────────────────────
function CarhaSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-card/40">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="border border-white/5 p-8 md:p-12"
        >
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative h-28 w-44">
                <Image src="/carhaa-sinBG.png" alt="Logo CARHAA" fill className="object-contain" />
              </div>
            </div>
            <div className="space-y-3">
              <span className="section-label">Habilitación profesional</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mt-2">
                MATRÍCULA PROFESIONAL CARHAA
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Al finalizar el curso, podés matricularte en la{" "}
                <span className="text-foreground font-medium">
                  Cámara Argentina de Refrigeración, Calefacción y Aire Acondicionado (CARHAA)
                </span>
                , obteniendo una credencial profesional reconocida en toda la industria.
                Con matrícula podés emitir certificados de instalación — requisito en muchas empresas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── PRICING ─────────────────────────────────────────────────────────────────
function PricingSection() {
  const plans: Array<{
    label: string
    title: string
    price: string
    priceUnit?: string
    unit: string
    features: string[]
    highlight?: boolean
    badge?: string
  }> = [
    {
      label: "Plan mensual",
      title: "Técnico en Refrigeración",
      price: "$100.000",
      priceUnit: "/mes",
      unit: "+ inscripción $20.000 (única vez)",
      features: [
        "Cursada los sábados · 2 hs por semana",
        "Certificado oficial + matrícula CARHAA",
        "Herramientas y materiales incluidos",
      ],
    },
    {
      label: "Intensivo · 1 persona",
      title: "Intensivo Refrigeración Automotriz",
      price: "$200.000",
      unit: "+ inscripción $20.000",
      features: [
        "Cursada intensiva · Domingo 10 a 18 hs",
        "Inicio 24/05 · cupos limitados",
        "Certificado profesional incluido",
      ],
    },
    {
      label: "Promo 2 personas",
      title: "Intensivo Automotriz · Vení con alguien",
      price: "$300.000",
      priceUnit: "los 2",
      unit: "+ inscripción $20.000 por persona",
      features: [
        "Mismo curso intensivo · Domingo 10 a 18 hs",
        "Ahorrás $100.000 si venís con un compañero",
        "Ideal para socios, familia o amigos",
      ],
      highlight: true,
      badge: "Promo 2x",
    },
  ]

  return (
    <section id="precio" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <span className="section-label">Oferta · Cupos limitados</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide leading-none mt-4">
            UNA CARRERA POR MENOS<br />DE LO QUE PENSÁS
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4 max-w-xl mx-auto">
            Elegí el curso que se adapta a vos. ¿Venís con un compañero al intensivo de
            automotriz? Te llevás la promo de 2 personas.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto items-stretch"
        >
          {plans.map((p) => (
            <motion.div
              key={p.title}
              variants={itemFadeIn}
              className={`relative flex flex-col border overflow-hidden ${
                p.highlight
                  ? "border-accent md:scale-[1.03] md:-translate-y-1"
                  : "border-white/10"
              }`}
            >
              <div className={`h-1 ${p.highlight ? "bg-accent" : "bg-gradient-to-r from-primary/50 to-accent/30"}`} />

              {p.badge && (
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                  {p.badge}
                </div>
              )}

              <div className={`flex-1 flex flex-col p-6 md:p-7 space-y-5 ${p.highlight ? "bg-card" : "bg-card/60"}`}>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent">{p.label}</p>
                  <h3 className="font-display text-2xl text-foreground tracking-wide leading-tight mt-2">
                    {p.title}
                  </h3>
                </div>

                <div className="bg-background border border-white/5 p-4 space-y-1">
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Solo pagás</p>
                  <div className="flex items-end gap-1.5">
                    <span className="font-display text-4xl md:text-5xl text-accent leading-none tracking-wide">
                      {p.price}
                    </span>
                    {p.priceUnit && (
                      <span className="text-muted-foreground mb-1 text-xs">{p.priceUnit}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs">{p.unit}</p>
                </div>

                <ul className="space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs md:text-sm text-foreground/90 leading-snug">
                      <div className="h-4 w-4 bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-accent" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <WhatsAppButton label={p.highlight ? "Quiero la promo" : "Quiero este plan"} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-8 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2"
        >
          {["Efectivo", "Transferencia", "Tarjeta (MercadoPago)"].map((m) => (
            <span
              key={m}
              className="px-3 py-1 border border-white/10 bg-card text-xs text-muted-foreground font-mono"
            >
              {m}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── GALLERY ─────────────────────────────────────────────────────────────────
function GallerySection() {
  const images = [
    { src: "/ivan-profe.jpg", alt: "Iván trabajando en el taller" },
    { src: "/ivan-y-alumno.jpg", alt: "Iván con un alumno en el taller" },
    { src: "/ivan-enseñando.jpg", alt: "Iván enseñando en clase" },
  ]

  return (
    <section id="taller" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-10"
        >
          <span className="section-label">Instalaciones</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 leading-none tracking-wide">
            NUESTRO TALLER
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Aprendé en un espacio equipado con herramientas y equipos reales.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-1"
        >
          {images.map(({ src, alt }) => (
            <motion.div
              key={src}
              variants={itemFadeIn}
              className="relative overflow-hidden group aspect-[3/4]"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── LOCATION ─────────────────────────────────────────────────────────────────
function LocationSection() {
  return (
    <section id="ubicacion" className="w-full py-16 md:py-24 bg-card/40">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-10"
        >
          <span className="section-label">Ubicación</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 leading-none tracking-wide">
            VENÍ A CONOCER<br />EL TALLER
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="border border-white/5 bg-card p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Instituto Superior de Oficios</p>
                  <p className="text-muted-foreground text-sm">Gral. Roca 869, Morón, Buenos Aires</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-accent/80">Técnico en Refrigeración</p>
                    <p className="text-muted-foreground text-sm">Sábados 10:00 a 12:00 hs · inicio 14/05</p>
                    <p className="text-muted-foreground text-sm">Sábados 12:00 a 14:00 hs · inicio 13/06</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-accent/80">Cursada intensiva · Refrigeración automotriz</p>
                    <p className="text-muted-foreground text-sm">Domingo 10:00 a 18:00 hs · inicio 24/05</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm font-semibold text-foreground">Lunes a Sábados · 9:00 a 18:00 hs</p>
              </div>
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Instituto+Superior+de+Oficios/@-34.6046258,-58.9444555,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-medium hover:underline"
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5!2d-58.9444555!3d-34.6046258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc8f5179d017ed%3A0x8eb76d579f08350!2sInstituto%20Superior%20de%20Oficios!5e0!3m2!1ses-419!2sar!4v1711800000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Instituto Superior de Oficios"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  const items = [
    {
      q: "¿Necesito experiencia previa?",
      a: "No. El curso está diseñado para arrancar de cero. No necesitás conocimientos previos de refrigeración ni electricidad.",
    },
    {
      q: "¿Qué certificado recibo?",
      a: "Al finalizar recibís un certificado de Técnico en Refrigeración y podés matricularte en la CARHAA para obtener tu credencial profesional.",
    },
    {
      q: "¿Necesito comprar herramientas?",
      a: "No. Todas las herramientas para las prácticas las brindamos nosotros. Solo necesitás traer lapicera y cuaderno.",
    },
    {
      q: "¿Puedo pagar con tarjeta de crédito?",
      a: "Sí. Aceptamos efectivo, transferencia bancaria y tarjeta de crédito a través de Mercado Pago.",
    },
    {
      q: "¿Dónde se cursa?",
      a: 'Las clases son presenciales en nuestro taller. Podés ver la ubicación exacta en el mapa de la página o hacer clic en "Cómo llegar" para abrir Google Maps con indicaciones.',
    },
    {
      q: "¿Qué salida laboral tiene?",
      a: "Los técnicos en refrigeración tienen altísima demanda. Podés trabajar en empresas de HVAC, hacer service por cuenta propia, o dedicarte a instalaciones. Muchos egresados empiezan a trabajar antes de terminar el curso.",
    },
  ]

  return (
    <section id="faq" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12"
        >
          <span className="section-label">Preguntas frecuentes</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 leading-none tracking-wide">
            TODO LO QUE<br />
            <span className="text-accent">NECESITÁS SABER</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl space-y-px"
        >
          {items.map(({ q, a }, i) => (
            <motion.div
              key={i}
              variants={itemFadeIn}
              className="border border-white/5 bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-card/80 transition-colors"
              >
                <span className="font-medium text-foreground text-sm">{q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-white/5">
                      {a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── STICKY WHATSAPP ─────────────────────────────────────────────────────────
function StickyWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={trackAndOpen}
            className="flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-bold shadow-2xl cursor-pointer"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="hidden sm:inline text-sm">Inscribirme</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export function ISOLanding() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-40 w-full border-b border-white/5 bg-background/90 backdrop-blur ${
          scrollY > 50 ? "shadow-[0_1px_20px_rgba(0,0,0,0.4)]" : ""
        }`}
      >
        <div className="container flex h-14 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9">
              <Image src="/iso-logo.png" alt="Logo ISO" fill className="object-contain" />
            </div>
            <span className="font-display text-lg tracking-widest text-foreground hidden sm:block">
              INSTITUTO SUPERIOR DE OFICIOS
            </span>
          </a>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={trackAndOpen}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-bold text-sm cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" />
            Inscribirme
          </motion.button>
        </div>
      </motion.header>

      <main className="flex-1">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="w-full min-h-[85vh] flex items-center overflow-hidden relative">
          {/* background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-tecnico.webp"
              alt="Técnico en Refrigeración trabajando"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* contenido */}
          <div className="container px-4 md:px-6 relative z-10 py-16 md:py-24">
            <div className="max-w-2xl">
              {/* badge CARHAA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 border border-white/10 bg-background/60 backdrop-blur px-3 py-1.5 text-sm mb-6"
              >
                <div className="relative h-4 w-4">
                  <Image src="/carhaa-logo.png" alt="CARHAA" fill className="object-contain" />
                </div>
                <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
                  Con opción a matrícula profesional CARHAA
                </span>
              </motion.div>

              {/* headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-none tracking-wide text-foreground"
              >
                CONVERTITE EN<br />
                TÉCNICO EN{" "}
                <span
                  style={{
                    WebkitTextStroke: "2px #E8A830",
                    color: "transparent",
                  }}
                >
                  REFRI
                </span>
                <span className="text-accent">GERACIÓN</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-foreground/70 text-lg mt-5 max-w-lg leading-relaxed"
              >
                Formación 100% práctica. Un día por semana. En 6 meses tenés
                un oficio con salida laboral real y certificado profesional reconocido.
              </motion.p>

              {/* stats rápidas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="grid grid-cols-2 gap-2 mt-7 max-w-sm"
              >
                {[
                  { Icon: Clock, label: "Cursada", value: "Sábados 10–12 / 12–14 hs" },
                  { Icon: Users, label: "Cupos", value: "10 por comisión" },
                  { Icon: Award, label: "Inversión", value: "Desde $100.000" },
                  { Icon: Package, label: "Herramientas", value: "Incluidas" },
                ].map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    className="border border-white/10 bg-background/50 backdrop-blur p-3 flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{label}</p>
                      <p className="text-xs font-semibold text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-7 flex items-center gap-4"
              >
                <WhatsAppButton label="Quiero inscribirme" large />
                <p className="text-muted-foreground text-xs">
                  Te respondemos<br />en menos de 15 min
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
        <TrustBar />

        {/* ── QUALIFICATION ─────────────────────────────────────────────────── */}
        <QualificationSection />

        {/* ── MARKET ────────────────────────────────────────────────────────── */}
        <MarketSection />

        {/* ── MÓDULOS ───────────────────────────────────────────────────────── */}
        <ModulesSection />

        {/* ── INSTRUCTOR ────────────────────────────────────────────────────── */}
        <InstructorSection />

        {/* ── TESTIMONIOS ───────────────────────────────────────────────────── */}
        <TestimonialsSection />

        {/* ── COUNTDOWN ─────────────────────────────────────────────────────── */}
        <CountdownBlock />

        {/* ── PRECIO ────────────────────────────────────────────────────────── */}
        <PricingSection />

        {/* ── CARHAA ────────────────────────────────────────────────────────── */}
        <CarhaSection />

        {/* ── GALERÍA ───────────────────────────────────────────────────────── */}
        <GallerySection />

        {/* ── UBICACIÓN ─────────────────────────────────────────────────────── */}
        <LocationSection />

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <FAQSection />

        {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
        <section className="w-full py-16 md:py-24 bg-primary relative overflow-hidden">
          {/* diagonal decoration */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #E8A830 0, #E8A830 1px, transparent 0, transparent 50%)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-2xl"
            >
              <h2 className="font-display text-5xl md:text-7xl text-primary-foreground tracking-wide leading-none">
                ¿LISTO PARA<br />
                <span className="text-accent">ARRANCAR?</span>
              </h2>
              <p className="text-primary-foreground/60 text-lg mt-4 max-w-lg">
                Escribinos por WhatsApp y reservá tu lugar en la comisión de abril.
                Solo quedan 10 cupos.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <WhatsAppButton label="Quiero inscribirme" large />
                <p className="text-primary-foreground/40 text-sm">Respondemos en menos de 15 minutos</p>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image src="/iso-logo.png" alt="ISO" fill className="object-contain" />
            </div>
            <span className="font-display text-sm tracking-widest text-muted-foreground">
              INSTITUTO SUPERIOR DE OFICIOS
            </span>
          </div>
          <p className="text-muted-foreground text-xs font-mono">
            Gral. Roca 869, Morón · info@iso.edu.ar
          </p>
        </div>
      </footer>

      {/* ── STICKY CTA ────────────────────────────────────────────────────────── */}
      <StickyWhatsApp />

    </div>
  )
}
