"use client";

import React, { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 8000);

        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
        }, 500);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [onComplete]);

    return (
        <div className="animate-in flex min-h-[60vh] flex-col items-center justify-center px-4 py-8 text-center">
            {/* Animated Orb */}
            <div className="relative mb-12">
                <div className="absolute inset-0 animate-ping rounded-full bg-[var(--color-primary-start)] opacity-20 blur-xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-start)] to-[var(--color-primary-end)] shadow-2xl shadow-[var(--color-primary-start)]/30">
                    <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-white" />
                </div>
            </div>

            {/* Analyzing Text */}
            <h2 className="mb-3 text-2xl font-bold text-[var(--text-main)]">
                Analyzing Results{dots}
            </h2>

            <p className="max-w-xs text-sm text-[var(--text-secondary)] animate-pulse">
                Identifying the perfect business model for your goals...
            </p>
        </div>
    );
}
