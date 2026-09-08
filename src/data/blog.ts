export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const blogCategories = [
  "Oral Health",
  "Preventive Care",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Children's Dentistry",
  "Emergency Dentistry",
  "Patient Education",
];

export const posts: Post[] = [
  {
    slug: "7-simple-habits-for-healthier-teeth",
    title: "7 Simple Habits for Healthier Teeth",
    category: "Preventive Care",
    excerpt: "Small daily choices protect your teeth far more than any single dental visit. Here are seven habits that make the biggest difference.",
    readTime: "5 min read",
    date: "March 4, 2026",
    body: [
      { paragraphs: ["Good oral health is built between appointments, not during them. The routines below are simple, inexpensive and consistently effective."] },
      { heading: "Brush for two full minutes, twice a day", paragraphs: ["Most people brush for under a minute. Use a soft-bristled brush at a 45-degree angle to the gumline and let the bristles do the work — pressure damages enamel and gums rather than cleaning better."] },
      { heading: "Clean between your teeth daily", paragraphs: ["A toothbrush reaches roughly three of five tooth surfaces. Floss, interdental brushes or a water flosser handle the rest, which is where a large share of cavities and gum inflammation begin."] },
      { heading: "Rethink how you snack", paragraphs: ["It is frequency, not quantity, that drives decay. Every sugary or acidic snack restarts an acid attack on enamel. Grouping sweets with meals gives your mouth time to recover."] },
      { heading: "Drink more water", paragraphs: ["Water rinses away food debris and supports saliva, your natural defense against decay. Fluoridated tap water adds further protection."] },
      { heading: "Protect your teeth at night", paragraphs: ["Grinding wears enamel and cracks restorations. If you wake with jaw soreness or headaches, ask about a night guard."] },
      { heading: "Skip tobacco", paragraphs: ["Tobacco use is strongly associated with gum disease, delayed healing and oral cancer risk. Quitting improves oral health measurably."] },
      { heading: "Keep your checkups", paragraphs: ["Regular exams catch problems while they are small and inexpensive to treat. That is the whole point of preventive care."] },
    ],
  },
  {
    slug: "what-to-expect-during-your-first-dental-visit",
    title: "What to Expect During Your First Dental Visit",
    category: "Patient Education",
    excerpt: "New to the practice or returning after a long gap? Here is exactly how a first appointment runs, start to finish.",
    readTime: "4 min read",
    date: "February 18, 2026",
    body: [
      { paragraphs: ["If it has been a while since your last dental visit, knowing the sequence in advance removes most of the anxiety."] },
      { heading: "Before you arrive", paragraphs: ["Complete your intake forms ahead of time and bring a photo ID, your insurance card if you have one, and a list of current medications."] },
      { heading: "The conversation first", paragraphs: ["Your visit starts with a discussion, not an instrument. We ask about your health history, past dental experiences, sensitivities and what you want out of your care."] },
      { heading: "Exam and imaging", paragraphs: ["A comprehensive exam covers teeth, gums, bite and soft tissues. Digital X-rays and intraoral photos give a complete picture and let you see findings for yourself."] },
      { heading: "Cleaning", paragraphs: ["If your gum health allows, a cleaning is typically completed the same day. If we find active gum disease, we will explain why a different type of cleaning is needed first."] },
      { heading: "Your plan and your options", paragraphs: ["We finish by reviewing what we found, what is urgent versus elective, and what each option costs in writing. Nothing gets scheduled until you are comfortable."] },
    ],
  },
  {
    slug: "how-professional-teeth-whitening-works",
    title: "How Professional Teeth Whitening Works",
    category: "Cosmetic Dentistry",
    excerpt: "Why in-office whitening outperforms drugstore strips, and how to keep results looking natural.",
    readTime: "4 min read",
    date: "February 2, 2026",
    body: [
      { paragraphs: ["Whitening is the most requested cosmetic treatment in dentistry, and also the most misunderstood."] },
      { heading: "What actually causes staining", paragraphs: ["Surface stains come from coffee, tea, red wine and tobacco. Deeper discoloration develops within dentin over time or after trauma. The two respond very differently to treatment."] },
      { heading: "How the chemistry works", paragraphs: ["Professional gels use peroxide to break apart the pigmented molecules trapped in enamel and dentin. Higher, professionally supervised concentrations work faster and more evenly than retail products."] },
      { heading: "In-office versus take-home", paragraphs: ["In-office whitening delivers a visible change in one appointment. Custom take-home trays work more gradually and are ideal for maintenance. Many patients combine both."] },
      { heading: "What whitening will not change", paragraphs: ["Crowns, veneers and fillings do not whiten. If you have restorations in your smile line, we plan the sequence so shades match at the end."], list: ["Existing crowns and veneers keep their original shade", "Bonding may need replacement after whitening", "Deep intrinsic stains may respond only partially"] },
      { heading: "Keeping the result", paragraphs: ["Rinse after staining drinks, keep up your cleanings, and touch up periodically with your trays."] },
    ],
  },
  {
    slug: "when-is-a-toothache-a-dental-emergency",
    title: "When Is a Toothache a Dental Emergency?",
    category: "Emergency Dentistry",
    excerpt: "Some tooth pain can wait for a regular appointment. Some cannot. Here is how to tell the difference.",
    readTime: "4 min read",
    date: "January 21, 2026",
    body: [
      { paragraphs: ["Not every ache is urgent — but a few symptoms mean you should call the office today."] },
      { heading: "Call immediately if you have", paragraphs: ["These signs point to infection or damage that worsens quickly without treatment."], list: ["Facial or jaw swelling", "Severe pain that wakes you at night", "Fever alongside tooth pain", "A knocked-out or badly fractured tooth", "Bleeding that will not stop"] },
      { heading: "Seek emergency medical care if", paragraphs: ["Difficulty breathing or swallowing, swelling spreading toward the eye or neck, or a serious facial injury are medical emergencies. Call 911 or go to the nearest emergency room."] },
      { heading: "Usually can wait a few days", paragraphs: ["Mild sensitivity to cold, a small chip with no pain, or a lost filling that is not painful can typically be scheduled normally — but still get them looked at."] },
      { heading: "What to do while you wait", paragraphs: ["Rinse with warm salt water, use a cold compress on the outside of the cheek, and avoid placing aspirin directly on the gum. Call us for guidance specific to your situation."] },
    ],
  },
  {
    slug: "how-dental-implants-restore-your-smile",
    title: "How Dental Implants Restore Your Smile",
    category: "Dental Implants",
    excerpt: "A step-by-step look at what implant treatment involves and why it protects more than appearance.",
    readTime: "6 min read",
    date: "January 8, 2026",
    body: [
      { paragraphs: ["An implant replaces the root of a missing tooth, which is what makes it fundamentally different from a bridge or denture."] },
      { heading: "Why the root matters", paragraphs: ["Jaw bone maintains its volume through the stimulation a tooth root provides. Without it, bone gradually resorbs and facial support changes. An implant restores that stimulation."] },
      { heading: "The treatment sequence", paragraphs: ["Planning begins with 3D imaging to assess bone volume and nearby structures. The implant is then placed and allowed to integrate with bone over several months before the final crown is attached."] },
      { heading: "Comfort during treatment", paragraphs: ["Placement is performed under local anesthesia. Most patients describe recovery as comparable to an extraction, with soreness for a few days."] },
      { heading: "Caring for an implant", paragraphs: ["Implants do not decay, but the gum and bone around them can become inflamed. Daily cleaning and regular maintenance visits are essential to long-term success."] },
      { heading: "Is it right for everyone?", paragraphs: ["Bone volume, gum health, medical history and habits such as smoking all affect candidacy. A consultation and imaging give a clear answer."] },
    ],
  },
  {
    slug: "helping-children-feel-calm-at-the-dentist",
    title: "Helping Children Feel Calm at the Dentist",
    category: "Children's Dentistry",
    excerpt: "Practical ways parents can set up a positive first dental visit — and what our team does to help.",
    readTime: "4 min read",
    date: "December 12, 2025",
    body: [
      { paragraphs: ["A child's early dental experiences shape how they feel about care for decades. A calm first visit is worth planning for."] },
      { heading: "Keep the language neutral", paragraphs: ["Avoid words like hurt, shot or drill, even reassuringly. Describe the visit as counting and cleaning teeth."] },
      { heading: "Time it well", paragraphs: ["Book around naps and meals. A tired or hungry child has far less patience for something new."] },
      { heading: "Practice at home", paragraphs: ["Let your child sit back in a chair and open wide while you count their teeth. Familiarity does most of the work."] },
      { heading: "What we do in the room", paragraphs: ["We introduce every instrument before using it, narrate each step, and let the child pause at any point. Parents are welcome to stay throughout."] },
    ],
  },
  {
    slug: "gum-disease-early-warning-signs",
    title: "Gum Disease: The Early Warning Signs Most People Miss",
    category: "Oral Health",
    excerpt: "Gum disease is common, largely painless in its early stages, and highly treatable when caught early.",
    readTime: "5 min read",
    date: "November 20, 2025",
    body: [
      { paragraphs: ["Because early gum disease rarely hurts, many people do not realize they have it until it is advanced."] },
      { heading: "Signs worth acting on", paragraphs: ["Any of the following justify an evaluation."], list: ["Bleeding when brushing or flossing", "Persistent bad breath", "Gums that look red, puffy or tender", "Gums pulling away from teeth", "Teeth that feel loose or shifting"] },
      { heading: "Gingivitis versus periodontitis", paragraphs: ["Gingivitis is inflammation limited to the gums and is usually reversible with professional cleaning and better home care. Periodontitis involves bone loss around the teeth and requires ongoing management."] },
      { heading: "How it is treated", paragraphs: ["Scaling and root planing removes bacterial deposits below the gumline. Follow-up maintenance visits at shorter intervals then keep the condition stable."] },
      { heading: "Why it matters beyond your mouth", paragraphs: ["Research has linked periodontal inflammation with several systemic health conditions. Treating your gums is part of taking care of your overall health."] },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
