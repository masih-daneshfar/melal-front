<script>
	import BackBtn from '$lib/components/backButton/BackBtn.svelte';
	import { chargeStore } from '$lib/store/charge.store';
	import { fetcher } from '$lib/utils/fetcher';
	import { goto } from '$app/navigation';

	let data;
	chargeStore.subscribe((value) => {
		data = { ...value };
	});

	const getChargeConfirmation = async () => {
		await fetcher('/charge', data);
		goto('/');
	};
</script>

<div class="header-container">
	<BackBtn ref="/" />
	<h2>شارژ حساب</h2>
</div>
<div class="status-container">
	<div class="shape" />
	<p>حساب ملل کارت</p>
	<p class="amount"><span>{Number(data.amount).toLocaleString('fa-IR')}</span><span>ریال</span></p>
</div>
<hr />
<button on:click={() => getChargeConfirmation()}>تایید و شارژ</button>

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
	.status-container {
		width: 55%;
		height: 30vh;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.status-container .shape {
		width: 55px;
		height: 55px;
		background-color: var(--primary);
		border-radius: 100%;
	}
	.amount {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		font-size: larger;
		font-weight: bold;
	}
	button {
		margin-top: 40vh;
		margin-inline: auto;
		display: block;
		border-radius: 20px;
		outline: none;
		border: none;
		padding: 12px 25px;
		background-color: var(--primary);
		color: white;
		font-size: larger;
	}
</style>
