<script>
	import transact from '$lib/assets/menu-transact.svg';
	import charge from '$lib/assets/menu-charge.svg';
	import bill from '$lib/assets/menu-bill.svg';
	import setting from '$lib/assets/menu-setting.svg';
	export let icons = [transact, charge, bill, setting];
</script>

<div class="container">
	<a class="item" href="/profile">
		<img src={icons[3]} alt="setting" />
		<span>تنظیمات</span>
	</a>
	<a class="item" href="/charge">
		<img src={icons[2]} alt="setting" />
		<span>شارژ حساب</span>
	</a>
	<a class="item" href="/">
		<img src={icons[1]} alt="setting" />
		<span>صورت حساب</span>
	</a>
	<a class="item" href="/transaction">
		<img src={icons[0]} alt="setting" />
		<span>انتقال</span>
	</a>
</div>

<style>
	.container {
		width: 85%;
		height: 14vh;
		margin-inline: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	.container a {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		color: #213569;
		font-size: small;
	}
	.container a span {
		margin-block: 6px;
	}
</style>
