module.exports = function toReadable (number) {
    let unitsArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    let result = '';
    let units = (number%10)? (' ' + (unitsArr[number%10])): '';
    let hundred = ((number/100)^0)? unitsArr[((number/100)^0)] + ' hundred': '';
    let tens = ((number%100)<20)? unitsArr[(number%100)]: tensArr[(((number%100)/10)^0)] + units;
    result = hundred + ((hundred.length>0)&&(tens.length>0)? ' ': '') + tens;
    if (number==0) return 'zero';
    return (result);
  }
