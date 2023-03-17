<script>
	import UnitInput from '../lib/UnitInput.svelte';

	let unit = {
		ropani: 0,
		anna: 0,
		paisa: 0,
		dam: 0,
		mtr: 0,
		sqrft: 0
	};

	function onChangeHandler(event) {
		unit[event.target.id] = +event.target.value;

		if (
			event.target.id === 'ropani' ||
			event.target.id === 'anna' ||
			event.target.id === 'paisa' ||
			event.target.id === 'dam'
		) {
			unit.mtr = (unit.ropani * 256 + unit.anna * 16 + unit.paisa * 4 + unit.dam * 1) * 1.99;
			unit.sqrft = (unit.ropani * 256 + unit.anna * 16 + unit.paisa * 4 + unit.dam * 1) * 21.4;

			return;
		}

		if (event.target.id === 'mtr') {
			unit.sqrft = unit.mtr * 10.764;

			let tempDam = (unit.mtr / 1.99).toFixed(0);
			let tempPaisa = 0;
			let tempAnna = 0;
			let tempRopani = 0;
			while (tempDam > 3) {
				tempDam -= 4;
				tempPaisa += 1;
			}
			while (tempPaisa > 3) {
				tempPaisa -= 4;
				tempAnna += 1;
			}
			while (tempAnna > 15) {
				tempAnna -= 16;
				tempRopani += 1;
			}
			unit.dam = tempDam;
			unit.paisa = tempPaisa;
			unit.anna = tempAnna;
			unit.ropani = tempRopani;

			return;
		}

		if (event.target.id === 'sqrft') {
			unit.mtr = unit.sqrft / 10.764;

			let tempDam = (unit.sqrft / 21.4).toFixed(0);
			let tempPaisa = 0;
			let tempAnna = 0;
			let tempRopani = 0;
			while (tempDam > 3) {
				tempDam -= 4;
				tempPaisa += 1;
			}
			while (tempPaisa > 3) {
				tempPaisa -= 4;
				tempAnna += 1;
			}
			while (tempAnna > 15) {
				tempAnna -= 16;
				tempRopani += 1;
			}
			unit.dam = tempDam;
			unit.paisa = tempPaisa;
			unit.anna = tempAnna;
			unit.ropani = tempRopani;

			return;

			return;
		}
	}
</script>

<h1>Nepali Unit Converter</h1>

<div>
	<p>Area/Land Converter</p>
	<div>
		<UnitInput id="ropani" value={unit.ropani} {onChangeHandler} />
		<UnitInput id="anna" value={unit.anna} {onChangeHandler} />
		<UnitInput id="paisa" value={unit.paisa} {onChangeHandler} />
		<UnitInput id="dam" value={unit.dam} {onChangeHandler} />
	</div>
	<!-- <div>
		<UnitInput id="ropani" value={unit.ropani} {onChangeHandler} />
		<UnitInput id="anna" value={unit.anna} {onChangeHandler} />
		<UnitInput id="paisa" value={unit.paisa} {onChangeHandler} />
		<UnitInput id="dam" value={unit.dam} {onChangeHandler} />
	</div> -->
	<div>
		<UnitInput id="mtr" value={unit.mtr} {onChangeHandler} />
		<UnitInput id="sqrft" value={unit.sqrft} {onChangeHandler} />
	</div>
</div>
