"use client";

import React from "react";

interface ProgressBarProps {
    progress: number;
    currentStep: number;
    totalSteps: number;
}

export function ProgressBar({ progress, currentStep, totalSteps }: ProgressBarProps) {
    return (
        <div className="w-full px-4 py-6">
            <div className="mx-auto max-w-md">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-[var(--text-secondary)]">
                        Step {currentStep} <span className="text-[var(--muted)]">/</span> {totalSteps}
                    </span>
                    <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)]">
                        {progress}% Complete
                    </span>
                </div>
                <div className="progress-track h-2 w-full overflow-hidden rounded-full">
                    <div
                        className="progress-fill-gradient h-full rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
