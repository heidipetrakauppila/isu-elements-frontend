import { ISUElement, ISUTest } from './types';

// Synteettinen testidata 
// elementit
export const initialElements: ISUElement[] = [
  { id: '1', code: '2A', category: 'JUMP', targetReps: 10, currentReps: 3, status: 'IN_PROGRESS' },
  { id: '2', code: '2F', category: 'JUMP', targetReps: 10, currentReps: 10, status: 'COMPLETED' },
  { id: '3', code: 'CCoSp3', category: 'SPIN', targetReps: 5, currentReps: 1, status: 'IN_PROGRESS' },
  { id: '4', code: 'StSqB', category: 'STEP', targetReps: 5, currentReps: 0, status: 'NOT_STARTED' }
];

// testit
export const initialTests: ISUTest[] = [
  { id: 't1', code: 'ET1', passed: true },
  { id: 't2', code: 'ET2', passed: false },
  { id: 't3', code: 'Ungdom 2', passed: false }
];
