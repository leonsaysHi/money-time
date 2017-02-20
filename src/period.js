'use strict';

class Period {

  scores = [0, 0]; // Period score

  weScore () {
    this.scores[0]++;
  }

  theyScore () {
    this.scores[1]++;
  }

  getScores () {
    return this.scores;
  }

  getOffset () {
    return this.scores[0] - this.scores[1];  // Number
  }

  getStatus () {
    let n = this.getOffset()
    return n > 0 ? 1 : n < 0 ? -1 : 0; // -1 | 0 | 1
  }

}


export default Period;
