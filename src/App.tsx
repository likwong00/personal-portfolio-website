import { Navbar } from "@/layout/Navbar"
import { Footer } from "@/layout/Footer"
import { About } from "@/sections/About"
import { Experience } from "@/sections/Experience"
import { Hero } from "@/sections/Hero"
import { Projects } from "@/sections/Projects"
import { Contact } from "@/sections/Contact"

function App() {

	return (
		<div className="min-h-screen overflow-x-hidden">
			<Navbar/>
			<main>
				<Hero/>
				<About/>
				<Experience/>
				<Projects/>
				<Contact/>
			</main>
			<Footer/>
		</div>
	)
}

export default App
