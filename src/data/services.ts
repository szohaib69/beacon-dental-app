export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  intro: string;
  bullets: string[];
  highlights: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    icon: "stethoscope",
    short:
      "Routine exams, cleanings and preventive care that keep small issues from becoming big ones.",
    intro:
      "General dentistry is the foundation of a healthy smile. Regular exams and professional cleanings let our team catch early decay, gum inflammation and wear before they turn into costly treatment.",
    bullets: ["Comprehensive exams", "Professional cleanings", "Preventive care", "Digital X-rays"],
    highlights: [
      {
        title: "Thorough, unhurried exams",
        body: "We review your teeth, gums, bite and soft tissues, then explain exactly what we see using intraoral photos.",
      },
      {
        title: "Gentle hygiene visits",
        body: "Our hygienists tailor each cleaning to your comfort level and gum health, not a stopwatch.",
      },
      {
        title: "Low-radiation digital imaging",
        body: "Digital X-rays produce clear diagnostic images with a fraction of the exposure of traditional film.",
      },
    ],
    faq: [
      {
        q: "How often should I come in for a cleaning?",
        a: "Most patients do well with a cleaning and exam every six months. If you have gum disease or a higher risk of decay, we may recommend a shorter interval.",
      },
      {
        q: "What if it has been years since my last visit?",
        a: "You are welcome here. We start with a gentle, judgment-free exam and build a plan you feel comfortable with, at a pace that works for you.",
      },
    ],
    featured: true,
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: "sparkles",
    short: "Whitening, veneers and bonding designed to look natural — never obvious.",
    intro:
      "Cosmetic dentistry should look like you, at your best. We plan every smile around your facial proportions, tooth shape and the result you actually want.",
    bullets: ["Professional teeth whitening", "Porcelain veneers", "Smile makeovers", "Cosmetic bonding"],
    highlights: [
      {
        title: "Digital smile planning",
        body: "See a preview of proposed changes before any treatment begins, so there are no surprises.",
      },
      {
        title: "Conservative options first",
        body: "Whenever possible we recommend the least invasive route — whitening or bonding before porcelain.",
      },
      {
        title: "Shade matching that holds up",
        body: "Materials are selected and layered so restorations blend with your natural enamel in daylight, not just under office lights.",
      },
    ],
    faq: [
      {
        q: "How long does professional whitening take?",
        a: "In-office whitening is typically completed in a single visit of about 60 to 90 minutes. Take-home tray systems usually run one to two weeks of short daily wear.",
      },
      {
        q: "Will veneers look fake?",
        a: "Not when they are planned well. We design shape, texture and translucency around your own features so the result reads as a healthy natural smile.",
      },
    ],
    featured: true,
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    icon: "shield",
    short: "Crowns, bridges, fillings and dentures that rebuild strength and function.",
    intro:
      "When a tooth is damaged, the goal is to restore full function while preserving as much healthy structure as possible.",
    bullets: ["Dental crowns", "Bridges", "Tooth-colored fillings", "Full and partial dentures"],
    highlights: [
      { title: "Tooth-colored materials", body: "Composite and ceramic restorations that blend in rather than stand out." },
      { title: "Precise fit", body: "Digital impressions replace messy trays and improve the accuracy of the final restoration." },
      { title: "Bite-first planning", body: "We evaluate how your teeth meet so new restorations last instead of chipping." },
    ],
    faq: [
      {
        q: "How long does a crown last?",
        a: "With good home care and regular checkups, crowns commonly last many years. Longevity depends on your bite, hygiene and habits such as grinding.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    icon: "anchor",
    short: "A stable, long-term way to replace one tooth or rebuild an entire arch.",
    intro:
      "Dental implants replace the root of a missing tooth with a titanium post that supports a natural-looking crown, bridge or denture.",
    bullets: ["Single tooth implants", "Implant-supported bridges", "Implant-retained dentures", "Full-mouth restoration"],
    highlights: [
      { title: "3D-guided planning", body: "Cone-beam imaging helps us plan implant position around bone volume and nerves." },
      { title: "Preserves jaw bone", body: "Implants stimulate the bone the way a natural root does, helping limit the bone loss that follows extraction." },
      { title: "Care for anxious patients", body: "We walk through every step in advance and discuss comfort options before treatment day." },
    ],
    faq: [
      {
        q: "Are dental implants painful?",
        a: "Implant placement is performed with local anesthesia and most patients report less discomfort than expected — often comparable to an extraction. Soreness for a few days is typical and usually managed with over-the-counter medication.",
      },
      {
        q: "How long does the process take?",
        a: "Timelines vary. Healing between placement and the final restoration commonly takes several months, and your dentist will map out your specific schedule at the consultation.",
      },
    ],
    featured: true,
  },
  {
    slug: "emergency-dentistry",
    title: "Emergency Dentistry",
    icon: "siren",
    short: "Same-day care for toothaches, broken teeth and dental trauma.",
    intro:
      "Dental emergencies do not wait for a convenient time. Call the office as early in the day as possible and we will do our best to see you the same day.",
    bullets: ["Severe toothaches", "Broken or cracked teeth", "Dental trauma", "Same-day emergency care"],
    highlights: [
      { title: "Pain relief first", body: "We stabilize the problem and get you comfortable, then plan definitive treatment." },
      { title: "Straight answers on cost", body: "You receive an estimate before emergency treatment starts whenever it is possible to provide one." },
      { title: "Guidance over the phone", body: "Our team can advise on first steps — such as saving a knocked-out tooth — while you are on the way." },
    ],
    faq: [
      {
        q: "What counts as a dental emergency?",
        a: "Severe or worsening pain, facial swelling, a knocked-out or fractured tooth, uncontrolled bleeding, or a lost filling or crown causing pain all warrant a prompt call.",
      },
    ],
    featured: true,
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    icon: "baby",
    short: "Calm, encouraging visits that help children build lifelong dental habits.",
    intro:
      "Children do best when a dental visit feels familiar and unhurried. We explain each step in kid-friendly language and let them set the pace.",
    bullets: ["Children's exams", "Preventive care", "Dental sealants", "Child-friendly visits"],
    highlights: [
      { title: "Tell-show-do approach", body: "Every instrument is introduced before it is used, which removes most of the fear." },
      { title: "Sealants and fluoride", body: "Simple preventive steps that meaningfully reduce cavity risk in growing molars." },
      { title: "Parents welcome", body: "You are invited to stay in the room for your child's appointment." },
    ],
    faq: [
      {
        q: "When should my child first see a dentist?",
        a: "Common guidance from pediatric dental organizations is a first visit by the first birthday or within six months of the first tooth appearing.",
      },
    ],
    featured: true,
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    icon: "align-center",
    short: "Braces, clear aligners and retainers for straighter teeth and a healthier bite.",
    intro:
      "Straightening teeth is about more than appearance — a balanced bite is easier to clean and puts less strain on your teeth and jaw joints.",
    bullets: ["Traditional braces", "Clear aligners", "Retainers", "Bite evaluation"],
    highlights: [
      { title: "Options for adults and teens", body: "Discreet aligner treatment is available for patients who would rather not wear brackets." },
      { title: "Digital progress tracking", body: "Scans let you see how your teeth are moving through treatment." },
      { title: "Retention planning", body: "Every case ends with a clear plan to hold your result long term." },
    ],
    faq: [
      {
        q: "How long does treatment take?",
        a: "It depends on the complexity of the case. Minor alignment can take a few months while comprehensive treatment often runs a year or more.",
      },
    ],
  },
  {
    slug: "periodontal-care",
    title: "Periodontal Care",
    icon: "heart-pulse",
    short: "Treatment and long-term maintenance for gum disease.",
    intro:
      "Healthy gums are the foundation of every restoration. Bleeding, tenderness or recession are early signals worth acting on quickly.",
    bullets: ["Gum disease treatment", "Scaling and root planing", "Periodontal maintenance", "Gum health monitoring"],
    highlights: [
      { title: "Measured, documented care", body: "Pocket depths are charted at each visit so you can see progress objectively." },
      { title: "Deep cleaning with comfort in mind", body: "Local anesthetic keeps scaling and root planing comfortable." },
      { title: "Home-care coaching", body: "Practical technique guidance that fits your routine, not an ideal one." },
    ],
    faq: [
      {
        q: "Is bleeding when I brush normal?",
        a: "No. Bleeding gums usually signal inflammation and are worth having evaluated. Early gum disease is often reversible.",
      },
    ],
  },
  {
    slug: "root-canal-therapy",
    title: "Root Canal Therapy",
    icon: "activity",
    short: "Relieve infection pain and keep your natural tooth in place.",
    intro:
      "A root canal treats infection inside the tooth. Modern techniques make the procedure far more comfortable than its reputation suggests.",
    bullets: ["Root canal treatment", "Infection and pain relief", "Tooth preservation", "Crown restoration after treatment"],
    highlights: [
      { title: "Save the natural tooth", body: "Keeping your own tooth preserves bone and bite far better than extraction alone." },
      { title: "Comfort-focused technique", body: "Thorough anesthesia and gentle instrumentation are standard for every case." },
      { title: "Clear follow-up plan", body: "Most treated teeth need a crown afterwards, and we schedule that up front." },
    ],
    faq: [
      {
        q: "Does a root canal hurt?",
        a: "The procedure itself is done under local anesthesia and typically feels similar to having a filling placed. Most of the pain patients associate with root canals comes from the infection beforehand.",
      },
    ],
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    icon: "scissors",
    short: "Extractions, wisdom teeth and minor oral procedures.",
    intro:
      "When a tooth cannot be saved or is crowding the arch, a planned extraction protects the teeth around it.",
    bullets: ["Tooth extraction", "Wisdom teeth", "Minor oral procedures", "Site preparation for implants"],
    highlights: [
      { title: "Careful case assessment", body: "3D imaging helps us evaluate root position and nearby structures before surgery." },
      { title: "Written aftercare", body: "You leave with clear recovery instructions and a number to call with questions." },
      { title: "Referral when appropriate", body: "Complex cases are referred to a trusted specialist rather than pushed forward here." },
    ],
    faq: [
      {
        q: "How long is recovery after an extraction?",
        a: "Most patients feel noticeably better within two to three days. Follow your aftercare instructions closely during the first 24 hours.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
