export const MainHeaderThemes: [light: string[], dark: string[]] = [
	['bg-transparent'], // , "text-white"
	['bg-black'] // , "text-white"
];

const change_MAP = {
	light: MainHeaderThemes[0],
	dark: MainHeaderThemes[0]
};

type Theme = 'light' | 'dark';

export const changeMainHeaderTheme =
	(state: [enter: Theme, leave: Theme]) =>
	(entry: IntersectionObserverEntry) => {
		const mainHeader = document.getElementById('main-header');
		if (!mainHeader) return;

		debugger;

		const toRemove = entry.isIntersecting
			? change_MAP[state[1]]
			: change_MAP[state[0]];
		const toAdd = entry.isIntersecting
			? change_MAP[state[0]]
			: change_MAP[state[1]];

		mainHeader.classList.remove(...toRemove);
		mainHeader.classList.add(...toAdd);
	};

export const getCopyRightDate = () => {
	const baseYear = 2023;
	const currentYear = new Date().getFullYear();

	if (baseYear >= currentYear) return baseYear;

	return `${baseYear}-${currentYear}`;
};
