const twoSum = (numbers, target) => {
    let lower = 0;
    let upper = numbers.length - 1;

    while(upper > lower) {
        let sum = numbers[lower] + numbers[upper];
        if(sum < target) {
            lower += 1;
        } else if (sum > target) {
            upper -= 1;
        } else {
            return [lower + 1, upper + 1]
        }
    }
}