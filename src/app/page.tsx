"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, PlayCircle } from 'lucide-react';

import { reels, services, testimonials } from '@/lib/data';
import { SectionTitle } from '@/components/SectionTitle';

const CinematicCanvas = dynamic(() => import('@/components/CinematicCanvas'), { ssr: false });

const heroMotion = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accentGlow/20 via-transparent to-background" />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-24 pt-32">
        <motion.div
          className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div variants={heroMotion} transition={{ duration: 1, ease: 'easeOut' }}>
            <div className="mb-12 space-y-6">
              <div className="flex items-center gap-4 text-sm font-mono uppercase tracking-[0.4em] text-accentGlow">
                <Sparkles className="h-4 w-4" />
                <span>Video Editor</span>
                <span className="text-textSecondary">Visual Storyteller</span>
              </div>
              <h1 className="font-display text-6xl uppercase leading-[0.95] tracking-[0.1em] text-textPrimary md:text-7xl">
                Jeshua David
              </h1>
              <p className="max-w-2xl text-lg text-textSecondary md:text-xl">
                Crafting cinematic editorial experiences that merge narrative precision with immersive three-dimensional environments. I blend rhythm, tone, and spatial design to extend every frame beyond the screen.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <motion.a
                href="mailto:contact@jeshuadavid.studio"
                className="group inline-flex items-center gap-3 rounded-full border border-accentGlow/60 bg-accentGlow/10 px-8 py-4 font-mono text-sm uppercase tracking-[0.32em] text-accentSecondary transition hover:bg-accentGlow/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Inquire
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
              <motion.button
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-4 font-mono text-sm uppercase tracking-[0.32em] text-textPrimary transition hover:border-white/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Reel
                <PlayCircle className="h-5 w-5 text-accentGlow transition group-hover:text-accentSecondary" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            variants={heroMotion}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
          >
            <CinematicCanvas />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-12 rounded-3xl border border-white/5 bg-surface/60 p-12 shadow-soft backdrop-blur"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-center">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-accentGlow/70">
                Editorial Philosophy
              </span>
              <p className="font-display text-3xl uppercase tracking-[0.08em] text-textPrimary">
                Every cut is an editorial decision sculpting dimensional narrative.
              </p>
            </div>
            <div className="space-y-6 text-textSecondary">
              <p>
                From atmospheric title sequences to rapid-fire commercial edits, my process is grounded in meticulous research, story mapping, and sonic architecture. By layering depth and motion, I translate emotion into visual cadence.
              </p>
              <p>
                The result is editorial work that feels immersive, intentional, and calibrated for the cultural moment it inhabits.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="rounded-2xl border border-white/5 bg-black/20 p-6 shadow-soft"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              >
                <h3 className="font-display text-xl uppercase tracking-[0.08em] text-textPrimary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-textSecondary">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="Selected Work" title="Featured Editorial Narratives" />
        <div className="mt-12 grid gap-10">
          {reels.map((reel, index) => (
            <motion.article
              key={reel.title}
              className="grid gap-8 overflow-hidden rounded-3xl border border-white/5 bg-surface/70 p-10 shadow-soft backdrop-blur-lg lg:grid-cols-[1.2fr,0.8fr]"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: index * 0.08 }}
            >
              <div className="space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-accentGlow/70">
                  {reel.year}
                </span>
                <h3 className="font-display text-3xl uppercase tracking-[0.08em] text-textPrimary">
                  {reel.title}
                </h3>
                <p className="text-base text-textSecondary">{reel.description}</p>
                <ul className="flex flex-wrap gap-3">
                  {reel.roles.map((role) => (
                    <li
                      key={role}
                      className="rounded-full border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-textSecondary"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/5 bg-black/30 p-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-accentGlow/60">Impact</p>
                  <p className="mt-3 font-display text-2xl uppercase tracking-[0.08em] text-textPrimary">
                    {reel.stats}
                  </p>
                </div>
                <motion.a
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.32em] text-textPrimary transition hover:border-accentGlow/40"
                  whileHover={{ x: 4 }}
                >
                  View Sequence
                  <ArrowUpRight className="h-4 w-4 transition group-hover:text-accentGlow" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,209,255,0.25),transparent_60%)]" />
        <div className="rounded-3xl border border-white/5 bg-surface/80 p-10 shadow-soft backdrop-blur">
          <SectionTitle eyebrow="Testimonials" title="Collaborators Speak" align="center" />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <motion.blockquote
                key={testimonial.author}
                className="rounded-2xl border border-white/5 bg-black/30 p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <p className="text-lg text-textPrimary">“{testimonial.quote}”</p>
                <footer className="mt-6 text-sm text-textSecondary">
                  <span className="font-display uppercase tracking-[0.08em] text-textPrimary">
                    {testimonial.author}
                  </span>
                  <br />
                  <span className="font-mono uppercase tracking-[0.3em] text-textSecondary">
                    {testimonial.position}
                  </span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-6 pb-20">
        <div className="flex flex-col gap-10 rounded-3xl border border-white/5 bg-black/40 p-10 text-center shadow-soft">
          <p className="font-display text-4xl uppercase tracking-[0.1em] text-textPrimary">
            Let’s architect your next edit.
          </p>
          <p className="mx-auto max-w-2xl text-sm text-textSecondary">
            Based in Los Angeles • Available for remote collaboration globally • Fluent in Premiere Pro, DaVinci Resolve, After Effects, and spatial editorial pipelines.
          </p>
          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-[0.3em] text-textSecondary">
            <a href="mailto:contact@jeshuadavid.studio" className="hover:text-accentGlow">
              contact@jeshuadavid.studio
            </a>
            <span>+1 213 555 0199</span>
            <a href="https://vimeo.com" className="hover:text-accentGlow" target="_blank" rel="noreferrer">
              Vimeo
            </a>
            <a href="https://www.behance.net" className="hover:text-accentGlow" target="_blank" rel="noreferrer">
              Behance
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
