/**
 * DEMO team data. These are placeholder people, not real dentists.
 * Replace names, credentials, education and memberships with verified details.
 */
export type Doctor = {
  slug: string;
  name: string;
  credential: string;
  role: string;
  specialty: string;
  bio: string;
  longBio: string[];
  education: string[];
  memberships: string[];
  focus: string[];
  initials: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-placeholder-one",
    name: "Dr. [First Last]",
    credential: "DDS",
    role: "Practice Owner",
    specialty: "General & Restorative Dentistry",
    initials: "PD",
    bio: "Placeholder biography for the practice owner. Replace with a short introduction covering their approach to patient care and years in practice.",
    longBio: [
      "Placeholder biography paragraph one. Describe the dentist's background, why they chose dentistry, and how they approach patient care.",
      "Placeholder biography paragraph two. Mention clinical interests, continuing education focus and the kinds of cases they most enjoy.",
      "Placeholder biography paragraph three. Add a personal note — family, community involvement or hobbies — to make the profile feel human.",
    ],
    education: ["[University Name] — Doctor of Dental Surgery (placeholder)", "[University Name] — B.S. Biology (placeholder)"],
    memberships: ["[Professional association placeholder]", "[State dental association placeholder]"],
    focus: ["Comprehensive exams", "Crowns and bridges", "Implant restorations"],
  },
  {
    slug: "dr-placeholder-two",
    name: "Dr. [First Last]",
    credential: "DMD",
    role: "Associate Dentist",
    specialty: "Cosmetic & Family Dentistry",
    initials: "AD",
    bio: "Placeholder biography for an associate dentist focused on cosmetic and family care. Replace with verified information.",
    longBio: [
      "Placeholder biography paragraph one for the associate dentist.",
      "Placeholder biography paragraph two describing their cosmetic training and philosophy on conservative treatment.",
      "Placeholder biography paragraph three with personal background.",
    ],
    education: ["[University Name] — Doctor of Dental Medicine (placeholder)", "[University Name] — B.A. Chemistry (placeholder)"],
    memberships: ["[Professional association placeholder]"],
    focus: ["Veneers and bonding", "Whitening", "Preventive care"],
  },
  {
    slug: "dr-placeholder-three",
    name: "Dr. [First Last]",
    credential: "DDS",
    role: "Associate Dentist",
    specialty: "Pediatric & Preventive Dentistry",
    initials: "PP",
    bio: "Placeholder biography for a dentist who enjoys treating children and building early preventive habits.",
    longBio: [
      "Placeholder biography paragraph one about working with young patients.",
      "Placeholder biography paragraph two about preventive philosophy and parent communication.",
      "Placeholder biography paragraph three with personal background.",
    ],
    education: ["[University Name] — Doctor of Dental Surgery (placeholder)"],
    memberships: ["[Professional association placeholder]"],
    focus: ["Children's exams", "Sealants", "Anxiety-aware care"],
  },
  {
    slug: "team-lead-placeholder",
    name: "[First Last]",
    credential: "RDH",
    role: "Lead Dental Hygienist",
    specialty: "Hygiene & Periodontal Maintenance",
    initials: "LH",
    bio: "Placeholder biography for the lead hygienist. Replace with real credentials and experience.",
    longBio: [
      "Placeholder biography paragraph one about hygiene care and patient comfort.",
      "Placeholder biography paragraph two about periodontal maintenance and home-care coaching.",
    ],
    education: ["[College Name] — Dental Hygiene (placeholder)"],
    memberships: ["[Professional association placeholder]"],
    focus: ["Gentle cleanings", "Gum health", "Home-care coaching"],
  },
];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);
