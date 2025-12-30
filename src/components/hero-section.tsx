'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { HeroHeader } from './header'
import { Download, Sparkles, Sparkle, Mic, Brain, Calendar } from 'lucide-react'
import SiriOrb from '@/components/ui/siri-orb'
import { Globe } from '@/components/ui/globe'

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.3, 0.3, 0.3] as [number, number, number],
  markerColor: [1, 1, 1] as [number, number, number],
  glowColor: [0.4, 0.4, 0.4] as [number, number, number],
  markers: [
    { location: [14.5995, 120.9842] as [number, number], size: 0.03 },
    { location: [19.076, 72.8777] as [number, number], size: 0.1 },
    { location: [23.8103, 90.4125] as [number, number], size: 0.05 },
    { location: [30.0444, 31.2357] as [number, number], size: 0.07 },
    { location: [39.9042, 116.4074] as [number, number], size: 0.08 },
    { location: [-23.5505, -46.6333] as [number, number], size: 0.1 },
    { location: [19.4326, -99.1332] as [number, number], size: 0.1 },
    { location: [40.7128, -74.006] as [number, number], size: 0.1 },
    { location: [34.6937, 135.5022] as [number, number], size: 0.05 },
    { location: [41.0082, 28.9784] as [number, number], size: 0.06 },
    { location: [51.5074, -0.1278] as [number, number], size: 0.08 },
    { location: [48.8566, 2.3522] as [number, number], size: 0.07 },
    { location: [35.6762, 139.6503] as [number, number], size: 0.09 },
  ],
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main>
                <section className="relative overflow-hidden min-h-screen">
                    {/* Globe background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                        <Globe config={GLOBE_CONFIG} className="!max-w-[800px]" />
                    </div>
                    
                    <div className="py-28 md:py-40 relative z-10">
                        <div className="mx-auto max-w-5xl px-6 text-center">
                            <div>
                                <Link
                                    href="#"
                                    className="hover:bg-white/5 mx-auto flex w-fit items-center justify-center gap-2 rounded-md py-0.5 pl-1 pr-3 transition-colors duration-150">
                                    <div
                                        aria-hidden
                                        className="relative flex size-6 items-center justify-center rounded-lg bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-md shadow-black/30 ring-1 ring-white/10">
                                        <div className="absolute inset-x-0 inset-y-1.5 border-y border-dotted border-white/20"></div>
                                        <div className="absolute inset-x-1.5 inset-y-0 border-x border-dotted border-white/20"></div>
                                        <Sparkle className="size-3 fill-white stroke-white drop-shadow" />
                                    </div>
                                    <span className="font-medium text-white">Introducing Lina AI</span>
                                </Link>
                                
                                <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
                                    Meet{' '}
                                    <span className="text-white">
                                        Lina
                                    </span>
                                    , Your Personal AI Assistant
                                </h1>
                                
                                <p className="text-white/60 mx-auto my-8 max-w-2xl text-balance text-xl">
                                    Voice-powered AI that manages your calendar, answers questions, controls your computer, and learns your preferences. Like having a personal assistant that never sleeps.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <RainbowButton asChild size="lg">
                                        <Link href="#download">
                                            <Download className="mr-2 size-5" />
                                            <span>Download for Windows</span>
                                        </Link>
                                    </RainbowButton>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="border-white/20 hover:bg-white/5">
                                        <Link href="#features">
                                            <span>See Features</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Animated Orb Preview */}
                        <div className="relative mt-16 md:mt-24">
                            <div className="mx-auto max-w-lg px-6">
                                <div className="relative">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 blur-3xl bg-white/10 rounded-full" />
                                    
                                    {/* Main orb container */}
                                    <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
                                        <div className="flex flex-col items-center">
                                        {/* Animated orb */}
                                            <div className="relative">
                                                <div className="absolute inset-0 animate-pulse blur-2xl bg-blue-500/20 rounded-full opacity-50" />
                                                <SiriOrb 
                                                    size="128px" 
                                                    className="relative animate-float"
                                                    colors={{
                                                        c1: 'oklch(70% 0.25 250)',
                                                        c2: 'oklch(65% 0.3 290)',
                                                        c3: 'oklch(75% 0.2 220)'
                                                    }}
                                                    animationDuration={12}
                                                />
                                            </div>
                                            
                                            {/* Status text */}
                                            <p className="mt-6 text-lg text-white/80 font-medium">
                                                &quot;Hey Lina, what&apos;s on my calendar today?&quot;
                                            </p>
                                            
                                            {/* Feature pills */}
                                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                                                <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white/70">
                                                    <Mic className="size-3" /> Voice Control
                                                </span>
                                                <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white/70">
                                                    <Brain className="size-3" /> AI Powered
                                                </span>
                                                <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white/70">
                                                    <Calendar className="size-3" /> Smart Calendar
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
