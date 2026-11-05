import React from 'react';
import { StatusLevel } from '../types';

interface Props {
  status: StatusLevel;
}

export const StatusBadge: React.FC<Props> = ({ status }) => {
  switch (status) {
    case 'COMPLETED':
      return <span style={{ color: 'green', fontWeight: 'bold' }}>🟢 Valmis</span>;
    case 'IN_PROGRESS':
      return <span style={{ color: 'orange', fontWeight: 'bold' }}>🟡 Harjoitellaan</span>;
    default:
      return <span style={{ color: 'gray', fontWeight: 'bold' }}>⚪ Ei aloitettu</span>;
  }
};
