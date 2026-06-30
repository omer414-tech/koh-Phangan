"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col items-center justify-center gap-5 bg-[#ECEEE9] text-[#28302C] px-6 text-center"
    >
      <h2 className="font-heading text-3xl">משהו השתבש</h2>
      <p className="font-assistant text-[#28302C]/70">נסו לרענן את הדף.</p>
      <button
        onClick={reset}
        className="bg-[#6E8A7F] text-[#ECEEE9] font-assistant font-semibold rounded-lg px-6 py-3 text-sm hover:bg-[#586F66] transition-colors"
      >
        נסו שוב
      </button>
    </div>
  );
}
