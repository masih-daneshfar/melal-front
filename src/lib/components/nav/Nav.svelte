<script>
	import Profile from '$lib/assets/profile.svg';
	import Home from '$lib/assets/home.svg';
	import Stock from '$lib/assets/stock.svg';
</script>

<nav class="rad">
	<a href="/profile">
		<img src={Profile} alt="profile" />
		<span>کاربری</span>
	</a>
	<a href="/">
		<img src={Home} alt="profile" />
		<span>خانه</span>
	</a>
	<a href="/stocks">
		<img src={Stock} alt="profile" />
		<span>سهام</span>
	</a>
</nav>

<style lang="scss">
	nav {
		width: 80%;
		height: 8vh;
		position: fixed;
		bottom: 10px;
		inset-inline: 7%;
		border: 1px solid #c1b1b1;
		padding: 5px 15px;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		z-index: 100;
	}
	nav a {
		text-decoration: none;
		color: var(--primary);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 2px;
		transform: scale(0.65);
	}
</style>
