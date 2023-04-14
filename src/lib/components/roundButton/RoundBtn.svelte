<script>
	export let shapes = false;
	export let onclick;
</script>

<button class:shapes on:click={onclick} {...$$restProps}><slot /></button>

<style>
	button {
		width: 65px;
		height: 65px;
		border-radius: 100%;
		border-style: solid;
		border-width: 2px;
		border-color: black;
		font-family: inherit;
		font-size: 1.3em;
		transition: all 250ms;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button:active {
		background-color: var(--primary);
		border-color: var(--primary);
		color: white;
	}
	.shapes {
		background-color: black;
		color: white;
	}
</style>
