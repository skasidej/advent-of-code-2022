import { readFileSync } from 'fs'

const compare = (topCalories: number[], calorie: number): number[] => {
	if (calorie >= topCalories[0]) {
		topCalories[2] = topCalories[1]
		topCalories[1] = topCalories[0]
		topCalories[0] = calorie

		return topCalories
	}

	if (calorie >= topCalories[1]) {
		topCalories[2] = topCalories[1]
		topCalories[1] = calorie

		return topCalories
	}

	if (calorie >= topCalories[2]) {
		topCalories[2] = calorie

		return topCalories
	}

	return topCalories
}

(async () => {
	try {
		const data = readFileSync('./code/1-calorie-counting/input.txt', 'utf-8')

		const lines = data.split(/\r?\n/)

		let topCalories = new Array(3).fill(0) as number[]
		let totalCalorie = 0

		for (let index = 0; index < lines.length; index++) {
			if (!lines[index]) {
				topCalories = compare(topCalories, totalCalorie)

				totalCalorie = 0

				continue
			}

			totalCalorie += parseInt(lines[index])
		}

		const sum = topCalories.reduce((previous, current) => previous + current, 0)

		console.log(sum)
	} catch (error) {
		console.error(error)
	}
})();
