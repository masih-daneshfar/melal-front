<script>
	import BackBtn from '$lib/components/backButton/BackBtn.svelte';
	import Nav from '$lib/components/nav/Nav.svelte';
	import chart from '$lib/assets/chart.svg';
	import vasakht from '$lib/assets/vasakht.svg';
	import shasta from '$lib/assets/shasta.svg';
	import zagros from '$lib/assets/zagros.svg';
	import hasir from '$lib/assets/hasir.svg';
</script>

<div class="header-container">
	<BackBtn ref="/" />
	<h2>بازار سهام</h2>
	<div class="img-box">
		<img src={chart} alt="chart" />
	</div>
</div>
<div class="stocks-container">
	<img src={vasakht} alt="وساخت" />
	<img src={shasta} alt="شستا" />
	<img src={zagros} alt="زاگرس" />
	<img src={hasir} alt="حسیر" />
</div>
<Nav />

<style>
	.header-container {
		width: 90%;
		height: 45%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-inline: auto;
		color: var(--primary);
	}
	.header-container .img-box {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-block: 20px;
	}

	.stocks-container {
		width: 90%;
		height: 40vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin-inline: auto;
		margin-block-start: 20px;
	}
</style>
