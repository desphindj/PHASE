import React, { useState, useMemo, useCallback } from 'react';

function findPrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

const PrimeList = React.memo(({ primes, onClick }) => {
  console.log('PrimeList rendered');
  return (
    <div>
      <h2>Prime Numbers</h2>
      <ul>
        {primes.map((prime, index) => (
          <li key={index} onClick={() => onClick(prime)}>
            {prime}
          </li>
        ))}
      </ul>
    </div>
  );
});

function Task7() {
  const [limit, setLimit] = useState(1000);
  const [selectedPrime, setSelectedPrime] = useState(null);

  const primes = useMemo(() => findPrimes(limit), [limit]);

  const handleClick = useCallback((prime) => {
    setSelectedPrime(prime);
  }, []);

  return (
    <div>
      <h1>Selected Prime: {selectedPrime}</h1>
      <button onClick={() => setLimit((prev) => prev + 1000)}>Increase Limit</button>
      <PrimeList primes={primes} onClick={handleClick} />
    </div>
  );
}

export default Task7;
