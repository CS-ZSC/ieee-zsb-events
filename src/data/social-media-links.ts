export interface SocialMediaLink {
  id: number;
  name: string;
  href: string;
  icon: string;
}

let idCounter: number = 0;

const SocialMediaLinks: SocialMediaLink[] = [
  {
    id: idCounter++,
    name: "Facebook",
    href: "https://www.facebook.com/IEEEZSB",
    icon: "garden:facebook-fill-16",
  },
  {
    id: idCounter++,
    name: "Instagram",
    href: "https://www.instagram.com/ieeezsb/",
    icon: "qlementine-icons:instagram-fill-24",
  },
  {
    id: idCounter++,
    name: "Linkedin",
    href: "https://www.linkedin.com/company/ieeezsb/posts/?feedView=all",
    icon: "pajamas:linkedin",
  },
  {
    id: idCounter++,
    name: "X",
    href: "https://x.com/ieeezsb",
    icon: "hugeicons:new-twitter",
  },
];

export default SocialMediaLinks;
