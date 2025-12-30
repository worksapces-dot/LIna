'use client'
import { cn } from '@/lib/utils'
import React from 'react'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <LinaOrb className="size-8" />
            <span className="text-xl font-bold text-white">
                Lina
            </span>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return <LinaOrb className={cn('size-8', className)} />
}

export const LinaOrb = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn('size-8', className)}
            style={style}
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="orbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#a0a0a0" />
                    <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                <radialGradient id="orbShine" cx="30%" cy="30%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#orbGradient)" />
            <circle cx="50" cy="50" r="45" fill="url(#orbShine)" />
        </svg>
    )
}
