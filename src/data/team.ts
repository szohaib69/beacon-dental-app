/**
 * Team profiles for Ilkley Dental Care.
 * First names are those mentioned in the practice's public Google reviews.
 * Surnames, GDC numbers, qualifications and biographies are placeholders and
 * must be confirmed by the practice before launch.
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
    slug: "phil",
    name: "Phil",
    credential: "Dentist (GDC no. to confirm)",
    role: "Dentist",
    specialty: "General & Restorative Dentistry",
    initials: "P",
    bio: "Phil is mentioned by name in the practice's Google reviews for the quality of his work. Biography to be supplied by the practice.",
    longBio: [
      "Placeholder biography: the practice can supply a short introduction covering Phil's background, training and approach to patient care.",
      "Placeholder paragraph: clinical interests, continuing professional development and the treatments he most enjoys providing.",
    ],
    education: ["[Qualification to confirm]"],
    memberships: ["[Registration and memberships to confirm]"],
    focus: ["Check-ups and examinations", "Crowns and bridges", "Restorative treatment"],
  },
  {
    slug: "owen",
    name: "Owen",
    credential: "Dentist (GDC no. to confirm)",
    role: "Dentist",
    specialty: "General & Emergency Dentistry",
    initials: "O",
    bio: "Owen is described in recent reviews as professional and reassuring with emergency patients. Biography to be supplied by the practice.",
    longBio: [
      "Placeholder biography: background, training and approach to urgent and general dental care.",
      "Placeholder paragraph: clinical interests and how he supports anxious patients.",
    ],
    education: ["[Qualification to confirm]"],
    memberships: ["[Registration and memberships to confirm]"],
    focus: ["Emergency appointments", "Routine examinations", "Anxiety-aware care"],
  },
  {
    slug: "shruti",
    name: "Shruti",
    credential: "Dental Hygienist (GDC no. to confirm)",
    role: "Dental Hygienist",
    specialty: "Hygiene & Gum Health",
    initials: "S",
    bio: "Shruti is praised in reviews for putting nervous patients at ease and explaining every step. Biography to be supplied by the practice.",
    longBio: [
      "Placeholder biography: hygiene experience, training and approach to comfortable appointments.",
      "Placeholder paragraph: gum health, home-care coaching and prevention.",
    ],
    education: ["[Qualification to confirm]"],
    memberships: ["[Registration and memberships to confirm]"],
    focus: ["Gentle hygiene visits", "Gum health", "Home-care advice"],
  },
  {
    slug: "jodie",
    name: "Jodie",
    credential: "Patient Care Manager",
    role: "Patient Care Manager",
    specialty: "Patient Care & Reception",
    initials: "J",
    bio: "Jodie looks after patient care at the practice and responds to patient feedback. Biography to be supplied by the practice.",
    longBio: [
      "Placeholder biography: how Jodie supports patients from first enquiry through to treatment planning.",
    ],
    education: ["[Qualification to confirm]"],
    memberships: [],
    focus: ["New patient enquiries", "Appointments", "Treatment coordination"],
  },
];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);
