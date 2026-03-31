# Prompt para Claude Code — Landing Page Instituto Superior de Oficios

You are given a task to integrate and heavily adapt an existing React component into a landing page for **Instituto Superior de Oficios (ISO)**, a trade school in Argentina that offers a technical course in refrigeration/air conditioning.

The codebase should support:
- shadcn project structure
- Tailwind CSS
- Typescript
- Next.js (App Router)

If it doesn't, set up the project via shadcn CLI, install Tailwind and Typescript.

---

## Context del negocio

- **Negocio**: Instituto Superior de Oficios (ISO) — escuela de oficios técnicos
- **Curso actual**: Técnico en Refrigeración
- **Público objetivo**: Hombres 28-45 años buscando salida laboral o segundo ingreso
- **Canal de adquisición**: Meta Ads → Landing → WhatsApp directo
- **Objetivo de la landing**: Que el lead llegue informado a WhatsApp y Ciro (ventas) solo tenga que cerrar, no informar

---

## Estética y diseño

### Paleta de colores (adaptar en tailwind.config)
- **Background**: #111111 (negro)
- **Cards/superficies**: #1C1C1C
- **Primary (marca)**: #8B1A1A (bordó — del logo)
- **Primary hover**: #B22222
- **Accent/CTA**: #E8A830 (dorado/ocre — del logo)
- **Text principal**: #F5F0E8 (blanco cálido, no blanco puro)
- **Text secundario**: #8A95A5
- **Text muted**: #5A6577
- **Borders**: rgba(255,255,255,0.06)

### Tipografía
- Font principal: `DM Sans` (Google Fonts) — sans-serif con peso, seria
- Font monospace (para badges/countdown): `Space Mono`
- NO usar: Inter, Roboto, Arial, ni fonts genéricas

### Dirección estética
- Dark mode forzado en todo el sitio
- Mantener `rounded-3xl` del template original (da look moderno que funciona)
- Mantener animaciones de Framer Motion (fade-in, stagger, hover)
- Look: profesional, oficio tradicional, serio pero moderno. NO tech/startup
- El gradient del hero cambia de `from-primary to-purple-500` a `from-[#8B1A1A] to-[#E8A830]`

---

## Assets disponibles

- Logo ISO: `/public/iso-logo.png` (sello circular rojo/negro/dorado con herramientas cruzadas)
- Logo CARHAA: `/public/carhaa-logo.png` (logo celeste con copo de nieve)
- Foto de Iván (instructor): `/public/ivan.jpg` — idealmente en el taller enseñando
- Fotos del taller/clases: `/public/taller-1.jpg`, `/public/taller-2.jpg`, etc.

> NOTA: Usar placeholders de Unsplash que conozcas que existen mientras no haya fotos reales. Buscar imágenes de HVAC, talleres de refrigeración, técnicos trabajando.

---

## Estructura de la landing (secciones en orden)

### 1. Header (adaptar del template)
- Logo ISO a la izquierda (imagen, no texto)
- SIN navegación con múltiples links (es single page, no necesita)
- Solo 1 botón CTA a la derecha: "Inscribirme" → link a WhatsApp
- Sticky con backdrop-blur al scrollear

### 2. Hero (adaptar del template)
- Badge superior: "Con opción a matrícula profesional CARHAA" (con ícono)
- Título: `Convertite en Técnico en Refrigeración` (la palabra "Refrigeración" con gradient bordó→dorado)
- Bajada: "Formación práctica con salida laboral real. Cursá solo los viernes, en 6 meses estás trabajando."
- Grilla 2x2 de datos clave (adaptar del template, no usar cards de servicios):

| Dato | Valor |
|------|-------|
| Cursada | Viernes 17:00 a 19:00 |
| Cupos | 10 por comisión |
| Inversión | $80.000/mes × 6 cuotas |
| Herramientas | Incluidas (solo traé lapicera) |

