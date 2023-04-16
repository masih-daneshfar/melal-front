<script>
	import Nav from '$lib/components/nav/Nav.svelte';
	import TransactionRecord from '$lib/components/transactionRecord/transactionRecord.svelte';
	import Menu from '$lib/components/menu/Menu.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import { fetcher } from '$lib/utils/fetcher';

	const getRecentTransactions = async () => {
		return fetcher('/transactions');
	};

	const getRecentTransactionsRequest = getRecentTransactions();
</script>

<Card />
<Menu />
<div class="container">
	<div class="transaction-container">
		{#await getRecentTransactionsRequest}
			loading
		{:then data}
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
