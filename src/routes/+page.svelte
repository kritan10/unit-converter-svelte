<script>
	let mtr = 0;
	$: inch = 2 * mtr;
</script>

<h1>Nepali Unit Converter</h1>
<p>Enter data</p>

<label for="meter">Meter</label>
<input id="meter" type="text" bind:value={mtr} />

<label for="inch">Inch</label>
<input id="inch" type="text" bind:value={inch} />
