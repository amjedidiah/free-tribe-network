import Blog from "@/components/news-events/blog";
import Activity from "@/components/news-events/activity";

export const activityTabsData = [
  {
    trigger: "recent-activities",
    Component: Activity,
  },
  {
    trigger: "upcoming-activities",
    Component: Activity,
  },
  {
    trigger: "blog-posts",
    Component: Blog,
  },
];

export const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Who we are",
    href: "/who-we-are",
    links: [
      {
        label: "Our History",
        href: "our-history",
        icon: "/icons/our-history.svg",
      },
      {
        label: "Mission & Vision",
        href: "mission-vision",
        icon: "/icons/mission.svg",
      },
      {
        label: "What we do",
        href: "what-we-do",
        icon: "/icons/what-we-do.svg",
      },
      {
        label: "BOT",
        href: "bot",
        icon: "/icons/bot.svg",
      },
      {
        label: "Staff",
        href: "staff",
        icon: "/icons/staff.svg",
      },
      {
        label: "Work with us",
        href: "work-with-us",
        icon: "/icons/work-with-us.svg",
      },
      {
        label: "Testimonials",
        href: "testimonials",
        icon: "/icons/testimonials.svg",
      },
    ],
  },
  {
    label: "Our Initiatives",
    href: "/our-initiatives",
    links: [
      {
        label: "STAR project",
        href: "star-project",
        icon: "/icons/star-project.svg",
      },
      {
        label: "ReproMatters",
        href: "repromatters",
        icon: "/icons/repromatters.svg",
      },
      {
        label: "Free Tribe Boost-Camp",
        href: "free-tribe-boost-camp",
        icon: "/icons/ft-boost-camp.svg",
      },
      {
        label: "Free Tribe Helpline",
        href: "free-tribe-helpline",
        icon: "/icons/ft-helpline.svg",
      },
      {
        label: "Free Tribe Clubs",
        href: "free-tribe-clubs",
        icon: "/icons/ft-clubs.svg",
      },
      {
        label: "RFH Advocacy",
        href: "rfh-advocacy",
        icon: "/icons/rfh.svg",
      },
    ],
  },
  {
    label: "News & Events",
    href: "/news-events",
    links: [
      {
        label: "Recent Activities",
        href: activityTabsData[0].trigger,
        icon: "/icons/upcoming.svg",
      },
      {
        label: "Upcoming Activities",
        href: activityTabsData[1].trigger,
        icon: "/icons/past-event.svg",
      },
      {
        label: "Blog Posts",
        href: activityTabsData[2].trigger,
        icon: "/icons/blog.svg",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

export const initiatives = [
  {
    name: "star-project",
    label: "Stand Against Recycled Violence (STAR) project",
  },
  {
    name: "repromatters",
    label: "ReproMatters",
  },
  {
    name: "free-tribe-boost-camp",
    label: "Free Tribe Boost-Camp",
  },
  {
    name: "free-tribe-helpline",
    label: "Free Tribe Helpline",
  },
  {
    name: "free-tribe-clubs",
    label: "Free Tribe Clubs",
  },
  {
    name: "rfh-advocacy",
    label: "Reproductive and Family health advocacy",
  },
];

export const defaultNewsEventSection = "upcoming-activities";

export const initiativeData = {
  "star-project": {
    ...initiatives[0],
    content: `
  <div>
    <p>
      A public health project that seeks to capture and reduce the witnessing of
      inter-parental violence, and the intergenerational transmission of violence
      to adolescents. The project aims to improve institutional supportive
      structures within public secondary schools, to discourage the acceptance
      or use of violence in future relationships. It combines a powerful blend
      of research and public health programs to address reproductive health and
      family well-being.
    </p>
  </div>

  <div className="h5-gap">
    <h4>Identifying the Issue!</h4>
    <p>
      We observed that Intimate Partner Violence (Inter-parental Violence) had a
      significant effect on the physical, mental, and social well-being of
      children and adolescents. Children witnessing these violent behaviours
      were prone to exhibit difficulties in social interactions, endured
      emotional strain, and other psychological challenges, building into
      several negative outcomes such as bullying, unhealthy relationships, low
      self-esteem, substance abuse, and even criminal behaviours, with effects
      persisting through adulthood.
    </p>
  </div>

  <div className="h5-gap">
    <h4>Our Approach!</h4>
    <p>
      The Stand Against Recycled Violence (STAR) Project: an initiative to
      counter the intergenerational recycling of violence. We combined a
      powerful blend of research and public health programs, to address the
      incidence of inter-parental violence, bullying (peer violence), and
      violence justification. The strategies of the STAR project help us to
      improve institutional supportive structures within secondary schools, and
      to discourage the acceptance and use of violence in future relationships.
      Offerings:
      <ul>
        <li>Baseline survey</li>
        <li>Teacher training</li>
        <li>Student training</li>
        <li>Free Tribe Institutional Club</li>
        <li>Institutional Supervising committee</li>
        <li>Monitoring &amp; Evaluation</li>
      </ul>
    </p>
  </div>
`,
    images: ["star-project-1_zlnkud", "star-project-2_jonohn", "star-project-3_w2kdgw"],
    summary:
      "A public health project that seeks to capture and reduce the witnessing of inter-parental violence, and the inter-generational transmission of violence to adolescents.",
  },
  repromatters: {
    ...initiatives[1],
    content: `<div><p>A bi-monthly program utilizing real life stories, medical knowledge, public health expertise, and the wide reach of the social media space, to discuss important issues affecting reproductive health and family well-being. Topics covered will center around women’s health, men’s health, children and adolescent health and well-being.</p></div>`,
    images: ["repro_uopmf7"],
  },
  "free-tribe-boost-camp": {
    ...initiatives[2],
    content: `<div><p>A bi-monthly capacity building program for staff and volunteers of the Free Tribe Network, set to improve corporate work skills, teach industry-relevant skills, and foster bonding amongst members of the Free Tribe Network.</p></div>`,
    images: [
      "boost-camp-1_f4svwf",
      "boost-camp-2_b8nia3",
      "boost-camp-3_bw178p",
    ],
  },
  "free-tribe-helpline": {
    ...initiatives[3],
    content: `<div><p>A social service for telephone support, access to information, advice, informed interventions, and referral to reproductive and family health professionals.</p></div>`,
    images: ["helpline_mxp0ci"],
  },
  "free-tribe-clubs": {
    ...initiatives[4],
    content: `<div><p>These are safe spaces set to promote open conversations, improve social support, enhance monitoring and evaluation, and improve self-led initiatives and re-intervention tactics, to ensure sustainable improvements in reproductive and family health outcomes.</p></div>`,
    images: ["clubs_nb3xsm"],
  },
  "rfh-advocacy": {
    ...initiatives[5],
    content: `<div><p>This includes rallies, campaigns, weekly advocacy messages (#TeachTuesday and #FactFriday), and media programs to promote and inspire positive health behaviours.</p></div>`,
    images: ["family-health-1_gk7xb3", "family-health-2_znilnr", "family-health-3_cbpnvg"],
  },
};

export const contactNumber = "+2348153494508";
export const contactEmail = "freetribenetwork@gmail.com";

export const contactChannels = [
  // {
  //   image: "/icons/message-circle.svg",
  //   title: "Chat",
  //   href: `mailto:${contactEmail}`,
  // },
  {
    image: "/icons/map-pin.svg",
    title: "Visit",
    href: `https://maps.app.goo.gl/yJVWErVbF9LLkwHx9?g_st=ic`,
  },
  {
    image: "/icons/phone.svg",
    title: "Call",
    href: `tel:${contactNumber}`,
  },
];

export const socials = [
  {
    name: "x",
    href: "https://x.com/freetribenetwrk",
  },
  {
    name: "linkedin",
    href: "https://linkedin.com/company/freetribenetwork",
  },
  {
    name: "facebook",
    href: "https://facebook.com/freetribenetwrk",
  },
  {
    name: "instagram",
    href: "https://instagram.com/freetribenetwork",
  },
  {
    name: "tiktok",
    href: "https://tiktok.com/@freetribenetwork",
  },
  {
    name: "medium",
    href: "https://medium.com/@freetribenetwork",
  },
];

export const currentYear = new Date().getFullYear();

export const homeBannerData = [
  {
    image: "home-banner-slide-1_ntqfca",
    title: "Sustained reproductive health and family well-being",
    picturePosition: "center right",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
  },
  {
    image: "home-banner-slide-2_t5u8e6",
    title: "Mastery",
    picturePosition: "center right",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
  },
  {
    image: "home-banner-slide-3_i6669l",
    title: "Social Justice",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
  },
  {
    image: "home-banner-slide-4_w4kj9f",
    title: "Equity",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
  },
  {
    image: "home-banner-slide-5_sp3cje",
    title: "Community",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
  },
];

export const donationFAQs = [
  {
    id: "1",
    question: "How is my donation used? ",
    answer:
      "Your donation is used to support programs, projects and research conducted by the  Free Tribe Network.",
  },
  {
    id: "2",
    question: "How can I be sure my donation is safe?",
    answer:
      "Our payment provider, <strong>Flutterwave</strong>, uses SSL encryption to protect your information and ensure that your donation is secure. Your card and personal data will be safe and secure.",
  },
  {
    id: "3",
    question: "Can I sponsor a specific interest? ",
    answer: "Yes, you can.",
  },
  {
    id: "4",
    question: "Will I get a receipt for my donation?",
    answer:
      "Yes, you will be emailed a <strong>Flutterwave</strong> receipt for your donation.",
  },
  {
    id: "5",
    question:
      "How do I contact Free Tribe Network for ​additional information or inquiries ?",
    answer:
      "You can call us on <a href='tel:+2348153494508'>+234 (815) 3494 508</a> or email us at <a href='mailto:freetribenetwork@gmail.com'>freetribenetwork@gmail.com</a>",
  },
  {
    id: "6",
    question: "How can I get involved?",
    answer:
      "You can get involved by volunteering, donating, or spreading awareness about reproductive health and rights.",
  },
];

const topInitiatives = [
  "repromatters",
  "free-tribe-boost-camp",
  "star-project",
];

export const topInitiativesData = Object.values(initiativeData).filter((item) =>
  topInitiatives.includes(item.name)
);

export const testimonials = [
  {
    src: "testimonial-1_hu99vh",
    name: "Mrs Olakitan Abiola",
  },
  {
    src: "testimonial-2_ymtexv",
    name: "Moses Plangkat",
  },
  {
    src: "testimonial-3_ivar5x",
    name: "Mrs Blessing Omenka",
  },
  {
    src: "testimonial-4_zwihcz",
    name: "Kwamina Obo",
  },
  {
    src: "testimonial-5_ezmacx",
    name: "Moyo Adedayo",
  },
  {
    src: "testimonial-6_ugmxxk",
    name: "Sayo Eweje",
  },
  {
    src: "testimonial-7_kaqw65",
    name: "Dayhana Hernandez",
  },
  {
    src: "testimonial-8_cfqaak",
    name: "Dr Gbonjubola Abiri",
  },
  {
    src: "testimonial-9_krajav",
    name: "Aziza Kibibi",
  },
  {
    src: "testimonial-10_pknqr7",
    name: "Pharm Tobechuckwu Nneji",
  },
  {
    src: "testimonial-11_xatiwp",
    name: "Dr Muhammed Odedeji",
  },
  {
    src: "testimonial-12_sjryin",
    name: "Dr Jibril Abdulmalik",
  },
  {
    src: "testimonial-13_xuuvmb",
    name: "Dr Munirat Antoinette Lecky(Anto Lecky)",
  },
];

export const bots = [
  {
    src: "bot-1_zuvvjp",
    name: "Dr Adebayo",
  },
  {
    src: "bot-2_uztk1l",
    name: "Rev Eweje",
  },
  {
    src: "bot-3_zj16bn",
    name: "Oluwagbemi-Jacob",
  },
  {
    src: "bot-4_hocoff",
    name: "Prof Obafemi",
  },
  {
    src: "bot-5_n71inq",
    name: "Dr Atoyebi",
  },
  {
    src: "bot-6_u1hkcd",
    name: "Nwokafor",
  },
  {
    src: "bot-7_ktv6c4",
    name: "Madu",
  },
  {
    src: "bot-8_jdhpho",
    name: "Fadayomi",
  },
  {
    src: "bot-9_uq7m3f",
    name: "Mfon",
  },
];

export const partners = [
  "asido-foundation_pebh1c",
  "pretty-little-ladies_tfvd3n",
  "chiin_mgsjfc",
  "live-wire_sxaoep",
];

export const visionMissionData = [
  {
    title: "Mission",
    icon: "/icons/streamgrey.svg",
    className: "bg-secondary-50 text-secondary-500",
  },
  {
    title: "Vision",
    icon: "/icons/streampink.svg",
    className: "bg-primary-50 text-primary-500",
  },
  {
    title: "Purpose",
    icon: "/icons/streamgrey.svg",
    className: "bg-secondary-50 text-secondary-500",
  },
];

export const workFamily = [
  {
    src: "work-family-1_jhh57n",
    name: "Busayo",
  },
  {
    src: "work-family-2_celihz",
    name: "Mikka",
  },
  {
    src: "work-family-3_rm1ksy",
    name: "Susan",
  },
  {
    src: "work-family-4_fo1w3i",
    name: "Tolu",
  },
  {
    src: "work-family-5_wji8uj",
    name: "Uche",
  },
  {
    src: "work-family-6_bixlcd",
    name: "Oluwatobi",
  },
  {
    src: "work-family-7_b6rkaq",
    name: "Grace",
  },
  {
    src: "work-family-8_y8fmda",
    name: "Kome",
  },
  {
    src: "work-family-9_ya0qx6",
    name: "Tunji",
  },
];

export const volunteerNowLink = "https://forms.gle/nFKWiE5SEvCPsyJ26";
export const currentVacanciesLink =
  "https://www.linkedin.com/company/freetribenetwork/jobs/";

export const stats = [
  {
    src: "/images/stats/stat-1.svg",
    value: 200,
    title: "Advocacy and Awareness Campaigns",
  },
  { src: "/images/stats/stat-2.svg", value: 20, title: "Training Programs" },
  {
    src: "/images/stats/stat-3.svg",
    value: 1,
    title: "Policy and Research activities",
  },
  { src: "/images/stats/stat-4.svg", value: 10, title: "Community Project" },
  { src: "/images/stats/stat-5.svg", value: 16, title: "Collaborations" },
  {
    src: "/images/stats/stat-6.svg",
    value: 3000,
    title: "Students reached",
  },
  {
    src: "/images/stats/stat-7.svg",
    value: 25000,
    title: "Volunteering Hours",
  },
];

export const problems = [
  {
    title: "Limited Education",
    description:
      "A lack of comprehensive RH and FH education leaves individuals vulnerable to misinformation and prevents them from making informed decisions about their well-being.",
    image: "/images/the-problem/limited-education.webp",
  },
  {
    title: "Data Fragmentation",
    description:
      "Without a centralized database of reproductive health (RH) and family health (FH) issues, interventions are often scattered and inefficient, leaving gaps in addressing critical needs.",
    image: "/images/the-problem/data-fragmentation.webp",
  },
  {
    title: "Isolated Communities",
    description:
      "Many communities lack access to adequate reproductive and family health resources, leading to feelings of isolation and uncertainty about where to turn for support.",
    image: "/images/the-problem/isolated-communities.webp",
  },
  {
    title: "Health Inequality",
    description:
      "Disparities in access to reproductive and family health resources perpetuate inequalities, leaving marginalized populations at a disadvantage in maintaining their well-being.",
    image: "/images/the-problem/health-inequality.webp",
  },
  {
    title: "Stigma and Taboos",
    description:
      "Cultural taboos and stigma surrounding reproductive and family health topics prevent open discussion and access to necessary support services, leading to shame and secrecy among affected individuals",
    image: "/images/the-problem/stigma-taboos.webp",
  },
];

export enum CurrencyKeys {
  NGN = "NGN",
  USD = "USD",
}

export const currencies = {
  [CurrencyKeys.NGN]: {
    label: CurrencyKeys.NGN,
    sign: "₦",
    min: 100,
  },
  [CurrencyKeys.USD]: {
    label: CurrencyKeys.USD,
    sign: "$",
    min: 1,
  },
};
