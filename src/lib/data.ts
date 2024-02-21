import Blog from "@/components/news-events/blog";
import Recent from "@/components/news-events/recent";
import Upcoming from "@/components/news-events/upcoming";
import { FaMedium, FaTiktok } from "react-icons/fa6";
import asido from "../../public/images/partners/asido-foundation.png";
import prettylittleladies from "../../public/images/partners/pretty-little-ladies.png";
import chiin from "../../public/images/partners/chiin.png";

export const activityTabsData = [
  {
    trigger: "recent-activities",
    Component: Recent,
  },
  {
    trigger: "upcoming-activities",
    Component: Upcoming,
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

export const activitiesData = [
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
    initiative: "rfh-advocacy",
    slug: "activity-1",
  },
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
    initiative: "free-tribe-clubs",
    slug: "activity-2",
  },
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
    initiative: "free-tribe-helpline",
    slug: "activity-3",
  },
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
    initiative: "free-tribe-boost-camp",
    slug: "activity-4",
  },
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
    initiative: "repromatters",
    slug: "activity-5",
  },
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
    initiative: "star-project",
    slug: "activity-6",
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
    images: [
      {
        src: "/images/initiatives/star-project/star-project-1.jpg",
        alt: "star-project-1",
      },
      {
        src: "/images/initiatives/star-project/star-project-2.jpg",
        alt: "star-project-2",
      },
      {
        src: "/images/initiatives/star-project/star-project-3.jpeg",
        alt: "star-project-3",
      },
    ],
    summary:
      "A public health project that seeks to capture and reduce the witnessing of inter-parental violence, and the inter-generational transmission of violence to adolescents.",
  },
  repromatters: {
    ...initiatives[1],
    content: `<div><p>A bi-monthly program utilizing real life stories, medical knowledge, public health expertise, and the wide reach of the social media space, to discuss important issues affecting reproductive health and family well-being. Topics covered will center around women’s health, men’s health, children and adolescent health and well-being.</p></div>`,
    images: [{ src: "/images/repro.png", alt: "repro" }],
  },
  "free-tribe-boost-camp": {
    ...initiatives[2],
    content: `<div><p>A bi-monthly capacity building program for staff and volunteers of the Free Tribe Network, set to improve corporate work skills, teach industry-relevant skills, and foster bonding amongst members of the Free Tribe Network.</p></div>`,
    images: [
      {
        src: "/images/initiatives/boost-camp/boost-camp-1.jpg",
        alt: "boost-camp-1",
      },
      {
        src: "/images/initiatives/boost-camp/boost-camp-2.jpeg",
        alt: "boost-camp-2",
      },
      {
        src: "/images/initiatives/boost-camp/boost-camp-3.jpeg",
        alt: "boost-camp-3",
      },
    ],
  },
  "free-tribe-helpline": {
    ...initiatives[3],
    content: `<div><p>A social service for telephone support, access to information, advice, informed interventions, and referral to reproductive and family health professionals.</p></div>`,
    images: [{ src: "/images/helpline.png", alt: "helpline" }],
  },
  "free-tribe-clubs": {
    ...initiatives[4],
    content: `<div><p>These are safe spaces set to promote open conversations, improve social support, enhance monitoring and evaluation, and improve self-led initiatives and re-intervention tactics, to ensure sustainable improvements in reproductive and family health outcomes.</p></div>`,
    images: [{ src: "/images/clubs.png", alt: "clubs" }],
  },
  "rfh-advocacy": {
    ...initiatives[5],
    content: `<div><p>This includes rallies, campaigns, weekly advocacy messages (#TeachTuesday and #FactFriday), and media programs to promote and inspire positive health behaviours.</p></div>`,
    images: [
      {
        src: "/images/initiatives/family-health/family-health-1.jpeg",
        alt: "family-health-1",
      },
      {
        src: "/images/initiatives/family-health/family-health-2.jpeg",
        alt: "family-health-2",
      },
      {
        src: "/images/initiatives/family-health/family-health-3.png",
        alt: "family-health-3",
      },
    ],
  },
};

