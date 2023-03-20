<script>
	import UnitInput from '../UnitInput.svelte';
	import MathFunctions from '../MathFunctions.js';

	let unit = {
		tola: 0,
		gm: 0,
		pau: 0,
		dharni: 0,
		kg: 0,
		lbs: 0
	};

	function onChangeHandler(event) {
		unit[event.target.id] = +event.target.value;

		if (event.target.id === 'tola') {
			unit.gm = unit.tola * 11.6;
			return;
		}

		if (event.target.id === 'gm') {
			unit.tola = unit.gm / 11.6;
			return;
		}

		if (event.target.id === 'pau' || event.target.id === 'dharni') {
			unit.kg = unit.dharni * 2.39 + unit.pau * 0.2;
			unit.lbs = unit.kg * 2.204;
			return;
		}

		if (event.target.id === 'kg') {
			let tempResult = MathFunctions.divide(unit.kg * 5, 12);
			unit.pau = tempResult[0];
			unit.dharni = tempResult[1];
			return;
		}
		if (event.target.id === 'lbs') {
			let tempResult = MathFunctions.divide(unit.lbs * 2.5, 12);
			unit.pau = tempResult[0];
			unit.dharni = tempResult[1];
			return;
		}
	}
</script>

<div>
	<h2>Weight Converter</h2>
	<div class="div-a">
		<h3>Tola/Gram Converter</h3>
		<UnitInput id="tola" value={unit.tola} {onChangeHandler} />
		<UnitInput id="gm" value={unit.gm} {onChangeHandler} />
	</div>
	<div class="div-a">
		<h3>Pau/Dharni - Kg/Lbs Converter</h3>
		<UnitInput id="dharni" value={unit.dharni} {onChangeHandler} />
		<UnitInput id="pau" value={unit.pau} {onChangeHandler} />
	</div>
	<div class="div-a">
		<UnitInput id="kg" value={unit.kg} {onChangeHandler} />
		<UnitInput id="lbs" value={unit.lbs} {onChangeHandler} />
	</div>
</div>

<style>
	.div-a {
		margin-top: 40px;
	}
</style>