- 1 botón CTA grande: "Quiero inscribirme" con ícono de WhatsApp → `https://wa.me/54XXXXXXXXXX?text=Hola%2C%20quiero%20inscribirme%20al%20curso%20de%20Refrigeraci%C3%B3n`
- Debajo del CTA: texto muted "Te respondemos en menos de 15 minutos"
- Imagen lateral: foto del taller o de clase práctica

### 3. Countdown + Urgencia (NUEVO — no existe en el template)
- Countdown en tiempo real al **3 de abril de 2026, 17:00 hs (UTC-3)**
- Mostrar: días / horas / minutos
- Debajo: bloque de urgencia con borde naranja:
  - "Solo quedan **10 cupos** para la comisión de abril. Cuando se llenan, la siguiente apertura es en meses."

### 4. "Qué vas a aprender" (adaptar Services del template)
- Reutilizar la grilla de 6 cards con íconos del template
- Cambiar contenido a los 6 módulos del curso:

| # | Módulo | Descripción |
|---|--------|-------------|
| 01 | Fundamentos de refrigeración | Ciclo de refrigeración, presiones, temperaturas y componentes principales del sistema. |
| 02 | Herramientas y seguridad | Manejo de manómetros, vacuómetro, soldadura y normas de seguridad con gases refrigerantes. |
| 03 | Instalación de equipos split | Montaje completo: unidad interior, exterior, conexiones frigoríficas, vacío y carga de gas. |
| 04 | Diagnóstico y reparación | Detección de fallas, lectura de presiones, cambio de componentes y puesta en marcha. |
| 05 | Electricidad aplicada | Circuitos de control, lectura de diagramas eléctricos, testeo de motores y compresores. |
| 06 | Práctica real en taller | Trabajás sobre equipos reales desde el primer mes. Te vas con experiencia, no solo teoría. |

- Usar íconos de `lucide-react` apropiados (Wrench, Shield, Wind, Search, Zap, Hammer, etc.)
- Eliminar el "Learn more" link de cada card (no hay a dónde linkearlo)

### 5. "Tu instructor" (adaptar About/Team del template)
- NO mostrar grid de 4 personas — es solo Iván
- Layout: imagen de Iván a un lado, stats + bio al otro (reusar la estructura About del template)
- Stats en grande:
  - **15 años** en el rubro
  - **+400 alumnos** capacitados en los últimos 5 años
  - Técnico experimentado y dueño del instituto
- Bio corta: "Iván es técnico en refrigeración con 15 años de experiencia en el rubro. Capacitó a más de 400 alumnos y sigue trabajando activamente en instalaciones y service, llevando al aula lo que vive todos los días en el campo."
- Eliminar botones "Our Process" / "Join Our Team"

### 6. Matrícula CARHAA (NUEVO — no existe en el template)
- Sección con fondo diferenciado (bg-card o similar)
- Logo de CARHAA a la izquierda
- Texto: "Al finalizar el curso, podés matricularte en la **Cámara Argentina de Refrigeración, Calefacción y Aire Acondicionado (CARHAA)**, obteniendo una credencial profesional reconocida en toda la industria."
- Puede ser un layout simple de 2 columnas: logo + texto

### 7. Precio transparente (NUEVO — reemplaza Contact form)
- Card con borde superior en gradient bordó→dorado
- Filas:
  - Inscripción: **$20.000**
  - Cuota mensual: **$80.000** × 6 meses (esto en grande, destacado)
  - Inversión total: **$500.000**
- Medios de pago: badges/pills con "Efectivo", "Transferencia", "Tarjeta (MercadoPago)"

### 8. Testimonios (adaptar del template)
- Reducir de 4 a 2-3 testimonios
- Layout: 1 columna en mobile, 2 en desktop
- Contenido placeholder (reemplazar con egresados reales):

```
"Arranqué sin saber nada y hoy hago instalaciones por mi cuenta. En 3 meses ya había recuperado lo que invertí en el curso."
— Martín G. | Egresado 2025 — Instalador independiente

"Lo mejor es que cursás un solo día por semana. Yo seguí trabajando mientras estudiaba y hoy me dedico full a esto."
— Lucas C. | Egresado 2025 — Técnico en empresa de HVAC

"Las clases son muy prácticas, no es puro pizarrón. Tocás equipos reales desde el principio y eso marca la diferencia."
— Diego F. | Egresado 2024 — Service técnico propio
```

