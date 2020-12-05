export const CHROMOSOME_SIZE = 5;

export const DISTANCES = [
  [0, 50, 50, 94, 50],
  [50, 0, 22, 50, 36],
  [50, 22, 0, 44, 14],
  [94, 50, 44, 0, 50],
  [50, 36, 14, 50, 0]
];

export const FLOWS = [
  [0, 0, 2, 0, 3],
  [0, 0, 0, 3, 0],
  [2, 0, 0, 0, 0],
  [0, 3, 0, 0, 1],
  [3, 0, 0, 1, 0]
];

export default { CHROMOSOME_SIZE, DISTANCES, FLOWS };
