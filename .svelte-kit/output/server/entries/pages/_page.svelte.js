import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as null_to_empty } from "../../chunks/index.js";
const UnitInput_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "input[type='text'].svelte-14sdmjs{width:80px;padding:6px;font-family:'Poppins', sans-serif}div.svelte-14sdmjs,label.svelte-14sdmjs{font-size:13px}label.svelte-14sdmjs{text-transform:capitalize}div.svelte-14sdmjs{display:inline;margin-right:18px}",
  map: null
};
const UnitInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { value } = $$props;
  let { label = id } = $$props;
  let { unit = "" } = $$props;
  let { onChangeHandler } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.onChangeHandler === void 0 && $$bindings.onChangeHandler && onChangeHandler !== void 0)
    $$bindings.onChangeHandler(onChangeHandler);
  $$result.css.add(css$3);
  return `<div class="svelte-14sdmjs"><label for="sqrft" class="svelte-14sdmjs">${escape(label)} : </label>
	<input type="text"${add_attribute("id", id, 0)}${add_attribute("value", value, 0)} class="svelte-14sdmjs">
	<!-- HTML_TAG_START -->${unit}<!-- HTML_TAG_END -->
</div>`;
});
const MathFunctions = {
  divide: (num, divFactor) => {
    let temp = 0;
    while (num > divFactor - 1) {
      num -= divFactor;
      temp += 1;
    }
    return [num, temp];
  },
  convertToRopani: (totalDam) => {
    let result = [0, 0, 0, 0];
    let resultDam = MathFunctions.divide(totalDam, 4);
    result[3] = +resultDam[0];
    let tempPaisa = resultDam[1];
    let resultPaisa = MathFunctions.divide(tempPaisa, 4);
    result[2] = +resultPaisa[0];
    let tempAnna = resultPaisa[1];
    let resultAnna = MathFunctions.divide(tempAnna, 16);
    result[1] = +resultAnna[0];
    result[0] = +resultAnna[1];
    console.log(result);
    return result;
  }
};
const Converter_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".div-a.svelte-1ypn9mb{margin-top:40px}h2.svelte-1ypn9mb{font-size:26px}h2.svelte-1ypn9mb,h3.svelte-1ypn9mb{font-family:'Roboto Condensed', sans-serif}",
  map: null
};
const Converter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="main-card"><h2 class="svelte-1ypn9mb">${slots.header ? slots.header({}) : ``}</h2>
	<div class="div-a svelte-1ypn9mb"><h3 class="svelte-1ypn9mb">${slots["top-header"] ? slots["top-header"]({}) : `Nepali Metrics`}</h3>
		${slots["nep-met"] ? slots["nep-met"]({}) : ``}</div>
	<div class="div-a svelte-1ypn9mb"><h3 class="svelte-1ypn9mb">${slots["bot-header"] ? slots["bot-header"]({}) : `International Metrics`}</h3>
		${slots["int-met"] ? slots["int-met"]({}) : ``}</div>
