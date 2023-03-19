<script>
	export let button;
	export let currentButton;
	export let toggleButton;
	export let buttonLabel;
</script>

<button class:active={button === currentButton} on:click={() => toggleButton(button)}>
	{buttonLabel}
</button>

<style>
	.active {
		background-color: #ff3e00;
		color: white;
	}

	button {
		width: 100%;
		padding: 20px 0px;
		cursor: pointer;
		border-radius: 0;
	}
</style>
