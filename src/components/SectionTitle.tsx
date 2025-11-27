'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
}

export function SectionTitle({ eyebrow, title, align = 'left' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center space-y-4' : 'space-y-4'}
    >
      {eyebrow ? (
        <span className="text-sm font-mono uppercase tracking-[0.4em] text-accentGlow/80">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-textPrimary md:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
