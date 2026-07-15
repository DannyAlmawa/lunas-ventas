type DecorativeMoonProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-32 w-32",
  md: "h-56 w-56",
  lg: "h-[22rem] w-[22rem] sm:h-[32rem] sm:w-[32rem]",
};

export function DecorativeMoon({ className = "", size = "md" }: DecorativeMoonProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full border border-moon/70 bg-[radial-gradient(circle_at_35%_35%,rgba(255,248,240,.92),rgba(232,216,184,.38)_48%,rgba(216,200,168,.13)_72%,transparent_74%)] ${sizes[size]} ${className}`}
    >
      <span className="absolute left-[18%] top-[20%] h-3 w-3 rounded-full bg-sand/35" />
      <span className="absolute right-[28%] top-[34%] h-2 w-2 rounded-full bg-taupe/20" />
      <span className="absolute bottom-[30%] left-[36%] h-4 w-4 rounded-full bg-champagne/25" />
    </div>
  );
}
