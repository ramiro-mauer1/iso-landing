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
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

// ─── types ───────────────────────────────────────────────────────────────────
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// ─── animation variants ──────────────────────────────────────────────────────
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// ─── constants ───────────────────────────────────────────────────────────────
const WA_LINK =
  "https://wa.me/5491135561787?text=Hola%2C%20quiero%20inscribirme%20al%20curso%20de%20Refrigeraci%C3%B3n"

const LAUNCH_DATE = new Date("2026-04-03T17:00:00-03:00")

function trackAndOpen() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact", { content_name: "WhatsApp CTA" })
  }
  window.open(WA_LINK, "_blank")
}

// ─── sub-components ──────────────────────────────────────────────────────────

function WhatsAppButton({ label = "Quiero inscribirme", large = false }: { label?: string; large?: boolean }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={trackAndOpen}
      className={`inline-flex items-center gap-2 rounded-3xl bg-accent text-accent-foreground font-semibold transition-colors hover:bg-[#d4921a] cursor-pointer ${
        large ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"
      }`}
    >
      <MessageCircle className={large ? "h-5 w-5" : "h-4 w-4"} />
      {label}
    </motion.button>
  )
}

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
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="border border-[rgba(255,255,255,0.06)] rounded-3xl bg-card p-8 md:p-12 text-center space-y-6"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-mono">
            Próximo inicio — 3 de abril 2026
          </p>
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { label: "Días", value: pad(timeLeft.days) },
              { label: "Horas", value: pad(timeLeft.hours) },
              { label: "Minutos", value: pad(timeLeft.minutes) },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="font-mono text-5xl md:text-7xl font-bold text-accent tabular-nums">
                  {value}
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest font-mono">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="border border-[#E8A830]/40 rounded-2xl bg-[#E8A830]/5 px-6 py-4 max-w-xl mx-auto">
            <p className="text-foreground text-sm md:text-base">
              Solo quedan <span className="font-bold text-accent">10 cupos</span> para la comisión de abril.{" "}
              Cuando se llenan, la siguiente apertura es en meses.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

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
    <section id="modulos" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center space-y-3 mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-3xl bg-card border border-[rgba(255,255,255,0.06)] text-muted-foreground text-sm">
            Plan de estudios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Qué vas a aprender
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            6 módulos progresivos que te llevan de cero a técnico habilitado.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {modules.map(({ num, title, desc, Icon }) => (
            <motion.div
              key={num}
              variants={itemFadeIn}
              whileHover={{ y: -4 }}
              className="group border border-[rgba(255,255,255,0.06)] rounded-3xl bg-card p-6 space-y-4 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{num}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function InstructorSection() {
  return (
    <section id="instructor" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="border border-[rgba(255,255,255,0.06)] rounded-3xl bg-card overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* imagen */}
            <div className="relative h-64 md:h-auto min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Iván — Instructor de Refrigeración"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* contenido */}
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-3xl bg-primary/10 text-primary text-sm font-medium mb-4">
                  Tu instructor
                </span>
                <h2 className="text-3xl font-bold mb-2">Iván</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Técnico en refrigeración con 15 años de experiencia en el rubro. Capacitó a más de 400 alumnos
                  y sigue trabajando activamente en instalaciones y service, llevando al aula lo que vive todos
                  los días en el campo.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "15 años", label: "en el rubro" },
                  { value: "+400", label: "alumnos capacitados" },
                ].map(({ value, label }) => (
                  <div key={label} className="border border-[rgba(255,255,255,0.06)] rounded-2xl p-4 bg-background">
                    <p className="text-2xl font-bold text-accent">{value}</p>
                    <p className="text-muted-foreground text-sm">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-accent flex-shrink-0" />
                Técnico experimentado y dueño del instituto
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CarhaSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-card/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="border border-[rgba(255,255,255,0.06)] rounded-3xl bg-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative h-24 w-40">
                <Image
                  src="/carhaa-logo.png"
                  alt="Logo CARHAA"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold">Matrícula profesional CARHAA</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al finalizar el curso, podés matricularte en la{" "}
                <span className="text-foreground font-medium">
                  Cámara Argentina de Refrigeración, Calefacción y Aire Acondicionado (CARHAA)
                </span>
                , obteniendo una credencial profesional reconocida en toda la industria.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="precio" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-lg mx-auto"
        >
          <div className="rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
            {/* gradient top border */}
            <div className="h-1 bg-gradient-to-r from-[#8B1A1A] to-[#E8A830]" />
            <div className="bg-card p-8 md:p-10 space-y-6">
              <div className="text-center space-y-1">
                <span className="inline-block px-3 py-1 rounded-3xl bg-primary/10 text-primary text-sm">
                  Inversión
                </span>
                <h2 className="text-3xl font-bold">Precio transparente</h2>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-[rgba(255,255,255,0.06)]">
                  <span className="text-muted-foreground">Inscripción</span>
                  <span className="font-semibold text-foreground">$20.000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[rgba(255,255,255,0.06)]">
                  <span className="text-muted-foreground">Cuota mensual</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-accent">$80.000</span>
                    <span className="text-muted-foreground text-sm"> × 6 meses</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-foreground font-semibold">Inversión total</span>
                  <span className="font-bold text-foreground text-xl">$500.000</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Medios de pago</p>
                <div className="flex flex-wrap gap-2">
                  {["Efectivo", "Transferencia", "Tarjeta (MercadoPago)"].map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 rounded-full border border-[rgba(255,255,255,0.06)] bg-background text-sm text-muted-foreground"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppButton label="Reservar mi lugar" large />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Arranqué sin saber nada y hoy hago instalaciones por mi cuenta. En 3 meses ya había recuperado lo que invertí en el curso.",
      name: "Martín G.",
      role: "Egresado 2025 — Instalador independiente",
    },
    {
      quote:
        "Lo mejor es que cursás un solo día por semana. Yo seguí trabajando mientras estudiaba y hoy me dedico full a esto.",
      name: "Lucas C.",
      role: "Egresado 2025 — Técnico en empresa de HVAC",
    },
    {
      quote:
        "Las clases son muy prácticas, no es puro pizarrón. Tocás equipos reales desde el principio y eso marca la diferencia.",
      name: "Diego F.",
      role: "Egresado 2024 — Service técnico propio",
    },
  ]

  return (
    <section id="testimonios" className="w-full py-16 md:py-24 bg-card/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center space-y-3 mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-3xl bg-card border border-[rgba(255,255,255,0.06)] text-muted-foreground text-sm">
            Egresados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen los alumnos</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map(({ quote, name, role }) => (
            <motion.div
              key={name}
              variants={itemFadeIn}
              className="border border-[rgba(255,255,255,0.06)] rounded-3xl bg-card p-6 space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{name}</p>
                <p className="text-muted-foreground text-xs">{role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function GallerySection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      alt: "Técnico trabajando en unidad de aire acondicionado",
      className: "col-span-2 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
      alt: "Herramientas de refrigeración",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
      alt: "Instalación de equipo split",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
      alt: "Manómetros de refrigeración",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      alt: "Práctica en taller",
      className: "col-span-1 row-span-1",
    },
  ]

  return (
    <section id="taller" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center space-y-3 mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-3xl bg-card border border-[rgba(255,255,255,0.06)] text-muted-foreground text-sm">
            Instalaciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Nuestro taller</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Aprendé en un espacio equipado con herramientas y equipos reales.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]"
        >
          {images.map(({ src, alt, className }) => (
            <motion.div
              key={src}
              variants={itemFadeIn}
              className={`relative overflow-hidden rounded-3xl group ${className}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section id="ubicacion" className="w-full py-16 md:py-24 bg-card/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center space-y-3 mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-3xl bg-card border border-[rgba(255,255,255,0.06)] text-muted-foreground text-sm">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Vení a conocer el taller</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <div className="border border-[rgba(255,255,255,0.06)] rounded-3xl bg-card p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Instituto Superior de Oficios</p>
                  <p className="text-muted-foreground text-sm">Gral. Roca 869, Morón, Buenos Aires</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-muted-foreground text-sm">Viernes 17:00 a 19:00 hs</p>
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

          {/* mapa */}
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
              style={{ border: 0, borderRadius: "24px" }}
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
          className="text-center space-y-3 mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-3xl bg-card border border-[rgba(255,255,255,0.06)] text-muted-foreground text-sm">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Todo lo que necesitás saber</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto space-y-3"
        >
          {items.map(({ q, a }, i) => (
            <motion.div
              key={i}
              variants={itemFadeIn}
              className="border border-[rgba(255,255,255,0.06)] rounded-3xl bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className="font-medium text-foreground">{q}</span>
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
                    <p className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm">{a}</p>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={trackAndOpen}
            className="flex items-center gap-2 px-5 py-3 rounded-3xl bg-accent text-accent-foreground font-semibold shadow-2xl backdrop-blur border border-[rgba(255,255,255,0.1)] cursor-pointer"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="hidden sm:inline">Inscribirme</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── main component ───────────────────────────────────────────────────────────

export function ISOLanding() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-40 w-full border-b border-[rgba(255,255,255,0.06)] bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
          scrollY > 50 ? "shadow-[0_1px_0_rgba(255,255,255,0.06)]" : ""
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image src="/iso-logo.png" alt="Logo ISO" fill className="object-contain" />
            </div>
            <span className="font-bold text-foreground hidden sm:block">Instituto Superior de Oficios</span>
          </a>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={trackAndOpen}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-3xl bg-accent text-accent-foreground font-semibold text-sm cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" />
            Inscribirme
          </motion.button>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="container px-4 md:px-6 border border-[rgba(255,255,255,0.06)] rounded-3xl bg-gradient-to-br from-background to-card/50">
            <div className="grid gap-8 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_580px] py-10">
              {/* texto */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="flex flex-col justify-center space-y-6"
              >
                {/* badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-3xl bg-card border border-[rgba(255,255,255,0.06)] px-3 py-1.5 text-sm w-fit"
                >
                  <div className="relative h-5 w-5">
                    <Image src="/carhaa-logo.png" alt="CARHAA" fill className="object-contain" />
                  </div>
                  <span className="text-muted-foreground">Con opción a matrícula profesional CARHAA</span>
                </motion.div>

                {/* título */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  Convertite en Técnico en{" "}
                  <span className="bg-gradient-to-r from-[#8B1A1A] to-[#E8A830] bg-clip-text text-transparent">
                    Refrigeración
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="text-muted-foreground text-lg max-w-xl"
                >
                  Formación práctica con salida laboral real. Cursá solo los viernes, en 6 meses estás trabajando.
                </motion.p>

                {/* grilla de datos */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {[
                    { Icon: Clock, label: "Cursada", value: "Viernes 17–19 hs" },
                    { Icon: Users, label: "Cupos", value: "10 por comisión" },
                    { Icon: Award, label: "Inversión", value: "$80.000/mes × 6" },
                    { Icon: Package, label: "Herramientas", value: "Incluidas" },
                  ].map(({ Icon, label, value }) => (
                    <div
                      key={label}
                      className="border border-[rgba(255,255,255,0.06)] rounded-2xl bg-card p-3 flex items-center gap-3"
                    >
                      <Icon className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <p className="text-sm font-semibold text-foreground">{value}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                  className="space-y-2"
                >
                  <WhatsAppButton label="Quiero inscribirme" large />
                  <p className="text-muted-foreground text-xs">Te respondemos en menos de 15 minutos</p>
                </motion.div>
              </motion.div>

              {/* imagen */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80"
                  alt="Técnico trabajando en equipo de refrigeración"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Countdown ─────────────────────────────────────────────────────── */}
        <CountdownBlock />

        {/* ── Módulos ───────────────────────────────────────────────────────── */}
        <ModulesSection />

        {/* ── Instructor ────────────────────────────────────────────────────── */}
        <InstructorSection />

        {/* ── CARHAA ────────────────────────────────────────────────────────── */}
        <CarhaSection />

        {/* ── Precio ────────────────────────────────────────────────────────── */}
        <PricingSection />

        {/* ── Testimonios ───────────────────────────────────────────────────── */}
        <TestimonialsSection />

        {/* ── Galería ───────────────────────────────────────────────────────── */}
        <GallerySection />

        {/* ── Ubicación ─────────────────────────────────────────────────────── */}
        <LocationSection />

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <FAQSection />

        {/* ── CTA Final ─────────────────────────────────────────────────────── */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="border border-[rgba(255,255,255,0.06)] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 p-10 md:p-16 text-center space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">¿Listo para arrancar?</h2>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                Escribinos por WhatsApp y reservá tu lugar en la comisión de abril.
              </p>
              <div className="flex flex-col items-center gap-2">
                <WhatsAppButton label="Quiero inscribirme" large />
                <p className="text-muted-foreground text-sm">Respondemos en menos de 15 minutos</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────────── */}
      <footer className="border-t border-[rgba(255,255,255,0.06)] py-6">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6">
              <Image src="/iso-logo.png" alt="ISO" fill className="object-contain" />
            </div>
            <span>Instituto Superior de Oficios</span>
          </div>
          <p>© {new Date().getFullYear()} — Todos los derechos reservados</p>
        </div>
      </footer>

      {/* ── Sticky WhatsApp ───────────────────────────────────────────────────── */}
      <StickyWhatsApp />
    </div>
  )
}
