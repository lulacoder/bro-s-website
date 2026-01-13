"use client";

import React, { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [dots, setDots] = useState("");

    useEffect(() => {
        // Complete after 3 seconds
        const timer = setTimeout(() => {
            onComplete();
        }, 3000);

        // Animate dots
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
            {/* Spinner */}
            <div className="mb-8 h-12 w-12 animate-spin rounded-full border-4 border-[var(--border)] border-t-[var(--color-primary)]" />

            {/* Analyzing Text */}
            <h2 className="mb-2 text-xl font-semibold text-[var(--foreground)]">
                Analyzing your results{dots}
            </h2>

            <p className="max-w-xs text-sm text-[var(--muted)]">
                We are identifying the best business model for your specific situation.
            </p>
        </div>
    );
}
