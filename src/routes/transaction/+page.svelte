<script>
	import BackBtn from '$lib/components/backButton/BackBtn.svelte';
	import freq from '$lib/assets/freq.svg';
</script>

<div class="header-container">
	<BackBtn ref="/" />
	<h2>انتقال</h2>
	<a class="primary" href="/transaction/destinationinfo">+ انتقال جدید</a>
</div>
<div class="freq-container">
	<span>پرمراجعه :</span>
	<img src={freq} alt="freq" />
</div>

<style>
	.header-container {
		width: 90%;
		height: 25vh;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--primary);
	}
	.header-container a {
		padding: 12px 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
		text-decoration: none;
		color: white;
		margin-block: 30px;
	}
	.freq-container {
		width: 90%;
		margin-inline: auto;
	}
	.freq-container img {
		margin-block-start: 25px;
	}
</style>