</div>`;
});
const AreaConverter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let unit = {
    ropani: 0,
    anna: 0,
    paisa: 0,
    dam: 0,
    mtr: 0,
    sqrft: 0
  };
  function onChangeHandler(event) {
    let userInput = event.target.value;
    if (isNaN(userInput)) {
      event.target.value = unit[event.target.id];
      return;
    }
    unit[event.target.id] = +event.target.value;
    if (event.target.id === "ropani" || event.target.id === "anna" || event.target.id === "paisa" || event.target.id === "dam") {
      unit.mtr = (unit.ropani * 256 + unit.anna * 16 + unit.paisa * 4 + unit.dam * 1) * 1.99;
      unit.sqrft = (unit.ropani * 256 + unit.anna * 16 + unit.paisa * 4 + unit.dam * 1) * 21.4;
      return;
    }
    if (event.target.id === "mtr") {
      unit.sqrft = unit.mtr * 10.764;
      const tempDam = (unit.mtr / 1.99).toFixed(0);
      const result = MathFunctions.convertToRopani(tempDam);
      unit.dam = result[3];
      unit.paisa = result[2];
      unit.anna = result[1];
      unit.ropani = result[0];
      return;
    }
    if (event.target.id === "sqrft") {
      unit.mtr = unit.sqrft / 10.764;
      const tempDam = (unit.sqrft / 21.4).toFixed(0);
      const result = MathFunctions.convertToRopani(tempDam);
      unit.dam = result[3];
      unit.paisa = result[2];
      unit.anna = result[1];
      unit.ropani = result[0];
      return;
    }
  }
  return `${validate_component(Converter, "Converter").$$render($$result, {}, {}, {
    "int-met": () => {
      return `<span slot="int-met">${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "mtr",
          value: unit.mtr,
          label: "Meter Sq.",
          unit: "m<sup>2</sup>",
          onChangeHandler
        },
        {},
        {}
      )}
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "sqrft",
          value: unit.sqrft,
          label: "Sq. Ft.",
          unit: "ft<sup>2</sup>",
          onChangeHandler
        },
        {},
        {}
      )}</span>`;
    },
    "nep-met": () => {
      return `<span slot="nep-met">${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "ropani",
          value: unit.ropani,
          onChangeHandler
        },
        {},
        {}
      )}
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "anna",
          value: unit.anna,
          onChangeHandler
        },
        {},
        {}
      )}
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "paisa",
          value: unit.paisa,
          onChangeHandler
        },
        {},
        {}
      )}
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "dam",
          value: unit.dam,
          onChangeHandler
        },
        {},
        {}
      )}</span>`;
    },
    header: () => {
      return `<span slot="header">Area/Land Converter</span>`;
    }
  })}`;
});
const MassConverter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    if (event.target.id === "tola") {
      unit.gm = unit.tola * 11.6;
      return;
    }
    if (event.target.id === "gm") {
      unit.tola = unit.gm / 11.6;
      return;
    }
    if (event.target.id === "pau" || event.target.id === "dharni") {
      unit.kg = unit.dharni * 2.39 + unit.pau * 0.2;
      unit.lbs = unit.kg * 2.204;
      return;
    }
    if (event.target.id === "kg") {
      let tempResult = MathFunctions.divide(unit.kg * 5, 12);
      unit.pau = tempResult[0];
      unit.dharni = tempResult[1];
      return;
    }
    if (event.target.id === "lbs") {
      let tempResult = MathFunctions.divide(unit.lbs * 2.5, 12);
      unit.pau = tempResult[0];
      unit.dharni = tempResult[1];
      return;
    }
  }
  return `${validate_component(Converter, "Converter").$$render($$result, {}, {}, {
    "int-met": () => {
      return `<span slot="int-met">${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "dharni",
          value: unit.dharni,
          onChangeHandler
        },
        {},
        {}
      )}
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "pau",
          value: unit.pau,
          onChangeHandler
        },
        {},
        {}
      )}
		<span style="height: 30px; display: block"></span>
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "kg",
          label: "kilos....",
          value: unit.kg,
          onChangeHandler
        },
        {},
        {}
      )}
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "lbs",
          value: unit.lbs,
          onChangeHandler
        },
        {},
        {}
      )}</span>`;
    },
    "bot-header": () => {
      return `<span slot="bot-header">Pau/Dharni - Kg/Lbs Converter </span>`;
    },
    "nep-met": () => {
      return `<span slot="nep-met"><div>${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "tola",
          value: unit.tola,
          onChangeHandler
        },
        {},
        {}
      )}
			${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "gm",
          value: unit.gm,
          onChangeHandler
        },
        {},
        {}
      )}</div></span>`;
    },
    "top-header": () => {
      return `<span slot="top-header">Tola/Gram Converter </span>`;
    },
    header: () => {
      return `<span slot="header">Weight Converter</span>`;
    }
  })}`;
});
const ToggleButton_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".active.svelte-ihbt3o{background-color:rgba(65, 130, 235, 0.9);color:white}.active.svelte-ihbt3o:hover{background-color:rgba(65, 130, 235, 0.9)}button.svelte-ihbt3o{width:100%;padding:20px 0px;cursor:pointer;border:0;border-bottom:1px solid rgba(0, 0, 0, 0.2);background-color:rgba(65, 130, 235, 0.3);font-family:'Poppins', sans-serif}button.svelte-ihbt3o:hover{background-color:rgba(65, 130, 235, 0.5)}.first.svelte-ihbt3o{border-top-left-radius:12px}.last.svelte-ihbt3o{border-top-right-radius:12px}",
  map: null
};
const ToggleButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { button } = $$props;
  let { currentButton } = $$props;
  let { toggleButton } = $$props;
  let { buttonLabel } = $$props;
  let { buttonClass } = $$props;
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  if ($$props.currentButton === void 0 && $$bindings.currentButton && currentButton !== void 0)
    $$bindings.currentButton(currentButton);
  if ($$props.toggleButton === void 0 && $$bindings.toggleButton && toggleButton !== void 0)
    $$bindings.toggleButton(toggleButton);
  if ($$props.buttonLabel === void 0 && $$bindings.buttonLabel && buttonLabel !== void 0)
    $$bindings.buttonLabel(buttonLabel);
  if ($$props.buttonClass === void 0 && $$bindings.buttonClass && buttonClass !== void 0)
    $$bindings.buttonClass(buttonClass);
  $$result.css.add(css$1);
  return `<button class="${[
    escape(null_to_empty(buttonClass), true) + " svelte-ihbt3o",
    button === currentButton ? "active" : ""
  ].join(" ").trim()}">${escape(buttonLabel)}
