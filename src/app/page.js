"use client";
import ClientStories from "./(home)/ClientStories";
import Contact from "./(home)/Contact";
import HeroSection from "./(home)/HeroSection";
import ImpactSection from "./(home)/ImpactSection";
import PresenceSection from "./(home)/PresenceSection";
import WhoWeAre from "./(home)/WhoWeAre";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<WhoWeAre />
			<ImpactSection />
			<PresenceSection />
			<ClientStories />
			<Contact />
		</main>
	);
}
