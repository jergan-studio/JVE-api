class Loops {
  static repeat(count, callback) {
    count = Number(count);

    if (isNaN(count)) {
      throw new Error("repeat requires a number");
    }

    for (let i = 0; i < count; i++) {
      callback(i);
    }
  }
}

module.exports = Loops;
