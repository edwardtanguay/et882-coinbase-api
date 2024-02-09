const conversionFormElem = document.querySelector('#conversion-form');
const convertFromElem = document.querySelector('#convert-from');
const convertCountElem = document.querySelector('#convert-count');
const convertToElem = document.querySelector('#convert-to');
const convertBtnSubmitElem = document.querySelector('button[type=submit]');
const outputElem = document.querySelector('#output');

// tests
// console.log(111, convertFromElem.value);
// console.log(222, convertCountElem.value);
// console.log(333, convertToElem.value);
// convertBtnSubmitElem.style.display = 'none';
// console.log(444, outputElem.value);
// conversionFormElem.style.display = 'none';

// const cur1Amount = .03;
// const cur1 = 'BTC';
// const cur2 = 'USD';

const baseUrl = `https://api.coinbase.com/v2/prices`;

conversionFormElem.addEventListener('submit', (event) => {
	event.preventDefault();	
	const url = `${baseUrl}/${convertFromElem.value}-${convertToElem.value}/spot`;
	fetch(url).then((response) => {
		// console.log(response);
		response.json().then((payload) => {
			const strAmount = payload.data.amount;
			console.log(payload);
			// const amount = Number(strAmount);
			const amount = parseFloat(strAmount);
			// const cur2Amount = cur1Amount * amount;
			console.log(amount);
		});
	})
});