export const contactNumber = "+2348153494508";

export const contactChannels = [
  {
    image: "/icons/message-circle.svg",
    header: "Chat to support",
    subHeader: "We’re here to help.",
    text: "freetribenetwork@gmail.com",
    href: "mailto:freetribenetwork@gmail.com",
  },
  {
    image: "/icons/message-circle.svg",
    header: "Visit Us",
    subHeader: "Visit our office HQ.",
    text: "No 15/11b, YK Abass, Ore-Ofe Estate, Elewiodo, Ibadan.",
  },
  {
    image: "/icons/phone.svg",
    header: "Call us",
    subHeader: "Mon-Fri from 8am to 5pm.",
    text: "+234 (815) 3494 508",
    href: `tel:${contactNumber}`,
  },
];

export const socials = [
  {
    name: "x",
    src: "/icons/x-icon.svg",
    href: "https://x.com/freetribenetwrk",
  },
  {
    name: "linkedin",
    src: "/icons/linkedin-icon.svg",
    href: "https://linkedin.com/company/freetribenetwork",
  },
  {
    name: "facebook",
    src: "/icons/facebook-icon.svg",
    href: "https://web.facebook.com/freetribenetwrk",
  },
  {
    name: "instagram",
    src: "/icons/instagram-icon.svg",
    href: "https://instagram.com/freetribenetwork",
  },
  {
    name: "tiktok",
    Icon: FaTiktok,
    href: "https://tiktok.com/@freetribenetwork",
  },
  {
    name: "medium",
    Icon: FaMedium,
    href: "https://medium.com/@freetribenetwork",
  },
];

export const currentYear = new Date().getFullYear();

