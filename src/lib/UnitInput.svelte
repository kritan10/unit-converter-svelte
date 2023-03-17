<script>
	export let id;
	export let value;
	export let onChangeHandler;
</script>

<label for="sqrft"> {id} : </label>
<input type="text" {id} {value} on:input={onChangeHandler} />
