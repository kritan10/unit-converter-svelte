<script>
	import UnitInput from '../UnitInput.svelte';
	import MathFunctions from '../MathFunctions.js';
	import Converter from './Converter.svelte';

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

<Converter>
	<span slot="header">Weight Converter</span>
	<span slot="top-header"> Tola/Gram Converter </span>
	<span slot="nep-met">
		<div>
			<UnitInput id="tola" value={unit.tola} {onChangeHandler} />
			<UnitInput id="gm" value={unit.gm} {onChangeHandler} />
		</div>
	</span>
	<span slot="bot-header"> Pau/Dharni - Kg/Lbs Converter </span>
	<span slot="int-met">
		<UnitInput id="dharni" value={unit.dharni} {onChangeHandler} />
		<UnitInput id="pau" value={unit.pau} {onChangeHandler} />
		<span style="height: 30px; display: block" />
		<UnitInput id="kg" label="kilos...." value={unit.kg} {onChangeHandler} />
		<UnitInput id="lbs" value={unit.lbs} {onChangeHandler} />
	</span>
</Converter>
