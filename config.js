/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Bunene Construction Pty ltd",
    phone:     "+27 76 931 0055",
    whatsapp:  "+27 76 931 0055",
    address:   "40 Mitchell St, Johannesburg, South Africa",
    hours:     "Mon–Fri 7am–5pm · Sat 7am–1pm",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Johannesburg CBD",
      "Parktown",
      "Melville",
      "Westdene",
      "Brixton",
      "Newlands",
      "Sophiatown",
      "Auckland Park"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Bunene Construction Pty ltd — Building & construction in Johannesburg",
    description: "Bunene Construction Pty ltd provides professional building and construction services in Johannesburg — new builds, extensions and renovations. 4 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "ember",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Building & construction · Johannesburg & surrounds",
    heroTitle:  "Building or extending? <em>Done properly, finished on time.</em>",
    heroLead:   "Bunene Construction Pty ltd takes on new builds, extensions, renovations and structural work for homes and businesses across Johannesburg. Clear quotes, skilled tradesmen and quality you can stand on.",

    googleRating: "4.5",
    reviewsCount: "4",
    featuredQuote: "Bunene built our extension and re-did the roof. Properly managed, clean site and the finish is excellent. Highly recommend.",
    featuredQuoteAuthor: "— Karen H., Google review",

    trustSignals: ["New builds & extensions", "Renovations", "Roofing", "Clear fixed quotes"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "From foundation to final finish.",
    servicesLead:  "New builds, extensions and renovations — properly managed, built to last and finished to a high standard.",
    services: [
      {
        icon:  "hardhat",
        title: "New builds & extensions",
        desc:  "Full residential and commercial builds and additions — foundations, brickwork, roof and finishes, project-managed from start to handover."
      },
      {
        icon:  "wrench",
        title: "Renovations & alterations",
        desc:  "Reworking and modernising existing buildings — walls moved, spaces reconfigured and finishes brought up to standard."
      },
      {
        icon:  "bolt",
        title: "Structural & concrete work",
        desc:  "Foundations, slabs, columns and load-bearing alterations carried out correctly and to engineering specification."
      },
      {
        icon:  "shield",
        title: "Roofing & roof repairs",
        desc:  "New roofs, re-roofing and roof repairs — trusses, sheeting and tiling done so the structure is sound and watertight."
      },
      {
        icon:  "droplet",
        title: "Waterproofing & damp proofing",
        desc:  "Roofs, balconies and walls sealed properly so leaks and rising damp are stopped at the source, not patched over."
      },
      {
        icon:  "broom",
        title: "Plastering, tiling & finishes",
        desc:  "Plastering, screeding, tiling and painting — the finishing work that makes a build look professional."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of projects we take on.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — New builds & extensions",
        title:   "Built from the ground up",
        caption: "Foundations, brickwork, roofing and finishes managed as one project so the build runs to schedule and to spec."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Renovations",
        title:   "Old space, made new",
        caption: "Existing homes reworked and modernised — walls moved, rooms reconfigured and finishes brought up to standard."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Structural work",
        title:   "Solid where it counts",
        caption: "Foundations, slabs and load-bearing changes done to engineering specification, signed off and built to last."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Roofing",
        title:   "Sound and watertight",
        caption: "New roofs, re-roofing and repairs — trusses, sheeting and tiling done so the roof is structurally sound and sealed."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Finishes",
        title:   "Finished properly",
        caption: "Plastering, tiling and painting completed to a high standard — the detail that makes a build look professional."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Bunene Construction Pty ltd team on a building site in Johannesburg",
      text:  "Quality building and construction — from foundation to final finish."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Johannesburg. Building across the wider area.",
    areasLead:  "We take on projects in Johannesburg CBD, Parktown, Melville and the surrounding suburbs. Site visits and quotes available throughout the area.",
    areasNote:  "Not on this list? Call us — we work across most of the greater Johannesburg area.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why clients build with us.",
    why: [
      {
        title: "Clear, fixed quotes",
        desc:  "A detailed quote up front so you know exactly what the project costs before a single brick is laid. No surprise extras."
      },
      {
        title: "Properly project-managed",
        desc:  "One point of contact, a real schedule and trades coordinated for you — so the build moves and you stay informed."
      },
      {
        title: "Built to last",
        desc:  "Done to specification with quality materials and skilled tradesmen, so the work stands up years down the line."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 4 verified Google reviews.",
    reviews: [
      {
        body:   "Bunene built our extension and re-did the roof. Properly managed, clean site and the finish is excellent. Highly recommend.",
        name:   "Karen H.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Did a full renovation on our home — clear quote, tidy team and they finished when they said they would. Quality work.",
        name:   "David L.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Reliable construction team. Solid structural work and honest pricing from start to finish.",
        name:   "Yolanda S.",
        stars:  4,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Common construction questions.",
    faqLead:  "What most people ask before starting a project.",
    faq: [
      {
        q: "Do you give a fixed quote before starting?",
        a: "Yes — we visit the site, work through what you want and give a detailed written quote so you know the cost before any work begins."
      },
      {
        q: "Do you handle plans and approvals?",
        a: "For builds and extensions that need them, we can assist with drawings and council submission, and work to approved plans and engineering specs."
      },
      {
        q: "How long will my project take?",
        a: "It depends on scope, but we give a realistic schedule up front and keep you updated against it as the work progresses."
      },
      {
        q: "Do you do roofing as a standalone job?",
        a: "Yes — new roofs, re-roofing and roof repairs, whether as part of a build or on their own."
      },
      {
        q: "Are your builds done to specification?",
        a: "Yes. Structural work is done to engineering specification and finishes to a high standard, with the right materials for the job."
      },
      {
        q: "Do you do renovations as well as new builds?",
        a: "Both — from full new builds and extensions to renovations, alterations and smaller building work."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us about your project.",
    contactLead:  "Send through what you are planning and we will reply on WhatsApp to arrange a site visit and quote.",
    contactPlaceholder: "e.g. home extension, re-roofing, full renovation, new build",

    // ─── CLOSING CTA BAND ──────────────────────────────────
    ctaBannerTitle: "Ready when <em>you are.</em>",
    ctaBannerSub:   "Call or WhatsApp and we'll help you straight away."
  }
};
