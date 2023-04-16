<script>
	import BackBtn from '$lib/components/backButton/BackBtn.svelte';
	import { transferStore } from '$lib/store/transfer.store';
	import { goto } from '$app/navigation';
	let amount;

	const gotoTransferConfirm = () => {
		transferStore.set({ ...$transferStore, amount });
		goto(`/transaction/transactionconfirm`, { replaceState: true });
	};
</script>

<div class="header-container">
	<BackBtn ref="/transaction/destinationinfo" />
	<h2>انتقال</h2>
</div>
<form class="input-container" on:submit|preventDefault={gotoTransferConfirm}>
	<span>مبلغ مورد نظر :</span>
	<div class="destcard">
		<strong>ریال</strong>
		<input class="feeInp" type="number" pattern="\d*" bind:value={amount} />
	</div>
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
		display: flex;
		gap: 8px;
		align-items: center;
		justify-content: center;
	}
	.input-container button {
		padding: 8px 40px;
		margin-inline: auto;
		border-radius: 20px;
		text-decoration: none;
		color: white;
		margin-block: 30px;
		border: none;
		outline: none;
	}
	.feeInp {
		width: 100%;
		outline: none;
		box-sizing: border-box;
		border-radius: 20px;
		border: none;
		font-size: larger;
	}
</style>
