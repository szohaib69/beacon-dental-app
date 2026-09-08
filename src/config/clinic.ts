/**
 * ---------------------------------------------------------------------------
 * CLINIC CONFIGURATION — single source of truth
 * ---------------------------------------------------------------------------
 * Practice details for Ilkley Dental Care, taken from the practice's public
 * Google Business listing. Anything marked placeholder still needs to be
 * confirmed by the practice before launch.
 * ---------------------------------------------------------------------------
 */

export const clinic = {
  name: "Ilkley Dental Care",
  shortName: "Ilkley Dental",
  tagline: "Modern Dentistry. Personal Care.",
  /** Set to false once every placeholder item has been confirmed by the practice. */
  isDemoContent: true,

  contact: {
    phoneDisplay: "01943 608750",
    phoneHref: "tel:+441943608750",
    emergencyPhoneDisplay: "01943 608750",
    emergencyPhoneHref: "tel:+441943608750",
    email: "info@ilkleydentalcare.co.uk",
    emailHref: "mailto:info@ilkleydentalcare.co.uk",
    billingEmail: "info@ilkleydentalcare.co.uk",
    website: "https://ilkleydentalcare.co.uk",
  },

  address: {
    line1: "39 Leeds Road",
    line2: "Ilkley, West Yorkshire LS29 8DP",
    city: "Ilkley",
    state: "West Yorkshire",
    zip: "LS29 8DP",
    country: "United Kingdom",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ilkley+Dental+Care%2C+39+Leeds+Rd%2C+Ilkley+LS29+8DP",
    mapEmbedNote: "Map shows the practice at 39 Leeds Road, Ilkley LS29 8DP.",
    parking: "Placeholder: please confirm parking arrangements near 39 Leeds Road with the practice.",
    directions:
      "The practice is on Leeds Road, a short walk from Ilkley town centre and Ilkley railway station.",
  },

  /** Placeholder opening hours — confirm the full weekly schedule with the practice. */
  hours: [
    { day: "Monday", time: "8:30 AM – 5:30 PM" },
    { day: "Tuesday", time: "8:30 AM – 5:30 PM" },
    { day: "Wednesday", time: "8:30 AM – 5:30 PM" },
    { day: "Thursday", time: "8:30 AM – 5:30 PM" },
    { day: "Friday", time: "8:30 AM – 5:30 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],

  /** Replace with the practice's real online booking link when one is available. */
  bookingUrl: "/book-appointment",

  social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" as const },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" as const },
  ],

  /** Google rating and review count from the practice's public listing. */
  stats: [
    { value: "5.0", label: "Google Rating" },
    { value: "435", label: "Google Reviews" },
    { value: "Same-Day", label: "Emergency Appointments" },
    { value: "All Ages", label: "Family Dentistry" },
  ],

  trustPoints: [
    "Rated 5.0 on Google",
    "New Patients Welcome",
    "Emergency Appointments Available",
    "Friendly, Anxiety-Aware Care",
  ],
} as const;

export const disclaimers = {
  demo:
    "Some details on this page are placeholders for layout purposes and should be confirmed by the practice before launch.",
  results:
    "Individual results may vary. Treatment outcomes depend on each patient's specific condition and treatment plan.",
  testimonials:
    "Review extracts are taken from the practice's public Google reviews and shown for illustration. Confirm before publishing.",
  insurance:
    "Payment plan and dental plan availability varies. Please contact the practice to confirm what applies to your treatment.",
  emergency:
    "If you have difficulty breathing, uncontrolled bleeding, a serious facial injury or any life-threatening symptoms, call 999 or go to your nearest A&E. For urgent out-of-hours dental advice, call NHS 111.",
  medicalInfo:
    "Please do not send detailed medical or personal health information through this form. It is not a secure channel. Call the practice to discuss health details.",
  notAdvice:
    "This website is for general information only and is not a substitute for professional dental diagnosis, advice or treatment.",
};

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Team", to: "/team" },
  { label: "Patient Resources", to: "/patient-resources" },
  { label: "Fees & Payment", to: "/insurance" },
  { label: "Contact", to: "/contact" },
] as const;
