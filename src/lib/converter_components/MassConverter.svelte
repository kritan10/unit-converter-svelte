<script>
	import UnitInput from '../UnitInput.svelte';
	import MathFunctions from '../MathFunctions.js';

	let unit = {
		lal: 0,
		tola: 0,
		chatak: 0,
		pau: 0,
		dharni: 0,
		kg: 0,
		lbs: 0
	};

	function onChangeHandler(event) {
		unit[event.target.id] = +event.target.value;

		if (event.target.id === 'lal' || event.target.id === 'tola' || event.target.id === 'chatak') {
			return;
		}

		if (event.target.id === 'pau' || event.target.id === 'dharni') {
			return;
		}

		if (event.target.id === 'kg') {
			return;
		}
		if (event.target.id === 'lbs') {
			return;
		}

	}
</script>

<div>
	<h2>Weight Converter</h2>
	<div>
		<UnitInput id="lal" value={unit.lal} {onChangeHandler} />
		<UnitInput id="tola" value={unit.tola} {onChangeHandler} />
		<UnitInput id="chatak" value={unit.chatak} {onChangeHandler} />
	</div>
	<div>
		<UnitInput id="pau" value={unit.pau} {onChangeHandler} />
		<UnitInput id="dharni" value={unit.dharni} {onChangeHandler} />
	</div>
	<div>
		<UnitInput id="kg" value={unit.kg} {onChangeHandler} />
		<UnitInput id="lbs" value={unit.lbs} {onChangeHandler} />
	</div>
</div>
