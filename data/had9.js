export const chromosomeSize = 9;

export const distances = [
  [0, 32, 68, 97, 75, 70, 75, 40, 24],
  [32, 0, 42, 80, 53, 65, 82, 47, 29],
  [68, 42, 0, 45, 15, 49, 79, 55, 50],
  [97, 80, 45, 0, 30, 36, 65, 65, 73],
  [75, 53, 15, 30, 0, 38, 69, 53, 53],
  [70, 65, 49, 36, 38, 0, 31, 32, 46],
  [75, 82, 79, 65, 69, 31, 0, 36, 56],
  [40, 47, 55, 65, 53, 32, 36, 0, 19],
  [24, 29, 50, 73, 53, 46, 56, 19, 0]
];

export const flows = [
  [0, 2, 4, 0, 0, 0, 2, 0, 0],
  [2, 0, 3, 1, 0, 6, 0, 0, 2],
  [4, 3, 0, 0, 0, 3, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 1, 2, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 6, 3, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 1, 0, 0, 0, 4, 3],
  [0, 0, 0, 2, 0, 0, 4, 0, 0],
  [0, 2, 0, 0, 0, 2, 3, 0, 0]
];