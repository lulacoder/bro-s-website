"use client";

import React from "react";

interface ProgressBarProps {
    progress: number;
    currentStep: number;
    totalSteps: number;
}

export function ProgressBar({ progress, currentStep, totalSteps }: ProgressBarProps) {
    return (
        <div className="w-full px-4 py-3">
            <div className="mx-auto max-w-md">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-[var(--muted)]">
                        Question {currentStep} of {totalSteps}
                    </span>
                    <span className="text-xs font-medium text-[var(--muted)]">
                        {progress}%
                    </span>
                </div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
