'use client';

import { useLocalStorage } from './hooks/useLocalStorage';
import YearsInput from './components/YearsInput';
import CountdownTimer from './components/CountdownTimer';

interface DeathClockData {
  years: number;
  startTimestamp: number;
}

export default function Home() {
  const [clockData, setClockData] = useLocalStorage<DeathClockData | null>('death-clock-data', null);

  const handleYearsSubmit = (submittedYears: number) => {
    const data: DeathClockData = {
      years: submittedYears,
      startTimestamp: Date.now()
    };
    setClockData(data);
  };

  return (
    <main>
      {clockData === null ? (
        <YearsInput onSubmit={handleYearsSubmit} />
      ) : (
        <CountdownTimer 
          years={clockData.years} 
          startTimestamp={clockData.startTimestamp} 
        />
      )}
    </main>
  );
}
