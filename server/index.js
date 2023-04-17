// import Database from 'better-sqlite3';
import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());

const user = {
	cardNum: 6062512367493245,
	expDate: '1402/6',
	balance: 125525450,
	brokerBalance: 1125525450
};
let userTransactions = [
	{ type: 'spend', date: new Date(), fee: 125500000 },
	{ type: 'income', date: new Date(), fee: 6450000 },
	{ type: 'charge', date: new Date(), fee: 525500000 },
	{ type: 'transact', date: new Date(), fee: 2000000 }
];

const users = [
	{
		cardNum: 6062512367493246,
		cardHolder: 'امیرعلی کفاشی',
		balance: 0
	},
	{
		cardNum: 6062512367493247,
		cardHolder: ' نوید بیاتی',
		balance: 0
	},
	{
		cardNum: 6062512367493248,
		cardHolder: ' پارسا مختاری ',
		balance: 0
	}
];

app.get('/wallet', (req, res) => {
	return res.status(200).json(user);
});

app.get('/transactions', (req, res) => {
	return res.status(200).json(userTransactions);
});

app.get('/most-recent', ({ query }, res) => {
	const searchedUser = users.filter((user) => user.cardNum === Number(query.destNumber))[0];
	return res.status(200).json(searchedUser);
});

app.get('/charge', ({ query }, res) => {
	const { amount } = query;
	if (isNaN(amount) || Number(amount) < 0 || Number(amount) > user.brokerBalance)
		return res.status(400).json({ message: 'مبلغ مورد نظر موجود نیست !' });
	user.balance += Number(amount);
	user.brokerBalance -= Number(amount);
	userTransactions = [
		{ type: 'charge', date: new Date(), fee: Number(amount) },
		...userTransactions
	];
	return res.status(200).json(user);
});

app.get('/transfer', ({ query }, res) => {
	const { amount, destNumber } = query;
	if (isNaN(amount) || Number(amount) < 0 || Number(amount) > user.balance)
		return res.status(400).json({ message: 'مبلغ مورد نظر موجود نیست !' });
	if (
		!destNumber ||
		isNaN(destNumber) ||
		!users.filter((user) => user.cardNum === Number(destNumber)).length
	)
		return res.status(400).json({ message: 'شماره کارت مورد نظر موجود نیست !' });
	const searchedUser = users.filter((user) => user.cardNum === Number(destNumber))[0];

	return res.status(200).json({ destUser: searchedUser, amount, balance: user.balance });
});

app.get('/transfer/confirm', ({ query }, res) => {
	const { amount, destNumber } = query;
	if (isNaN(amount) || Number(amount) < 0 || Number(amount) > user.balance)
		return res.status(400).json({ message: 'مبلغ مورد نظر موجود نیست !' });
	if (
		!destNumber ||
		isNaN(destNumber) ||
		!users.filter((user) => user.cardNum === Number(destNumber)).length
	)
		return res.status(400).json({ message: 'شماره کارت مورد نظر موجود نیست !' });
	const searchedUser = users.filter((user) => user.cardNum === Number(destNumber))[0];
	users.forEach((user, idx) => {
		if (user.cardNum) {
			users[idx].balance += Number(amount);
		}
	});
	user.balance -= Number(amount);
	userTransactions = [
		{ type: 'transact', date: new Date(), fee: Number(amount) },
		...userTransactions
	];
	return res.status(200).json({ destUser: searchedUser, amount });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
