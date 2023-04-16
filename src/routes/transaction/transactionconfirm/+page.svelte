<script>
	import BackBtn from '$lib/components/backButton/BackBtn.svelte';
	import profile from '$lib/assets/profileC.svg';
	import { fetcher } from '$lib/utils/fetcher';
	import { transferStore } from '$lib/store/transfer.store';
	import { goto } from '$app/navigation';

	let data;
	transferStore.subscribe((value) => {
		data = { ...value };
	});
	const getTransferRecipientDetails = async () => {
		return fetcher('/transfer', data);
	};
	const getTransferConfirmation = async () => {
		await fetcher('/transfer/confirm', data);
		goto('/');
	};

	const getTranserReciepientDetailsRequest = getTransferRecipientDetails();
</script>

<div class="header-container">
	<BackBtn ref="/transaction/destinationinfo" />
	<h2>انتقال</h2>
</div>
{#await getTranserReciepientDetailsRequest}
	loading
{:then data}
	<div class="details-container">
		<img src={profile} alt="user" />
		<span>{data.destUser.cardHolder}</span>
		<p class="cardNumber">
			{#each String(data.destUser.cardNum).match(/.{1,4}/g) as numbers}
				<span>{numbers}</span>
			{/each}
		</p>
		<p class="fees">
			<strong>{Number($transferStore.amount).toLocaleString('fa-IR')}</strong>
			<strong>ریال</strong>
		</p>
	</div>
	<hr />

	<strong class="payfrom">پرداخت از :</strong>
	<div class="card-container">
		<div class="shape"><span /></div>
		<div class="content">
			<p><strong>حساب ملل کارت</strong></p>
			<p><span>موجودی : {Number(data.balance).toLocaleString('fa-IR')}</span></p>
		</div>
	</div>

	<button on:click={() => getTransferConfirmation()}>تایید و انتقال</button>
{/await}

<style>
	.header-container {
		width: 90%;
		height: 11vh;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--primary);
	}
	.details-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
		margin-bottom: 30px;
	}
	.cardNumber {
		margin-block: 0;
		display: flex;
		gap: 6px;
		font-size: larger;
	}
	.fees {
		display: flex;
		gap: 6px;
		margin-block: 2px;
		font-size: x-large;
	}
	img {
		margin-block: 10px;
	}
	.payfrom {
		display: block;
		margin-block: 35px;
		padding-inline-start: 15px;
	}
	.card-container {
		border-radius: 20px;
		width: 80%;
		margin-inline: auto;
		display: flex;
		align-items: center;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	}
	.card-container .shape {
		flex-shrink: 0;
	}
	.card-container .shape span {
		border-radius: 100%;
		display: block;
		aspect-ratio: 1;
		width: 50px;
		height: 50px;
		margin: 15px 20px;
		background-color: var(--primary);
	}
	.card-container .content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.card-container .content p {
		margin: 0;
	}
	button {
		display: block;
		margin-inline: auto;
		margin-block: 15vh;
		background-color: var(--primary);
		color: white;
		padding: 12px 20px;
		border-radius: 20px;
		outline: none;
		border: none;
		font-size: large;
	}
</style>
