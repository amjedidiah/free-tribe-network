import Blog from "@/components/news-events/blog";
import Recent from "@/components/news-events/recent";
import Upcoming from "@/components/news-events/upcoming";
import { formatLinkLabel } from "@/lib/utils";

export const activityTabsData = [
  {
    trigger: "recent-activites",
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
        label: formatLinkLabel(activityTabsData[0].trigger),
        href: activityTabsData[0].trigger,
        icon: "/icons/upcoming.svg",
      },
      {
        label: formatLinkLabel(activityTabsData[1].trigger),
        href: activityTabsData[1].trigger,
        icon: "/icons/past-event.svg",
      },
      {
        label: formatLinkLabel(activityTabsData[2].trigger),
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

export const postsData = [
  {
    title: "UX review presentations",
    image: "/images/blog.png",
    shortDesc:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    readTime: "8 min read",
    author: "Olivia Rhye",
    authorImage: "/images/Avatar.png",
    date: "20 Jan 2022",
    initiative: "star-project",
  },
  {
    title: "UX review presentations",
    image: "/images/blog.png",
    shortDesc:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    readTime: "8 min read",
    author: "Olivia Rhye",
    authorImage: "/images/Avatar.png",
    date: "20 Jan 2022",
    initiative: "repromatters",
  },
  {
    title: "UX review presentations",
    image: "/images/blog.png",
    shortDesc:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    readTime: "8 min read",
    author: "Olivia Rhye",
    authorImage: "/images/Avatar.png",
    date: "20 Jan 2022",
    initiative: "free-tribe-boost-camp",
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
