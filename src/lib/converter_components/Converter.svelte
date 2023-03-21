<div class="main-card">
	<h2><slot name="header" /></h2>
	<div class="div-a">
		<h3>
			<slot name="top-header">Nepali Metrics</slot>
		</h3>
		<slot name="nep-met" />
	</div>
	<div class="div-a">
		<h3>
			<slot name="bot-header">International Metrics</slot>
		</h3>
		<slot name="int-met" />
	</div>
</div>

<style>
	.div-a {
		margin-top: 40px;
	}

	h2 {
		font-size: 26px;
	}

	h2,
	h3 {
		font-family: 'Roboto Condensed', sans-serif;
	}
</style>
