<script>
	export let button;
	export let currentButton;
	export let toggleButton;
	export let buttonLabel;
	export let buttonClass;
</script>

<button
	class={buttonClass}
	class:active={button === currentButton}
	on:click={() => toggleButton(button)}
>
	{buttonLabel}
</button>

<style>
	.active {
		background-color: rgba(233, 106, 64, 0.9);
		color: white;
	}

	button {
		width: 100%;
		padding: 20px 0px;
		cursor: pointer;
		border: 0;
		border-bottom: 1px solid black;
		background-color: rgba(233, 106, 64, 0.3);
	}

	button:hover {
		background-color: rgba(233, 106, 64, 0.5);
	}

	.first {
		border-top-left-radius: 16px;
	}

	.last {
		border-top-right-radius: 16px;
	}
</style>
