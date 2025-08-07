export interface Event {
    id: string;
    name: string;
    link: string;
    image: string;
    description: string;
}

let eventIdCounter: number = 0;

export const events: Event[] = [
    {
        id: `event-${eventIdCounter++}`,
        name: "Mutex",
        link: "/events/mutex",
        image: "/fake-images/5.webp",
        description: "Join us for the IEEE ZSB Annual General Meeting to discuss our achievements and future plans."
    },
    {
        id: `event-${eventIdCounter++}`,
        name: "PES DAY",
        link: "/events/pes-day",
        image: "/fake-images/6.webp",
        description: "Participate in the IEEE ZSB Hackathon to showcase your coding skills and win exciting prizes."
    }
];
