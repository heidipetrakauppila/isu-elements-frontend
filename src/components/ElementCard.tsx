import React from 'react';
import type { ISUElement } from '../types';
import { StatusBadge } from './StatusBadge';

interface Props {
  element: ISUElement;
  onIncrement: (id: string) => void;
}

export const ElementCard: React.FC<Props> = ({ element, onIncrement }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', marginBottom: '8px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{element.code}</h3>
        <StatusBadge status={element.status} />
      </div>
      <p>Puhtaat toistot: {element.currentReps} / {element.targetReps}</p>
      <button 
        onClick={() => onIncrement(element.id)}
        disabled={element.status === 'COMPLETED'}
      >
        +1 Puhdas
      </button>
    </div>
  );
};
