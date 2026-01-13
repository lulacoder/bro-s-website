"use client";

import React from "react";
import { useQuiz } from "@/hooks/useQuiz";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionSlide } from "@/components/QuestionSlide";
import { FinalScreen } from "@/components/FinalScreen";

const QUESTIONS = [
  {
    question: "In 2026, I want to…",
    options: [
      "Replace my income and work fully from my laptop",
      "Add consistent side income from my laptop",
    ],
  },
  {
    question: "I want this because…",
    options: [
      "I want to quit my 9-5 and stop trading time for money",
      "I want financial security for myself and my family",
      "I want more freedom over my time and life",
    ],
  },
  {
    question: "To make this worth it, I need to earn online…",
    options: [
      "At least $2,000/month",
      "At least $5,000/month",
      "$10,000+/month",
    ],
  },
  {
    question: "Which best describes your situation right now?",
    options: [
      "I work a full-time 9-5",
      "I work a 9-5 and have a side hustle",
      "I don't currently work (student / retired) but want income",
    ],
  },
  {
    question: "On a normal day, I have…",
    options: [
      "Plenty of free time",
      "1–3 focused hours",
      "Less than 1 hour",
    ],
  },
  {
    question: "What do you NOT want to deal with?",
    options: [
      "Creating my own products",
      "Technical stuff (websites, funnels, automations)",
      "Recording content",
    ],
  },
  {
    question: "I want a business that…",
    options: [
      "Requires me to show my face",
      "Does not require me to show my face",
      "Doesn't require it, but I'm open to it",
    ],
  },
  {
    question: "My online business experience is…",
    options: [
      "I've made serious money online before",
      "I've made some money online",
      "I've never made money online",
    ],
  },
  {
    question: "What's actually stopping you?",
    options: [
      "I don't know where to start",
      "I don't know how to execute",
      "I don't know which business model is best",
    ],
  },
  {
    question: "I'd hit my goals faster if…",
    options: [
      "I didn't have to figure everything out alone",
      "I had a coach guiding me step-by-step",
      "I didn't need to waste time on technical setup",
    ],
  },
  {
    question: "The biggest change I want right now is…",
    options: [
      "Quit my 9-5 and earn more",
      "Get my time back",
      "Travel and work from anywhere",
      "Support my family without stress",
    ],
  },
];

import { LoadingScreen } from "@/components/LoadingScreen";

// ... existing imports

export default function Home() {
  const {
    currentIndex,
    isComplete,
    totalQuestions,
    progress,
    selectAnswer,
    goBack,
    getAnswerForQuestion,
  } = useQuiz();

  // Local state to handle the loading phase
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [showFinal, setShowFinal] = React.useState(false);

  // Effect to trigger analyzing state when quiz completes
  React.useEffect(() => {
    if (isComplete) {
      setIsAnalyzing(true);
    }
  }, [isComplete]);

  const handleLoadingComplete = () => {
    setIsAnalyzing(false);
    setShowFinal(true);
  };

  const handleGoBackFromFinal = () => {
    setShowFinal(false);
    setIsAnalyzing(false);
    goBack();
  };

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Header - Hide during loading and final screen */}
      <header className="sticky top-0 z-10 bg-[var(--background)]">
        {!isComplete && !isAnalyzing && !showFinal && (
          <ProgressBar
            progress={progress}
            currentStep={currentIndex + 1}
            totalSteps={totalQuestions}
          />
        )}
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col">
        {currentIndex === 0 && !isComplete && (
          <div className="animate-in px-4 py-6 text-center">
            <div className="mx-auto max-w-md">
              <span className="mb-4 inline-block rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                1-Minute Personal Assessment
              </span>
              <h1 className="text-2xl font-bold leading-tight text-[var(--foreground)] sm:text-3xl">
                What&apos;s the BEST Online Business for YOU — and how much could
                you realistically earn?
              </h1>
            </div>
          </div>
        )}

        {!isComplete ? (
          <QuestionSlide
            key={currentIndex}
            question={QUESTIONS[currentIndex].question}
            options={QUESTIONS[currentIndex].options}
            selectedAnswer={getAnswerForQuestion(currentIndex)}
            onSelect={selectAnswer}
            onBack={goBack}
            showBack={currentIndex > 0}
          />
        ) : isAnalyzing ? (
          <LoadingScreen onComplete={handleLoadingComplete} />
        ) : showFinal ? (
          <FinalScreen onBack={handleGoBackFromFinal} />
        ) : null}
      </main>
    </div>
  );
}
