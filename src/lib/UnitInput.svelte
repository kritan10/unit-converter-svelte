<script>
	export let id;
	export let value;
	export let label = id;
	export let unit = '';
	export let onChangeHandler;
</script>

<div>
	<label for="sqrft"> {label} : </label>
	<input type="text" {id} {value} on:input={onChangeHandler} />
	{@html unit}
</div>

<style>
	input[type='text'] {
		width: 80px;
		padding: 6px;
	}

	label {
		text-transform: capitalize;
	}

	div {
		display: inline;
		margin-right: 18px;
	}
</style>
