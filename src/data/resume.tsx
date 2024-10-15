import { Icons } from "@/components/icons";
import { BookmarkIcon, HomeIcon, NotepadTextIcon } from "lucide-react";

export const DATA = {
  name: "Kristoff",
  initials: "CK ",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A hero by day who may not save the world, but fights bugs all day as a full-time Laravel programmer. By night transforms into a Information System student with a passion for coding",
  summary: `As an Information System student and full-time programmer, I spend most of my time staring at a screen and mumbling about bugs and syntax errors. So, that's me, I'm basically a human caffeine-fueled robot who can survive on coffee or energy drinks alone.

  Recently, I graduated with distinction from [Bangkit Academy](https://grow.google/intl/id_id/bangkit/), where I specialized in Cloud Computing. This experience deepened my expertise in building scalable web applications and cloud-based solutions, helping me bridge the gap between business needs and technical innovation.`,
  skills: [
    "Laravel",
    "Javascript",
    "TailwindCSS",
    "ExpressJS",
    "HapiJS",
    "Docker",
    "Google Cloud Platform",
    "Version Control",
    "PostgreSQL",
    "MySQL",
    "Python",
    "Filament"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://kristoff.my.id", icon: NotepadTextIcon, label: "Blog" },
    { href: "https://bookmarks.kristoff.my.id", icon: BookmarkIcon, label: "Bookmarks" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/chrystalio/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chrystalio/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Kristoff_id",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@magerkoding430",
        icon: Icons.youtube,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/kristoffid",
        icon: Icons.telegram,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Yayasan Vitka",
      href: "https://yayasanvitka.id/",
      badges: ["Onsite"],
      location: "Batam, Riau Island Indonesia",
      title: "Web Developer",
      logoUrl: "/companies/yv.png",
      start: "July 2022",
      end: "Now",
      description: [
        "Developed web-based applications using Laravel.",
        "Conducted bug fixes to ensure smooth functionality.",
        "Implemented frontend designs for login pages by slicing from Figma using Tailwind CSS.",
        "Collaborated with UI-UX design team for seamless design integration.",
        "Ensured website responsiveness across various devices and browsers.",
        "Integrated SISTER API to SIPPMI for automated synchronization of lecturers' research with Kemendikbud.",
      ],
    },
    {
      company: "PT. Aldebaran Samudera Jaya",
      href: "https://aldebaransamuderajaya.com/",
      badges: ["Remote"],
      location: "Jakarta Utara, DKI Jakarta Indonesia",
      title: "Web Developer",
      logoUrl: "/companies/aldebaran.png",
      start: "Jan 2024",
      end: "Jan 2024",
      description: [
        "Created a comprehensive company profile for PT. Aldebaran Samudra Jaya.",
         "Designed and developed an engaging profile covering company background, mission, vision, and services.",
         "Implemented a modern and professional design using the latest web principles.",
         "Ensured easy access to legal documents, enhancing transparency.",
         "Utilized HTML, CSS, JavaScript, and responsive design for a polished product."
      ],
    },
  ],
  education: [
    {
      school: "Insitut Teknologi Batam",
      href: "https://iteba.ac.id",
      degree: "Bachelor's Degree of Information Systems",
      logoUrl: "/companies/iteba.png",
      start: "2021",
      end: "Now",
    },
  ],
  projects: [
    {
      title: "Login Page - Internship BTP",
      href: "https://internship.btp.ac.id/login",
      dates: "September 2022",
      active: true,
      description:
        "Created the internship program login page from Figma designs in close collaboration with the Design Team.",
      technologies: [
        "Laravel",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://internship.btp.ac.id/login",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/internship.png",
      video: "",
    },
    {
      title: "KapanLibur",
      href: "https://kapan-libur.kriscode.cloud/",
      dates: "September 2023",
      active: true,
      description:
        "Inspired by the daily strugles of my co-workers and friends, I created this website to help them to find out when the next holiday is",
      technologies: [
        "Javascript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://kapan-libur.kriscode.cloud/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/chrystalio/KapanLibur",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/kapanLibur.png",
      video: "",
    },
  ],
  activities: [
    {
      title: "Infinite Learning",
      dates: "Sept 2024 - Now",
      location: "Batam, Riau Island Indonesia",
      position : "Web Development & UI UX Design",
      description: [],
      image:
        "/companies/il.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://infinitelearning.id",
        },
      ],
    },
    {
      title: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      dates: "Feb 2024 - Jul 2024",
      location: "DKI Jakarta, Indonesia",
      position : "Cloud Computing Cohort",
      description : [
        "Tutored peers (1:5) on deploying Docker images using Artifact Registry and Cloud Run",
        "Built and set up cloud infrastructure to support scalable applications",
        "Deployed machine learning models on Google Cloud Platform (GCP)",
        "Developed backend APIs and integrated them with machine learning models",
        "Deployed frontend applications and integrated them with backend APIs",
        "Worked on cloud-based solutions to optimize performance and scalability",
        "Implemented CI/CD pipelines using Cloud Build to streamline deployment processes",
        "Graduated with Distinction, placing in the top 10% of the Cloud Computing learning path"
      ],
      image:
        "/companies/bangkit.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://grow.google/intl/id_id/bangkit/",
        },
        {
          title: "EconoMe API",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/C241-PS364/EconoMe-API",
        },
        {
          title: "EconoMe API Documentation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://econome-api.kriscode.co/",
        }
      ],
    },
  ],
} as const;
