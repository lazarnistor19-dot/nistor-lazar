import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const variants=cva("focus-ring inline-flex items-center justify-center rounded-full font-semibold transition-all disabled:pointer-events-none disabled:opacity-60",{variants:{variant:{primary:"bg-[#2563EB] text-white shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 hover:bg-blue-700",secondary:"border border-slate-300 bg-white/80 text-slate-900 hover:bg-white",ghost:"text-slate-700 hover:bg-slate-100"},size:{sm:"h-10 px-4 text-sm",md:"h-12 px-6",lg:"h-14 px-8 text-base"}},defaultVariants:{variant:"primary",size:"md"}});
export function Button({className,variant,size,asChild=false,...props}:ComponentProps<"button">&VariantProps<typeof variants>&{asChild?:boolean}){const Comp=asChild?Slot:"button";return <Comp className={cn(variants({variant,size,className}))} {...props}/>;}
