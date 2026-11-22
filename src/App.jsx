import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, ArrowRight } from 'lucide-react';

import {
  EditorialSurface,
  RevealText,
  ClipRevealImage,
  MagneticButton,
  HoverPreviewList,
  StickyEditorialSplit,
  HorizontalShowcase,
  EditorialMarquee,
  EditorialAccordion,
  ScrollProgressBar,
  CounterMetric,
  CRAFT_EASE,
  CRAFT_VIEWPORT
} from './craft';

const WHATSAPP_URL =
  'https://wa.me/18293344244?text=Hola%2C%20vi%20el%20portafolio%20web%20del%20Dr.%20Hancel%20Sanchez%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20dise%C3%B1o%20de%20sonrisa.';
const INSTAGRAM_URL = 'https://www.instagram.com/dr.hancelsanchez/';

const SERVICES_DATA = [
  {
    number: '01',
    title: 'Diseño de Sonrisa',
    slug: 'diseno-de-sonrisa',
    meta: 'Resinas de alta estética & Lentes cerámicos',
    description:
      'Procedimiento estético avanzado enfocado en perfeccionar la forma, color y proporción de los dientes, logrando una sonrisa armónica, juvenil y completamente natural adaptada a las facciones de cada paciente.',
    photo: './media/post_11.jpg',
    caption: 'Diseño estético con proporciones faciales armónicas y acabado translúcido natural.'
  },
  {
    number: '02',
    title: 'Carillas y Resinas de Alta Estética',
    slug: 'resinas-compuestas-y-carillas',
    meta: 'Protocolo H38 & Porcelana',
    description:
      'Aplicación de carillas de porcelana y resinas compuestas de alta gama bajo estrictos protocolos clínicos, garantizando durabilidad prolongada, bio-compatibilidad y un brillo dental idéntico al esmalte natural.',
    photo: './media/post_25.jpg',
    caption: 'Protocolo H38 en resinas compuestas de alta resistencia y definición anatómica.'
  },
  {
    number: '03',
    title: 'Rehabilitación Conservadora',
    slug: 'rehabilitacion-conservadora',
    meta: 'Preservación dental · Cero desgaste agresivo',
    description:
      'Técnicas de odontología estética mínimamente invasivas diseñadas para cuidar la salud y estructura original de los dientes, solucionando desgastes y devolviendo simetría sin procedimientos dolorosos.',
    photo: './media/post_10.jpg',
    caption: 'Macro-fotografía intraoral de arcadas rehabilitadas con enfoque biológico.'
  },
  {
    number: '04',
    title: 'Estética Dental & Macro-Diagnóstico',
    slug: 'macro-diagnostico',
    meta: 'Fotografía clínica & Estudio digital',
    description:
      'Evaluación facial completa mediante fotografía macro de alta definición para planificar cada cambio milimétricamente antes de su ejecución clínica en Arroyo Hondo.',
    photo: './media/post_30.jpg',
    caption: 'Procedimiento clínico de alta precisión con instrumental especializado.'
  }
];

const CLINICAL_CASES = [
  {
    code: 'PROYECTO 01',
    category: 'Diseño de Sonrisa',
    title: 'Diseño de Sonrisa Completo',
    location: 'Arroyo Hondo, Santo Domingo',
    desc: 'Transformación integral mejorando color, textura y proporción en armonía absoluta con el rostro y la expresión de la paciente.',
    photo: './media/post_15.jpg'
  },
  {
    code: 'PROYECTO 02',
    category: 'Estética Dental',
    title: 'Protocolo H38 en Resina Compuesta',
    location: 'Arroyo Hondo, Santo Domingo',
    desc: 'Rehabilitación de alta estética devolviendo luminosidad juvenil y contorno anatómico perfecto con técnica mínimamente invasiva.',
    photo: './media/post_8.jpg'
  },
  {
    code: 'PROYECTO 03',
    category: 'Casos Clínicos',
    title: 'Transformación Estética Personalizada',
    location: 'Arroyo Hondo, Santo Domingo',
    desc: 'Redefinición precisa de anatomía dental respetando la estructura biológica sin causar sensibilidad ni dolor al paciente.',
    photo: './media/post_10.jpg'
  },
  {
    code: 'PROYECTO 04',
    category: 'Carillas & Simetría',
    title: 'Alineación y Contorno Dental',
    location: 'Arroyo Hondo, Santo Domingo',
    desc: 'Diseño estético superior e inferior logrando máxima simetría con micro-textura que refracta la luz con naturalidad.',
    photo: './media/post_9.jpg'
  },
  {
    code: 'PROYECTO 05',
    category: 'Porcelana & Lentes',
    title: 'Alta Definición y Brillo Duradero',
    location: 'Arroyo Hondo, Santo Domingo',
    desc: 'Estabilidad de color y contorno gingival saludable preservando el esmalte dental con materiales de grado artístico.',
    photo: './media/post_17.jpg'
  },
  {
    code: 'PROYECTO 06',
    category: 'Casos Clínicos',
    title: 'Sonrisa Juvenil y Expresiva',
    location: 'Arroyo Hondo, Santo Domingo',
    desc: 'Rehabilitación estética completa que potencia la seguridad personal del paciente con resultados de apariencia orgánica.',
    photo: './media/post_14.jpg'
  }
];

