const MathFunctions = {
	divide: (num, divFactor) => {
		let temp = 0;
		while (num > divFactor - 1) {
			num -= divFactor;
			temp += 1;
		}
		return [num, temp];
	},

	convertToRopani: (totalDam) => {
		let result = [0, 0, 0, 0];
		let resultDam = MathFunctions.divide(totalDam, 4);

		result[3] = +resultDam[0];
		let tempPaisa = resultDam[1];

		let resultPaisa = MathFunctions.divide(tempPaisa, 4);

		result[2] = +resultPaisa[0];
		let tempAnna = resultPaisa[1];

		let resultAnna = MathFunctions.divide(tempAnna, 16);

		result[1] = +resultAnna[0];
		result[0] = +resultAnna[1];

		console.log(result);
		return result;
	},
    
};

export default MathFunctions;
