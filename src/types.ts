// TypeScript-tyypit
export type ElementCategory = 'JUMP' | 'SPIN' | 'STEP';
export type StatusLevel = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

// Elementtien tiedot
export interface ISUElement {
  id: string;
  code: string;
  category: ElementCategory;
  targetReps: number;
  currentReps: number;
  status: StatusLevel;
}

// ISU-testien tiedot
export interface ISUTest {
  id: string;
  code: string;
  title: string;
  passed: boolean;
}
