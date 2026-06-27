"use client";

import * as Accordion from "@radix-ui/react-accordion";
import * as Checkbox from "@radix-ui/react-checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp, Check, ChevronDown, Menu, Phone, Send, Star, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Container, Section } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  benefits,
  comparison,
  faqs,
  navItems,
  serviceIcons,
  services,
  steps,
  testimonials,
} from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const navTargets: Record<(typeof navItems)[number], string> = {
  Acasă: "#acasa",
  Servicii: "#servicii",
  "Cum funcționează": "#cum-functioneaza",
  Avantaje: "#avantaje",
  Întrebări: "#intrebari",
  Contact: "#contact",
};

function BrandLogo({ variant = "default" }: { variant?: "default" | "light" }) {
  const textColor = variant === "light" ? "text-white" : "text-slate-950";
  const mutedColor = variant === "light" ? "text-slate-300" : "text-slate-500";

  return (
    <a href="#acasa" aria-label="Lazar Nistor Mediator - acasă" className="focus-ring flex items-center gap-3 rounded-2xl">
      <Image src="/logo-mark.svg" alt="" width={54} height={54} className="size-12" priority />
      <span className="leading-none">
        <strong className={`block text-lg font-black tracking-tight ${textColor}`}>Lazar Nistor</strong>
        <span className={`mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.42em] ${mutedColor}`}>
          Mediator
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${solid ? "bg-white/92 shadow-sm backdrop-blur-xl" : "bg-transparent"}`}>
      <Container className="flex h-20 items-center justify-between">
        <BrandLogo />
        <nav aria-label="Navigație principală" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={navTargets[item]} className="focus-ring rounded-full text-sm font-semibold text-slate-700 hover:text-blue-600">
              {item}
            </a>
          ))}
        </nav>
        <Button asChild className="hidden lg:inline-flex">
          <a href="#contact">Programează consultație</a>
        </Button>
        <button aria-label="Deschide meniul" onClick={() => setOpen(true)} className="focus-ring rounded-full p-2 lg:hidden">
          <Menu />
        </button>
      </Container>

      {open ? (
        <div className="fixed inset-0 z-50 bg-slate-950/40 lg:hidden">
          <div className="ml-auto min-h-screen w-80 bg-white p-6 shadow-2xl">
            <button aria-label="Închide meniul" onClick={() => setOpen(false)} className="focus-ring ml-auto block rounded-full p-2">
              <X />
            </button>
            <div className="mt-6 grid gap-4">
              {navItems.map((item) => (
                <a key={item} onClick={() => setOpen(false)} href={navTargets[item]} className="rounded-2xl p-3 font-semibold hover:bg-slate-50">
                  {item}
                </a>
              ))}
              <Button asChild>
                <a href="#contact">Programează consultație</a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section id="acasa" className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10 bg-grid">
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
      </div>
      <Container className="grid min-h-[760px] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial="hidden" animate="show" variants={fadeIn}>
          <Image src="/logo-full.svg" alt="Lazar Nistor Mediator" width={360} height={104} className="mb-8 h-auto w-64 sm:w-80" priority />
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
            Prevenirea litigiilor prin dialog asistat.
          </p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-7xl">
            Rezolvă conflictele fără procese lungi și costisitoare.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            Medierea oferă soluții rapide, confidențiale și eficiente pentru persoane fizice și companii.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg"><a href="#contact">Programează consultație</a></Button>
            <Button asChild size="lg" variant="secondary"><a href="#contact">Solicită invitație la mediere</a></Button>
          </div>
        </motion.div>
        <motion.div style={{ y }} className="relative">
          <div className="glass absolute -left-6 top-10 z-10 rounded-3xl p-5 shadow-premium">
            <p className="text-3xl font-black text-slate-950">98%</p>
            <p className="text-sm text-slate-600">discreție și claritate</p>
          </div>
          <Image
            priority
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=85"
            alt="Mediator într-o consultație profesională"
            width={900}
            height={1050}
            className="rounded-[2.5rem] object-cover shadow-premium"
          />
        </motion.div>
      </Container>
    </section>
  );
}

export function Benefits() {
  return (
    <Section id="avantaje" eyebrow="Avantaje" title="Mai puțină presiune. Mai mult control.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, ...benefit }) => (
          <Card key={benefit.title}><Icon className="mb-6 size-10 text-blue-600" /><h3 className="text-xl font-bold">{benefit.title}</h3><p className="mt-3 text-slate-600">{benefit.text}</p></Card>
        ))}
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="servicii" eyebrow="Servicii" title="Mediere pentru situații personale și comerciale">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <motion.div key={service} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
              <Card className="h-full"><Icon className="mb-5 size-8 text-blue-600" /><h3 className="text-lg font-bold">{service}</h3><p className="mt-2 text-sm leading-6 text-slate-600">Analiză clară, invitație structurată și cadru de dialog orientat spre acord.</p></Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="cum-functioneaza" eyebrow="Proces" title="Patru pași clari către soluție">
      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={step} className="relative">
            <span className="mb-5 grid size-12 place-items-center rounded-2xl bg-blue-600 font-black text-white">{index + 1}</span>
            <h3 className="text-xl font-bold">{step}</h3>
            <p className="mt-3 text-slate-600">Fiecare etapă este explicată transparent și adaptată contextului părților.</p>
            {index < steps.length - 1 ? <ChevronDown className="absolute -bottom-8 left-1/2 hidden -rotate-90 text-blue-600 md:block" /> : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Comparison() {
  return (
    <Section id="comparatie" eyebrow="Comparație" title="Mediere vs Instanță">
      <div className="overflow-hidden rounded-3xl border bg-white shadow-premium">
        <table className="w-full text-left">
          <thead className="bg-slate-950 text-white"><tr><th className="p-5">Criteriu</th><th className="p-5">Mediere</th><th className="p-5">Instanță</th></tr></thead>
          <tbody>{comparison.map((row) => <tr key={row[0]} className="border-t"><th className="p-5 font-bold">{row[0]}</th><td className="p-5 text-blue-700">{row[1]}</td><td className="p-5 text-slate-600">{row[2]}</td></tr>)}</tbody>
        </table>
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="despre" eyebrow="Despre" title="Experiență, echilibru și discreție">
      <Card className="grid items-center gap-10 p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
        <Image src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=85" alt="Portret profesional mediator" width={720} height={780} className="rounded-[2rem] object-cover" />
        <div><h3 className="text-3xl font-black text-slate-950">Lazar Nistor, Mediator Autorizat în Republica Moldova</h3><p className="mt-5 text-lg leading-8 text-slate-600">O abordare calmă, structurată și orientată spre rezultate pentru conflicte familiale, civile, comerciale și de muncă.</p><div className="mt-8 grid grid-cols-3 gap-4">{["12+ domenii", "4 pași", "100% confidențial"].map((item) => <div key={item} className="rounded-2xl bg-slate-50 p-4 text-center font-black text-slate-950">{item}</div>)}</div></div>
      </Card>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="testimoniale" eyebrow="Social proof" title="Clienți care au ales dialogul">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => <Card key={testimonial.name}><div className="mb-4 flex text-amber-400">{Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" className="size-5" />)}</div><p className="text-lg text-slate-700">“{testimonial.quote}”</p><div className="mt-6 flex items-center gap-3"><div className="grid size-11 place-items-center rounded-full bg-blue-100 font-bold text-blue-700">{testimonial.name[0]}</div><div><p className="font-bold">{testimonial.name}</p><p className="text-sm text-slate-500">{testimonial.role}</p></div></div></Card>)}
      </div>
    </Section>
  );
}

export function FAQ() {
  return (
    <Section id="intrebari" eyebrow="FAQ" title="Întrebări frecvente">
      <Accordion.Root type="single" collapsible className="mx-auto max-w-4xl space-y-4">
        {faqs.map(([question, answer]) => <Accordion.Item key={question} value={question} className="rounded-3xl border bg-white px-6"><Accordion.Trigger className="focus-ring flex w-full items-center justify-between py-5 text-left text-lg font-bold">{question}<ChevronDown className="size-5" /></Accordion.Trigger><Accordion.Content className="pb-5 leading-7 text-slate-600">{answer}</Accordion.Content></Accordion.Item>)}
      </Accordion.Root>
    </Section>
  );
}

const contactSchema = z.object({
  name: z.string().min(2), phone: z.string().min(6), email: z.string().email(), type: z.string().min(2), message: z.string().min(10), gdpr: z.boolean().refine(Boolean),
});
type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema), defaultValues: { gdpr: false } });
  async function onSubmit() { setStatus("idle"); await new Promise((resolve) => setTimeout(resolve, 700)); setStatus("success"); reset(); }
  return (
    <Section id="contact" eyebrow="Contact" title="Programează o consultație confidențială">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="bg-slate-950 text-white"><Phone className="mb-6 size-10 text-blue-400" /><h3 className="text-3xl font-black">Răspuns rapid și pași clari</h3><p className="mt-4 text-slate-300">Telefon: +373 600 00 000<br />Email: contact@lazar-nistor.md<br />Adresă: Chișinău, Republica Moldova<br />Program: Luni–Vineri, 09:00–18:00</p></Card>
        <form onSubmit={handleSubmit(onSubmit, () => setStatus("error"))} className="rounded-3xl bg-white p-6 shadow-premium lg:p-8" noValidate>
          <div className="grid gap-4 md:grid-cols-2">{[["name", "Nume"], ["phone", "Telefon"], ["email", "Email"], ["type", "Tip conflict"]].map(([name, label]) => <label key={name} className="grid gap-2 font-semibold">{label}<input {...register(name as keyof ContactFormData)} className="focus-ring rounded-2xl border p-4" aria-invalid={Boolean(errors[name as keyof ContactFormData])} /></label>)}</div>
          <label className="mt-4 grid gap-2 font-semibold">Mesaj<textarea {...register("message")} rows={5} className="focus-ring rounded-2xl border p-4" /></label>
          <label className="mt-5 flex items-start gap-3 text-sm text-slate-600"><Controller control={control} name="gdpr" render={({ field }) => <Checkbox.Root checked={field.value} onCheckedChange={(value) => field.onChange(Boolean(value))} className="focus-ring mt-0.5 grid size-5 place-items-center rounded border"><Checkbox.Indicator><Check className="size-4" /></Checkbox.Indicator></Checkbox.Root>} />Accept prelucrarea datelor pentru a fi contactat în legătură cu solicitarea transmisă.</label>
          {Object.keys(errors).length > 0 ? <p className="mt-4 text-sm font-semibold text-red-600">Verifică datele introduse și acordul GDPR.</p> : null}
          {status === "success" ? <p className="mt-4 text-sm font-semibold text-green-700">Solicitarea a fost pregătită cu succes. Veți fi contactat în cel mai scurt timp.</p> : null}
          {status === "error" ? <p className="mt-4 text-sm font-semibold text-red-600">Formularul conține câmpuri incomplete.</p> : null}
          <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>{isSubmitting ? "Se trimite..." : <><Send className="mr-2 size-5" />Trimite solicitarea</>}</Button>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <Container className="grid gap-8 md:grid-cols-3"><BrandLogo variant="light" /><div><p className="font-bold">Linkuri</p><p className="mt-3 text-slate-300">Politica GDPR<br />Cookie Policy<br />Social Media</p></div><p className="text-slate-300">© {new Date().getFullYear()} Lazar Nistor. Toate drepturile rezervate.</p></Container>
      <a href="#acasa" aria-label="Înapoi sus" className="focus-ring fixed bottom-24 right-5 grid size-12 place-items-center rounded-full bg-blue-600 text-white shadow-lg md:bottom-6"><ArrowUp /></a>
      <a href="#contact" className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-blue-600 py-4 text-center font-bold text-white shadow-lg md:hidden">Programează consultație</a>
    </footer>
  );
}
