import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
export function Card({className,...props}:ComponentProps<"div">){return <div className={cn("rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-premium",className)} {...props}/>;}
