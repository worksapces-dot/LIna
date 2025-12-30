"use client";

import { cn } from "@/lib/utils";

export type SiriOrbProps = {
  size?: string;
  className?: string;
  colors?: {
    bg?: string;
    c1?: string;
    c2?: string;
    c3?: string;
  };
  animationDuration?: number;
};

const SiriOrb: React.FC<SiriOrbProps> = ({
  size = "192px",
  className,
  colors,
  animationDuration = 20,
}) => {
  const defaultColors = {
    bg: "oklch(95% 0.02 264.695)",
    c1: "oklch(75% 0.15 350)",
    c2: "oklch(80% 0.12 200)",
    c3: "oklch(78% 0.14 280)",
  };

  const finalColors = { ...defaultColors, ...colors };
  const sizeValue = Number.parseInt(size.replace("px", ""), 10);

  const blurAmount = sizeValue < 50 ? Math.max(sizeValue * 0.008, 1) : Math.max(sizeValue * 0.015, 4);
  const contrastAmount = sizeValue < 50 ? Math.max(sizeValue * 0.004, 1.2) : Math.max(sizeValue * 0.008, 1.5);
  const dotSize = sizeValue < 50 ? Math.max(sizeValue * 0.004, 0.05) : Math.max(sizeValue * 0.008, 0.1);
  const shadowSpread = sizeValue < 50 ? Math.max(sizeValue * 0.004, 0.5) : Math.max(sizeValue * 0.008, 2);

  const getMaskRadius = (value: number) => {
    if (value < 30) return "0%";
    if (value < 50) return "5%";
    if (value < 100) return "15%";
    return "25%";
  };

  const maskRadius = getMaskRadius(sizeValue);

  const getFinalContrast = (value: number) => {
    if (value < 30) return 1.1;
    if (value < 50) return Math.max(contrastAmount * 1.2, 1.3);
    return contrastAmount;
  };

  const finalContrast = getFinalContrast(sizeValue);

  return (
    <div
      className={cn("siri-orb", className)}
      style={{
        width: size,
        height: size,
        "--bg": finalColors.bg,
        "--c1": finalColors.c1,
        "--c2": finalColors.c2,
        "--c3": finalColors.c3,
        "--animation-duration": `${animationDuration}s`,
        "--blur-amount": `${blurAmount}px`,
        "--contrast-amount": finalContrast,
        "--dot-size": `${dotSize}px`,
        "--shadow-spread": `${shadowSpread}px`,
        "--mask-radius": maskRadius,
      } as React.CSSProperties}
    >
      <style>{`
        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .siri-orb {
          display: grid;
          grid-template-areas: "stack";
          overflow: hidden;
          border-radius: 50%;
          position: relative;
        }

        .siri-orb::before,
        .siri-orb::after {
          content: "";
          display: block;
          grid-area: stack;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        .siri-orb::before {
          background:
            conic-gradient(from calc(var(--angle) * 2) at 25% 70%, var(--c3), transparent 20% 80%, var(--c3)),
            conic-gradient(from calc(var(--angle) * 2) at 45% 75%, var(--c2), transparent 30% 60%, var(--c2)),
            conic-gradient(from calc(var(--angle) * -3) at 80% 20%, var(--c1), transparent 40% 60%, var(--c1)),
            conic-gradient(from calc(var(--angle) * 2) at 15% 5%, var(--c2), transparent 10% 90%, var(--c2)),
            conic-gradient(from calc(var(--angle) * 1) at 20% 80%, var(--c1), transparent 10% 90%, var(--c1)),
            conic-gradient(from calc(var(--angle) * -2) at 85% 10%, var(--c3), transparent 20% 80%, var(--c3));
          box-shadow: inset var(--bg) 0 0 var(--shadow-spread) calc(var(--shadow-spread) * 0.2);
          filter: blur(var(--blur-amount)) contrast(var(--contrast-amount));
          animation: rotate var(--animation-duration) linear infinite;
        }

        .siri-orb::after {
          background-image: radial-gradient(circle at center, var(--bg) var(--dot-size), transparent var(--dot-size));
          background-size: calc(var(--dot-size) * 2) calc(var(--dot-size) * 2);
          backdrop-filter: blur(calc(var(--blur-amount) * 2)) contrast(calc(var(--contrast-amount) * 2));
          mix-blend-mode: overlay;
        }

        .siri-orb[style*="--mask-radius: 0%"]::after {
          mask-image: none;
        }

        .siri-orb:not([style*="--mask-radius: 0%"])::after {
          mask-image: radial-gradient(black var(--mask-radius), transparent 75%);
        }

        @keyframes rotate {
          to {
            --angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .siri-orb::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SiriOrb;
