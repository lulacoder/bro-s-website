"use client";

import React from "react";

interface QuestionSlideProps {
    question: string;
    options: string[];
    selectedAnswer?: string;
    onSelect: (answer: string) => void;
    onBack?: () => void;
    showBack: boolean;
}

export function QuestionSlide({
    question,
    options,
    selectedAnswer,
    onSelect,
    onBack,
    showBack,
}: QuestionSlideProps) {
    return (
        <div className="animate-in flex min-h-[60vh] flex-col px-4 py-6">
            <div className="mx-auto w-full max-w-md flex-1">
                {/* Back Button */}
                {showBack && onBack && (
                    <button onClick={onBack} className="glass-btn inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium mb-6 animate-fade-in text-[var(--muted)] hover:text-[var(--text-main)]">
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
                )}

                {/* Question */}
                <h2 className="mb-8 text-xl font-semibold leading-relaxed text-[var(--text-main)] sm:text-2xl animate-slide-up bg-gradient-to-br from-[var(--text-main)] to-[var(--text-secondary)] bg-clip-text">
                    {question}
                </h2>

                {/* Options */}
                <div className="flex flex-col gap-3">
                    {options.map((option, index) => {
                        const isSelected = selectedAnswer === option;
                        return (
                            <button
                                key={index}
                                onClick={() => onSelect(option)}
                                className={`
                                    group flex w-full items-center justify-between rounded-2xl p-4 text-left font-medium transition-all duration-300
                                    ${isSelected
                                        ? "quiz-btn-selected font-semibold"
                                        : "glass-card hover:bg-[var(--color-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-main)]"
                                    }
                                    active:scale-[0.98]
                                `}
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                <span className="text-base">{option}</span>
                                <span
                                    className={`
                                        ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300
                                        ${isSelected ? "bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] opacity-100 scale-100" : "bg-[var(--muted)]/20 opacity-0 scale-50 group-hover:opacity-50 group-hover:scale-100"}
                                    `}
                                >
                                    {isSelected ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="animate-fade-in"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    ) : (
                                        <div className="h-2 w-2 rounded-full bg-[var(--muted)]/50" />
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
