'use client';

import { useLocalStorage } from './hooks/useLocalStorage';
import YearsInput from './components/YearsInput';
import CountdownTimer from './components/CountdownTimer';

export default function Home() {
  const [years, setYears] = useLocalStorage<number | null>('death-clock-years', null);

  const handleYearsSubmit = (submittedYears: number) => {
    setYears(submittedYears);
  };

  return (
    <main>
      {years === null ? (
        <YearsInput onSubmit={handleYearsSubmit} />
      ) : (
        <CountdownTimer years={years} />
      )}
    </main>
  );
}
