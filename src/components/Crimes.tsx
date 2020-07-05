import React from 'react';
import useSWR from 'swr';

const Crimes: React.FC = () => {
  const url =
    'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10';
  const { data, error } = useSWR(url);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  const duplicates = data.map((crime: Crime) => crime.category);

  const crimes = duplicates.filter(
    (crime: Crime, index: number) => duplicates.indexOf(crime) === index
  );

  return <DisplayCrimes crimes={data} categories={crimes} />;
};

interface Crime {
  category: string;
}

interface DCProps {
  crimes: Crime[];
  categories: string[];
}

const DisplayCrimes: React.FC<DCProps> = ({ crimes, categories }: DCProps) => {
  const [filterCategory, setFilterCategory] = React.useState<string | null>(
    null
  );

  const filteredCrimes = filterCategory
    ? crimes.filter((crime) => crime.category === filterCategory)
    : crimes;

  return (
    <>
      {categories.map((category) => (
        <button
          onClick={() => {
            setFilterCategory(category);
          }}
          key={category}
        >
          {category}
        </button>
      ))}
      {filterCategory && (
        <button
          onClick={() => {
            setFilterCategory(null);
          }}
        >
          reset
        </button>
      )}

      <pre>{JSON.stringify(filteredCrimes, null, 2)}</pre>
    </>
  );
};

export default Crimes;
