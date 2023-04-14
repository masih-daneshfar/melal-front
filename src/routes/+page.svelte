<script>
	import Nav from '$lib/components/nav/Nav.svelte';
	import TransactionRecord from '$lib/components/transactionRecord/transactionRecord.svelte';
	import Menu from '$lib/components/menu/Menu.svelte';
	import Card from '$lib/components/card/Card.svelte';
	let api = [
		{ type: 'spend', date: new Date(), fee: 125500000 },
		{ type: 'income', date: new Date(), fee: 6450000 },
		{ type: 'charge', date: new Date(), fee: 525500000 },
		{ type: 'transact', date: new Date(), fee: 2000000 }
	];

	const getRecentTransactions = async () => {
		// const data= await fetch('/transactions').then(res=>res.json())
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					data: api
				});
			}, 1000);
		});
	};
	let cardInfo = {
		cardNum: 6062512367493245,
		expDate: '1402/6',
		balance: 125525450
	};
	const getRecentTransactionsRequest = getRecentTransactions();
</script>

<Card cardNum={cardInfo.cardNum} cardExp={cardInfo.expDate} cardBalance={cardInfo.balance} />
<Menu />
<div class="container">
	<div class="transaction-container">
		{#await getRecentTransactionsRequest}
			loading
		{:then { data }}
			{#each data as api}
				<TransactionRecord type={api.type} date={api.date} fee={api.fee} />
			{/each}
		{/await}
	</div>
</div>
<Nav />

<style>
	.container {
		width: 100%;
		max-height: 45vh;
		overflow-y: auto;
	}
	.transaction-container {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-inline: auto;
	}
</style>
