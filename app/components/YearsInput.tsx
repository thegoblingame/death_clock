'use client';

import { useState } from 'react';

interface YearsInputProps {
  onSubmit: (years: number) => void;
}

export default function YearsInput({ onSubmit }: YearsInputProps) {
  const [years, setYears] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const yearsNum = parseInt(years);
    if (yearsNum > 0) {
      onSubmit(yearsNum);
    }
  };

  return (
    <div className="years-input-container">
      <form onSubmit={handleSubmit} className="years-input-form">
        <h1>How many years do you have left?</h1>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="Enter years remaining"
          min="1"
          required
          className="years-input"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}