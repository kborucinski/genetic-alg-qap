const math = require('mathjs');
const chromosome_size = 14;
const distance_matrix = math.matrix([[0, 1, 2, 2, 3, 4, 4, 5, 3, 5, 6, 7, 8, 9],[1, 0, 1, 1, 2, 3, 3, 4, 2, 4, 5, 6, 7, 8],[2, 1, 0, 2, 1, 2, 2, 3, 1, 3, 4, 5, 6, 7],[2, 1, 2, 0, 1, 2, 2, 3, 3, 3, 4, 5, 6, 7],[3, 2, 1, 1, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6],[4, 3, 2, 2, 1, 0, 2, 3, 3, 1, 2, 3, 4, 5],[4, 3, 2, 2, 1, 2, 0, 1, 3, 1, 2, 3, 4, 5],[5, 4, 3, 3, 2, 3, 1, 0, 4, 2, 1, 2, 3, 4],[3, 2, 1, 3, 2, 3, 3, 4, 0, 4, 5, 6, 7, 8],[5, 4, 3, 3, 2, 1, 1, 2, 4, 0, 1, 2, 3, 4],[6, 5, 4, 4, 3, 2, 2, 1, 5, 1, 0, 1, 2, 3],[7, 6, 5, 5, 4, 3, 3, 2, 6, 2, 1, 0, 1, 2],[8, 7, 6, 6, 5, 4, 4, 3, 7, 3, 2, 1, 0, 1],[9, 8, 7, 7, 6, 5, 5, 4, 8, 4, 3, 2, 1, 0]]);
const flows_matrix = math.matrix([[0, 3, 4, 6, 8, 5, 6, 6, 5, 1, 4, 6, 1, 5],[3, 0, 6, 3, 7, 9, 9, 2, 2, 7, 4, 7, 9, 6],[4, 6, 0, 2, 6, 4, 4, 4, 2, 6, 3, 6, 5, 6],[6, 3, 2, 0, 5, 5, 3, 3, 9, 4, 3, 6, 3, 4],[8, 7, 6, 5, 0, 4, 3, 4, 5, 7, 6, 7, 7, 3],[5, 9, 4, 5, 4, 0, 8, 5, 5, 5, 7, 5, 1, 8], [6, 9, 4, 3, 3, 8, 0, 6, 8, 4, 6, 7, 1, 8],[6, 2, 4, 3, 4, 5, 6, 0, 1, 5, 5, 3, 7, 5], [5, 2, 2, 9, 5, 5, 8, 1, 0, 4, 5, 2, 4, 5],[1, 7, 6, 4, 7, 5, 4, 5, 4, 0, 7, 7, 5, 6], [4, 4, 3, 3, 6, 7, 6, 5, 5, 7, 0, 9, 6, 5],[6, 7, 6, 6, 7, 5, 7, 3, 2, 7, 9, 0, 6, 5],[1, 9, 5, 3, 7, 1, 1, 7, 4, 5, 6, 6, 0, 5],[5, 6, 6, 4, 3, 8, 8, 5, 5, 6, 5, 5, 5, 0]]);
module.exports = {chromosome_size,distance_matrix,flows_matrix};