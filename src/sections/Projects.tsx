import { ArrowUpRight } from "lucide-react";

const projects = [
	{
		title: "Multiagent Privacy Awareness Simulation",
		description:
			"Final year BSc dissertation project. A multiagent model where we teach agents the idea of privacy by simulating a photo-sharing conumdrum  on social media. Analysis, findings and results are discussed in the research paper.",
		image: "/project1.png",
		tags: ["Python", "AI", "Data Analysis"],
		link: "https://github.com/likwong00/PrivacyModel",
	},
	{
		title: "Linking Galleries Map App",
		description:
			"A web app with a map view of all the museum pieces from the art meseum M Shed in Bristol. Showcasing each museum piece of interest with their original location along with description. A Java/Spring backend is also implemented with APIs for this data.",
		image: "/project2.png",
		tags: ["React", "JavaScript", "Java", "Spring"],
		link: "https://github.com/likwong00/LinkingGalleries",
	},
];

export function Projects() {
	return (
		<section id="projects" className="py-32 relative overflow-hidden">
			{/* Bg glows */}
			{/* <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
			<div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" /> */}
			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
					Projects
				</span>
				<div className="mx-auto max-w-3xl mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
						<span className="font-serif  font-normal text-white">
							Some past projects from university.
						</span>
					</h2>
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
							style={{ animationDelay: `${(idx + 1) * 100}ms` }}
						>
							{/* Image */}
							<div className="relative overflow-hidden aspect-video">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div
									className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
								/>
								{/* Overlay Links */}
								<div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<a
										href={project.link}
										className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
									>
										<ArrowUpRight className="w-5 h-5" />
									</a>
								</div>
							</div>

							{/* Content */}
							<div className="p-6 space-y-4">
								<div className="flex items-start justify-between">
									<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
										{project.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, tagIdx) => (
										<span
											key={tagIdx}
											className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