- Mantener las estrellitas amarillas del template

### 9. Fotos del taller (adaptar Portfolio bento grid del template)
- Misma grilla bento pero con fotos del taller, alumnos practicando, equipos, herramientas
- Eliminar los overlays con "View Project" button — solo hover sutil con zoom
- Usar imágenes de Unsplash de HVAC/talleres como placeholder

### 10. Dónde queda el taller (NUEVO — sección de ubicación con Google Maps)
- Sección con label "Ubicación" y título "Vení a conocer el taller"
- Layout 2 columnas en desktop, 1 columna en mobile:

**Columna izquierda — Info de ubicación:**
- Dirección del instituto (extraer del Google Maps embed)
- Ícono MapPin + dirección completa
- Ícono Calendar + "Viernes 17:00 a 19:00 hs"
- Ícono Car + Botón/link "Cómo llegar" que abre Google Maps en nueva pestaña: `https://www.google.com/maps/place/Instituto+Superior+de+Oficios/@-34.6046258,-58.9444555,17z`
- Mantener estética de cards con borde sutil y rounded-3xl

**Columna derecha — Mapa embebido:**
- Iframe de Google Maps embed:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5!2d-58.9444555!3d-34.6046258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc8f5179d017ed%3A0x8eb76d579f08350!2sInstituto%20Superior%20de%20Oficios!5e0!3m2!1ses-419!2sar!4v1711800000000"
  width="100%"
  height="350"
  style="border:0; border-radius: 24px;"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```
- El iframe debe tener `rounded-3xl` para mantener la estética
- En mobile: mapa full width debajo de la info
- Agregar también al FAQ una pregunta nueva: "¿Dónde se cursa?" → "Las clases se dictan en nuestro taller en [dirección]. Podés ver la ubicación exacta en el mapa de la página o hacer clic en 'Cómo llegar' para abrir Google Maps."

### 11. FAQ (NUEVO — no existe en el template)
- Accordion con 6 preguntas:

| Pregunta | Respuesta |
|----------|-----------|
| ¿Necesito experiencia previa? | No. El curso está diseñado para arrancar de cero. No necesitás conocimientos previos de refrigeración ni electricidad. |
| ¿Qué certificado recibo? | Al finalizar recibís un certificado de Técnico en Refrigeración y podés matricularte en la CARHAA para obtener tu credencial profesional. |
| ¿Necesito comprar herramientas? | No. Todas las herramientas para las prácticas las brindamos nosotros. Solo necesitás traer lapicera y cuaderno. |
| ¿Puedo pagar con tarjeta de crédito? | Sí. Aceptamos efectivo, transferencia bancaria y tarjeta de crédito a través de Mercado Pago. |
| ¿Dónde se cursa? | Las clases son presenciales en nuestro taller. Podés ver la ubicación exacta en el mapa de la página o hacer clic en "Cómo llegar" para abrir Google Maps con indicaciones. |
| ¿Qué salida laboral tiene? | Los técnicos en refrigeración tienen altísima demanda. Podés trabajar en empresas de HVAC, hacer service por cuenta propia, o dedicarte a instalaciones. Muchos egresados empiezan a trabajar antes de terminar el curso. |

- Usar Framer Motion para animar apertura/cierre

### 12. CTA final (adaptar del template)
- Título: "¿Listo para arrancar?"
- Bajada: "Escribinos por WhatsApp y reservá tu lugar en la comisión de abril."
- Botón grande WhatsApp (mismo que el hero)
- "Respondemos en menos de 15 minutos"

### 13. Footer (simplificar del template)
- Solo: nombre "Instituto Superior de Oficios" + link a Instagram si tienen
- Eliminar: newsletter, 4 columnas de links, social media grid, legal links
- Una sola línea

### 14. Botón sticky de WhatsApp (NUEVO)
- Botón flotante fijo en bottom de pantalla
- Aparece al scrollear pasado el hero (después de ~600px)
- Mismo link de WhatsApp con mensaje pre-cargado
- Con backdrop-blur y borde sutil

---

## Componentes del template original a ELIMINAR

- `Client Logos` section completa
- `Contact form` (formulario + inputs + textarea)
- `Newsletter` subscription en footer
- Footer de 4 columnas con links
- Botones "Log In" / "Get Started" del header
- Nav links del header (Services, Work, About, etc.)
- Mobile menu complejo (solo necesitan el botón CTA)
- Social media links (Instagram, Twitter, LinkedIn, Facebook, GitHub)

---

## Pixel de Meta

Agregar en el `<head>` del layout principal:

```html
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'TU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<!-- End Meta Pixel Code -->
```

> Reemplazar `TU_PIXEL_ID` con el ID real del pixel.

Trackear evento de clic en botón de WhatsApp:
```tsx
onClick={() => {
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Contact', { content_name: 'WhatsApp CTA' });
  }
  window.open('https://wa.me/54XXXXXXXXXX?text=...', '_blank');
}}
```

---

## Componente base a adaptar

Copy-paste this component to `/components/ui/landing-page.tsx` and adapt it following the section structure above:

```tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  ArrowUpRight,
  Sparkles,
  Zap,
  Palette,
  Code,
  LineChart,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function DesignAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${scrollY > 50 ? "shadow-md" : ""}`}
      >
        <div className="container flex h-16 items-center justify-between border-x border-muted">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-10 w-10 rounded-3xl bg-primary flex items-center justify-center"
              >
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </motion.div>
              <span className="font-bold text-xl">Studio</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-3">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#work" className="text-sm font-medium transition-colors hover:text-primary">
              Work
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#clients" className="text-sm font-medium transition-colors hover:text-primary">
              Clients
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-3xl">
              Log In
            </Button>
            <Button size="sm" className="rounded-3xl">
              Get Started
            </Button>
          </div>
          <button className="flex md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background md:hidden"
        >
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-3xl bg-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Studio</span>
              </Link>
            </div>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container grid gap-3 pb-8 pt-6"
          >
            {["Services", "Work", "About", "Clients", "Contact"].map((item, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center justify-between rounded-3xl px-3 py-2 text-lg font-medium hover:bg-accent"
                  onClick={toggleMenu}
                >
                  {item}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemFadeIn} className="flex flex-col gap-3 pt-4">
              <Button variant="outline" className="w-full rounded-3xl">
                Log In
              </Button>
              <Button className="w-full rounded-3xl">Get Started</Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="container px-4 md:px-6 border border-muted rounded-3xl bg-gradient-to-br from-background to-muted/30">
            <div className="grid gap-3 lg:grid-cols-[1fr_400px] lg:gap-3 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col justify-center space-y-4 py-10"
              >
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-3xl bg-muted px-3 py-1 text-sm"
                  >
                    <Zap className="mr-1 h-3 w-3" />
                    Creative Design Studio
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                    We design digital experiences that people{" "}
                    <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      love
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-[600px] text-muted-foreground md:text-xl"
                  >
                    Our award-winning team crafts beautiful, functional designs that drive growth and engagement.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <Button size="lg" className="rounded-3xl group">
                    Get Started
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-3xl">
                    View Our Work
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden rounded-3xl">
                  <Image
                    src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section id="clients" className="w-full py-12 md:py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Trusted by
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Our Clients
                </motion.h2>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid grid-cols-2 items-center gap-3 py-8 md:grid-cols-3 lg:grid-cols-6"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center"
                >
                  <div className="rounded-3xl border p-6 bg-background/80 hover:shadow-md transition-all">
                    <Image
                      src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=80&width=160"
                      alt={`Client Logo ${i + 1}`}
                      width={160}
                      height={80}
                      className="grayscale transition-all hover:grayscale-0"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Services
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  What We Do
                </motion.h2>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl items-center gap-3 py-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: <Palette className="h-10 w-10 text-primary" />,
                  title: "UI/UX Design",
                  description: "We create intuitive, engaging user experiences that delight your customers and drive conversions.",
                },
                {
                  icon: <Code className="h-10 w-10 text-primary" />,
                  title: "Web Development",
                  description: "Our developers build fast, responsive, and accessible websites that work across all devices.",
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-primary" />,
                  title: "Brand Identity",
                  description: "We craft distinctive brand identities that communicate your values and resonate with your audience.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-primary" />,
                  title: "Mobile Apps",
                  description: "We design and develop native and cross-platform mobile applications that users love.",
                },
                {
                  icon: <LineChart className="h-10 w-10 text-primary" />,
                  title: "Digital Marketing",
                  description: "We help you reach your target audience and grow your business with data-driven marketing strategies.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-primary" />,
                  title: "Content Creation",
                  description: "We produce engaging content that tells your story and connects with your customers.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md bg-background/80"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                  <div className="relative space-y-3">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Portfolio/Work Bento Grid */}
        <section id="work" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/10"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Portfolio
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Our Work
                </motion.h2>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-7xl gap-3 py-12 md:grid-cols-4 md:grid-rows-2 lg:gap-3"
            >
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 h-[400px] md:h-auto"
              >
                <Image
                  src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=800&width=1200"
                  alt="Portfolio Item 1"
                  fill
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
              {[2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-3xl h-[200px]"
                >
                  <Image
                    src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=600&width=600"
                    alt={`Portfolio Item ${i}`}
                    fill
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              ))}
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl md:col-span-2 h-[200px]"
              >
                <Image
                  src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=600&width=1200"
                  alt="Portfolio Item 5"
                  fill
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* About/Team Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl"
          >
            <div className="grid gap-3 lg:grid-cols-2 lg:gap-3">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 p-6"
              >
                <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Founded in 2015, our design studio has grown from a small team of passionate designers to a
                  full-service creative agency.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl">
                  <Image
                    src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=1080&width=1920"
                    alt="Team Photo"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  What Our Clients Say
                </motion.h2>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl gap-3 py-12 lg:grid-cols-2"
            >
              {[
                {
                  quote: "Working with this team transformed our brand.",
                  author: "Sarah Johnson",
                  company: "CEO, TechStart",
                },
                {
                  quote: "The attention to detail helped us increase our conversion rate by 40%.",
                  author: "Michael Chen",
                  company: "Marketing Director, GrowthCo",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10 }}
                  className="flex flex-col justify-between rounded-3xl border bg-background p-6 shadow-sm"
                >
                  <blockquote className="mt-4 text-lg font-medium leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="mt-6 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Design Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
```

