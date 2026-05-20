import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#7C3AED] to-accent text-white shadow-glow hover:-translate-y-0.5",
        secondary:
          "border border-white/20 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white/10",
        outline:
          "border border-[#E8E1F1] bg-white text-[#1A0B2E] hover:-translate-y-0.5 hover:border-[#3D1F52]/30 hover:bg-[#F8F4FC]",
        dark: "bg-secondary text-white hover:-translate-y-0.5 hover:bg-primary",
        ghost: "text-white hover:bg-white/10",
      },
      size: {
        default: "px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-13 px-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
