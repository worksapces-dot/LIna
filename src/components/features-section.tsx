'use client'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { Mic, Calendar, Sparkles } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section id="features">
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground mt-4 text-4xl font-semibold">Personal AI, with you Anywhere</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">Lina lives a single wake word away - ready to instantly appear and help. Get assistance whether you&apos;re browsing, coding, or writing documents.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Card className="p-6 bg-muted/50 border-border/50">
                            <div className="flex aspect-video items-center justify-center">
                                <VoiceIllustration className="w-full" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-foreground text-xl font-semibold">Voice Control</h3>
                                <p className="text-muted-foreground mt-4 text-balance text-lg">Talk naturally to Lina. She understands context and responds with a human-like voice.</p>
                            </div>
                        </Card>
                        <Card className="p-6 bg-muted/50 border-border/50">
                            <div className="flex aspect-video items-center justify-center">
                                <CalendarIllustration />
                            </div>
                            <div className="text-center">
                                <h3 className="text-foreground text-xl font-semibold">Smart Calendar</h3>
                                <p className="text-muted-foreground mt-4 text-balance text-lg">Check your schedule, create events, and get reminders - all by voice.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

const VoiceIllustration = ({ className }: { className?: string }) => (
    <div className={cn('[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)]', className)}>
        <div className="flex flex-col items-center gap-4">
            <div className="relative">
                <div className="absolute inset-0 blur-xl bg-foreground/10 rounded-full" />
                <div className="relative flex items-end justify-center gap-1 h-24">
                    {[20, 35, 50, 70, 50, 35, 20].map((h, i) => (
                        <div 
                            key={i} 
                            className="w-2 rounded-full bg-foreground/60 animate-pulse" 
                            style={{ 
                                height: `${h}%`,
                                animationDelay: `${i * 100}ms`,
                                animationDuration: '1s'
                            }} 
                        />
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mic className="size-4" />
                <span>&quot;Hey Lina...&quot;</span>
            </div>
        </div>
    </div>
)

const CalendarIllustration = ({ className }: { className?: string }) => (
    <div className={cn('relative', className)}>
        <div className="bg-background border border-border/50 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-foreground" />
                    <span className="font-medium text-foreground">Today</span>
                </div>
                <span className="text-sm text-muted-foreground">Dec 30</span>
            </div>
            <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/30">
                    <div className="w-1 h-10 bg-foreground rounded-full" />
                    <div>
                        <p className="text-sm font-medium text-foreground">Team Meeting</p>
                        <p className="text-xs text-muted-foreground">9:00 AM - 10:00 AM</p>
                    </div>
                    <Sparkles className="size-4 text-muted-foreground ml-auto" />
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/20">
                    <div className="w-1 h-10 bg-foreground/50 rounded-full" />
                    <div>
                        <p className="text-sm font-medium text-foreground">Lunch with Alex</p>
                        <p className="text-xs text-muted-foreground">12:30 PM</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