export const homeBannerData = [
  {
    image: "/images/banners/home-banner/home-banner-1.png",
    title: "Sustained reproductive health and family well-being",
    picturePosition: "center right",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
    content:
      "At the Free Tribe Network, we promote reproductive wellness, and family well-being. We provide charitable services in the forms of programs, projects and research, to translate knowledge into perception, and perceptions into actions and behaviours.",
  },
  {
    image: "/images/banners/home-banner/home-banner-2.png",
    title: "Mastery",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
    content:
      "A relentless pursuit of excellence by leveraging on critical experience, expertise, and scientific evidence, to tailor our initiatives into best practices.",
  },
  {
    image: "/images/banners/home-banner/home-banner-3.png",
    title: "Social Justice",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
    content:
      "We believe that every individual should be treated with dignity and respect, and their fundamental human rights should be protected.",
  },
  {
    image: "/images/banners/home-banner/home-banner-4.png",
    title: "Equity",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
    content:
      "We believe in a fair distribution of services and resources, and equal access to opportunities, irrespective of age, gender, race, education, ethnicity, religion, or personal beliefs.",
  },
  {
    image: "/images/banners/home-banner/home-banner-5.png",
    title: "Community",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
    content:
      "Our unity and collective efforts towards a shared vision fostering our growth, strength, and sustained impact.",
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
      "We use SSL encryption to protect your information and ensure that your donation is secure. Your card and personal data will be safe and secure.",
  },
  {
    id: "3",
    question: "Can I sponsor a specific interest? ",
    answer:
      " donation is used to support programs, projects and research conducted by the  Free Tribe Network ",
  },
  {
    id: "4",
    question: "Will I get a receipt for my donation?",
    answer:
      "Your donation is used to support programs, projects and research conducted by the  Free Tribe Network ",
  },
  {
    id: "5",
    question:
      "How do I contact Free Tribe Network for ​additional information or inquiries ?",
    answer:
      "Your donation is used to support programs, projects and research conducted by the  Free Tribe Network ",
  },
  {
    id: "6",
    question: "How can I get involved?",
    answer:
      "Your donation is used to support programs, projects and research conducted by the  Free Tribe Network ",
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
    testimony:
      "The advocacy programs by the Free Tribe has helped me understand the concept of child marriage better and to help other young women and girls like my daughter. Thank you Free Tribe!",
    src: "/images/testimonials/testimonial-1.jpeg",
    name: "Mrs. Olakitan Abiola",
  },
  {
    testimony:
      "I love the ReproMatters program. Listening to the experiences of people and what they’ve been through gives a better perspective to the issues the non-profit is addressing",
    src: "/images/testimonials/testimonial-2.jpeg",
    name: "Moses Plangkat",
  },
  {
    testimony:
      "As a beneficiary of the family planning resources offered by the non-profit, I can attest to the positive impact on our lives. It has empowered us to plan and nurture a healthier, happier family.",
    src: "/images/testimonials/testimonial-3.jpeg",
    name: "Mrs. Blessing Omenka",
    title: "Head of Design, Layers",
  },
  {
    testimony:
      "As a young woman, the organization's youth-friendly health services allowed me to seek guidance without judgment. I feel empowered and informed about my reproductive health.",
    src: "/images/testimonials/testimonial-4.jpeg",
    name: "Kwamina Obo",
  },
  {
    testimony:
      "Partnering with the Free Tribe Network has been a game changer. It has opened doors to a wealth of knowledge and support.",
    src: "/images/testimonials/testimonial-5.jpeg",
    name: "Moyo Adedayo",
    title: "Founder, Her Power",
  },
  {
    testimony:
      "As an organization focused on empowering people via healthcare education, CHIIN's partnership with this non-profit has expanded our capacity to serve the community. Their shared commitment to improving reproductive health has resulted in a stronger, healthier population.",
    src: "/images/testimonials/testimonial-6.jpeg",
    name: "Sayo Eweje",
    title:
      "Co-Managing Director, Critical Healthcare Information Integration Network (CHIIN)",
  },
  {
    testimony:
      "Members of the Free Tribe Network are the most passionate individuals I have met. They make enormous work look too easy with their collective efforts",
    src: "/images/testimonials/testimonial-7.jpeg",
    name: " Dayhana Hernandez,",
    title: "Program Advisor, Girls First Fund, Domincan Republic.",
  },
  {
    testimony:
      "Our organization is proud to be in partnership with this non-profit. Their innovative programs and unwavering support have greatly enhanced our ability to address reproductive health challenges, ultimately improving the lives of those we serve",
    src: "/images/testimonials/testimonial-8.jpeg",
    name: "Dr Gbonjubola Abiri",
    title: "CEO, RediMed Consulting",
  },
  {
    testimony:
      "It was a pleasure to work with the Free Tribe Network on the RepoMatters program. Their work to raise awareness is vital in changing harmful, cultural practices that affect women and girls",
    src: "/images/testimonials/testimonial-9.jpeg",
    name: "Aziza Kibibi",
    title: "Founder, Pretty Little Ladies",
  },
  {
    testimony:
      "I enjoyed my time with the Free Tribe Network. There are so many good things to say about the network and the awesome work they do!  Most of all, their public relations is the best I have ever seen. They will leave an indelible mark in the sands of time.",
    src: "/images/testimonials/testimonial-10.jpeg",
    name: "Pharm. Tobechuckwu Nneji ",
    title: "Pharmacist",
  },
  {
    testimony:
      "Through the Free Tribe Network’s initiatives, I have gained access to essential healthcare services, empowering me to make informed choices for my family's well-being. Grateful for the positive impact!",
    src: "/images/testimonials/testimonial-11.jpeg",
    name: "Dr Muhammed Odedeji",
    title: "Medical Doctor",
  },
  {
    testimony:
      "The Free Tribe Network is out to inspire actions for sustained reproductive health and family well-being. This is very essential for mental health, as they provide safe spaces for discussions to make people feel supported and equipped to prioritize their family's well-being. I am proud to support the good work they do.",
    src: "/images/testimonials/testimonial-12.jpeg",
    name: "Dr Jibril Abdulmalik",
    title: "Founder/CEO, Asido Foundation",
  },
  {
    testimony:
      "The Free Tribe Network is a group of young people doing great work, having those very important conversations that we often shy away from. I hope they continue to grow higher and higher.",
    src: "/images/testimonials/testimonial-13.jpeg",
    name: "Dr Munirat Antoinette Lecky(Anto Lecky)",
  },
];

