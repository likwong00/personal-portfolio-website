import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Download, Mail, Phone } from "lucide-react";

const contactInfo = [
	{
		icon: Mail,
		label: "Email",
		value: "likwong2000@ymail.com",
		href: "mailto:likwong2000@ymail.com",
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+852 9656 6086",
		href: "tel:+85296566086",
	},
];

export function Contact() {
	return (
		<section id="contact" className="py-32 relative overflow-hidden">
			<div className="container mx-auto px-6 relative z-10">
				<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
					Contact
				</span>
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
						<span className="font-serif font-normal text-white">
							Get in touch!
						</span>
					</h2>
				</div>

				<div className="flex justify-center items-center gap-12 max-w-5xl mx-auto">
					{/* Contact Info */}
					<div className="space-y-6 animate-fade-in animation-delay-400 w-full max-w-md">
						<div className="glass rounded-3xl p-8">
							<h3 className="text-xl font-semibold mb-6">
								Contact Information
							</h3>
							<div className="space-y-4">
								{contactInfo.map((item, i) => (
									<a
										key={i}
										href={item.href}
										className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
									>
										<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
											<item.icon className="w-5 h-5 text-primary" />
										</div>
										<div>
											<div className="text-sm text-muted-foreground">
												{item.label}
											</div>
											<div className="font-medium">
												{item.value}
											</div>
										</div>
									</a>
								))}

								<a
									href="https://drive.google.com/file/d/1guoisRyGc7dVFV7MgOLMfxjsmzOv7uGp/view?usp=sharing"
									className="gap-4 p-4"
								>
									<AnimatedBorderButton>
										<Download className="w-5 h-5" />
										Download CV
									</AnimatedBorderButton>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
