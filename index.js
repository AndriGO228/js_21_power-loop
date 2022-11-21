function power(number, pow) {
	let hz = 1;
	for (let i = 0; i < pow; i++) {
		hz *= number;
	}
	return hz;
}

module.exports = power;
