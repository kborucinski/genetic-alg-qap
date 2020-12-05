import fitnessScore from './fitnessScore';
import had4 from './data/had4';
import had5 from './data/had5';
import had6 from './data/had6';
import had7 from './data/had7';
import had8 from './data/had8';
import had9 from './data/had9';

test('fitnessScore', () => {
  expect(fitnessScore(had4.DISTANCES, had4.FLOWS)([2, 3, 0, 1])).toEqual(395);
  expect(fitnessScore(had5.DISTANCES, had5.FLOWS)([2, 3, 4, 1, 0])).toEqual(
    314
  );
  expect(fitnessScore(had6.DISTANCES, had6.FLOWS)([4, 1, 5, 0, 3, 2])).toEqual(
    313
  );
  expect(
    fitnessScore(had7.DISTANCES, had7.FLOWS)([4, 3, 6, 0, 1, 2, 5])
  ).toEqual(470);
  expect(
    fitnessScore(had8.DISTANCES, had8.FLOWS)([5, 4, 3, 6, 7, 0, 2, 1])
  ).toEqual(904);
  expect(
    fitnessScore(had9.DISTANCES, had9.FLOWS)([2, 0, 8, 7, 6, 3, 4, 5, 1])
  ).toEqual(1160);
});
