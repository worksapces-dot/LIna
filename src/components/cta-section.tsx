'use client'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { Button } from '@/components/ui/button'
import { Download, Github } from 'lucide-react'
import Link from 'next/link'
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
    { location: [40.7128, -74.006] as [number, number], size: 0.1 },
    { location: [51.5074, -0.1278] as [number, number], size: 0.08 },
    { location: [35.6762, 139.6503] as [number, number], size: 0.09 },
    { location: [-33.8688, 151.2093] as [number, number], size: 0.07 },
    { location: [52.52, 13.405] as [number, number], size: 0.06 },
  ],
}

export default function CTASection() {
    return (
        <section id="download" className="py-24 relative overflow-hidden">
            {/* Globe background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                <Globe config={GLOBE_CONFIG} className="!max-w-[600px]" />
            </div>
            
            <div className="mx-auto max-w-5xl px-6 relative z-10">
                <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-12 text-center">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '32px 32px'
                        }} />
                    </div>
                    
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-4 text-white">
                            Ready to Meet Lina?
                        </h2>
                        <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
                            Download Lina for free and experience the future of personal AI assistants. Available for Windows.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <RainbowButton asChild size="lg">
                                <Link href="https://github.com/worksapces-dot/Lina/releases/download/v1.0.1/Lina.Setup.1.0.0.exe">
                                    <Download className="mr-2 size-5" />
                                    Download for Windows
                                </Link>
                            </RainbowButton>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/20 hover:bg-white/5">
                                <Link href="https://github.com" target="_blank">
                                    <Github className="mr-2 size-5" />
                                    View on GitHub
                                </Link>
                            </Button>
                        </div>
                        
                        <p className="text-white/40 text-sm mt-6">
                            Version 1.0.0 • Windows 10/11 • ~115MB
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
