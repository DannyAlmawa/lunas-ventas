import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonBase = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonLinkProps = ButtonBase &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonButtonProps = ButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variants = {
  primary:
    "bg-cacao text-white-warm border-cacao hover:bg-deep-brown hover:border-deep-brown",
  secondary:
    "bg-white-warm/60 text-cacao border-taupe/40 hover:bg-moon/45 hover:border-taupe",
  ghost:
    "bg-transparent text-cacao border-transparent hover:bg-white-warm/45 hover:border-line",
};

export function Button(props: ButtonLinkProps | ButtonButtonProps) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const classes = [
    "inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cacao",
    variants[variant],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    return (
      <Link className={classes} {...(rest as ButtonLinkProps)} href={props.href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonButtonProps)}>
      {children}
    </button>
  );
}