</button>`;
});
const VolumeConveter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    let userInput = event.target.value;
    if (isNaN(userInput)) {
      event.target.value = unit[event.target.id];
      return;
    }
    unit[event.target.id] = +userInput;
    if (event.target.id === "muthi" || event.target.id === "mana" || event.target.id === "pathi" || event.target.id === "muri") {
      return;
    }
    if (event.target.id === "kg") {
      return;
    }
    if (event.target.id === "lbs") {
      return;
    }
  }
  return `${validate_component(Converter, "Converter").$$render($$result, {}, {}, {
    "int-met": () => {
      return `<span slot="int-met">${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "kg",
          value: unit.kg,
          onChangeHandler
        },
        {},
        {}
      )}
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "lbs",
          value: unit.lbs,
          onChangeHandler
        },
        {},
        {}
      )}</span>`;
    },
    "nep-met": () => {
      return `<span slot="nep-met">${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "muthi",
          value: unit.muthi,
          onChangeHandler
        },
        {},
        {}
      )}
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "mana",
          value: unit.mana,
          onChangeHandler
        },
        {},
        {}
      )}
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "pathi",
          value: unit.pathi,
          onChangeHandler
        },
        {},
        {}
      )}
		${validate_component(UnitInput, "UnitInput").$$render(
        $$result,
        {
          id: "muri",
          value: unit.muri,
          onChangeHandler
        },
        {},
        {}
      )}</span>`;
    },
    header: () => {
      return `<span slot="header">Volume Converter</span>`;
    }
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-18h72ra{border-bottom:1px solid black;margin:18px}body.svelte-18h72ra{margin:0;padding:0;height:100vh;font-family:'Poppins', sans-serif}h1.svelte-18h72ra{font-family:'Roboto Condensed', sans-serif}main.svelte-18h72ra{height:80vh;width:100vw;display:flex;align-items:center;justify-content:center}.root.svelte-18h72ra{background-color:rgba(152, 144, 144, 0.1);padding-bottom:28px;width:50vw;height:60vh;border-radius:12px;box-shadow:rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px}.toggle-bar.svelte-18h72ra{display:flex;align-items:center;justify-content:space-between}.converter.svelte-18h72ra{padding:0px 40px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const Converter2 = {
    AreaConverter: "a",
    MassConverter: "m",
    VolumeConverter: "v"
  };
  Object.freeze(Converter2);
  let currentButton = Converter2.AreaConverter;
  function toggleButton(value) {
    currentButton = value;
  }
  $$result.css.add(css);
  return `<body class="svelte-18h72ra"><header class="svelte-18h72ra"><h1 class="svelte-18h72ra">Nepali Unit Converter</h1>
		</header>
	<main class="svelte-18h72ra"><div class="root svelte-18h72ra"><div class="toggle-bar svelte-18h72ra">${validate_component(ToggleButton, "ToggleButton").$$render(
    $$result,
    {
      button: Converter2.AreaConverter,
      currentButton,
      toggleButton,
      buttonLabel: "Area Converter",
      buttonClass: "first"
    },
    {},
    {}
  )}
				${validate_component(ToggleButton, "ToggleButton").$$render(
    $$result,
    {
      button: Converter2.MassConverter,
      currentButton,
      toggleButton,
      buttonLabel: "Mass Converter",
      buttonClass: ""
    },
    {},
    {}
  )}
				${validate_component(ToggleButton, "ToggleButton").$$render(
    $$result,
    {
      button: Converter2.VolumeConverter,
      currentButton,
      toggleButton,
      buttonLabel: "Volume Converter",
      buttonClass: "last"
    },
    {},
    {}
  )}</div>

			<div class="converter svelte-18h72ra">${currentButton === Converter2.AreaConverter ? `${validate_component(AreaConverter, "AreaConverter").$$render($$result, {}, {}, {})}` : `${currentButton === Converter2.MassConverter ? `${validate_component(MassConverter, "MassConverter").$$render($$result, {}, {}, {})}` : `${currentButton === Converter2.VolumeConverter ? `${validate_component(VolumeConveter, "VolumeConveter").$$render($$result, {}, {}, {})}` : ``}`}`}</div></div></main>
</body>`;
});
export {
  Page as default
};
