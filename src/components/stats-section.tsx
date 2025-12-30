'use client'
import { NumberTicker } from '@/components/ui/number-ticker'

const stats = [
    { value: 12, suffix: '+', label: 'AI Features' },
    { value: 50, suffix: 'ms', label: 'Response Time' },
    { value: 24, suffix: '/7', label: 'Always Available' },
    { value: 100, suffix: '%', label: 'Free to Use' },
]

export default function StatsSection() {
    return (
        <section className="py-16 border-y border-white/10">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white">
                                <NumberTicker value={stat.value} delay={0.2 * index} />
                                <span>{stat.suffix}</span>
                            </div>
                            <p className="text-white/50 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
