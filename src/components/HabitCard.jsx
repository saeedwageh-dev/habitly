function HabitCard({ habit, toggleHabits, variant = "home" }) {
  const isHome = variant === "home";

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-2xl ${isHome && habit.doneToday ? "bg-[#3F6C51]/5 ring-1 ring-[#3F6C51]/10" : "bg-white shadow-sm ring-1 ring-[#2E3B31]/5"} `}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${isHome && habit.doneToday ? "bg-white" : "bg-[#FAF7F0]"} text-2xl`}
      >
        {habit.emoji}
      </div>
      <div className="flex-1">
        <p className="font-semibold">{habit.name}</p>
        <span className={`text-sm ${isHome && habit.doneToday ? "text-[#3F6C51]" : "text-[#2E3B31]/50"}`}>🔥 {habit.streak} day streak</span>
      </div>
      {isHome && (
        <button
          onClick={() => toggleHabits(habit.id)}
          className={
            habit.doneToday
              ? "rounded-full bg-[#3F6C51] px-4 py-2 text-sm font-bold text-white"
              : "rounded-full border-2 border-[#3F6C51] px-4 py-2 text-sm font-bold text-[#3F6C51] hover:bg-[#3F6C51] hover:text-white"
          }
        >
          Mark done
        </button>
      )}
    </div>
  );
}

export default HabitCard;
