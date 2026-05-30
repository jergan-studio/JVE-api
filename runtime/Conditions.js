class Conditions {
  static evaluate(left, operator, right) {
    switch (operator) {
      case "==":
        return left == right;

      case "!=":
        return left != right;

      case ">":
        return Number(left) > Number(right);

      case "<":
        return Number(left) < Number(right);

      case ">=":
        return Number(left) >= Number(right);

      case "<=":
        return Number(left) <= Number(right);

      default:
        return false;
    }
  }
}

module.exports = Conditions;
