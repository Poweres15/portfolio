import { InlineCode } from "@/once-ui/components"

const person = {
  firstName: "Poweres",
  lastName: "Kittikonrut",
  get name() {
    return `${this.firstName} ${this.lastName}`
  },
  role: "QA Engineer",
  avatar: "/images/avatar.png",
  location: "Asia/Bangkok", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
}

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Poweres15",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/poweres-kittikonrut-6b3853137/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:arm_liquid1@hotmail.com",
  },
]

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>QA Engineer</>,
  subline: (
    <>
      I'm Poweres, a QA engineer at <InlineCode>Xponential co. ltd</InlineCode>,
      where I create And Develop
      <br /> Tests And CI Pipline. After hours, I build my own projects.
    </>
  ),
}

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A Bangkok-based QA Engineer with a passion for creating seamless,
        reliable user experiences through meticulous testing and automation. Her
        expertise lies in building robust quality assurance processes that
        ensure stability and efficiency across digital products. From designing
        test strategies to implementing cross-platform automation, Selene is
        dedicated to ensuring that every product she works on meets high
        standards of quality and performance.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Xponential co. ltd",
        timeframe: "2023 - Present",
        role: "Senior QA Engineer",
        achievements: [
          <>
            Developed and Implemented a Comprehensive CI Pipeline for Mobile
            Automation: Created a fully automated continuous integration
            pipeline to support end-to-end mobile testing on both iOS and
            Android platforms
          </>,
          <>
            Built a Real-Time Dashboard for Automation Monitoring: Designed and
            deployed an interactive platform that provides live visibility into
            the status and performance of automated tests
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Mobile Automatio",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Brikl",
        timeframe: "2020 - 2023",
        role: "Senior QA Engineer",
        achievements: [
          <>
            Engineered a Robust CI Automation Pipeline Using GitHub Actions and
            Playwright: Architected and built a complete CI pipeline from the
            ground up, leveraging GitHub Actions to automate end-to-end testing
            with Playwright.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Mah Fah Luang University",
        description: <>Hospitality Industry Management</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Test Automation",
        description: (
          <>
            Expertise in Building Test Automation Frameworks from the Ground Up.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-04.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
}

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
}

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
}

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
}

export { person, social, newsletter, home, about, blog, work, gallery }