---

## Copy-paste these files for dependencies:

### `/components/ui/button.tsx`
```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

## Install NPM dependencies:
```bash
lucide-react framer-motion @radix-ui/react-slot class-variance-authority
```

---

## Implementation Guidelines

1. Set up Next.js project with shadcn + Tailwind + TypeScript if not already done
2. Configure `tailwind.config` with the ISO color palette (bordó, dorado, negro) as documented above
3. Import fonts DM Sans and Space Mono from Google Fonts in layout
4. Force dark mode across the entire site
5. Copy the base component and the button dependency into the correct directories
6. Adapt the component section by section following this spec — do NOT rewrite from scratch, modify what exists
7. Add the new sections that don't exist in the template (Countdown, Pricing, FAQ, CARHAA, Sticky WhatsApp CTA)
8. Remove the sections that don't apply (Client Logos, Contact Form, Newsletter, complex footer, nav links)
9. Replace all placeholder images with Unsplash images of HVAC technicians, workshops, air conditioning installation
10. Install Meta Pixel in the layout head
11. Make sure everything is 100% mobile-first and responsive
12. All WhatsApp links must carry a pre-loaded message: `Hola, quiero inscribirme al curso de Refrigeración que arranca en abril`
13. Replace `54XXXXXXXXXX` with the real WhatsApp number before deploying
14. Replace `TU_PIXEL_ID` with Zahir's real Meta Pixel ID before deploying
