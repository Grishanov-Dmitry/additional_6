module.exports = function zeros(expression) {

    let arr = expression.split('*');
    let numberOfZero = 0;
    let even = 0;

    for (let i = 0; i < arr.length; i++) {
        let number = parseInt(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        let number = parseInt(arr[i]);

        if (arr[i].indexOf('!!') == -1) { // This is factorial
            numberOfZero += Math.floor(number / 5) + Math.floor(number / 25);
            even += 1;

        } else { // This is dable factorial
            if(number % 2 == 0) {
                even += 1;
            }
            for (let i = number; i > 0; i -= 2) {
                if (i % 5 == 0) {
                    numberOfZero += 1;
                    if(i % 25 == 0) {
                        numberOfZero += 1;
                    }
                }
            }
        }
    }
    if(even == 0) {
        return even;
    } else {
        return numberOfZero;
    }
}
