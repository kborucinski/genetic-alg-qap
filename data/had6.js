export const CHROMOSOME_SIZE = 6;

export const DISTANCES = [
  [0, 40, 64, 36, 22, 60],
  [40, 0, 41, 22, 36, 72],
  [64, 41, 0, 28, 44, 53],
  [36, 22, 28, 0, 20, 50],
  [22, 36, 44, 20, 0, 41],
  [60, 72, 53, 50, 41, 0]
];

export const FLOWS = [
  [0, 1, 1, 2, 0, 0],
  [1, 0, 0, 0, 0, 2],
  [1, 0, 0, 0, 0, 1],
  [2, 0, 0, 0, 3, 0],
  [0, 0, 0, 3, 0, 0],
  [0, 2, 1, 0, 0, 0]
];

export default { CHROMOSOME_SIZE, DISTANCES, FLOWS };
