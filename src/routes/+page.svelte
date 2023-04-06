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
	let cardInfo = {
		cardNum: 6062512367493245,
		expDate: '1402/6',
		balance: 125525450
	};
</script>

<Card cardNum={cardInfo.cardNum} cardExp={cardInfo.expDate} cardBalance={cardInfo.balance} />
<Menu />
<div class="container">
	<div class="transaction-container">
		{#each api as api}
			<TransactionRecord type={api.type} date={api.date} fee={api.fee} />
		{/each}
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
