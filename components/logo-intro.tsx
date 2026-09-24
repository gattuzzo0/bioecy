"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

import { BrandLogo } from "@/components/brand-logo";

type Box = { left: number; top: number; width: number; height: number };

type LogoIntroValue = {
  landed: boolean;
  slotRef: RefObject<HTMLSpanElement | null>;
};

const fallbackSlot: RefObject<HTMLSpanElement | null> = { current: null };

const LogoIntroContext = createContext<LogoIntroValue>({
  landed: true,
  slotRef: fallbackSlot,
});

const ease = [0.22, 1, 0.36, 1] as const;
const holdMs = 2800;
const doneMs = 3900;

export function useLogoIntro() {
  return useContext(LogoIntroContext);
}

function swirlPath(amp: number, waves: number) {
  const pts: string[] = [];
  for (let i = 0; i <= 140; i++) {
    const a = (i / 140) * Math.PI * 2;
    const r = 72 + Math.sin(a * waves) * amp;
    const x = 100 + Math.cos(a) * r;
    const y = 100 + Math.sin(a) * r;
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

const swirlA = swirlPath(12, 5);
const swirlB = swirlPath(7, 8);

export function LogoIntro({ children }: { children: ReactNode }) {
  const slotRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<Box | null>(null);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const skip = window.setTimeout(() => setLanded(true), 0);
      return () => window.clearTimeout(skip);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const flyAt = window.setTimeout(() => {
      const logoBox = logoRef.current?.getBoundingClientRect();
      const slotBox = slotRef.current?.getBoundingClientRect();
      if (!logoBox || !slotBox || slotBox.width === 0) {
        setLanded(true);
        document.body.style.overflow = previousOverflow;
        return;
      }
      setTarget({
        left: slotBox.left,
        top: slotBox.top,
        width: slotBox.width,
        height: slotBox.height,
      });
    }, holdMs);

    const doneAt = window.setTimeout(() => {
      setLanded(true);
      document.body.style.overflow = previousOverflow;
    }, doneMs);

    return () => {
      window.clearTimeout(flyAt);
      window.clearTimeout(doneAt);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <LogoIntroContext.Provider value={{ landed, slotRef }}>
      {children}
      <AnimatePresence>
        {landed ? null : (
          <motion.div
            key="logo-intro"
            className="fixed inset-0 z-[100] overflow-hidden bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            aria-hidden
          >
            <motion.div
              className="pointer-events-none absolute inset-0"
              animate={{ opacity: target ? 0 : 1 }}
              transition={{ duration: 0.35 }}
            >
              <span className="intro-ring absolute top-1/2 left-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/10" />
              <span className="intro-ring absolute top-1/2 left-1/2 size-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/15 [animation-direction:reverse]" />
              <span className="absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/10" />
              <span className="absolute top-[18%] left-[22%] text-foreground/25">+</span>
              <span className="absolute top-[30%] right-[18%] text-foreground/25">+</span>
              <span className="absolute bottom-[22%] left-[16%] text-foreground/20">+</span>
              <span className="absolute right-[28%] bottom-[18%] text-foreground/20">+</span>
              <svg
                viewBox="0 0 200 200"
                className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 md:h-96 md:w-96"
              >
                <motion.path
                  d={swirlA}
                  fill="none"
                  stroke="var(--brand-green)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.9, 0.35] }}
                  transition={{ duration: 1.35, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.path
                  d={swirlB}
                  fill="none"
                  stroke="var(--brand-green)"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.7, 0.2] }}
                  transition={{ duration: 1.5, delay: 0.35, ease: "easeInOut" }}
                />
              </svg>
              <motion.span
                className="absolute top-1/2 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-green/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: [0, 1, 0.2], opacity: [0, 0.8, 0] }}
                transition={{ duration: 1.4, delay: 1.15, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div
              ref={logoRef}
              className={target ? "overflow-hidden" : "h-16 w-max md:h-24"}
              initial={false}
              animate={
                target
                  ? {
                      position: "fixed" as const,
                      top: target.top,
                      left: target.left,
                      x: 0,
                      y: 0,
                      width: target.width,
                      height: target.height,
                    }
                  : {
                      position: "fixed" as const,
                      top: "50%",
                      left: "50%",
                      x: "-50%",
                      y: "-50%",
                    }
              }
              transition={{ duration: 0.85, ease }}
            >
              <motion.div
                className="flex h-full w-full items-center justify-center"
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.05, ease }}
              >
                <BrandLogo className="h-full" />
              </motion.div>
            </motion.div>

            <motion.div
              className="pointer-events-none absolute top-1/2 left-1/2 h-36 w-[22rem] -translate-x-1/2 -translate-y-1/2 md:h-48 md:w-[32rem]"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: target ? 0 : 1, scale: 1 }}
              transition={{ duration: 0.6, delay: target ? 0 : 2.15, ease }}
            >
              <span className="absolute top-0 left-0 h-5 w-8 border-t border-l border-foreground/25" />
              <span className="absolute top-0 right-0 h-5 w-8 border-t border-r border-foreground/25" />
              <span className="absolute bottom-0 left-0 h-5 w-8 border-b border-l border-foreground/25" />
              <span className="absolute right-0 bottom-0 h-5 w-8 border-b border-r border-foreground/25" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LogoIntroContext.Provider>
  );
}
