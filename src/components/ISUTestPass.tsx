import React from 'react';
import type { ISUTest } from '../types';

interface Props {
  tests: ISUTest[];
  onToggleTest: (id: string) => void;
}

export const ISUTestPass: React.FC<Props> = ({ tests, onToggleTest }) => {
  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
      <h3>Digitaalinen ISU-Testipassi</h3>
      {tests.map(test => (
        <div key={test.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #edf2f7' }}>
          <span>{test.code}</span>
          <button onClick={() => onToggleTest(test.id)}>
            {test.passed ? '🟢 Suoritettu' : '⚪ Avoin'}
          </button>
        </div>
      ))}
    </div>
  );
};
