<script>
	import RoundBtn from '../roundButton/RoundBtn.svelte';
	import { goto } from '$app/navigation';
	import { screenLockStore } from '$lib/store/screenLock.store.js';
	import Face from '$lib/assets/face.svg';
	import Finger from '$lib/assets/fingerprint.svg';
	export let enteredPass = '';
	const pressedPassKey = (char) => {
		enteredPass += char;
	};
	$: {
		if (!$screenLockStore) {
			goto('/');
		}
		if (enteredPass.length === 5) {
			if (enteredPass === '45678') {
				screenLockStore.set(false);
				goto('/');
			} else {
				enteredPass = '';
			}
		}
	}
</script>

<div class="box">
	<h2>رمز خود را وارد کنید :</h2>
	<div class="indicators">
		{#each [0, 1, 2, 3, 4] as dotidx}
			<div class="dots" class:active={dotidx < enteredPass.length} />
		{/each}
	</div>
	<div class="numpad-container">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 'emoji', 0, 'finger'] as numberItem}
			<div class="btn-container">
				{#if numberItem === 'emoji'}
					<RoundBtn shapes>
						<img src={Face} alt="face" />
					</RoundBtn>
				{:else if numberItem === 'finger'}
					<RoundBtn shapes>
						<img src={Finger} alt="finger" />
					</RoundBtn>
				{:else}
					<RoundBtn onclick={() => pressedPassKey(String(numberItem))}
						>{numberItem.toLocaleString('fa-IR')}</RoundBtn
					>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.box {
		padding-block: 60px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.numpad-container {
		margin-block-start: 60px;
		direction: ltr;
		width: 85%;
		display: grid;
		row-gap: 15px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-auto-flow: row;
	}
	.btn-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-block: 10px;
	}
	.indicators {
		width: 40%;
		margin-inline: auto;
		margin-block: 30px;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	.dots {
		flex-shrink: 0;
		width: 20px;
		height: 20px;
		border-radius: 100%;
		border: 1px solid black;
		transition: all 240ms;
	}
	.dots.active {
		background-color: var(--primary);
		border-color: transparent;
	}
	h2 {
		margin-inline: auto;
		text-align: center;
	}
</style>
