export const getNavigationItems = (t: (key: string) => string) => [
  {
    trigger: t("nav.government"),
    items: [
      { href: "/government/meet-mayor", label: t("nav.meetMayor") },
      { href: "/government/cabinet", label: t("nav.cabinet") },
    ],
  },
  {
    trigger: t("nav.residents"),
    items: [
      { href: "/residents/arts-culture", label: "Cultural Heritage" },
      { href: "/residents/public-safety", label: "Public Safety" },
      { href: "/residents/parks-recreation", label: "Kilum Forest Reserve" },
      { href: "/residents/directions", label: "Getting to Elak" },
    ],
  },
  {
    trigger: t("nav.visitors"),
    items: [
      { href: "/visitors/getting-around", label: "Transport & Directions" },
      { href: "/visitors/history", label: "Our History" },
      { href: "/visitors/things-to-do", label: "Tourist Attractions" },
    ],
  },
  {
    trigger: t("nav.business"),
    items: [
      { href: "/business/licenses", label: "Business Permits" },
      { href: "/business/suppliers", label: "Local Suppliers" },
      { href: "/business/grants", label: "Development Grants" },
      { href: "/business/zoning", label: "Land Use & Zoning" },
      { href: "/business/bids", label: "Tenders & Bids" },
      { href: "/business/start", label: "Start a Business" },
    ],
  },
  {
    trigger: t("nav.iwantto"),
    items: [
      { href: "/i-want-to/ceremonial", label: "Obtain Ceremonial Documents" },
      { href: "/i-want-to/find-business", label: "Find Registered Business" },
      { href: "/i-want-to/business-license", label: "Get Business License" },
      { href: "/i-want-to/events-permit", label: "Event Permits" },
      { href: "/i-want-to/complaint", label: "File a Complaint" },
    ],
  },
];