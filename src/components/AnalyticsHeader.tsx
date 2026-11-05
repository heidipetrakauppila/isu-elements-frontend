import React from 'react';
import type { ISUElement } from '../types';

interface Props {
  elements: ISUElement[];
}

export const AnalyticsHeader: React.FC<Props> = ({ elements }) => {
  const completed = elements.filter(e => e.status === 'COMPLETED').length;
  const total = elements.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div style={{ background: '#f0f4f8', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
      <h2>Ungdom 13 -sarjavalmius: {percentage}%</h2>
      <p>{completed} / {total} elementistä suoritettu puhtaasti</p>
    </div>
  );
};
