import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
export function Container({className,...props}:ComponentProps<"div">){return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",className)} {...props}/>;}
export function Section({id,eyebrow,title,children,className}:{id?:string;eyebrow?:string;title?:string;children:ReactNode;className?:string}){return <section id={id} className={cn("py-20 sm:py-28",className)}><Container>{(eyebrow||title)&&<div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[.25em] text-blue-600">{eyebrow}</p><h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">{title}</h2></div>}{children}</Container></section>}
