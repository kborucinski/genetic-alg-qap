const math = require('mathjs');
const chromosome_size = 4;
const distance_matrix = math.matrix([[0, 22, 53, 53], [22, 0, 40, 62], [53, 40, 0, 55], [53, 62, 55, 0]]);
const flows_matrix = math.matrix([[0, 3, 0, 2], [3, 0, 0, 1], [0, 0, 0, 4], [2, 1, 4, 0]]);
module.exports = {chromosome_size, distance_matrix, flows_matrix};