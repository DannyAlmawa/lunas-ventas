import type { CSSProperties } from "react";

type DecorativeCrescentProps = {
  className?: string;
  style?: CSSProperties;
  opacity?: number;
};

export function DecorativeCrescent({
  className = "",
  style,
  opacity = 0.26,
}: DecorativeCrescentProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 160"
      className={`pointer-events-none absolute ${className}`}
      style={{
        width: "clamp(220px, 32vw, 520px)",
        height: "auto",
        color: "#987858",
        opacity,
        zIndex: 0,
        ...style,
      }}
      fill="none"
    >
      <path
        d="M111.2 135.6C76.1 145.3 39.8 124.7 30.2 89.7 20.5 54.7 41 18.4 76.1 8.8c-16.4 15.7-23 39.8-16.6 62.8 6.3 22.9 24.1 39.9 45.7 45.5 5.7 1.5 11.6 2.1 17.4 1.9-3.3 7.8-7.2 13.3-11.4 16.6Z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M111.2 135.6C76.1 145.3 39.8 124.7 30.2 89.7 20.5 54.7 41 18.4 76.1 8.8c-16.4 15.7-23 39.8-16.6 62.8 6.3 22.9 24.1 39.9 45.7 45.5 5.7 1.5 11.6 2.1 17.4 1.9-3.3 7.8-7.2 13.3-11.4 16.6Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
