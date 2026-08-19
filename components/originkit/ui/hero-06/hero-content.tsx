// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/originkit/ui/hero-06/button";

/** ease-out-cubic */
const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

type HeroContentProps = {
  onExplorePeople: () => void;
  onViewStories: () => void;
};

export const HeroContent = ({
  onExplorePeople,
  onViewStories,
}: HeroContentProps) => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: {
            type: "tween" as const,
            duration: 0.45,
            ease: EASE_OUT,
            delay,
          },
        };

  return (
    <div className="pointer-events-none relative z-20 flex w-full max-w-[440px] flex-col items-center gap-5 px-0 ipad:max-w-[560px] ipad:gap-6">
      <motion.span
        {...reveal(0.22)}
        className="pointer-events-auto rounded-full border border-brand-blue/25 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue backdrop-blur-sm ipad:text-[12px]"
      >
        Plano Anual de Capacitação
      </motion.span>

      <div className="flex w-full flex-col items-center gap-3 text-center ipad:gap-4">
        <motion.h1
          {...reveal(0.28)}
          className="pointer-events-auto w-full font-sans text-[34px] font-extrabold leading-[1.05] tracking-[-1.4px] text-ink text-balance ipad:text-[52px] desktop-sm:text-[58px] ipad:tracking-[-2px]"
        >
          <span className="block text-ink">Seja o próximo</span>
          <span className="block text-gradient-3c">passo de alguém.</span>
        </motion.h1>

        <motion.p
          {...reveal(0.36)}
          className="pointer-events-auto w-full max-w-[400px] font-sans text-[15px] font-medium leading-relaxed tracking-[-0.2px] text-body text-pretty ipad:max-w-[480px] ipad:text-[17px]"
        >
          Todo profissional aprendeu com alguém para chegar onde está. Torne-se
          um <span className="font-semibold text-ink-soft">embaixador do
          conhecimento</span> na 3C Services e multiplique o que você sabe.
        </motion.p>
      </div>

      <motion.div
        {...reveal(0.48)}
        className="pointer-events-auto flex flex-row flex-wrap items-center justify-center gap-3 ipad:gap-4"
      >
        <Button
          variant="primary"
          aria-label="Conhecer as etapas do PAC"
          onClick={onExplorePeople}
        >
          Quero ser multiplicador
        </Button>
        <Button
          variant="secondary"
          aria-label="Entender o conceito da campanha"
          onClick={onViewStories}
        >
          Conhecer o PAC
        </Button>
      </motion.div>
    </div>
  );
};
