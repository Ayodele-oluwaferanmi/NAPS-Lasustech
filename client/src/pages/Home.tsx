import { useAuth } from "@/_core/hooks/useAuth";
import { useAuth } from "@/_core/hooks/useAuth";
import { useMemo, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { filterStudyMaterials, materials } from "@/lib/materials";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Database,
  Download,
  Eye,
  FileText,
  FlaskConical,
  GraduationCap,
  Headphones,
  LayoutDashboard,
  LifeBuoy,
  LockKeyhole,
  LogOut,
  Menu,
  MessageSquareText,
  MoreHorizontal,
  MoveRight,
  Orbit,
  PanelsTopLeft,
  QrCode,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Ticket,
  TrendingUp,
  UploadCloud,
  UserRound,
  Users,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

const ASSETS = {
  lab: "/manus-storage/lab-students_d74f9874.jpg",
  seminar: "/manus-storage/seminar_31140187.jpg",
  apparatus: "/manus-storage/apparatus_798f42b9.jpeg",
};

const events = [
  { day: "18", month: "SEP", title: "Freshers' Physics Orientation", meta: "NAPS Hall · 10:00 AM", type: "Community" },
  { day: "26", month: "SEP", title: "Beyond the Equation: Research Night", meta: "LT 3 · 4:30 PM", type: "Seminar" },
  { day: "04", month: "OCT", title: "Inter-level Quiz & Problem Solving", meta: "Physics Lab · 12:00 PM", type: "Academic" },
];

const gallery = [
  { src: ASSETS.lab, label: "Laboratory Sessions", title: "Learning by doing" },
  { src: ASSETS.seminar, label: "Seminars", title: "Ideas in the room" },
  { src: ASSETS.apparatus, label: "Departmental Events", title: "Tools for discovery" },
];

function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="NAPS LASUSTECH home">
      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${dark ? "bg-cyan-400 text-[#071b34]" : "bg-[#0b1f3a] text-white"}`}>
        <Atom size={22} strokeWidth={1.8} />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[15px] font-bold tracking-[.1em] ${dark ? "text-white" : "text-[#0b1f3a]"}`}>NAPS</span>
        <span className={`mt-1 block text-[9px] font-semibold tracking-[.16em] ${dark ? "text-cyan-200" : "text-slate-500"}`}>LASUSTECH CHAPTER</span>
      </span>
    </Link>
  );
}