const FAQ_ITEMS = [
  {
    question: '¿Los diseños de sonrisa requieren desgaste excesivo de los dientes?',
    answer:
      'En Cosmedent RD priorizamos la salud dental aplicando técnicas mínimamente invasivas, respetando y preservando al máximo la estructura natural de tus dientes sin desgastes agresivos ni dolor.'
  },
  {
    question: '¿Cuál es la diferencia entre carillas de porcelana y resina compuesta?',
    answer:
      'Ambas son excelentes opciones de alta estética. Las resinas de alta gama permiten rehabilitaciones conservadoras directas con el Protocolo H38, mientras que las porcelanas ofrecen una excepcional estabilidad de color y durabilidad a largo plazo.'
  },
  {
    question: '¿Dónde está ubicada la clínica del Dr. Hancel Sanchez?',
    answer:
      'Nos encontramos ubicados en Arroyo Hondo, Distrito Nacional, Santo Domingo, República Dominicana. La atención es personalizada previa cita agendada por WhatsApp.'
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* 1. Hairline Top Scroll Progress Indicator */}
      <ScrollProgressBar color="var(--accent)" />

      {/* 2. Navigation Bar */}
      <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="site-nav__inner">
          <a href="#" className="site-nav__brand" onClick={closeMenu}>
            <div className="site-nav__logo-frame">
              <img src="./media/logo_real.jpg" alt="Dr. Hancel Sanchez Logo" />
            </div>
            <div className="site-nav__brand-text">
              <span className="site-nav__title">Dr. Hancel Sanchez</span>
              <span className="site-nav__sub">Cosmedent RD · Arroyo Hondo</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="site-nav__links">
            <a href="#especialidades" className="site-nav__link craft-link-underline">
              Especialidades
            </a>
            <a href="#filosofia" className="site-nav__link craft-link-underline">
              Filosofía
            </a>
            <a href="#casos" className="site-nav__link craft-link-underline">
              Casos Clínicos
            </a>
            <a href="#proceso" className="site-nav__link craft-link-underline">
              Proceso
            </a>
            <a href="#contacto" className="site-nav__link craft-link-underline">
              Ubicación
            </a>
          </nav>

          {/* Desktop Action */}
          <div className="site-nav__cta-desktop">
            <MagneticButton variant="primary" href={WHATSAPP_URL} target="_blank">
              Agendar cita
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle (44x44px clean hit target) */}
          <button
            type="button"
            className="site-nav__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: CRAFT_EASE }}
          >
            <div className="mobile-drawer__links">
              <a href="#especialidades" className="mobile-drawer__link" onClick={closeMenu}>
                <span>Especialidades</span>
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </a>
              <a href="#filosofia" className="mobile-drawer__link" onClick={closeMenu}>
                <span>Filosofía</span>
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </a>
              <a href="#casos" className="mobile-drawer__link" onClick={closeMenu}>
                <span>Casos Clínicos</span>
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </a>
              <a href="#proceso" className="mobile-drawer__link" onClick={closeMenu}>
                <span>Proceso</span>
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </a>
              <a href="#contacto" className="mobile-drawer__link" onClick={closeMenu}>
                <span>Ubicación</span>
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <MagneticButton variant="primary" href={WHATSAPP_URL} target="_blank" style={{ width: '100%' }}>
                Agendar cita
              </MagneticButton>
              <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Arroyo Hondo, Distrito Nacional · RD
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* 3. Hero Section — Full-Bleed Cinematic (100vh) */}
        <EditorialSurface as="section" variant="ambient" tone="primary" className="hero-cinematic">
          <div className="hero-cinematic__bg">
            <img src="./media/post_15.jpg" alt="Diseño de sonrisa estético Dr. Hancel Sanchez" />
          </div>
          <div className="hero-cinematic__scrim" />

          <div className="hero-cinematic__content">
            <div className="hero-cinematic__grid">
              <div>
                <RevealText as="h1" className="hero-cinematic__heading" delay={0.1}>
                  Transforma tu sonrisa con naturalidad y arte
                </RevealText>
              </div>

              <div className="hero-cinematic__meta">
                <motion.p
                  className="editorial-lead"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.2, ease: CRAFT_EASE }}
                >
                  Especialistas en estética dental avanzada y diseño de sonrisas en Arroyo Hondo.
                  Procedimientos personalizados, sin dolor y preservando la estructura natural de tus dientes.
                </motion.p>

                <motion.div
                  className="hero-cinematic__actions"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.28, ease: CRAFT_EASE }}
                >
                  <MagneticButton variant="primary" href={WHATSAPP_URL} target="_blank">
                    Agendar cita
                  </MagneticButton>
                  <MagneticButton variant="secondary" href="#casos">
                    Ver casos
                  </MagneticButton>
                </motion.div>
              </div>
            </div>
          </div>
        </EditorialSurface>

        {/* 4. Marquee Ticker Strip */}
        <EditorialMarquee
          items={[
            'DISEÑO DE SONRISA',
            'ESTÉTICA DENTAL AVANZADA',
            'CARILLAS EN PORCELANA',
            'RESINAS DE ALTA ESTÉTICA',
            'PROTOCOLO H38',
            'ARROYO HONDO · SANTO DOMINGO'
          ]}
          durationSeconds={32}
        />

        {/* 5. Especialidades Clínicas — HoverPreviewList (The Anti-Card Editorial Index) */}
        <EditorialSurface as="section" id="especialidades" variant="grain" tone="secondary" className="section-spacing">
          <div className="site-container">
            <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)', maxWidth: '680px' }}>
              <RevealText as="h2" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', marginBottom: '18px' }}>
                Precisión clínica y estética en cada detalle
              </RevealText>
              <p className="editorial-lead">
                Cada intervención responde a un estudio facial exhaustivo. Empleamos biomateriales de alta fidelidad que respetan la función masticatoria y la biología de tu dentadura.
              </p>
            </div>

            {/* HoverPreviewList replaces generic card grids */}
            <HoverPreviewList items={SERVICES_DATA} aspectRatio="4 / 5" />
          </div>
        </EditorialSurface>

        {/* 6. Filosofía & Dr. Hancel Sanchez — StickyEditorialSplit */}
        <EditorialSurface as="section" id="filosofia" variant="architectural" tone="primary" className="section-spacing">
          <div className="site-container">
            <StickyEditorialSplit
              pinned={
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <ClipRevealImage
                    src="./media/post_29.jpg"
                    alt="Dr. Hancel Sanchez realizando procedimiento estético"
                    aspectRatio="4 / 5"
                    parallax
                    priority
                  />
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Dr. Hancel Sanchez — CEO de Cosmedent RD en consulta clínica
                  </div>
                </div>
              }
              ratio="55/45"
            >
              <div className="philosophy-grid">
                <div>
                  <div className="quote-block">
                    <p className="quote-text">
                      "Una sonrisa no solo cambia tu rostro, cambia la forma en que ves la vida."
                    </p>
                    <div className="quote-author">Dr. Hancel Sanchez · Director Clínico</div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
                    <p style={{ fontSize: '1.02rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.8)' }}>
                      Especialista en estética dental y diseño de sonrisas, enfocado en crear transformaciones armónicas que fortalecen la confianza y la seguridad de cada paciente en República Dominicana.
                    </p>
                    <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>
                      Con una práctica clínica consolidada en Arroyo Hondo, Distrito Nacional, implementa técnicas avanzadas y mínimamente invasivas para preservar la estructura natural de los dientes, logrando resultados duraderos, naturales y sin dolor.
                    </p>
                  </div>

                  {/* Tabular Numerals Counter Metrics */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', marginBottom: 36 }}>
                    <CounterMetric
                      value="39.8K"
                      label="Seguidores en Instagram"
                      note="Comunidad activa y testimonios reales"
                    />
                    <CounterMetric
                      value="320+"
                      label="Casos documentados"
                      note="Publicaciones y transformaciones"
                    />
                    <CounterMetric
                      value="100%"
                      label="Enfoque conservador"
                      note="Preservación biológica del diente"
                    />
                  </div>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="craft-link-underline"
                    style={{ fontSize: '0.92rem', color: 'var(--accent)' }}
                  >
                    <span>Seguir casos clínicos en @dr.hancelsanchez</span>
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </StickyEditorialSplit>
          </div>
        </EditorialSurface>

        {/* 7. Casos Clínicos — HorizontalShowcase */}
        <EditorialSurface as="section" id="casos" variant="ambient" tone="secondary" className="section-spacing">
          <div className="site-container">
            <HorizontalShowcase
              header={
                <div style={{ maxWidth: '580px', marginBottom: '24px' }}>
                  <RevealText as="h2" style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)', marginBottom: '14px' }}>
                    Casos clínicos seleccionados
                  </RevealText>
                  <p className="editorial-lead">
                    Fotografía en alta resolución de transformaciones reales realizadas en Santo Domingo. Sin retoques invasivos ni resultados artificiales.
                  </p>
                </div>
              }
              items={CLINICAL_CASES}
              renderItem={(item) => (
                <div className="case-slide-card">
                  <div style={{ width: '100%', aspectRatio: '16 / 11', overflow: 'hidden' }}>
                    <img
                      src={item.photo}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="case-slide-card__content">
                    <h3 className="case-slide-card__title">{item.title}</h3>
                    <p className="case-slide-card__desc">{item.desc}</p>
                  </div>
                </div>
              )}
            />
          </div>
        </EditorialSurface>

        {/* 8. Bento Visual Mosaic — Studio Experience & Patient Artistry */}
        <EditorialSurface as="section" variant="grain" tone="primary" className="section-spacing--dense">
          <div className="site-container">
            <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
              <RevealText as="h2" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.4rem)' }}>
                Donde se crean las mejores sonrisas
              </RevealText>
            </div>

            <div className="bento-mosaic">
              <div className="bento-item--large">
                <ClipRevealImage
                  src="./media/post_35.jpg"
                  alt="Instalaciones clínicas de alta gama"
                  aspectRatio="16 / 10"
                  parallax
                />
              </div>
              <div className="bento-item--medium">
                <ClipRevealImage
                  src="./media/post_26.jpg"
                  alt="Atención médica cercana y personalizada"
                  aspectRatio="4 / 3"
                />
              </div>
              <div className="bento-item--small">
                <ClipRevealImage
                  src="./media/post_30.jpg"
                  alt="Tecnología de precisión dental"
                  aspectRatio="4 / 3"
                />
              </div>
              <div className="bento-item--wide">
                <ClipRevealImage
                  src="./media/post_23.jpg"
                  alt="Resultados estéticos masculinos y naturales"
                  aspectRatio="16 / 9"
                  parallax
                />
              </div>
            </div>
          </div>
        </EditorialSurface>

        {/* 9. Proceso Clínico & Preguntas Frecuentes — EditorialAccordion */}
        <EditorialSurface as="section" id="proceso" variant="ambient" tone="secondary" className="section-spacing">
          <div className="site-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
              <div>
                <RevealText as="h2" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', marginBottom: '20px' }}>
                  Un proceso clínico claro, preciso y predecible
                </RevealText>
                <p className="editorial-lead" style={{ marginBottom: '36px' }}>
                  Desde la primera consulta diagnóstica hasta el pulido final, cada etapa está calibrada para ofrecerte tranquilidad, estética y salud bucal duradera.
                </p>

                <div className="process-grid" style={{ gridTemplateColumns: '1fr', gap: '16px' }}>
                  <div className="process-step">
                    <span className="process-step__number">01 / Diagnóstico</span>
                    <h3 className="process-step__title">Evaluación y Diagnóstico</h3>
                    <p className="process-step__desc">
                      Estudio detallado de la estructura dental, salud gingival y expectativas estéticas de cada paciente.
                    </p>
                  </div>
                  <div className="process-step">
                    <span className="process-step__number">02 / Planificación</span>
                    <h3 className="process-step__title">Planificación Personalizada</h3>
                    <p className="process-step__desc">
                      Diseño único adaptado a la armonía facial y proporciones anatómicas naturales de tu rostro.
                    </p>
                  </div>
                  <div className="process-step">
                    <span className="process-step__number">03 / Ejecución</span>
                    <h3 className="process-step__title">Transformación sin Dolor</h3>
                    <p className="process-step__desc">
                      Ejecución clínica precisa con técnicas mínimamente invasivas y biomateriales de alta calidad.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <RevealText as="h2" style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '28px' }}>
                  Criterio clínico y dudas comunes
                </RevealText>

                <EditorialAccordion items={FAQ_ITEMS} defaultOpen={0} />

                <div style={{ marginTop: '36px' }}>
                  <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '14px' }}>
                    ¿Tienes una pregunta específica sobre tu caso o deseas una evaluación inicial?
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="craft-link-underline"
                    style={{ fontSize: '0.9rem', color: 'var(--accent)' }}
                  >
                    <span>Consultar directamente por WhatsApp</span>
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </EditorialSurface>

        {/* 10. Monolithic Closing CTA & Location */}
        <EditorialSurface as="section" id="contacto" variant="grain" tone="primary" className="section-spacing">
          <div className="site-container">
            <div className="monolithic-cta">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={CRAFT_VIEWPORT}
                transition={{ duration: 0.5, ease: CRAFT_EASE }}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 28px',
                  border: '1px solid var(--accent)'
                }}
              >
                <img
                  src="./media/logo_real.jpg"
                  alt="Dr. Hancel Sanchez Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>

              <RevealText as="h2" className="monolithic-cta__heading">
                Comienza la transformación de tu sonrisa
              </RevealText>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.76)',
                  maxWidth: '56ch',
                  margin: '0 auto 36px'
                }}
              >
                Coordina una cita de diagnóstico en nuestra clínica de Arroyo Hondo, Santo Domingo. Evaluamos tus piezas dentales para diseñar la sonrisa ideal para ti.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <MagneticButton variant="primary" href={WHATSAPP_URL} target="_blank">
                  Agendar cita
                </MagneticButton>
                <MagneticButton variant="secondary" href={INSTAGRAM_URL} target="_blank">
                  Ver Instagram
                </MagneticButton>
              </div>

              {/* Location Detail Box */}
              <div
                style={{
                  marginTop: 'clamp(48px, 7vw, 72px)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '24px',
                  textAlign: 'left',
                  borderTop: '1px solid var(--border-hairline)',
                  paddingTop: '36px'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Sede Clínica
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
                    Arroyo Hondo, Distrito Nacional<br />
                    Santo Domingo, República Dominicana
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Atención Directa
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
                    WhatsApp: +1 829-334-4244<br />
                    Citas personalizadas
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Comunidad Digital
                  </div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="craft-link-underline"
                    style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)' }}
                  >
                    @dr.hancelsanchez
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Monumental Footer Typographic Signature */}
          <footer className="footer-monument" style={{ marginTop: 'clamp(56px, 8vw, 96px)' }}>
            <div className="site-container">
              <div className="footer-monument__marquee-title">
                DR. HANCEL SANCHEZ
              </div>

              <div className="footer-bottom">
                <div>
                  © {new Date().getFullYear()} Dr. Hancel Sanchez · Cosmedent RD. Todos los derechos reservados.
                </div>
                <div>
                  Estética Dental y Diseños de Sonrisas · Arroyo Hondo, Santo Domingo
                </div>
              </div>
            </div>
          </footer>
        </EditorialSurface>
      </main>
    </div>
  );
}
