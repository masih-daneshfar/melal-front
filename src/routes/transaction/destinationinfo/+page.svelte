<script>
	import BackBtn from '$lib/components/backButton/BackBtn.svelte';
	import { transferStore } from '$lib/store/transfer.store';
	import { goto } from '$app/navigation';
	let destNumber;

	const gotoTransferAmount = () => {
		transferStore.set({ ...$transferStore, destNumber });
		goto(`/transaction/transactionfee`, { replaceState: true });
	};
</script>

<div class="header-container">
	<BackBtn ref="/transaction" />
	<h2>انتقال</h2>
</div>
<form class="input-container" on:submit|preventDefault={gotoTransferAmount}>
	<span>اطلاعات کارت مقصد :</span>
	<input class="destcard" type="number" bind:value={destNumber} />
	<!-- <button type="submit">ادامه</button> -->
	<button class="primary" type="submit">ادامه</button>
</form>

<style>
	.header-container {
		width: 90%;
		height: 15vh;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--primary);
	}
	.input-container {
		width: 90%;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
	}
	.input-container .destcard {
		direction: ltr;
		width: 90%;
		height: 35px;
		padding: 9px 15px;
		margin-block: 20px;
		border-radius: 20px;
		border: 1px solid gray;
		margin-inline: auto;
		font-size: large;
		font-weight: bold;
	}
	.input-container button {
		padding: 8px 40px;
		margin-inline: auto;
		border-radius: 20px;
		text-decoration: none;
		color: white;
		margin-block: 30px;
		outline: none;
		box-shadow: none;
		border: none;
	}
</style>
