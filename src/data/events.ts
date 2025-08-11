export interface Trophy {
  id: number;
  place: "1st" | "2nd" | "3rd";
  amount: string;
}

export interface Certificate {
  id: number;
  title: string;
  description: string;
}

export interface Competition {
  id: number;
  name: string;
  shortName: string;
  image: string;
  description: string;
  link: string;
  rulebook?: string;
  overview: string;
  trophiesDescription: string;
  trophies?: Trophy[];
  certificates?: Certificate[];
  rulesDescription: string;
}

export interface Speaker {
  id: number;
  name: string;
  title: string;
  email: string;
  linkedin: string;
  avatarSrc: string;
}

export interface Sponsor {
  id: number;
  image: string;
}

export interface Event {
  id: number;
  name: string;
  slug?: string;
  description: string;
  link: string;
  image: string;
  registerLink: string;
  overview: string;
  competitionsDescription: string;
  competitions: Competition[];
  speakersDescription: string;
  speakers?: Speaker[];
  sponsorsDescription: string;
  sponsors?: Sponsor[];
}

let mutualId = 0;

export const eventsData: Event[] = [
  {
    id: mutualId++,
    name: "Mutex 2025",
    slug: "mutex",
    description:
      "MUTEX Summit is back as the biggest technological event in the Delta region, where technology meets entrepreneurship in an extraordinary experience. Under the theme 'Pirates and the Lost Treasure', participants will embark on an epic voyage through seas, storms, and challenges! The summit features expert-led sessions and workshops across diverse fields, showcases innovative startups solving real-world problems with cutting-edge technology, and hosts exciting competitions that push participants' skills and creativity to their limits. After a successful journey since 2017 and a brief pause due to COVID, MUTEX Summit 2025 promises to be a transformative adventure.",
    link: "/events/mutex",
    image: "/events/mutex/mutex.png",
    registerLink: "https://bit.ly/MUTEX_SUMMIT_25",
    overview:
      "This year's Mutex focuses on the fusion of technology and entrepreneurship, offering participants the opportunity to compete, learn, and connect with industry leaders. From hackathons and robotics challenges to startup pitch competitions, Mutex 2025 is where ideas meet execution.",
    competitionsDescription:
      "Mutex 2025 hosts a diverse set of competitions covering software development, robotics, green tech, and cybersecurity, with rewards that recognize innovation and excellence.",
    competitions: [
      {
        id: mutualId++,
        name: "Semaphore",
        shortName: "semaphore",
        image: "/events/mutex/competitions/semaphore.png",
        description:
          "A timed coding challenge testing problem-solving, algorithmic thinking, and efficiency, offering a competitive platform to enhance skills and impress tech recruiters.",
        link: "/events/mutex/semaphore",
        // rulebook: "/files/rulebooks/semaphore.pdf",
        overview:
          "A fast-paced, intellectually demanding coding showdown where individuals and teams solve algorithmic problems under strict time limits. The competition's challenges span multiple domains — from data structures and dynamic programming to graph theory and optimization — requiring participants to think critically, code efficiently, and debug under pressure. Each round grows progressively harder, pushing participants to the limits of their problem-solving abilities. Beyond testing technical skills, Semaphore encourages collaboration, knowledge sharing, and the exploration of new algorithms. Top performers not only earn prizes but also gain visibility among recruiters from leading tech firms attending Mutex.",
        trophiesDescription:
          "Top problem-solvers will receive cash prizes and recognition certificates.",
        // trophies: [
        //   { id: mutualId++, place: "2nd", amount: "10,000 LE" },
        //   { id: mutualId++, place: "1st", amount: "20,000 LE" },
        //   { id: mutualId++, place: "3rd", amount: "5,000 LE" },
        // ],
        rulesDescription:
          "All participants must follow the official guidelines detailed in the competition rulebook. Review the full rules via the provided link before competing.",
      },
      {
        id: mutualId++,
        name: "Deadlock CTF",
        shortName: "deadlock",
        image: "/events/mutex/competitions/deadlock.png",
        description:
          "A cybersecurity contest solving cryptography, hacking, and forensics challenges to capture digital flags under pressure in a controlled environment.",
        link: "/events/mutex/deadlock",
        // rulebook: "/files/rulebooks/deadlock.pdf",
        overview:
          "A high-stakes cybersecurity competition where participants compete to capture virtual “flags” hidden in intentionally vulnerable systems. The event covers a wide range of cybersecurity disciplines, including web exploitation, reverse engineering, binary analysis, cryptography, digital forensics, and network security. Challenges vary from beginner-friendly to advanced, ensuring engagement for both newcomers and seasoned ethical hackers. Teams work against the clock to identify vulnerabilities, exploit them ethically, and secure points before rivals do. Deadlock not only tests technical skill but also strategic thinking, teamwork, and adaptability — all critical traits in the fast-evolving world of cybersecurity. Top teams will gain recognition from security firms and potential recruitment opportunities.",
        trophiesDescription:
          "Prizes for the top three teams, plus exclusive mentorship with cybersecurity experts.",
        // trophies: [
        //   { id: mutualId++, place: "2nd", amount: "8,000 LE" },
        //   { id: mutualId++, place: "1st", amount: "15,000 LE" },
        //   { id: mutualId++, place: "3rd", amount: "5,000 LE" },
        // ],
        rulesDescription:
          "All participants must follow the official guidelines detailed in the competition rulebook. Review the full rules via the provided link before competing.",
      },
      {
        id: mutualId++,
        name: "Formula Firefighting",
        shortName: "fire-fighting",
        image: "/events/mutex/competitions/ffc.png",
        description:
          "A robotics challenge to design autonomous robots that detect and extinguish fires, testing engineering, innovation, and teamwork in dynamic environments.",
        link: "/events/mutex/fire-fighting",
        // rulebook: "/files/rulebooks/fire-fighting.pdf",
        overview:
          "An intense robotics engineering challenge where teams design, build, and program autonomous robots to detect and extinguish simulated fires in a controlled arena. The competition requires participants to integrate hardware design, sensor systems, real-time decision-making algorithms, and mechanical precision into a single, cohesive machine. The arena features varying layouts and obstacles to test adaptability, navigation, and efficiency under realistic conditions. Teams must balance speed and accuracy, as points are awarded not just for putting out fires but for safe and strategic execution. This event is an opportunity for robotics enthusiasts to showcase creativity, engineering excellence, and teamwork.",
        trophiesDescription:
          "Awards will be given for speed, efficiency, and innovative robot design.",
        // trophies: [
        //   { id: mutualId++, place: "2nd", amount: "7,000 LE" },
        //   { id: mutualId++, place: "1st", amount: "12,000 LE" },
        //   { id: mutualId++, place: "3rd", amount: "4,000 LE" },
        // ],
        rulesDescription:
          "All participants must follow the official guidelines detailed in the competition rulebook. Review the full rules via the provided link before competing.",
      },
      {
        id: mutualId++,
        name: "ECO-Entrepreneurship",
        shortName: "eco-e",
        image: "/events/mutex/competitions/enrginity.png",
        description:
          "A sustainability challenge creating smart city solutions using IoT and big data to enhance urban living, combining innovation, environmental responsibility, and economic growth.",
        link: "/events/mutex/eco-e",
        // rulebook: "/files/rulebooks/eco-e.pdf",
        overview:
          "Participants will develop innovative, sustainable business models addressing the challenges of modern urban living. This year's theme, “Unlock the Future of Urban Living”, emphasizes the use of smart technologies, IoT, and big data to improve the quality of life in cities. Competitors will work in multidisciplinary teams to design solutions that are environmentally friendly, economically viable, and socially impactful. Throughout the competition, they will receive mentorship from industry experts, refine their pitches, and present to a panel of investors, startup incubators, and sustainability specialists. The goal is to inspire projects that can transition from concept to market-ready solutions, making tangible improvements in urban communities.",
        trophiesDescription:
          "Cash prizes for the top three innovative projects.",
        // trophies: [
        //   { id: mutualId++, place: "2nd", amount: "15,000 LE" },
        //   { id: mutualId++, place: "1st", amount: "25,000 LE" },
        //   { id: mutualId++, place: "3rd", amount: "8,000 LE" },
        // ],
        rulesDescription:
          "All participants must follow the official guidelines detailed in the competition rulebook. Review the full rules via the provided link before competing.",
      },
    ],
    speakersDescription:
      "Our lineup features entrepreneurs, engineers, and innovators delivering inspiring talks and hands-on workshops.",
    // speakers: [
    //   {
    //     id: mutualId++,
    //     name: "Dr. Lina Farouk",
    //     title: "Smart Cities Researcher",
    //     email: "lina.farouk@example.com",
    //     linkedin: "https://linkedin.com/in/linafarouk",
    //     avatarSrc: "/fake-images/1.webp",
    //   },
    //   {
    //     id: mutualId++,
    //     name: "Omar Hany",
    //     title: "Cybersecurity Specialist",
    //     email: "omar.hany@example.com",
    //     linkedin: "https://linkedin.com/in/omarhany",
    //     avatarSrc: "/fake-images/1.webp",
    //   },
    //   {
    //     id: mutualId++,
    //     name: "Sara El-Masry",
    //     title: "GreenTech Entrepreneur",
    //     email: "sara.elmasry@example.com",
    //     linkedin: "https://linkedin.com/in/saraelmasry",
    //     avatarSrc: "/fake-images/1.webp",
    //   },
    //   {
    //     id: mutualId++,
    //     name: "John Mikhail",
    //     title: "AI & IoT Innovator",
    //     email: "john.mikhail@example.com",
    //     linkedin: "https://linkedin.com/in/johnmikhail",
    //     avatarSrc: "/fake-images/1.webp",
    //   },
    // ],
    sponsorsDescription:
      "Mutex 2025 is supported by leading tech companies, incubators, and educational institutions committed to fostering innovation.",
    // sponsors: [
    //   { id: mutualId++, image: "/fake-images/1.webp" },
    //   { id: mutualId++, image: "/fake-images/1.webp" },
    //   { id: mutualId++, image: "/fake-images/1.webp" },
    //   { id: mutualId++, image: "/fake-images/1.webp" },
    //   { id: mutualId++, image: "/fake-images/1.webp" },
    // ],
  },
];
