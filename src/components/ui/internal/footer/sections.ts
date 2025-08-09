interface Section {
	title: string;
	links: SectionContentLink[];
}

// interface SectionContent {
// }

interface SectionContentLink {
	name: string;
	href: string;
	authHandler?: (boolean) => boolean;
}

export const sections: Section[] = [
	{
		title: "Quick Access",
		links: [
			{
				name: "Create an Account",
				href: "/auth/register",
				authHandler: (isAuth) => !isAuth,
			},
			{
				name: "Login",
				href: "/auth/login",
				authHandler: (isAuth) => !isAuth,
			},
			{
				name: "Profile",
				href: "/account",
				authHandler: (isAuth) => isAuth,
			},
			{
				name: "Settings",
				href: "/account/settings",
				authHandler: (isAuth) => isAuth,
			},
			{
				name: "Logout",
				href: "/auth/logout",
				authHandler: (isAuth) => isAuth,
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
	// {
	// 	title: "PES DAY",
	// 	links: [
	// 		{
	// 			name: "About PES Day",
	// 			href: "/events/pes-day",
	// 		},
	// 		{
	// 			name: "Attend PES Day",
	// 			href: "/events/pes-day/latest",
	// 		},
	// 	],
	// },
];
