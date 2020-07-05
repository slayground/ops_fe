import React from 'react';
import useSWR from 'swr';
import { useParams, Link } from 'react-router-dom';

import { Button } from '~core';

const Pokemon: React.FC = () => {
  const { id } = useParams();

  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const { data, error } = useSWR(url);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Link to={`/pokemon/${Math.ceil(Math.random() * 10)}`}>
        <div style={{ margin: '8px' }}>
          <Button>New Pokemon</Button>
        </div>
      </Link>
      <img src={data.thumbnailUrl} />
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default Pokemon;
