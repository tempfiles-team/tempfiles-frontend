import React from 'react';
import { useParams } from 'react-router-dom';

export const Text: React.FC = () => {
  const { textId } = useParams<{ textId: string }>();
  return (
    <div>
      <h1>{textId}</h1>
    </div>
  );
};
