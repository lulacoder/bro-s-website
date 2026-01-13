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
        }, 400);
        return () => clearTimeout(timer);
    }, []);

    const handleYes = () => {
        window.location.href = REDIRECT_URL;
    };

    return (
        <div className="animate-in flex min-h-[70vh] flex-col px-4 py-6">
            <div className="mx-auto w-full max-w-md flex-1">
                {/* Back Button */}
                <button onClick={onBack} className="btn-back mb-6">
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
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--success)] px-4 py-1.5 text-sm font-medium text-white">
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Assessment Complete
                </div>

                {/* Result Message */}
                <p className="mb-8 text-lg leading-relaxed text-[var(--foreground)]">
                    Based on your answers, we&apos;ve identified an online business model that
                    aligns with your time, skills, and income goals — and is designed to
                    scale to <strong>$10K/month</strong> without ads, products, or technical
                    overwhelm.
                </p>

                {/* Question */}
                <h2 className="mb-8 text-xl font-semibold leading-relaxed text-[var(--foreground)] sm:text-2xl">
                    Would you like FREE, targeted training that shows the exact path for
                    your situation?
                </h2>

                {/* CTA Buttons */}
                {showCTA && (
                    <div className="animate-fade flex flex-col gap-3">
                        <button onClick={handleYes} className="btn-primary">
                            Yes! Send me the free targeted training.
                        </button>
                        <button className="btn-secondary">
                            No, I&apos;ll figure it out on my own.
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
