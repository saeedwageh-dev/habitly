import HabitCard from "../components/HabitCard";

function Home({ habits, setHabits }) {
  function toggleHabits(id) {
    setHabits((prevHabits) => prevHabits.map((habit) => (habit.id === id ? { ...habit, doneToday: !habit.doneToday } : habit)));
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-1 text-3xl font-black">Today's habits</h1>
      <p className="mb-6 text-[#2E3B31]/50">2 of 4 done today</p>

      <div className="space-y-3">
        {habits.map((habit) => (
          <HabitCard habit={habit} toggleHabits={toggleHabits} />
        ))}
      </div>
      <p className="mt-6 text-center text-sm font-semibold text-[#2E3B31]/30">
        (only 2 cards drawn by hand here — the rest come from `habits array` once we add props)
      </p>
    </main>
  );
}

export default Home;
