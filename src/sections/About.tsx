import { Code2, Rocket, Users, Wrench } from "lucide-react";

const highlights = [
	{
		icon: Code2,
		title: "Clean Code",
		description:
			"Writing maintainable, scalable code that is easily understood by other developers.",
	},
	{
		icon: Rocket,
		title: "Performance",
		description:
			"Optimising for speed and delivering lightning-fast user experiences.",
	},
	{
		icon: Wrench,
		title: "Test-driven",
		description:
			"Consistently enforcing test driven development (TDD), guaranteeing correct results.",
	},
	{
		icon: Users,
		title: "Collaboration",
		description:
			"Working closely with international teams of various size to bring out the best of everyone.",
	},
];

export function About() {
	return (
		<section id="about" className="py-32 relative overflow-hidden">
			<div className="container mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Column */}
					<div className="space-y-8">
						<div className="animate-fade-in">
							<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
								About Me
							</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
							<span className="font-serif italic font-normal text-white">
								Looking for my next opportunity in
							</span>{" "}
							Hong Kong
						</h2>

						<div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
							<p>
								I'm a passionate software engineer with over 3
								years of experience crafting production-grade
								React/TypeScript web applications and
								cloud-based backend systems.
							</p>
							<p>
								Originally based in UK, I graduated with a BSc
								in Computer Science at University of Bristol.
								There I started my career as an intern for a
								job-finding app called Byto. Then it lead to my
								full-time jobs post-graduation in Samsung
								Cambridge Solution Centre, and later on YouView
								TV.
							</p>
							<p>
								Moving back to Hong Kong for personal and family
								reasons, I'm ready for new challenges.
							</p>
							<p>
								When I'm not coding, you'll find me bashing the
								drums, working out in the gym, or grinding the
								ranked ladder of Teamfight Tactics.
							</p>
						</div>
					</div>

					{/* Right Column - Hilights */}
					<div className="grid sm:grid-cols-2 gap-6">
						{highlights.map((item, idx) => (
							<div
								key={idx}
								className="glass p-6 rounded-2xl animate-fade-in"
								style={{
									animationDelay: `${(idx + 1) * 100}ms`,
								}}
							>
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
									<item.icon className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-lg font-semibold mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-muted-foreground">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