export const bots = [
  {
    src: "/images/bot/bot-1.png",
    name: "Dr Adebayo, Ayodeji Matthew",
    title: "Chairman, BOT",
    description: `<p>A public health physician, a seasoned researcher, and a senior lecturer in the Department of Community Medicine, University of Ibadan, Nigeria. He has published over 85 academic papers, and presented at several international and national conferences. He is a recipient of several grants, and was Principal Investigator for a World Bank funded project, targeting couples in Ibadan, Nigeria.</p>`,
  },
  {
    src: "/images/bot/bot-2.png",
    name: "Rev Eweje, John",
    title: "Vice Chairman, BOT",
    description: `<p>A retired Project Manager with 30 years of experience at the Shell Petroleum Development Company of Nigeria. He holds a PhD in Strategy, Project and Programs management, and serves post-retirement as a missionary in Europe.`,
  },
  {
    src: "/images/bot/bot-3.png",
    name: "Oluwagbemi-Jacob Tosin",
    title: "Secretary, BOT",
    description: `<p>A public health specialist and the Executive Director of the Free Tribe Network. With over 5 years invested in administrative planning, project and program management, research, monitoring and evaluation, he has efficiently managed over 20 non-profit projects and operations across Nigeria.</p>
<p>His collaborations with the University College Hospital, Ibadan, and other other notable institutes reflect an especial interest and dedication to mental health, reproductive health and family well-being.</p>`,
  },
  {
    src: "/images/bot/bot-4.png",
    name: "Prof. Obafemi, Fances Ngozi",
    title: "Member, BOT",
    description: `<p>A Professor of Monetary Economics with extensive publications, industrial policy drafting experience, and consultancy roles with the World Bank and United Nations Industrial Development Organization (UNIDO). She has served as a research fellow for the National Defence College, Abuja, and the National Institute for Policy & Strategic Studies (NIPSS), and is the co-founder of the Happy Home Club; a teaching/coaching establishment for single and married persons.</p>`,
  },
  {
    src: "/images/bot/bot-5.png",
    name: "Dr Atoyebi, Aderonke O.",
    title: "Member, BOT",
    description: `<p>A senior registrar at the Department of Community Medicine, University College Hospital, Ibadan. She specialises in women’s health and gender based violence. She is a medical doctor certified in Economic Evaluation in Global Health, currently rounding off a Masters of Public Health. She has diverse experience, including research assistance for the World Maternal Anti-fibrinolytic Trial, survey supervision for the World Health Organization, and contributions to COVID-19 response efforts and reproductive health policy implementation in Nigeria.</p>`,
  },
  {
    src: "/images/bot/bot-6.png",
    name: "Nwokafor, Obiora",
    title: "Member, BOT",
    description: `<p>A realtor, and the General Manger of Suncity Gardens Estates. He runs a social support community called ‘Boy’s lounge’ for boys aged 9 to 25 years, and has mentored and supported several young men across Nigeria.</p>
<p>He coordinated a two-year project to manage pregnant women living with HIV/AIDS, to prevent Maternal-To-Child-Transmission during this period.</p>`,
  },
  {
    src: "/images/bot/bot-7.png",
    name: "Madu, Ihuomachidire I.",
    title: "Member, BOT",
    description: `<p>The partnership Manager and Legal Advisor at Silicon Africa Technologies Ltd, and  Project Manager for Social Media Fest (SMFEST); a global social impact platform that exposes creatives to the advantages and leverages of social media and technology.</p>
<p>She is a lawyer and human rights activist; a passionate advocate for youth development and financial literacy, inspiring young women into leadership and responsibility.</p>`,
  },
  {
    src: "/images/bot/bot-8.png",
    name: "Fadayomi, Sefunmi G.",
    title: "Member, BOT",
    description: `<p>Excelled as the most outstanding student during her Masters at Eastern Kentucky University, USA. A public health specialist in Environmental and Occupational Health, currently working with Owens Corning to promote basic healthcare, education, and safe, efficient housing solutions.</p>
<p>She worked as a scholarship officer with the Bethesda Child Support agency, to support disadvantaged children with free education in Nigeria.</p>`,
  },
  {
    src: "/images/bot/bot-9.png",
    name: "Mfon, Andikan A.",
    title: "Member, BOT",
    description: `<p>A seasoned Analyst in Investment Banking at Afrinvest West Africa Limited. He is an Associate Chartered Accountant, with over 5 years of expertise in various financial areas, including equity and debt capital raise, mergers and acquisitions, business valuation, and financial due diligence.</p>`,
  },
];

