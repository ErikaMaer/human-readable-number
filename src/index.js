module.exports = function toReadable (number) {
      let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) return a[number];

    if (number < 100) {
        return (number % 10) === 0 ? b[number / 10] : (b[Math.floor(number / 10)] + " " + a[number % 10])

    }
    if (number < 1000) {
        return number % 100 === 0 ? a[number / 100] + " hundred" : (a[Math.floor(number / 100)] +
            " hundred" + " " + toReadable(number - Math.floor(number / 100) * 100));
    }
}
