const convertFromElem = document.querySelector('#convert-from');
const convertCountElem = document.querySelector('#convert-count');


console.log(111, convertFromElem.value);
console.log(222, convertCountElem.value);

const cur1Amount = .03;
const cur1 = 'BTC';
const cur2 = 'USD';
const url = `https://api.coinbase.com/v2/prices/${cur1}-${cur2}/spot`;

// then
fetch(url).then((response) => {
	// console.log(response);
	response.json().then((payload) => {
		const strAmount = payload.data.amount;
		// const amount = Number(strAmount);
		const amount = parseFloat(strAmount);
		const cur2Amount = cur1Amount * amount;
	});
})
