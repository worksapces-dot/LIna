import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Alex Chen',
            role: 'Software Developer',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
            content: "Lina has completely changed how I work. I just say 'Hey Lina, open VS Code and play some focus music' and I'm ready to code. It's like having a personal assistant that actually understands me.",
        },
        {
            name: 'Sarah Miller',
            role: 'Product Manager',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
            content: "The Google Calendar integration is amazing. I ask Lina about my schedule while getting ready in the morning, and she gives me a perfect briefing. No more checking my phone constantly.",
        },
        {
            name: 'James Wilson',
            role: 'Freelancer',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
            content: "The web search feature is incredible. I can ask any question and get instant, summarized answers. It's like having Google and ChatGPT combined, but with voice control.",
        },
    ]

    return (
        <section id="testimonials" className="py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        Loved by Early Users
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        See what people are saying about their experience with Lina.
                    </p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="bg-black/40 rounded-2xl rounded-bl-none border border-white/10 px-5 py-4 flex-1">
                                <p className="text-white/80">{testimonial.content}</p>
                            </div>
                            <div className="mt-4 flex items-center gap-3">
                                <Avatar className="size-10 border-2 border-white/20">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                    <AvatarFallback className="bg-white text-black">
                                        {testimonial.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium text-white">{testimonial.name}</div>
                                    <div className="text-white/50 text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
