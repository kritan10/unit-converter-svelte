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
		background-color: rgba(65, 130, 235, 0.9);
		color: white;
	}

	.active:hover {
		background-color: rgba(65, 130, 235, 0.9);
	}

	button {
		width: 100%;
		padding: 20px 0px;
		cursor: pointer;
		border: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		background-color: rgba(65, 130, 235, 0.3);
		font-family: 'Poppins', sans-serif;
	}

	button:hover {
		background-color: rgba(65, 130, 235, 0.5);
	}

	.first {
		border-top-left-radius: 12px;
	}

	.last {
		border-top-right-radius: 12px;
	}
</style>
