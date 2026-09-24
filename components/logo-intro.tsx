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

export function useLogoIntro() {
  return useContext(LogoIntroContext);
}

export function LogoIntro({ children }: { children: ReactNode }) {
  const slotRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<Box | null>(null);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
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
    }, 1100);

    const doneAt = window.setTimeout(() => {
      setLanded(true);
      document.body.style.overflow = previousOverflow;
    }, 2000);

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
            className="fixed inset-0 z-[100] bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            <motion.span
              className="pointer-events-none absolute top-1/2 left-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/25 md:size-80"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: [0.6, 1.15, 0.6], opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="pointer-events-none absolute top-1/2 left-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-green/50 md:size-52"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1.2, 0.7, 1.2], rotate: 180 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              ref={logoRef}
              className={
                target
                  ? "overflow-hidden"
                  : "h-20 w-auto overflow-hidden md:h-28"
              }
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
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="h-full w-full"
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <BrandLogo className="h-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LogoIntroContext.Provider>
  );
}
