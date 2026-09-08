import {
  Activity,
  AlignCenter,
  Anchor,
  Award,
  Baby,
  CalendarClock,
  ClipboardList,
  Cpu,
  HeartHandshake,
  HeartPulse,
  ReceiptText,
  Scissors,
  Shield,
  ShieldCheck,
  Siren,
  Sparkles,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  activity: Activity,
  "align-center": AlignCenter,
  anchor: Anchor,
  award: Award,
  baby: Baby,
  "calendar-clock": CalendarClock,
  "clipboard-list": ClipboardList,
  cpu: Cpu,
  "heart-handshake": HeartHandshake,
  "heart-pulse": HeartPulse,
  "receipt-text": ReceiptText,
  scissors: Scissors,
  shield: Shield,
  "shield-check": ShieldCheck,
  siren: Siren,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  users: Users,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Stethoscope;
  return <Icon className={className} aria-hidden="true" />;
}
