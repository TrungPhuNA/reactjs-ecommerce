export const  currencyFormat = (num) => {
	return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'
}

export const priceDiscount = (price, discount) => {
	if (discount === 0) return price;
	return  ((100 - discount) * price) / 100;
}
