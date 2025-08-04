interface Section {
	title: string;
	links: SectionContentLink[];
}

// interface SectionContent {
// }

interface SectionContentLink {
	name: string;
	href: string;
}

export const sections: Section[] = [
	{
		title: "Quick Access",
		links: [
			{
				name: "Create an Account",
				href: "/auth/register",
			},
			{
				name: "Login",
				href: "/auth/login",
			},
			{
				name: "Profile",
				href: "/account",
			},
			{
				name: "Settings",
				href: "/account/settings",
			},
		],
	},
	{
		title: "MUTEX",
		links: [
			{
				name: "About Mutex",
				href: "/events/mutex",
			},
			{
				name: "Attend Mutex",
				href: "/events/mutex/latest",
			},
		],
	},
	{
		title: "PES DAY",
		links: [
			{
				name: "About PES Day",
				href: "/events/pes-day",
			},
			{
				name: "Attend PES Day",
				href: "/events/pes-day/latest",
			},
		],
	},
];
