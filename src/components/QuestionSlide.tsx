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
                    <button onClick={onBack} className="btn-back mb-4">
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
                <h2 className="mb-8 text-xl font-semibold leading-relaxed text-[var(--foreground)] sm:text-2xl">
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
                                className={`quiz-btn group justify-between ${isSelected ? "selected" : ""}`}
                            >
                                <span>{option}</span>
                                {isSelected && (
                                    <span className="ml-auto shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-white animate-in zoom-in spin-in-180 duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
