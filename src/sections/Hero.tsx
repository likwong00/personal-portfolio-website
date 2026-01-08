import { ChevronDown, Github, Linkedin } from "lucide-react";

import professionalPortrait from "/professional-portrait.png";
import heroBG from "/hero-bg.jpg";

const skills = [
	"React",
	"TypeScript",
	"JavaScript",
	"Python",
	"Go",
	"AWS",
	"Java",
	"Node.js",
	"REST API",
	"React Native",
	"Redux",
	"Tailwind CSS",
	"Jest",
	"Playwright",
	"Storybook",
	"Jenkins",
	"HTML",
	"CSS",
	"Git",
];

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
			{/* Bg */}
			<div className="absolute inset-0">
				<img
					src={heroBG}
					className="w-full h-full object-cover opacity-95"
				/>
				<div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
			</div>

			{/* Content */}
			<div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Column - Text Content */}
					<div className="space-y-8">
						{/* Headline */}
						<div className="space-y-4">
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
								Hi! I'm Lik,
								<br />a {""}
								<span className="text-primary glow-text">
									Fullstack Software Engineer.
								</span>
								<br />
							</h1>
						</div>

						{/* Social Links */}
						<div className="flex items-center gap-4 animate-fade-in animation-delay-400">
							<span className="text-sm text-muted-foreground">
								Find me on:{" "}
							</span>
							{[
								{
									icon: Github,
									href: "https://github.com/likwong00/",
								},
								{
									icon: Linkedin,
									href: "https://www.linkedin.com/in/lik-wong/",
								},
							].map((social, idx) => (
								<a
									key={idx}
									href={social.href}
									className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
								>
									{<social.icon className="w-5 h-5" />}
								</a>
							))}
						</div>
					</div>
					{/* Right Column - Profile Image */}
					<div className="relatice animate-fade-in animation-delay-300">
						{/* Profile Image */}
						<div className="relative max-w-md mx-auto">
							<div
								className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
							/>
							<div className="relative glass rounded-3xl p-2 glow-border">
								<img
									src={professionalPortrait}
									className="w-full aspect-4/5 object-cover rounded-2xl"
								/>

								{/* Floating Badge */}
								<div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
									<div className="flex items-center gap-3">
										<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
										<span className="text-sm font-medium">
											Available for work
										</span>
									</div>
								</div>
								{/* Stats Badge */}
								<div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
									<div className="text-2xl font-bold text-primary">
										3+
									</div>
									<div className="text-xs text-muted-foreground">
										Years Exp.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Skills Section */}
				<div className="mt-20 animate-fade-in animation-delay-600">
					<p className="text-sm text-muted-foreground mb-6 text-center">
						Technologies I work with
					</p>
					<div className="relative overflow-hidden">
						<div
							className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
						/>
						<div
							className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
						/>
						<div className="flex animate-marquee">
							{[...skills, ...skills].map((skill, idx) => (
								<div key={idx} className="shrink-0 px-8 py-4">
									<span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
										{skill}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div
				className="absolute bottom-0 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
			>
				<a
					href="#about"
					className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
				>
					<span className="text-xs uppercase tracking-wider">
						Scroll
					</span>
					<ChevronDown className="w-6 h-6 animate-bounce" />
				</a>
			</div>
		</section>
	);
}
