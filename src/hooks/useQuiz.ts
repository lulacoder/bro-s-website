"use client";

import { useState, useCallback } from "react";

export interface QuizAnswer {
    questionIndex: number;
    answer: string;
}

export interface UseQuizReturn {
    currentIndex: number;
    answers: QuizAnswer[];
    isComplete: boolean;
    totalQuestions: number;
    progress: number;
    selectAnswer: (answer: string) => void;
    goBack: () => void;
    getAnswerForQuestion: (index: number) => string | undefined;
}

const TOTAL_QUESTIONS = 11;

export function useQuiz(): UseQuizReturn {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<QuizAnswer[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    const progress = Math.round((currentIndex / TOTAL_QUESTIONS) * 100);

    const getAnswerForQuestion = useCallback(
        (index: number): string | undefined => {
            const found = answers.find((a) => a.questionIndex === index);
            return found?.answer;
        },
        [answers]
    );

    const selectAnswer = useCallback((answer: string) => {
        setAnswers((prev) => {
            const filtered = prev.filter((a) => a.questionIndex !== currentIndex);
            return [...filtered, { questionIndex: currentIndex, answer }];
        });

        setTimeout(() => {
            if (currentIndex < TOTAL_QUESTIONS - 1) {
                setCurrentIndex((prev) => prev + 1);
            } else {
                setIsComplete(true);
            }
        }, 300);
    }, [currentIndex]);

    const goBack = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    }, [currentIndex]);

    return {
        currentIndex,
        answers,
        isComplete,
        totalQuestions: TOTAL_QUESTIONS,
        progress,
        selectAnswer,
        goBack,
        getAnswerForQuestion,
    };
}
