/**
 * ---------------------------------------------------------------------------
 * CLINIC CONFIGURATION — single source of truth
 * ---------------------------------------------------------------------------
 * Every value below is DEMO / PLACEHOLDER content. Replace it with the real
 * practice details before launch. Nothing here is a verified claim.
 * ---------------------------------------------------------------------------
 */

export const clinic = {
  name: "Northline Dental Studio",
  shortName: "Northline Dental",
  tagline: "Modern Dentistry. Personal Care.",
  /** Set to false once all placeholder content has been replaced. */
  isDemoContent: true,

  contact: {
    phoneDisplay: "(555) 012-3456",
    phoneHref: "tel:+15550123456",
    emergencyPhoneDisplay: "(555) 012-3456",
    emergencyPhoneHref: "tel:+15550123456",
    email: "hello@example-dental.com",
    emailHref: "mailto:hello@example-dental.com",
    billingEmail: "billing@example-dental.com",
  },

  address: {
    line1: "1234 Placeholder Avenue, Suite 200",
    line2: "[CITY], [STATE] [ZIP]",
    city: "[CITY]",
    state: "[STATE]",
    zip: "[ZIP]",
    directionsUrl: "https://maps.google.com/?q=dentist+near+me",
    mapEmbedNote: "Google Maps embed placeholder — connect the practice's real listing.",
    parking: "Free on-site parking with accessible spaces directly by the main entrance.",
    directions: "Placeholder directions: two blocks from the [CITY] transit center, on the north side of Placeholder Avenue.",
  },

  hours: [
    { day: "Monday", time: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
    { day: "Thursday", time: "8:00 AM – 5:00 PM" },
    { day: "Friday", time: "8:00 AM – 2:00 PM" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],

  /** Replace with a real online scheduling URL when a booking system is connected. */
  bookingUrl: "/book-appointment",

  social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" as const },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" as const },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" as const },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  ],

  /** Demo figures for layout purposes only — not verified statistics. */
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "5,000+", label: "Smiles Served" },
    { value: "4.9/5", label: "Patient Rating" },
    { value: "6 Days", label: "Convenient Scheduling" },
  ],

  trustPoints: [
    "Accepting New Patients",
    "Most Insurance Plans Accepted",
    "Same-Week Appointments Available",
    "Modern, Comfortable Care",
  ],
} as const;

export const disclaimers = {
  demo:
    "Demo content: the details on this page are placeholders for layout purposes and should be replaced with the practice's verified information.",
  results:
    "Individual results may vary. Treatment outcomes depend on each patient's specific condition and treatment plan.",
  testimonials:
    "Demo testimonials shown for layout purposes. Replace with real, permissioned patient feedback before publishing.",
  insurance:
    "Insurance participation varies. Please contact the office to confirm whether your specific plan is accepted before your visit.",
  emergency:
    "If you are experiencing difficulty breathing, uncontrolled bleeding, a serious facial injury, or any life-threatening symptoms, call 911 or go to the nearest emergency room immediately.",
  medicalInfo:
    "Please do not send detailed medical or personal health information through this form. It is not a secure channel. Call the office to discuss health details.",
  notAdvice:
    "This website is for general information only and is not a substitute for professional dental diagnosis, advice, or treatment.",
};

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Team", to: "/team" },
  { label: "Patient Resources", to: "/patient-resources" },
  { label: "Insurance & Financing", to: "/insurance" },
  { label: "Contact", to: "/contact" },
] as const;
