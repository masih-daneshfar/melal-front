<script>
	import { fetcher } from '$lib/utils/fetcher';
	const userWallet = async () => {
		return fetcher('/wallet');
	};
	const getUserWalletRequest = userWallet();
</script>

<div class="card-container">
	{#await getUserWalletRequest}
		loading...
	{:then data}
		<div class="card-number">
			{#each String(data.cardNum).match(/.{1,4}/g) as numbers}
				<span>{numbers}</span>
			{/each}
		</div>
		<div class="card-exp">{data.expDate} :تاریخ انقضا</div>
		<div class="balance-title">
			<span>موجودی :</span>
		</div>
		<div class="balance-value">
			<span>{data.balance.toLocaleString('fa-IR')} ریال</span>
		</div>
	{:catch}
		Error!
	{/await}
</div>

<style>
	.card-container {
		width: 95%;
		height: 25vh;
		padding-block: 15px;
		margin-block-end: 20px;
		margin-inline: auto;
		background: rgb(90, 109, 158);
		background: linear-gradient(45deg, rgba(90, 109, 158, 1) 35%, rgba(190, 202, 245, 1) 100%);
		border-radius: 20px;
		display: flex;
		flex-direction: column;
	}
	.card-container .card-number {
		width: 100%;
		height: 65px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.8rem;
	}
	.card-container .card-exp {
		direction: ltr;
		width: 95%;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: white;
		font-size: smaller;
		padding-inline-start: 15px;
		margin-block-start: 10px;
	}
	.card-container .balance-title {
		width: 100%;
		height: 60px;
		padding-inline-start: 15px;
		font-size: x-large;
	}
	.card-container .balance-value {
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: x-large;
	}
</style>