function PrimaryButton({ children, href = "#", dark = false, icon = true }: { children: ReactNode; href?: string; dark?: boolean; icon?: boolean }) {
  return (
    <Link href={href} className={`group inline-flex items-center justify-center gap-3 rounded-lg px-5 py-3 text-sm font-bold transition duration-200 ${dark ? "bg-white text-[#0b1f3a] hover:bg-cyan-100" : "bg-[#0b1f3a] text-white hover:bg-[#123b63]"}`}>
      {children}
      {icon && <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </Link>
  );
}

function OutlineButton({ children, href = "#", dark = false }: { children: ReactNode; href?: string; dark?: boolean }) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-bold transition duration-200 ${dark ? "border-white/25 text-white hover:border-cyan-300 hover:bg-white/10" : "border-slate-300 bg-white text-[#0b1f3a] hover:border-[#18a6d9] hover:text-[#18a6d9]"}`}>
      {children}<ArrowRight size={16} />
    </Link>
  );
}

function SectionHeader({ eyebrow, title, copy, action }: { eyebrow: string; title: string; copy?: string; action?: ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="section-kicker mb-3">{eyebrow}</div>
        <h2 className="font-display text-3xl font-semibold tracking-[-.04em] text-[#0b1f3a] md:text-4xl">{title}</h2>
        {copy && <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{copy}</p>}
      </div>
      {action}
    </div>
  );
}

function PublicNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Brand dark />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#events" className="transition hover:text-white">Events</a>
          <a href="#library" className="transition hover:text-white">Study hub</a>
          <a href="#gallery" className="transition hover:text-white">Gallery</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/portal" className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Student portal</Link>
          <Link href="/portal" className="rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-bold text-[#071b34] transition hover:bg-cyan-300">Join NAPS</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-white md:hidden" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#081b33] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-1 text-sm text-slate-200">
            {[["About", "#about"], ["Events", "#events"], ["Study hub", "#library"], ["Gallery", "#gallery"]].map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 hover:bg-white/10">{label}</a>)}
            <Link href="/portal" className="mt-3 rounded-lg bg-cyan-400 px-3 py-3 font-bold text-[#071b34]">Open student portal</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="noise relative overflow-hidden bg-[#081b33] text-white">
      <PublicNav />
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="hero-orb left-[54%] top-[18%] h-[300px] w-[570px] -translate-x-1/2 md:h-[440px] md:w-[780px]" />
      <div className="hero-orb left-[54%] top-[31%] h-[210px] w-[390px] -translate-x-1/2 opacity-60 md:h-[300px] md:w-[540px]" />
      <div className="hero-orb left-[54%] top-[44%] h-[115px] w-[210px] -translate-x-1/2 opacity-40 md:h-[185px] md:w-[350px]" />
      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 pb-20 pt-40 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pb-24 lg:pt-44">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/5 px-3 py-2 text-[11px] font-semibold tracking-[.14em] text-cyan-100"><span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#54d8ff]" /> THE PHYSICS COMMUNITY AT LASUSTECH</div>
          <h1 className="font-display text-[clamp(3.6rem,8vw,7.7rem)] font-medium leading-[.91] tracking-[-.075em] text-white">Building<br /><span className="text-cyan-300">knowledge.</span></h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">Exploring possibilities. Shaping the future. A connected home for the physics students of LASUSTECH.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><PrimaryButton href="/portal" dark>Become a member</PrimaryButton><OutlineButton href="#about" dark>Explore NAPS</OutlineButton></div>
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-white/15 pt-5">
            {[['08+', 'Years of impact'], ['420+', 'Student members'], ['24', 'Active resources']].map(([value, label]) => <div key={label}><div className="font-display text-2xl font-semibold text-white">{value}</div><div className="mt-1 text-[11px] leading-4 text-slate-400">{label}</div></div>)}
          </div>
        </div>
        <div className="relative hidden min-h-[430px] lg:block">
          <div className="absolute right-0 top-4 w-[290px] rotate-[-7deg] overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
            <img src={ASSETS.lab} alt="Physics students collaborating in a laboratory" className="h-[320px] w-full rounded-xl object-cover opacity-85" />
            <div className="flex items-center justify-between px-3 py-3 text-[10px] text-cyan-100"><span>LAB SESSION / 04</span><span>2026</span></div>
          </div>
          <div className="glass-dark absolute bottom-5 left-0 w-[250px] rounded-2xl p-4 shadow-2xl">
            <div className="mb-6 flex items-center justify-between"><span className="rounded-full bg-cyan-300/15 p-2 text-cyan-300"><Orbit size={18} /></span><span className="text-[10px] font-semibold tracking-[.12em] text-slate-400">NAPS ID / 0248</span></div>
            <div className="flex items-end justify-between"><div><div className="text-[10px] text-slate-400">CURRENT SESSION</div><div className="mt-1 font-display text-xl text-white">2025 / 2026</div></div><QrCode size={35} className="text-cyan-300" /></div>
          </div>
          <div className="absolute left-[44%] top-[37%] flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300 text-[#071b34] shadow-[0_0_35px_rgba(84,216,255,.75)]"><Zap size={21} fill="currentColor" /></div>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center gap-3 px-5 pb-8 text-[11px] text-slate-400 lg:px-8"><span className="h-px w-12 bg-cyan-300" /> Lagos State University of Science and Technology · School of Basic Sciences</div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <div className="section-kicker mb-4">A department with a pulse</div>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-.05em] text-[#0b1f3a] md:text-5xl">Physics is more than<br /><span className="text-[#18a6d9]">an equation.</span></h2>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-slate-600">NAPS LASUSTECH is a student-led community making space for curiosity, collaboration and the confidence to ask better questions.</p>
          <Link href="/portal" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0b1f3a] hover:text-[#18a6d9]">Meet the community <MoveRight size={17} /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#e9f5fa] p-7 sm:col-span-2"><div className="mb-12 flex items-start justify-between"><div className="rounded-xl bg-white p-3 text-[#18a6d9] shadow-sm"><FlaskConical size={21} /></div><span className="section-kicker">01 / Learn</span></div><h3 className="font-display text-2xl font-semibold text-[#0b1f3a]">Make the complex feel possible.</h3><p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">Peer-led tutorials, practical lab sessions and an archive of study materials designed around the way students actually learn.</p></div>
          <div className="rounded-2xl bg-[#0b1f3a] p-7 text-white"><div className="mb-12 flex items-start justify-between"><div className="rounded-xl bg-cyan-300 p-3 text-[#0b1f3a]"><Users size={21} /></div><span className="text-[10px] font-bold tracking-[.16em] text-cyan-200">02 / CONNECT</span></div><h3 className="font-display text-2xl font-semibold">Find your people.</h3><p className="mt-3 text-sm leading-6 text-slate-300">A chapter that makes room for every level, perspective and ambition.</p></div>
          <div className="rounded-2xl bg-[#f5f1e9] p-7"><div className="mb-12 flex items-start justify-between"><div className="rounded-xl bg-white p-3 text-amber-600 shadow-sm"><Sparkles size={21} /></div><span className="section-kicker text-amber-600">03 / GROW</span></div><h3 className="font-display text-2xl font-semibold text-[#0b1f3a]">Take the next step.</h3><p className="mt-3 text-sm leading-6 text-slate-600">Leadership, research exposure and a community that stays with you after graduation.</p></div>
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section id="events" className="bg-[#f5f8fb] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Stay in the loop" title="What’s happening next" copy="From department-wide seminars to the small moments that make a chapter feel like home." action={<Link href="/portal" className="inline-flex items-center gap-2 text-sm font-bold text-[#0b1f3a]">View all events <ArrowUpRight size={16} /></Link>} />
        <div className="grid gap-4 lg:grid-cols-3">
          {events.map((event, index) => <article key={event.title} className={`card-hover rounded-2xl border border-slate-200 bg-white p-5 ${index === 0 ? "lg:col-span-1" : ""}`}><div className="flex items-start justify-between"><div className="flex items-center gap-3"><div className="w-14 rounded-xl bg-[#e9f5fa] py-2 text-center"><div className="font-display text-2xl font-semibold leading-none text-[#0b1f3a]">{event.day}</div><div className="mt-1 text-[9px] font-bold tracking-widest text-[#18a6d9]">{event.month}</div></div><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500">{event.type}</span></div><button className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-[#0b1f3a]" aria-label="More event options"><MoreHorizontal size={18} /></button></div><h3 className="mt-7 font-display text-xl font-semibold leading-snug text-[#0b1f3a]">{event.title}</h3><div className="mt-3 flex items-center gap-2 text-sm text-slate-500"><Clock3 size={15} className="text-[#18a6d9]" />{event.meta}</div><Link href="/portal" className="mt-7 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-[#0b1f3a]">Event details <ChevronRight size={15} /></Link></article>)}
        </div>
      </div>
    </section>
  );
}

function LibrarySection() {
  return (
    <section id="library" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="The study hub" title="Resources that move with you" copy="Find the right past question, study guide or reference note without digging through old group chats." action={<Link href="/materials" className="inline-flex items-center gap-2 text-sm font-bold text-[#0b1f3a]">Open library <ArrowUpRight size={16} /></Link>} />
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-[#0b1f3a] p-7 text-white"><div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-cyan-300/30" /><div className="absolute -right-3 top-12 h-28 w-28 rounded-full border border-cyan-300/20" /><div className="relative"><span className="mb-8 inline-flex rounded-xl bg-cyan-300/15 p-3 text-cyan-300"><BookOpen size={21} /></span><h3 className="font-display text-3xl font-semibold tracking-[-.04em]">Your next breakthrough<br /><span className="text-cyan-300">might be in here.</span></h3><p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">A growing, searchable archive organized by level, course and semester.</p><Link href="/materials" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-sm font-bold text-[#071b34]">Browse materials <ArrowUpRight size={16} /></Link></div></div>
          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white px-5">{materials.map((material) => <div key={material.code} className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f5fa] font-display text-xs font-bold text-[#18a6d9]">{material.code.split(" ")[1]}</div><div><div className="text-[11px] font-bold tracking-[.12em] text-[#18a6d9]">{material.code} · {material.level}</div><h4 className="mt-1 font-display font-semibold text-[#0b1f3a]">{material.title}</h4></div></div><div className="flex items-center justify-between gap-5 sm:justify-end"><span className="text-xs text-slate-500">{material.downloads} downloads</span><Link href="/materials" className="rounded-lg border border-slate-200 p-2.5 text-slate-500 hover:border-[#18a6d9] hover:text-[#18a6d9]" aria-label={`Open ${material.title}`}><Download size={16} /></Link></div></div>)}</div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="bg-[#f5f8fb] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Inside the chapter" title="A little proof of life" copy="Snapshots from the labs, rooms and conversations where our community comes together." action={<Link href="/portal" className="inline-flex items-center gap-2 text-sm font-bold text-[#0b1f3a]">View gallery <ArrowUpRight size={16} /></Link>} />
        <div className="grid gap-4 md:grid-cols-3">{gallery.map((item, index) => <div key={item.title} className={`group relative overflow-hidden rounded-2xl ${index === 1 ? "md:mt-10" : ""}`}><img src={item.src} alt={item.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#071b34]/80 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-5 text-white"><div className="text-[10px] font-bold tracking-[.16em] text-cyan-200">{item.label}</div><div className="mt-1 font-display text-xl font-semibold">{item.title}</div></div></div>)}</div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="bg-[#0b1f3a] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_.85fr] lg:items-center lg:px-8">
        <div><div className="section-kicker mb-5">A note from the chapter</div><blockquote className="font-display text-3xl font-medium leading-tight tracking-[-.04em] md:text-5xl">“The best part of physics is realizing that you do not have to figure it out alone.”</blockquote><div className="mt-8 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 font-display font-bold text-[#0b1f3a]">AO</div><div><div className="text-sm font-bold">Aisha O. Balogun</div><div className="text-xs text-slate-400">President, NAPS LASUSTECH · 2025/26</div></div></div></div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[.14em] text-cyan-200">MEMBERSHIP STATUS</span><CircleCheck className="text-cyan-300" size={19} /></div><div className="mt-12 font-display text-4xl font-semibold">Active</div><div className="mt-2 text-sm text-slate-400">Your community is ready when you are.</div><Link href="/portal" className="mt-8 flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-bold text-[#0b1f3a]">Open student portal <ArrowUpRight size={16} /></Link></div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="bg-[#07172b] py-12 text-slate-400"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between"><div><Brand dark /><p className="mt-5 max-w-xs text-sm leading-6">National Association of Physics Students, LASUSTECH Chapter.</p></div><div className="grid grid-cols-2 gap-x-16 gap-y-8 text-sm sm:grid-cols-3"><div><div className="mb-3 text-xs font-bold tracking-[.14em] text-white">EXPLORE</div><div className="flex flex-col gap-2"><a href="#about" className="hover:text-white">About us</a><a href="#events" className="hover:text-white">Events</a><a href="#gallery" className="hover:text-white">Gallery</a></div></div><div><div className="mb-3 text-xs font-bold tracking-[.14em] text-white">STUDENTS</div><div className="flex flex-col gap-2"><Link href="/portal" className="hover:text-white">Student portal</Link><Link href="/materials" className="hover:text-white">Study hub</Link><Link href="/verify/demo" className="hover:text-white">Verify membership</Link></div></div><div><div className="mb-3 text-xs font-bold tracking-[.14em] text-white">CONTACT</div><div className="flex flex-col gap-2"><span>naps@lasustech.edu.ng</span><span>Ikorodu, Lagos</span><span className="text-cyan-300">@naps_lasustech</span></div></div></div></div><div className="flex flex-col gap-3 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"><span>© 2026 NAPS LASUSTECH. Demo platform.</span><span className="flex items-center gap-2"><ShieldCheck size={14} className="text-cyan-300" /> Built for secure student life.</span></div></div></footer>;
}

export default function Home() {
  return <div className="min-h-screen"><Hero /><AboutSection /><EventsSection /><LibrarySection /><GallerySection /><QuoteSection /><Footer /></div>;
}

function PortalTopbar({ title, subtitle, onMenu }: { title: string; subtitle: string; onMenu: () => void }) {
  return <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 lg:px-8"><div className="flex items-center gap-3"><button onClick={onMenu} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" aria-label="Open navigation"><Menu size={21} /></button><div><h1 className="font-display text-xl font-semibold tracking-[-.03em] text-[#0b1f3a]">{title}</h1><p className="mt-0.5 text-xs text-slate-500">{subtitle}</p></div></div><div className="flex items-center gap-3"><button className="relative rounded-lg p-2.5 text-slate-500 hover:bg-slate-100" aria-label="Notifications"><Bell size={18} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#18a6d9]" /></button><div className="hidden h-8 w-px bg-slate-200 sm:block" /><div className="flex items-center gap-2"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b1f3a] text-xs font-bold text-white">AO</div><div className="hidden sm:block"><div className="text-xs font-bold text-[#0b1f3a]">Aisha O.</div><div className="text-[10px] text-slate-500">200L · Physics</div></div><ChevronDown size={15} className="hidden text-slate-400 sm:block" /></div></div></header>;
}

function PortalSidebar({ active, open, onClose }: { active: string; open: boolean; onClose: () => void }) {
  const nav = [
    ["Dashboard", "/portal", LayoutDashboard], ["My profile", "/portal#profile", UserRound], ["Pay dues", "/pay-dues", CreditCard], ["Payments", "/portal#payments", WalletCards], ["Digital ID", "/portal#id", QrCode], ["Study materials", "/materials", BookOpen], ["Support tickets", "/portal#tickets", Ticket],
  ] as const;
  return <><div className={`fixed inset-0 z-40 bg-[#07172b]/40 transition lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={onClose} /><aside className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-[#0b1f3a] px-5 py-6 text-white transition-transform lg:static lg:z-auto lg:w-[250px] lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}><div className="flex items-center justify-between"><Brand dark /><button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-white/10 lg:hidden" aria-label="Close navigation"><X size={19} /></button></div><div className="mt-12 flex-1"><div className="mb-3 px-3 text-[10px] font-bold tracking-[.18em] text-slate-500">WORKSPACE</div><nav className="space-y-1">{nav.map(([label, href, Icon]) => <Link key={label} href={href} onClick={onClose} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${active === label ? "bg-cyan-300 text-[#071b34] font-bold" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}><Icon size={17} strokeWidth={active === label ? 2.5 : 1.8} />{label}</Link>)}</nav></div><div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="flex items-center gap-2 text-cyan-300"><Headphones size={16} /><span className="text-xs font-bold">Need help?</span></div><p className="mt-2 text-xs leading-5 text-slate-400">Our support desk is here for academic and payment issues.</p><Link href="/portal#tickets" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-white">Open a ticket <ArrowRight size={13} /></Link></div><button className="mt-5 flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white"><LogOut size={17} /> Sign out</button></aside></>;
}

function StatCard({ icon: Icon, label, value, note, tone = "blue" }: { icon: typeof Atom; label: string; value: string; note: string; tone?: "blue" | "green" | "amber" | "navy" }) {
  const colors = { blue: "bg-[#e9f5fa] text-[#18a6d9]", green: "bg-emerald-50 text-emerald-600", amber: "bg-amber-50 text-amber-600", navy: "bg-[#0b1f3a] text-white" };
  return <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-start justify-between"><div className={`rounded-xl p-2.5 ${colors[tone]}`}><Icon size={18} /></div><MoreHorizontal size={17} className="text-slate-300" /></div><div className="mt-6 text-xs font-semibold text-slate-500">{label}</div><div className="mt-1 font-display text-2xl font-semibold text-[#0b1f3a]">{value}</div><div className="mt-1 text-[11px] text-slate-400">{note}</div></div>;
}

function PortalOverview() {
  return <div className="space-y-7"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="section-kicker">Thursday, 11 September 2026</div><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-.05em] text-[#0b1f3a]">Good morning, Aisha.</h2><p className="mt-2 text-sm text-slate-500">Here’s what’s happening in your NAPS space.</p></div><Link href="/pay-dues" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b1f3a] px-4 py-3 text-sm font-bold text-white hover:bg-[#123b63]">Pay dues <ArrowUpRight size={16} /></Link></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard icon={ShieldCheck} label="Membership" value="Active" note="Valid until Aug 2027" tone="green" /><StatCard icon={CircleDollarSign} label="Dues status" value="Paid" note="2025 / 2026 session" tone="blue" /><StatCard icon={QrCode} label="Digital ID" value="Ready" note="Last updated 4 days ago" tone="navy" /><StatCard icon={Ticket} label="Open tickets" value="01" note="Awaiting reply" tone="amber" /></div><div className="grid gap-5 xl:grid-cols-[1.2fr_.8fr]"><div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><div><div className="text-xs font-bold tracking-[.12em] text-[#18a6d9]">UPCOMING FOR YOU</div><h3 className="mt-1 font-display text-xl font-semibold text-[#0b1f3a]">Research Night</h3></div><Link href="/" className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><ArrowUpRight size={18} /></Link></div><div className="mt-6 flex flex-col gap-4 rounded-xl bg-[#f5f8fb] p-4 sm:flex-row sm:items-center"><div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-[#0b1f3a] text-white"><span className="font-display text-xl leading-none">26</span><span className="mt-1 text-[9px] font-bold tracking-widest text-cyan-300">SEP</span></div><div className="flex-1"><div className="font-semibold text-[#0b1f3a]">Beyond the Equation: Research Night</div><div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-500"><span className="flex items-center gap-1"><Clock3 size={13} /> 4:30 PM</span><span className="flex items-center gap-1"><PanelsTopLeft size={13} /> LT 3</span></div></div><button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#0b1f3a]">Add to calendar</button></div><div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-xs text-slate-500">3 registered events this semester</span><Link href="/" className="text-xs font-bold text-[#0b1f3a]">See calendar <ArrowRight size={13} className="ml-1 inline" /></Link></div></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><div><div className="text-xs font-bold tracking-[.12em] text-[#18a6d9]">MEMBERSHIP CARD</div><h3 className="mt-1 font-display text-xl font-semibold text-[#0b1f3a]">NAPS / 0248</h3></div><QrCode className="text-[#18a6d9]" size={26} /></div><div className="mt-6 rounded-xl bg-[#0b1f3a] p-5 text-white"><div className="flex items-start justify-between"><div><div className="text-[10px] text-slate-400">MEMBER</div><div className="mt-1 font-display text-xl font-semibold">Aisha O. Balogun</div></div><Atom className="text-cyan-300" size={24} /></div><div className="mt-12 flex justify-between text-[10px] text-slate-400"><span>200L · PHYSICS</span><span>25/26 SESSION</span></div></div><Link href="/portal#id" className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-xs font-bold text-[#0b1f3a] hover:border-[#18a6d9]">View digital ID <ArrowUpRight size={14} /></Link></div></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="mb-4 flex items-center justify-between"><div><div className="text-xs font-bold tracking-[.12em] text-[#18a6d9]">RECENT ACTIVITY</div><h3 className="mt-1 font-display text-xl font-semibold text-[#0b1f3a]">Your NAPS timeline</h3></div><Link href="/portal#payments" className="text-xs font-bold text-[#0b1f3a]">View payments <ArrowRight size={13} className="ml-1 inline" /></Link></div><div className="overflow-x-auto"><table className="w-full min-w-[590px] text-left text-sm"><thead className="border-b border-slate-100 text-[10px] font-bold tracking-[.12em] text-slate-400"><tr><th className="pb-3">ACTIVITY</th><th className="pb-3">REFERENCE</th><th className="pb-3">DATE</th><th className="pb-3 text-right">STATUS</th></tr></thead><tbody className="divide-y divide-slate-100"><tr><td className="py-4 font-semibold text-[#0b1f3a]">Departmental dues</td><td className="py-4 text-xs text-slate-500">NAPS-DUES-26-00184</td><td className="py-4 text-xs text-slate-500">04 Sep 2026</td><td className="py-4 text-right"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">Successful</span></td></tr><tr><td className="py-4 font-semibold text-[#0b1f3a]">Research Night RSVP</td><td className="py-4 text-xs text-slate-500">EVT-26-0094</td><td className="py-4 text-xs text-slate-500">02 Sep 2026</td><td className="py-4 text-right"><span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600">Confirmed</span></td></tr><tr><td className="py-4 font-semibold text-[#0b1f3a]">Support ticket</td><td className="py-4 text-xs text-slate-500">TKT-0261</td><td className="py-4 text-xs text-slate-500">01 Sep 2026</td><td className="py-4 text-right"><span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-600">In progress</span></td></tr></tbody></table></div></div></div>;
}

function PortalShell({ children, active = "Dashboard", title = "Student portal", subtitle = "Your NAPS LASUSTECH workspace" }: { children: ReactNode; active?: string; title?: string; subtitle?: string }) {
  const [menu, setMenu] = useState(false);
  return <div className="dashboard-bg min-h-screen"><div className="flex min-h-screen"><PortalSidebar active={active} open={menu} onClose={() => setMenu(false)} /><div className="min-w-0 flex-1"><PortalTopbar title={title} subtitle={subtitle} onMenu={() => setMenu(true)} /><main className="mx-auto max-w-[1440px] p-5 lg:p-8">{children}</main></div></div></div>;
}

export function PortalView() {
  const { isAuthenticated, loading } = useAuth({ redirectOnUnauthenticated: true, redirectPath: "/login" });
  if (loading || !isAuthenticated) return null;
  return <PortalShell><PortalOverview /></PortalShell>;
}

export function MaterialsView() {
  const { isAuthenticated, loading } = useAuth({ redirectOnUnauthenticated: true, redirectPath: "/login" });
  if (loading || !isAuthenticated) return null;
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All levels");
  const filtered = useMemo(() => filterStudyMaterials(query, level), [query, level]);
  return <PortalShell active="Study materials" title="Study materials" subtitle="Past questions, guides and references"><div className="space-y-7"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="section-kicker">The NAPS study hub</div><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-.05em] text-[#0b1f3a]">Find your next breakthrough.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">Search the shared archive by course, level or material type.</p></div><div className="rounded-lg bg-[#e9f5fa] px-3 py-2 text-xs font-bold text-[#18a6d9]">24 resources available</div></div><div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:flex-row"><label className="relative flex-1"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search course code or title" className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm outline-none focus:border-[#18a6d9]" /></label><select value={level} onChange={(e) => setLevel(e.target.value)} className="h-11 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-600 outline-none focus:border-[#18a6d9]"><option>All levels</option><option>100L</option><option>200L</option><option>300L</option></select><button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#0b1f3a] px-4 text-sm font-bold text-white"><SlidersHorizontal size={16} /> Filters</button></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((item) => <article key={item.code} className="card-hover rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-start justify-between"><span className="rounded-lg bg-[#e9f5fa] px-2.5 py-1 text-[10px] font-bold tracking-[.12em] text-[#18a6d9]">{item.code}</span><button className="text-slate-400 hover:text-[#0b1f3a]" aria-label="More options"><MoreHorizontal size={18} /></button></div><h3 className="mt-7 font-display text-xl font-semibold leading-snug text-[#0b1f3a]">{item.title}</h3><div className="mt-4 flex items-center gap-2 text-xs text-slate-500"><span>{item.level}</span><span className="h-1 w-1 rounded-full bg-slate-300" /><span>{item.type}</span></div><div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-xs text-slate-400">{item.downloads} downloads</span><button onClick={() => window.alert(`Demo download started for ${item.code}`)} className="inline-flex items-center gap-2 rounded-lg bg-[#0b1f3a] px-3 py-2 text-xs font-bold text-white"><Download size={14} /> Download</button></div></article>)}{filtered.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500 md:col-span-2 xl:col-span-3">No materials match that search yet.</div>}</div></div></PortalShell>;
}

export function VerifyView() {
  return <div className="min-h-screen bg-[#081b33] px-5 py-10 text-white"><div className="mx-auto max-w-2xl"><Brand dark /><div className="mt-16 rounded-3xl bg-white p-6 text-[#0b1f3a] shadow-2xl sm:p-10"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"><ShieldCheck size={25} /></div><div><div className="text-xs font-bold tracking-[.15em] text-emerald-600">VERIFICATION RESULT</div><h1 className="mt-1 font-display text-2xl font-semibold">Valid membership</h1></div></div><QrCode className="text-[#18a6d9]" size={35} /></div><div className="mt-10 grid gap-x-8 gap-y-6 border-y border-slate-100 py-7 sm:grid-cols-2">{[["Full name", "Aisha O. Balogun"], ["Matric number", "NAPS/24/001"], ["Level", "200L"], ["Academic session", "2025 / 2026"], ["Dues status", "PAID"], ["Membership status", "ACTIVE"]].map(([label, value]) => <div key={label}><div className="text-[10px] font-bold tracking-[.13em] text-slate-400">{label}</div><div className={`mt-1 text-sm font-semibold ${value === "PAID" || value === "ACTIVE" ? "text-emerald-600" : "text-[#0b1f3a]"}`}>{value}</div></div>)}</div><div className="mt-7 flex items-start gap-3 rounded-xl bg-[#f5f8fb] p-4 text-xs leading-5 text-slate-500"><LockKeyhole size={16} className="mt-0.5 shrink-0 text-[#18a6d9]" /> This result is secured by a private verification token. Sensitive student information is not stored in the QR code.</div><Link href="/" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0b1f3a]">Back to NAPS LASUSTECH <ArrowRight size={16} /></Link></div><p className="mt-6 text-center text-xs text-slate-500">NAPS LASUSTECH · Membership verification service</p></div></div>;
}

function AdminSidebar({ active, open, onClose }: { active: string; open: boolean; onClose: () => void }) {
  const items = [["Overview", "/admin", LayoutDashboard], ["Students", "/admin#students", Users], ["Payments", "/admin#payments", CircleDollarSign], ["Materials", "/admin#materials", BookOpen], ["Events & news", "/admin#events", CalendarDays], ["Content", "/admin/content", FileText], ["Tickets", "/admin#tickets", Ticket]] as const;
  return <><div className={`fixed inset-0 z-40 bg-[#07172b]/40 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={onClose} /><aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0b1f3a] px-5 py-6 text-white transition-transform lg:static lg:z-auto lg:w-[250px] lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}><div className="flex items-center justify-between"><Brand dark /><button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-white/10 lg:hidden"><X size={19} /></button></div><div className="mt-12"><div className="mb-3 px-3 text-[10px] font-bold tracking-[.18em] text-slate-500">ADMIN CONSOLE</div><nav className="space-y-1">{items.map(([label, href, Icon]) => <Link key={label} href={href} onClick={onClose} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm ${active === label ? "bg-cyan-300 font-bold text-[#071b34]" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}><Icon size={17} />{label}</Link>)}</nav></div><div className="mt-12 rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-4"><div className="flex items-center gap-2 text-cyan-300"><Database size={16} /><span className="text-xs font-bold">System status</span></div><div className="mt-3 flex items-center gap-2 text-xs text-slate-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> All services operational</div></div><button className="mt-5 flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white"><LogOut size={17} /> Sign out</button></aside></>;
}

function AdminMetric({ label, value, change, icon: Icon }: { label: string; value: string; change: string; icon: typeof Atom }) { return <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-start justify-between"><div className="rounded-xl bg-[#e9f5fa] p-2.5 text-[#18a6d9]"><Icon size={18} /></div><span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600"><TrendingUp size={12} />{change}</span></div><div className="mt-7 text-xs font-semibold text-slate-500">{label}</div><div className="mt-1 font-display text-3xl font-semibold tracking-[-.05em] text-[#0b1f3a]">{value}</div></div>; }

export function AdminView() {
  const [menu, setMenu] = useState(false);
  return <div className="dashboard-bg min-h-screen"><div className="flex min-h-screen"><AdminSidebar active="Overview" open={menu} onClose={() => setMenu(false)} /><div className="min-w-0 flex-1"><header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 lg:px-8"><div className="flex items-center gap-3"><button onClick={() => setMenu(true)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"><Menu size={21} /></button><div><h1 className="font-display text-xl font-semibold tracking-[-.03em] text-[#0b1f3a]">Admin overview</h1><p className="mt-0.5 text-xs text-slate-500">NAPS LASUSTECH · 2025 / 2026 session</p></div></div><div className="flex items-center gap-3"><button className="relative rounded-lg p-2.5 text-slate-500 hover:bg-slate-100"><Bell size={18} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#18a6d9]" /></button><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b1f3a] text-xs font-bold text-white">SA</div></div></header><main className="mx-auto max-w-[1440px] space-y-7 p-5 lg:p-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="section-kicker">Command centre</div><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-.05em] text-[#0b1f3a]">Good morning, Samuel.</h2><p className="mt-2 text-sm text-slate-500">Here’s the pulse of your chapter this week.</p></div><button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b1f3a] px-4 py-3 text-sm font-bold text-white hover:bg-[#123b63]"><UploadCloud size={16} /> Export report</button></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><AdminMetric icon={Users} label="Total students" value="428" change="+12.4%" /><AdminMetric icon={ShieldCheck} label="Active members" value="312" change="+8.2%" /><AdminMetric icon={CircleDollarSign} label="Session revenue" value="₦1.84m" change="+18.6%" /><AdminMetric icon={Ticket} label="Open tickets" value="18" change="-4.5%" /></div><div className="grid gap-5 xl:grid-cols-[1.35fr_.65fr]"><div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><div><div className="text-xs font-bold tracking-[.12em] text-[#18a6d9]">PAYMENT ANALYTICS</div><h3 className="mt-1 font-display text-xl font-semibold text-[#0b1f3a]">Revenue overview</h3></div><button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600">This year <ChevronDown size={14} /></button></div><div className="mt-8 flex h-56 items-end gap-2 border-b border-l border-slate-100 px-3 pb-0 pt-5 sm:gap-4">{[38,48,42,61,54,72,66,80,72,91,84,100].map((height, i) => <div key={i} className="group flex flex-1 flex-col items-center justify-end gap-2"><div className={`w-full max-w-9 rounded-t-md transition ${i === 11 ? "bg-[#18a6d9]" : "bg-[#d5edf5] group-hover:bg-[#89d6e9]"}`} style={{ height: `${Math.round(height * 1.35)}px` }} /><span className="text-[9px] text-slate-400">{["O", "N", "D", "J", "F", "M", "A", "M", "J", "J", "A", "S"][i]}</span></div>)}</div><div className="mt-5 flex items-center gap-5 text-xs text-slate-500"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#18a6d9]" /> Current month</span><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#d5edf5]" /> Previous months</span><span className="ml-auto font-bold text-[#0b1f3a]">₦1,842,000 total</span></div></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-xs font-bold tracking-[.12em] text-[#18a6d9]">MEMBERSHIP MIX</div><h3 className="mt-1 font-display text-xl font-semibold text-[#0b1f3a]">Students by level</h3><div className="mt-7 flex items-center gap-5"><div className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full" style={{ background: "conic-gradient(#18a6d9 0 29%, #0b1f3a 29% 54%, #69c9dd 54% 76%, #d9eef4 76% 100%)" }}><div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white"><span className="font-display text-2xl font-semibold text-[#0b1f3a]">312</span><span className="text-[9px] font-bold tracking-wider text-slate-400">PAID</span></div></div><div className="space-y-3 text-xs">{[["100L", "29%", "#18a6d9"], ["200L", "25%", "#0b1f3a"], ["300L", "22%", "#69c9dd"], ["400L+", "24%", "#d9eef4"]].map(([level, percent, color]) => <div key={level} className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} /><span className="w-12 text-slate-500">{level}</span><span className="font-bold text-[#0b1f3a]">{percent}</span></div>)}</div></div><div className="mt-7 border-t border-slate-100 pt-4 text-xs text-slate-500">Unpaid students <span className="float-right font-bold text-amber-600">116</span></div></div></div><div className="grid gap-5 xl:grid-cols-[.9fr_1.1fr]"><div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><div><div className="text-xs font-bold tracking-[.12em] text-[#18a6d9]">ATTENTION NEEDED</div><h3 className="mt-1 font-display text-xl font-semibold text-[#0b1f3a]">Support queue</h3></div><Link href="/admin#tickets" className="text-xs font-bold text-[#0b1f3a]">View queue <ArrowRight size={13} className="ml-1 inline" /></Link></div><div className="mt-5 space-y-3">{[["Payment issue", "NAPS/24/027", "12 min ago", "amber"], ["Registration", "NAPS/25/104", "1 hr ago", "blue"], ["Academic issue", "NAPS/24/019", "3 hrs ago", "green"]].map(([title, id, time, tone]) => <div key={id} className="flex items-center gap-3 rounded-xl bg-[#f5f8fb] p-3"><div className={`flex h-9 w-9 items-center justify-center rounded-lg ${tone === "amber" ? "bg-amber-100 text-amber-600" : tone === "blue" ? "bg-blue-100 text-blue-600" : "bg-emerald-100 text-emerald-600"}`}><MessageSquareText size={16} /></div><div className="min-w-0 flex-1"><div className="truncate text-sm font-semibold text-[#0b1f3a]">{title}</div><div className="mt-0.5 text-[10px] text-slate-500">{id} · {time}</div></div><ChevronRight size={15} className="text-slate-400" /></div>)}</div></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><div><div className="text-xs font-bold tracking-[.12em] text-[#18a6d9]">RECENT PAYMENTS</div><h3 className="mt-1 font-display text-xl font-semibold text-[#0b1f3a]">Latest activity</h3></div><button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><MoreHorizontal size={18} /></button></div><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[450px] text-left text-xs"><thead className="border-b border-slate-100 text-[10px] font-bold tracking-[.12em] text-slate-400"><tr><th className="pb-3">STUDENT</th><th className="pb-3">REFERENCE</th><th className="pb-3">AMOUNT</th><th className="pb-3 text-right">STATUS</th></tr></thead><tbody className="divide-y divide-slate-100">{[["Aisha O. Balogun", "NAPS-DUES-26-00184", "₦5,000"], ["David E. Okoro", "NAPS-DUES-26-00183", "₦5,000"], ["Mariam S. Yusuf", "NAPS-DUES-26-00182", "₦5,000"]].map(([name, ref, amount]) => <tr key={ref}><td className="py-4 font-semibold text-[#0b1f3a]">{name}</td><td className="py-4 text-slate-500">{ref}</td><td className="py-4 font-semibold text-[#0b1f3a]">{amount}</td><td className="py-4 text-right"><span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">Verified</span></td></tr>)}</tbody></table></div></div></div></main></div></div></div>;
}
