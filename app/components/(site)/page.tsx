import HomeAboutSection from './components/sections/About';
import HomeHeroSection from './components/sections/Hero';
import HomeMyWorkSection from './components/sections/MyWork';

const HomeScreen = () => {
	return (
		<>
			<HomeHeroSection />
			<HomeMyWorkSection />
			<HomeAboutSection />
		</>
	);
};

export default HomeScreen;
