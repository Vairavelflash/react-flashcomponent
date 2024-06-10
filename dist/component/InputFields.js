"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleSwitch = exports.TextArea = exports.RadioButton = exports.InputTime = exports.InputText = exports.InputNumber = exports.InputFile = exports.InputDate = exports.IconDropDown = exports.IconCheckbox = exports.Dropdown = exports.Color = exports.Checkbox = void 0;
require("./input.css");
require("./common.css");
var _icons = require("../assets/icons");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Checkbox = exports.Checkbox = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    name,
    label,
    className = "",
    value = false,
    onChange,
    disabled = false,
    position = "left"
  } = _ref;
  const [check, setCheck] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    setCheck(value);
  }, [value]);
  const handleClick = e => {
    const checkValue = e.target.checked;
    setCheck(checkValue);
    if (onChange) {
      onChange(name, checkValue);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w-Full fc--h-Full fc--radius-sm ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter-Between  fc--gap-2 fc-py-1.5 fc-px-1.5 checkbox "
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    name: name,
    ref: ref,
    className: "accent-black --checkbox--",
    type: "checkbox",
    defaultChecked: check,
    onChange: handleClick,
    disabled: disabled
  }), label && /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16 f-label",
    htmlFor: name
  }, label)));
});
Checkbox.displayName = "InputCheckbox";
const Dropdown = exports.Dropdown = /*#__PURE__*/_react.default.forwardRef((_ref2, ref) => {
  let {
    name,
    label,
    options,
    value,
    onChange,
    className,
    disable = false
  } = _ref2;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const dropdownRef = (0, _react.useRef)(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = data => {
    if (!disable && onChange) {
      onChange(name, data);
      setIsOpen(false);
    }
  };
  (0, _react.useEffect)(() => {
    // If user clicks outside, close the DropDown
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: dropdownRef,
    className: " fc--w-Full fc--h-Full fc-flexCenter-Between dropDown ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--w-50 Text12-400-16 label"
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: " fc--w-50  fc--h-Full  dropDown",
    onClick: handleClick,
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter-Between fc--flex-row  fc--w-Full fc--radius-sm fc--border fc-py-1.5 fc-px-1.5 fc--gray-200"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Text12-400-16 fc--w-Full"
  }, value.length > 10 ? value.slice(0, 10) + "..." : value), /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center ".concat(isOpen ? "fc--rotate180-200" : "fc--rotate0-200")
  }, /*#__PURE__*/_react.default.createElement(_icons.ExpandMoreIcon, null))), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--radius-sm fc--border fc-white  fc--relative fc--z-1 dropdownOptions"
  }, options.map(option => /*#__PURE__*/_react.default.createElement("div", {
    key: option.value,
    className: "option fc--border-b Text12-400-16",
    onClick: e => {
      e.stopPropagation(); //Stop Calling other onClick events
      handleSelect(option === null || option === void 0 ? void 0 : option.label);
    }
  }, option.label.length > 10 ? option.label.slice(0, 10) + "..." : option.label))))));
});
Dropdown.displayName = "InputDropdown";
const IconCheckbox = _ref3 => {
  let {
    name,
    label,
    className = "",
    value = false,
    onChange,
    icon,
    otherText,
    disabled = false,
    orientation = "horizontal"
  } = _ref3;
  const [check, setCheck] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    setCheck(value);
  }, [value]);
  const handleClick = e => {
    setCheck(e.target.checked);
    if (onChange) {
      onChange(name, e.target.checked);
    }
  };
  const getFlexDirection = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev"
  };
  const flexDirection = getFlexDirection[orientation] || "fc--flex-row";
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w-Full fc--h-Full  fc--border bg-neutral-100 ".concat(className, "\n        ").concat(flexDirection, " ")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox fc-flexCenter justify-between fc-py-1.5 fc-px-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--gap-1 f-icon-label"
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center"
  }, icon), otherText && /*#__PURE__*/_react.default.createElement("span", {
    className: "Text12-400-16 w-11 navText-12 font-semibold"
  }, otherText), /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16 f-label",
    htmlFor: name
  }, label)), /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    name: name,
    className: "accent-black --icon-checkbox--",
    type: "checkbox",
    defaultChecked: check,
    onChange: handleClick,
    disabled: disabled
  }))));
};
exports.IconCheckbox = IconCheckbox;
const IconDropDown = _ref4 => {
  let {
    name,
    className,
    label,
    options,
    value,
    onChange,
    icon
  } = _ref4;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const dropdownRef = (0, _react.useRef)(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = data => {
    onChange(name, data);
    setIsOpen(false);
    console.log("Select", data);
  };
  (0, _react.useEffect)(() => {
    // If user clicks outside, close the DropDown
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: dropdownRef,
    className: "fc--w-Full fc--h-Full fc--radius-sm fc--border  checkbox fc-flexCenter justify-between --icondropDown-- ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--gap-1 fc--w-50  fc-py-1.5 pr-2 fc--h-Full bg-neutral-100 --label-Text--"
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center"
  }, icon), /*#__PURE__*/_react.default.createElement("span", {
    className: "Text12-400-16"
  }, label)), /*#__PURE__*/_react.default.createElement("div", {
    className: " fc--w-50  fc--h-Full  bg --dropDown--",
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter-Between fc--flex-rowpy-1.5 pr-2 pl-1.5",
    id: name
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Text12-400-16 w-[100%]"
  }, value.length > 10 ? value.slice(0, 10) + "..." : value), /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center ".concat(isOpen ? "fc--rotate180-200" : "fc--rotate0-200")
  }, /*#__PURE__*/_react.default.createElement(_icons.ExpandMoreIcon, null))), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--radius-sm fc--border bg-white fc--relative --options-- fc--z-1"
  }, options.map(option => /*#__PURE__*/_react.default.createElement("div", {
    key: option.value,
    className: "option fc--border-b Text12-400-16",
    onClick: e => {
      e.stopPropagation(); //Stop Calling other onClick events
      handleSelect(option === null || option === void 0 ? void 0 : option.label);
    }
  }, option.label.length > 10 ? option.label.slice(0, 10) + "..." : option.label))))));
};
exports.IconDropDown = IconDropDown;
const ToggleSwitch = exports.ToggleSwitch = /*#__PURE__*/_react.default.forwardRef((_ref5, ref) => {
  let {
    name,
    className = "",
    labelText,
    disabled = false,
    sideLabel,
    labelA = "Off",
    labelB = "On",
    value,
    onChange,
    orientation = "horizontal"
  } = _ref5;
  const toggle = (0, _react.useRef)(null); //For changing style
  const checkbox = (0, _react.useRef)(null); //checkbox state

  function handleToggle() {
    if (!disabled) {
      //check disabled state
      if (onChange) {
        toggle.current.classList.toggle("toggled");
        const currentState = checkbox.current.checked = !checkbox.current.checked;
        onChange(name, currentState);
      }
    }
  }
  const getFlexDirection = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev"
  };
  const flexDirection = getFlexDirection[orientation] || "fc--flex-row";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--w-Full fc--h-Full ".concat(className, " ").concat(flexDirection),
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    name: name,
    ref: checkbox,
    className: "toggle-checkbox",
    type: "checkbox",
    defaultChecked: value,
    "aria-checked": value
    // aria-labelledby={name}
    ,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w-Full fc--h-Full fc-flexCenter-Between slider"
  }, labelText && /*#__PURE__*/_react.default.createElement("p", {
    className: "Text12-400-16  fc-text-black label"
  }, labelText), /*#__PURE__*/_react.default.createElement("span", {
    ref: toggle,
    onClick: handleToggle,
    className: "toggle-switch  fc--border-black  sildebox ".concat(value && "toggled")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "toggle  fc--black fc--mr-1 sildecircle "
  })), sideLabel && /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16  fc-text-black sidelabel ",
    "aria-hidden": value,
    htmlFor: name
  }, value ? labelA : labelB)));
});
ToggleSwitch.displayName = "InputToggleSwitch";
const InputText = exports.InputText = /*#__PURE__*/_react.default.forwardRef((_ref6, ref) => {
  let {
    name,
    className = "",
    label,
    placeholder,
    value,
    onChange,
    icon,
    disabled = false,
    orientation = "horizontal"
  } = _ref6;
  const [data, setData] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    setData(value);
  }, [value]);
  const handleChange = e => {
    const newValue = e.target.value;
    setData(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };
  const getFlexDirection = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev"
  };
  const flexDirection = getFlexDirection[orientation] || "fc--flex-row";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w-Full fc--h-Full fc-flexCenter-Between fc-py-1.5 fc-px-1.5 ".concat(className, " ").concat(flexDirection)
  }, icon || label ? /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--gap-1  fc--w-50 labelbody "
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center"
  }, icon), label && /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16 label ",
    htmlFor: name
  }, label)) : null, /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    name: name,
    ref: ref,
    className: "Text-14-400-20  fc--w-50 fc--border fc-py-1 fc-px-1 fc-px-1 text",
    type: "text",
    placeholder: placeholder,
    value: data,
    onChange: handleChange,
    disabled: disabled
  }));
});
InputText.displayName = "InputText";
const RadioButton = exports.RadioButton = /*#__PURE__*/_react.default.forwardRef((_ref7, ref) => {
  let {
    name,
    helperText,
    className = "",
    value,
    onChange,
    icon,
    orientation = "horizontal",
    disabled = false,
    checked = false
  } = _ref7;
  const [select, setSelect] = (0, _react.useState)(checked);
  (0, _react.useEffect)(() => {
    setSelect(checked);
  }, [checked]);
  const handleClick = e => {
    setSelect(prev => !prev);
    if (onChange) {
      onChange(name, e.target.value);
    }
  };
  const getFlexDirection = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev"
  };
  const flexDirection = getFlexDirection[orientation] || "fc--flex-row";
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w-Full fc--h-Full  ".concat(helperText ? "fc--flexStart" : "fc-flexCenter-Between", " fc--gap-2 fc-py-1.5 fc-px-2  f-radio-body ").concat(className, " ").concat(flexDirection, "  ")
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: value,
    name: name,
    value: value,
    ref: ref,
    className: "fc--black accent-black f-radio ",
    type: "radio",
    defaultChecked: select,
    onChange: handleClick,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--gap-1 f-label-body"
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center"
  }, icon), /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--flex fc--flex-col"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16 f-label",
    htmlFor: value
  }, value), helperText && /*#__PURE__*/_react.default.createElement("p", {
    className: "Text12-400-16 f-helpertext fc-text-gray-900"
  }, helperText)))));
});
RadioButton.displayName = "InputRadioButton";
const InputNumber = exports.InputNumber = /*#__PURE__*/_react.default.forwardRef((_ref8, ref) => {
  let {
    name,
    className,
    label,
    placeholder,
    value,
    onChange,
    icon,
    disabled = false,
    orientation = "horizontal"
  } = _ref8;
  const [data, setData] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    setData(value);
  }, [value]);
  const handleChange = e => {
    const newValue = e.target.value;
    setData(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };
  const getFlexDirection = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev"
  };
  const flexDirection = getFlexDirection[orientation] || "fc--flex-row";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w-Full fc--h-Full  fc-flexCenter-Between fc-py-1.5 fc-px-1.5 ".concat(className, "\n        ").concat(flexDirection, " ")
  }, icon || label ? /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--gap-1 fc--w-50 f-icon-label"
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center"
  }, icon), label && /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16  f-label",
    htmlFor: name
  }, label)) : null, /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    name: name,
    ref: ref,
    className: " Text-14-400-20 fc-text-gray-900 fc--w-50    fc--border fc-py-1 fc-px-1 f-number",
    type: "number",
    placeholder: placeholder,
    value: data,
    onChange: handleChange,
    disabled: disabled
  }));
});
InputNumber.displayName = "InputNumber";
const TextArea = exports.TextArea = /*#__PURE__*/_react.default.forwardRef((_ref9, ref) => {
  let {
    name,
    className,
    label,
    placeholder,
    value,
    onChange,
    icon,
    disabled = false,
    orientation = "horizontal",
    rows,
    cols
  } = _ref9;
  const [data, setData] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    setData(value);
  }, [value]);
  const handleChange = e => {
    const newValue = e.target.value;
    setData(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };
  const getFlexDirection = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev"
  };
  const flexDirection = getFlexDirection[orientation] || "fc--flex-row";
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: "fc--w-Full fc--h-Full  fc-flexCenter-Between fc-py-1.5 fc-px-1.5  ".concat(className, "\n        ").concat(flexDirection, " ")
  }, icon || label ? /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--gap-1 fc--w-50 f-icon-label"
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center"
  }, icon), label && /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16  f-label",
    htmlFor: name
  }, label)) : null, /*#__PURE__*/_react.default.createElement("textarea", {
    id: name,
    name: name,
    className: " Text-14-400-20 fc-text-gray-900 fc--w-50  fc--border fc--border-gray-200  fc-py-1 fc-px-1 fc--radius-md  f-number",
    placeholder: placeholder,
    value: data,
    onChange: handleChange,
    disabled: disabled,
    rows: rows,
    cols: cols,
    style: {
      resize: "none"
    }
  }));
});
TextArea.displayName = "InputTextArea";
const InputTime = exports.InputTime = /*#__PURE__*/_react.default.forwardRef((_ref10, ref) => {
  let {
    name,
    className,
    label,
    value,
    onChange,
    icon,
    disabled = false,
    orientation = "horizontal",
    min,
    max,
    timerIcon = true,
    showSeconds = false
  } = _ref10;
  const [data, setData] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    setData(value);
  }, [value]);
  const handleChange = e => {
    setData(e.target.value);
    if (onChange) {
      onChange(name, e.target.value);
    }
  };
  const getFlexDirection = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev"
  };
  const flexDirection = getFlexDirection[orientation] || "fc--flex-row";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w-Full fc--h-Full  fc-flexCenter-Between fc-py-1.5 fc-px-1.5 fc--relative ".concat(className, "\n        ").concat(flexDirection)
  }, (icon || label) && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--gap-1  f-icon-label"
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center"
  }, icon), label ? /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16 f-label",
    htmlFor: name
  }, label) : null), /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    name: name,
    ref: ref,
    className: "Text-14-400-20 fc-text-gray-900 fc--border fc--border-gray-200 fc-py-1 fc-px-1 fc--radius-md f-time ",
    type: "time",
    value: data,
    onChange: handleChange,
    disabled: disabled,
    min: min,
    max: max,
    step: showSeconds ? "1" : "0"
  }));
});
InputTime.displayName = "InputTime";
const InputDate = exports.InputDate = /*#__PURE__*/_react.default.forwardRef((_ref11, ref) => {
  let {
    name,
    className = "",
    label,
    value,
    onChange,
    icon,
    disabled = false,
    orientation = "horizontal",
    min,
    max,
    dateIcon = true
  } = _ref11;
  const [data, setData] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    setData(value);
  }, [value]);
  const handleChange = e => {
    const newValue = e.target.value;
    setData(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };
  const getFlexDirection = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev"
  };
  const flexDirection = getFlexDirection[orientation] || "fc--flex-row";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w-Full fc--h-Full  fc-flexCenter-Between fc-py-1.5 fc-px-1.5  ".concat(className, "\n        ").concat(flexDirection)
  }, (icon || label) && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--gap-1 fc--w-50 f-icon-label"
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center"
  }, icon), label ? /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16  f-label",
    htmlFor: name
  }, label) : null), /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    name: name,
    ref: ref,
    className: "Text-14-400-20 text-Gray-900    fc--border fc-py-1 fc-px-1 fc--gap-1 f-date ",
    type: "date",
    value: data,
    onChange: handleChange,
    disabled: disabled,
    min: min,
    max: max
  }));
});
InputDate.displayName = "InputDate";
const Color = exports.Color = /*#__PURE__*/_react.default.forwardRef((_ref12, ref) => {
  let {
    name,
    className = "",
    label,
    value,
    onChange,
    disabled = false,
    orientation = "horizontal"
  } = _ref12;
  const [data, setData] = (0, _react.useState)(value !== null && value !== void 0 ? value : '#ff0000');
  (0, _react.useEffect)(() => {
    setData(value);
  }, [value]);
  const [timeoutId, setTimeoutId] = (0, _react.useState)(null);
  const reff = (0, _react.useRef)(null);
  const handleChange = e => {
    const newValue = e.target.value;

    // Clear previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      setData(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    }, 500);
    setTimeoutId(newTimeoutId);
  };
  const ColorIconClick = () => {
    var _reff$current;
    reff === null || reff === void 0 || (_reff$current = reff.current) === null || _reff$current === void 0 || _reff$current.click();
  };
  const getFlexDirection = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev"
  };
  const flexDirection = getFlexDirection[orientation] || "fc--flex-row";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w-Full fc--h-Full  fc-flexCenter-Between fc-py-1.5 fc-px-1.5  ".concat(className, "\n        ").concat(flexDirection, " ")
  }, label ? /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--gap-1 fc--w-50 f-icon-label"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16 f-label",
    htmlFor: name
  }, label)) : null, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc--relative  fc-px-1 f-color"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: ColorIconClick,
    style: {
      backgroundColor: "".concat(data)
    },
    className: "fc--w4 fc--h4 fc-px-1 fc--border  "
  }), /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    name: name,
    ref: reff,
    className: "fc--w4 fc--h4 Text-14-400-20 text-Gray-900  fc--border fc-py-1 fc-px-1 fc--radius-md   ",
    type: "color",
    value: data,
    onChange: handleChange,
    style: {
      visibility: "hidden",
      position: "absolute"
    },
    disabled: disabled
  }))));
});
Color.displayName = "InputColor";
const InputFile = exports.InputFile = /*#__PURE__*/_react.default.forwardRef((_ref13, ref) => {
  let {
    name,
    className,
    label,
    onChange,
    icon,
    disabled = false,
    orientation = "horizontal",
    accept = "*.*"
  } = _ref13;
  const [data, setData] = (0, _react.useState)(null);
  const handleChange = e => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (!file) return;
      setData(file);
      // if (onChange) {
      //   onChange(name, file);
      // }
    }
  };
  const getFlexDirection = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev"
  };
  const flexDirection = getFlexDirection[orientation] || "fc--flex-row";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w-Full fc--h-Full fc-flexCenter-Between fc-py-1.5 fc-px-1.5 ".concat(className, "\n        ").concat(flexDirection, " ")
  }, label ? /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--gap-1 fc--w-50"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "Text12-400-16 f-label"
  }, label)) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc-flexCenter fc--w-50 fc--gap-1"
  }, /*#__PURE__*/_react.default.createElement("input", {
    value: (data === null || data === void 0 ? void 0 : data.name) || "No File Chosen",
    readOnly: true,
    className: " Text12-400-16 text-Gray-1000 fc--w-80   fc--bg-gray-200 fc--border fc--h7 fc-py-1.5 fc-px-2 fc--radius-md"
  }), /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    name: name,
    ref: ref,
    className: "fc-none",
    type: "file",
    onChange: handleChange,
    disabled: disabled,
    accept: accept
  }), icon ? /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name,
    className: "fc-flexCenter  fc--bg-gray-200 fc--h7 fc--p-6 fc--radius-sm fc--border  f-inputIcon"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fc--w4 fc--h4 fc-flexCenter-Center"
  }, icon)) : null));
});
InputFile.displayName = "InputFile";