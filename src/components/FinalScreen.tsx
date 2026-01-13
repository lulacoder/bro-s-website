"use client";

import React, { useState, useEffect } from "react";

interface FinalScreenProps {
    onBack: () => void;
}

const REDIRECT_URL = "https://millionairepartnership.com/webclass-d24#aff=LoneInk";

export function FinalScreen({ onBack }: FinalScreenProps) {
    const [showCTA, setShowCTA] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCTA(true);
        }, 600);
        return () => clearTimeout(timer);
    }, []);

    const handleYes = () => {
        window.location.href = REDIRECT_URL;
    };

    return (
        <div className="animate-in flex min-h-[70vh] flex-col px-4 py-6">
            <div className="mx-auto w-full max-w-md flex-1">
                {/* Back Button */}
                <button onClick={onBack} className="glass-btn inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium mb-8 text-[var(--muted)] hover:text-[var(--text-main)]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    Back
                </button>

                {/* Result Badge */}
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-sm font-semibold text-green-500 tracking-wide uppercase">Analysis Complete</span>
                </div>

                {/* Result Message */}
                <div className="mb-10 space-y-4">
                    <p className="text-xl leading-relaxed text-[var(--text-secondary)]">
                        Based on your answers, we&apos;ve identified a specific business model that matches your profile.
                    </p>

                    <div className="glass-card rounded-2xl p-6 border-l-4 border-l-[var(--color-primary-start)]">
                        <p className="text-lg text-[var(--text-main)]">
                            It&apos;s designed to scale to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] font-bold">$10K/month</span> without paids ads, products, or technical overwhelm.
                        </p>
                    </div>
                </div>

                {/* Question */}
                <h2 className="mb-8 text-2xl font-bold leading-tight text-[var(--text-main)]">
                    Would you like FREE, targeted training that reveals this exact path?
                </h2>

                {/* CTA Buttons */}
                {showCTA && (
                    <div className="animate-slide-up sticky bottom-0 w-full">
                        {/* Gradient fade for bottom sticking - subtle difference per theme but generic transparent works */}
                        <div className="absolute inset-x-0 bottom-full h-12 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />

                        <div className="bg-[var(--background)]/80 backdrop-blur-sm pb-8 pt-4">
                            <button
                                onClick={handleYes}
                                className="btn-primary-gradient w-full rounded-2xl py-5 px-6 text-lg font-bold uppercase tracking-wide flex items-center justify-center gap-3 group"
                            >
                                <span>Yes! I want the FREE targeted training</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                            <p className="mt-4 text-center text-xs text-[var(--muted)]">
                                Limited availability training • 100% Free
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
