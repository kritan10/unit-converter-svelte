<script>
	import UnitInput from '../UnitInput.svelte';
	import MathFunctions from '../MathFunctions.js';

	let unit = {
		muthi: 0,
		mana: 0,
		pathi: 0,
		muri: 0,
		dharni: 0,
		kg: 0,
		lbs: 0
	};

	function onChangeHandler(event) {
		unit[event.target.id] = +event.target.value;

		if (
			event.target.id === 'muthi' ||
			event.target.id === 'mana' ||
			event.target.id === 'pathi' ||
			event.target.id === 'muri'
		) {
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
	<h2>Volume Converter</h2>
	<div>
		<UnitInput id="muthi" value={unit.muthi} {onChangeHandler} />
		<UnitInput id="mana" value={unit.mana} {onChangeHandler} />
		<UnitInput id="pathi" value={unit.pathi} {onChangeHandler} />
		<UnitInput id="muri" value={unit.muri} {onChangeHandler} />
	</div>
	<div>
		<UnitInput id="kg" value={unit.kg} {onChangeHandler} />
		<UnitInput id="lbs" value={unit.lbs} {onChangeHandler} />
	</div>
</div>