export const partners = [
  {
    name: "asido-foundation",
    src: asido,
  },
  {
    name: "precious-little-ladies",
    src: prettylittleladies,
  },
  { name: "chiin", src: chiin },
];

export const visionMissionData = [
  {
    title: "Mission",
    content:
      "To improve reproductive health and family wellness, by providing support through charitable initiatives.",
    icon: "/streamgrey.svg",
    className: "bg-secondary-50 text-secondary-500",
  },
  {
    title: "Vision",
    content:
      "A global community of people making lifelong decisions to improve and reinforce reproductive health and family well-being.",
    icon: "/streampink.svg",
    className: "bg-primary-50 text-primary-500",
  },
  {
    title: "Purpose",
    content:
      "To help vulnerable persons navigate the burden and unmet needs of reproductive health and family well-being.",
    icon: "/streamgrey.svg",
    className: "bg-secondary-50 text-secondary-500",
  },
];

export const workFamily = [
  {
    src: "/images/work-family/work-family-1.png",
    name: "Busayo Oyetubosun",
    title: "Admin",
  },
  {
    src: "/images/work-family/work-family-2.png",
    name: "Mikka Erem",
    title: "Program Officer",
  },
  {
    src: "/images/work-family/work-family-3.png",
    name: "Susan Kebu",
    title: "Project Associate",
  },
  {
    src: "/images/work-family/work-family-4.png",
    name: "Tolu Oluwagbemi-Jacob",
    title: "Communications Officer",
  },
  {
    src: "/images/work-family/work-family-5.png",
    name: "Uche Kennedy",
    title: "IT Lead",
  },
  {
    src: "/images/work-family/work-family-6.png",
    name: "Oluwatobi Alawode",
    title: "Logistics Officer",
  },
  {
    src: "/images/work-family/work-family-7.png",
    name: "Grace Vin-Otebele",
    title: "Monitoring & Evaluation Officer",
  },
];

export const volunteerNowLink = "#";
export const currentVacanciesLink = "#";

export const stats = [
  {
    src: "/images/stats/stat-1.svg",
    value: "200+",
    title: "Advocacy and Awareness Campaigns",
  },
  { src: "/images/stats/stat-2.svg", value: "20+", title: "Training Programs" },
  {
    src: "/images/stats/stat-3.svg",
    value: "1",
    title: "Policy and Research activities",
  },
  { src: "/images/stats/stat-4.svg", value: "10+", title: "Community Project" },
  { src: "/images/stats/stat-5.svg", value: "16+", title: "Collaborations" },
  {
    src: "/images/stats/stat-6.svg",
    value: "3000+",
    title: "Students reached",
  },
  {
    src: "/images/stats/stat-7.svg",
    value: "25,000+",
    title: "Volunteering Hours",
  },
];

export const subScribeMessageError = "You are already subscribed";