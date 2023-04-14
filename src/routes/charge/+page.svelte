<script>
	import BackBtn from '$lib/components/backButton/BackBtn.svelte';
</script>

<div class="header-container">
	<BackBtn ref="/" />
	<h2>شارژ حساب</h2>
</div>
<div class="card-container">
	<div class="shape"><span /></div>
	<div class="content">
		<p><strong>حساب ریالی</strong></p>
		<p><span>موجودی : {Number(200_000).toLocaleString('fa-IR')}</span></p>
	</div>
</div>
<form class="input-container">
	<span>مبلغ مورد نظر :</span>
	<div class="destcard">
		<strong>ریال</strong>
		<input class="feeInp" type="number" pattern="\d*" />
	</div>
	<!-- <button type="submit">ادامه</button> -->
	<a class="primary" href="charge/confirmcharge">ادامه</a>
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
	.input-container a {
		padding: 8px 40px;
		margin-inline: auto;
		border-radius: 20px;
		text-decoration: none;
		color: white;
		margin-block: 30px;
	}
	.feeInp {
		width: 100%;
		outline: none;
		box-sizing: border-box;
		border-radius: 20px;
		border: none;
		font-size: larger;
	}
	.card-container {
		margin-block: 5vh;
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
		background-color: #b95244;
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
</style>
