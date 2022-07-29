function numberInfo(number) {
  if (number > 0) {
    return 'positivo';
  }

  if (number < 0) {
    return 'negativo';
  }

  if (number === 0) {
    return 'neutro';
  }

  if (!Number.isNaN(number)) {
    return 'isNaN';
  }
}

module.exports = numberInfo;