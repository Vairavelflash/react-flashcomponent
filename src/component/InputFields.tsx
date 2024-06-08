
import "./input.css";
import "./common.css";
import { ExpandMoreIcon } from "../assets/icons";
import React, { Fragment, Ref, useEffect, useRef, useState } from "react";

interface InputCheckboxProps {
  name: string;
  label?: string;
  className?: string;
  value: boolean;
  onChange: (name: string, value: boolean | string) => void;
  disabled?: boolean;
  position?: string;
}
export const Checkbox = React.forwardRef<HTMLInputElement, InputCheckboxProps>(
  (
    {
      name,
      label,
      className = "",
      value = false,
      onChange,
      disabled = false,
      position = "left",
    }: InputCheckboxProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [check, setCheck] = useState<boolean>(value);

    useEffect(() => {
      setCheck(value);
    }, [value]);
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      const checkValue = e.target.checked;
      setCheck(checkValue);
      if (onChange) {
        onChange(name, checkValue);
      }
    };
    return (
      <div className={`fc--w-Full fc--h-Full fc--radius-sm ${className}`}>
        <div
          className={`fc-flexCenter-Between  fc--gap-2 fc-py-1.5 fc-px-1.5 checkbox `}
        >
          <input
            id={name}
            name={name}
            ref={ref}
            className="accent-black --checkbox--"
            type="checkbox"
            defaultChecked={check}
            onChange={handleClick}
            disabled={disabled}
          />
          {label && (
            <label className="Text12-400-16 f-label" htmlFor={name}>
              {label}
            </label>
          )}
        </div>
      </div>
    );
  }
);
Checkbox.displayName = "InputCheckbox";

interface InputDropDownProps {
  name: string;
  label?: string;
  options: any;
  value: string;
  onChange: (name: string, value: boolean | string) => void;
  className?: string;
  disable?: boolean;
}
export const Dropdown = React.forwardRef<HTMLInputElement, InputDropDownProps>(
  (
    {
      name,
      label,
      options,
      value,
      onChange,
      className,
      disable = false,
    }: InputDropDownProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    const handleSelect = (data: string) => {
      if (!disable && onChange) {
        onChange(name, data);
        setIsOpen(false);
      }
    };

    useEffect(() => {
      // If user clicks outside, close the DropDown
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <Fragment>
        <div
          ref={dropdownRef}
          className={` fc--w-Full fc--h-Full fc-flexCenter-Between dropDown ${className}`}
        >
          {/* DropDown Label */}
          <div className="fc-flexCenter fc--w-50 Text12-400-16 label">
            {label}
          </div>
          {/* DropDown  */}
          <div
            className=" fc--w-50  fc--h-Full  dropDown"
            onClick={handleClick}
            ref={ref}
          >
            <div className="fc-flexCenter-Between fc--flex-row  fc--w-Full fc--radius-sm fc--border fc-py-1.5 fc-px-1.5 fc--gray-200">
              <div className="Text12-400-16 fc--w-Full">
                {value.length > 10 ? value.slice(0, 10) + "..." : value}
              </div>
              <div
                className={`fc--w4 fc--h4 fc-flexCenter-Center ${
                  isOpen ? "fc--rotate180-200" : "fc--rotate0-200"
                }`}
              >
                <ExpandMoreIcon />
              </div>
            </div>
            {/* DropDown items */}
            {isOpen && (
              <div className="fc--radius-sm fc--border fc-white  fc--relative fc--z-1 dropdownOptions">
                {options.map((option: any) => (
                  <div
                    key={option.value}
                    className="option fc--border-b Text12-400-16"
                    onClick={(e) => {
                      e.stopPropagation(); //Stop Calling other onClick events
                      handleSelect(option?.label);
                    }}
                  >
                    {option.label.length > 10
                      ? option.label.slice(0, 10) + "..."
                      : option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
);
Dropdown.displayName = "InputDropdown";

export const IconCheckbox = ({
  name,
  label,
  className = "",
  value = false,
  onChange,
  icon,
  otherText,
  disabled = false,
  orientation = "horizontal",
}: {
  name: string;
  label: string;
  className?: string;
  value: boolean;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  otherText?: string;
  disabled?: boolean;
  orientation?: string;
}) => {
  const [check, setCheck] = useState<boolean>(value);
  useEffect(() => {
    setCheck(value);
  }, [value]);
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
    if (onChange) {
      onChange(name, e.target.checked);
    }
  };

  const getFlexDirection: any = {
    vertical: "fc--flex-col",
    horizontal_reverse: "fc--flex-row-rev",
    vertical_reverse: "fc--flex-col-rev",
  };
  const flexDirection: any = getFlexDirection[orientation] || "fc--flex-row";
  return (
    <Fragment>
      <div
        className={`fc--w-Full fc--h-Full  fc--border bg-neutral-100 ${className}
        ${flexDirection} `}
      >
        <div className="checkbox fc-flexCenter justify-between fc-py-1.5 fc-px-2">
          {/* Icon - Label */}
          <div className="fc-flexCenter fc--gap-1 f-icon-label">
            {icon && (
              <div className="fc--w4 fc--h4 fc-flexCenter-Center">{icon}</div>
            )}
            {otherText && (
              <span className="Text12-400-16 w-11 navText-12 font-semibold">
                {otherText}
              </span>
            )}
            <label className="Text12-400-16 f-label" htmlFor={name}>
              {label}
            </label>
          </div>

          {/* Checkbox */}
          <input
            id={name}
            name={name}
            className="accent-black --icon-checkbox--"
            type="checkbox"
            defaultChecked={check}
            onChange={handleClick}
            disabled={disabled}
          />
        </div>
      </div>
    </Fragment>
  );
};

export const IconDropDown = ({
  name,
  className,
  label,
  options,
  value,
  onChange,
  icon,
}: {
  name: string;
  className?: string;
  label: string;
  options: any;
  value: string;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (data: string) => {
    onChange(name, data);
    setIsOpen(false);
    console.log("Select", data);
  };

  useEffect(() => {
    // If user clicks outside, close the DropDown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Fragment>
      <div
        ref={dropdownRef}
        className={`fc--w-Full fc--h-Full fc--radius-sm fc--border  checkbox fc-flexCenter justify-between --icondropDown-- ${className}`}
      >
        {/* Icon - Label */}
        <div className="fc-flexCenter fc--gap-1 fc--w-50  fc-py-1.5 pr-2 fc--h-Full bg-neutral-100 --label-Text--">
          {icon && (
            <div className="fc--w4 fc--h4 fc-flexCenter-Center">{icon}</div>
          )}

          <span className="Text12-400-16">{label}</span>
        </div>

        {/* DropDown */}
        <div
          className=" fc--w-50  fc--h-Full  bg --dropDown--"
          onClick={handleClick}
        >
          <div
            className="fc-flexCenter-Between fc--flex-rowpy-1.5 pr-2 pl-1.5"
            id={name}
          >
            <div className="Text12-400-16 w-[100%]">
              {value.length > 10 ? value.slice(0, 10) + "..." : value}
            </div>
            <div
              className={`fc--w4 fc--h4 fc-flexCenter-Center ${
                isOpen ? "fc--rotate180-200" : "fc--rotate0-200"
              }`}
            >
              <ExpandMoreIcon />
            </div>
          </div>

          {/* DropDown items */}
          {isOpen && (
            <div className="fc--radius-sm fc--border bg-white fc--relative --options-- fc--z-1">
              {options.map((option: any) => (
                <div
                  key={option.value}
                  className="option fc--border-b Text12-400-16"
                  onClick={(e) => {
                    e.stopPropagation(); //Stop Calling other onClick events
                    handleSelect(option?.label);
                  }}
                >
                  {option.label.length > 10
                    ? option.label.slice(0, 10) + "..."
                    : option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

interface ToggleSwitchProps {
  name: string;
  className?: string;
  labelText?: string;
  disabled?: boolean;
  sideLabel?: boolean;
  labelA?: string;
  labelB?: string;
  value: boolean;
  onChange: (name: string, value: boolean | string) => void;
  orientation?: string;
}
export const ToggleSwitch = React.forwardRef<
  HTMLInputElement,
  ToggleSwitchProps
>(
  (
    {
      name,
      className = "",
      labelText,
      disabled = false,
      sideLabel,
      labelA = "Off",
      labelB = "On",
      value,
      onChange,
      orientation = "horizontal",
    }: ToggleSwitchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const toggle = useRef<HTMLInputElement>(null); //For changing style
    const checkbox = useRef<HTMLInputElement>(null); //checkbox state

    function handleToggle() {
      if (!disabled) {
        //check disabled state
        if (onChange) {
          (toggle.current as HTMLInputElement).classList.toggle("toggled");
          const currentState = ((checkbox.current as HTMLInputElement).checked =
            !(checkbox.current as HTMLInputElement).checked);
          onChange(name, currentState);
        }
      }
    }

    const getFlexDirection: any = {
      vertical: "fc--flex-col",
      horizontal_reverse: "fc--flex-row-rev",
      vertical_reverse: "fc--flex-col-rev",
    };
    const flexDirection: any = getFlexDirection[orientation] || "fc--flex-row";
    return (
      <div
        className={`fc-flexCenter fc--w-Full fc--h-Full ${className} ${flexDirection}`}
        ref={ref}
      >
        <input
          id={name}
          name={name}
          ref={checkbox}
          className="toggle-checkbox"
          type="checkbox"
          defaultChecked={value}
          aria-checked={value}
          // aria-labelledby={name}
          disabled={disabled}
        />

        <div className="fc--w-Full fc--h-Full fc-flexCenter-Between slider">
          {/* Top Label */}
          {labelText && (
            <p className="Text12-400-16  fc-text-black label">{labelText}</p>
          )}
          {/* Slider */}
          <span
            ref={toggle}
            onClick={handleToggle}
            className={`toggle-switch  fc--border-black  sildebox ${
              value && "toggled"
            }`}
          >
            <span className="toggle  fc--black fc--mr-1 sildecircle "></span>
          </span>
          {/* Side Label */}
          {sideLabel && (
            <label
              className="Text12-400-16  fc-text-black sidelabel "
              aria-hidden={value}
              htmlFor={name}
            >
              {value ? labelA : labelB}
            </label>
          )}
        </div>
      </div>
    );
  }
);
ToggleSwitch.displayName = "InputToggleSwitch";

interface InputTextProps {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  orientation?: string;
}
export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      name,
      className = "",
      label,
      placeholder,
      value,
      onChange,
      icon,
      disabled = false,
      orientation = "horizontal",
    }: InputTextProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [data, setData] = useState<string>(value);

    useEffect(() => {
      setData(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setData(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };

    const getFlexDirection: any = {
      vertical: "fc--flex-col",
      horizontal_reverse: "fc--flex-row-rev",
      vertical_reverse: "fc--flex-col-rev",
    };
    const flexDirection: any = getFlexDirection[orientation] || "fc--flex-row";

    return (
      <div
        className={`fc--w-Full fc--h-Full fc-flexCenter-Between fc-py-1.5 fc-px-1.5 ${className} ${flexDirection}`}
      >
        {/* Icon - Label */}
        {icon || label ? (
          <div className="fc-flexCenter fc--gap-1  fc--w-50 labelbody ">
            {icon && (
              <div className="fc--w4 fc--h4 fc-flexCenter-Center">{icon}</div>
            )}
            {label && (
              <label className="Text12-400-16 label " htmlFor={name}>
                {label}
              </label>
            )}
          </div>
        ) : null}

        {/* Input Text */}
        <input
          id={name}
          name={name}
          ref={ref}
          className="Text-14-400-20  fc--w-50 fc--border fc-py-1 fc-px-1 fc-px-1 text"
          type="text"
          placeholder={placeholder}
          value={data}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
    );
  }
);
InputText.displayName = "InputText";

interface InputRadioProps {
  name: string;
  helperText?: string;
  className?: string;
  value?: string;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  orientation?: string;
  disabled?: boolean;
  checked?: boolean;
}
export const RadioButton = React.forwardRef<HTMLInputElement, InputRadioProps>(
  (
    {
      name,
      helperText,
      className = "",
      value,
      onChange,
      icon,
      orientation = "horizontal",
      disabled = false,
      checked = false,
    }: InputRadioProps,
    ref
  ) => {
    const [select, setSelect] = useState<boolean>(checked);

    useEffect(() => {
      setSelect(checked);
    }, [checked]);

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelect((prev) => !prev);
      if (onChange) {
        onChange(name, e.target.value);
      }
    };

    const getFlexDirection: any = {
      vertical: "fc--flex-col",
      horizontal_reverse: "fc--flex-row-rev",
      vertical_reverse: "fc--flex-col-rev",
    };
    const flexDirection: any = getFlexDirection[orientation] || "fc--flex-row";

    return (
      <Fragment>
        <div
          className={`fc--w-Full fc--h-Full  ${
            helperText ? "fc--flexStart" : "fc-flexCenter-Between"
          } fc--gap-2 fc-py-1.5 fc-px-2  f-radio-body ${className} ${flexDirection}  `}
        >
          {/* Radio Button */}
          <input
            id={value}
            name={name}
            value={value}
            ref={ref}
            className="fc--black accent-black f-radio "
            type="radio"
            defaultChecked={select}
            onChange={handleClick}
            disabled={disabled}
          />

          {/* Icon*/}
          <div className="fc-flexCenter fc--gap-1 f-label-body">
            {icon && (
              <div className="fc--w4 fc--h4 fc-flexCenter-Center">{icon}</div>
            )}

            {/* Label & helperText */}
            <div className="fc--flex fc--flex-col">
              <label className="Text12-400-16 f-label" htmlFor={value}>
                {value}
              </label>
              {helperText && (
                <p className="Text12-400-16 f-helpertext fc-text-gray-900">
                  {helperText}
                </p>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
);
RadioButton.displayName = "InputRadioButton";

interface InputNumberProps {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value: string | number;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  orientation?: string;
}
export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      name,
      className,
      label,
      placeholder,
      value,
      onChange,
      icon,
      disabled = false,
      orientation = "horizontal",
    }: InputNumberProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [data, setData] = useState(value);

    useEffect(() => {
      setData(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setData(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };
    const getFlexDirection: any = {
      vertical: "fc--flex-col",
      horizontal_reverse: "fc--flex-row-rev",
      vertical_reverse: "fc--flex-col-rev",
    };
    const flexDirection: any = getFlexDirection[orientation] || "fc--flex-row";
    return (
      <div
        className={`fc--w-Full fc--h-Full  fc-flexCenter-Between fc-py-1.5 fc-px-1.5 ${className}
        ${flexDirection} `}
      >
        {/* Icon - Label */}
        {icon || label ? (
          <div className="fc-flexCenter fc--gap-1 fc--w-50 f-icon-label">
            {icon && (
              <div className="fc--w4 fc--h4 fc-flexCenter-Center">{icon}</div>
            )}

            {label && (
              <label className="Text12-400-16  f-label" htmlFor={name}>
                {label}
              </label>
            )}
          </div>
        ) : null}

        {/* Input Number */}
        <input
          id={name}
          name={name}
          ref={ref}
          className=" Text-14-400-20 fc-text-gray-900 fc--w-50    fc--border fc-py-1 fc-px-1 f-number"
          type="number"
          placeholder={placeholder}
          value={data}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
    );
  }
);
InputNumber.displayName = "InputNumber";

interface InputTextAreaProps {
  name: string;
  className?: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  orientation?: string;
  rows: number;
  cols: number;
}
export const TextArea = React.forwardRef<HTMLInputElement, InputTextAreaProps>(
  (
    {
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
      cols,
    }: InputTextAreaProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const [data, setData] = useState<string>(value);
  
    useEffect(() => {
      setData(value);
    }, [value]);
  
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;

      setData(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };
    const getFlexDirection: any = {
      vertical: "fc--flex-col",
      horizontal_reverse: "fc--flex-row-rev",
      vertical_reverse: "fc--flex-col-rev",
    };
    const flexDirection: any = getFlexDirection[orientation] || "fc--flex-row";
    return (
      <div
        ref={ref}
        className={`fc--w-Full fc--h-Full  fc-flexCenter-Between fc-py-1.5 fc-px-1.5  ${className}
        ${flexDirection} `}
      >
        {/* Icon - Label */}
        {icon || label ? (
          <div className="fc-flexCenter fc--gap-1 fc--w-50 f-icon-label">
            {icon && (
              <div className="fc--w4 fc--h4 fc-flexCenter-Center">{icon}</div>
            )}

            {label && (
              <label className="Text12-400-16  f-label" htmlFor={name}>
                {label}
              </label>
            )}
          </div>
        ) : null}

        {/* Input TextArea */}
        <textarea
          id={name}
          name={name}
          className=" Text-14-400-20 fc-text-gray-900 fc--w-50  fc--border fc--border-gray-200  fc-py-1 fc-px-1 fc--radius-md  f-number"
          placeholder={placeholder}
          value={data}
          onChange={handleChange}
          disabled={disabled}
          rows={rows}
          cols={cols}
          style={{ resize: "none" }}
        />
      </div>
    );
  }
);
TextArea.displayName = "InputTextArea";

interface InputTimeProps {
  name: string;
  className?: string;
  label?: string;
  value: string | number;
  onChange?: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  orientation?: string;
  min?: string;
  max?: string;
  timerIcon?: boolean;
  showSeconds?: boolean;
}
export const InputTime = React.forwardRef<HTMLInputElement, InputTimeProps>(
  (
    {
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
      showSeconds = false,
    }: InputTimeProps,
    ref
  ) => {
    const [data, setData] = useState(value);

    useEffect(() => {
      setData(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData(e.target.value);
      if (onChange) {
        onChange(name, e.target.value);
      }
    };

    const getFlexDirection: any = {
      vertical: "fc--flex-col",
      horizontal_reverse: "fc--flex-row-rev",
      vertical_reverse: "fc--flex-col-rev",
    };
    const flexDirection: any = getFlexDirection[orientation] || "fc--flex-row";
    return (
      <div
        className={`fc--w-Full fc--h-Full  fc-flexCenter-Between fc-py-1.5 fc-px-1.5 fc--relative ${className}
        ${flexDirection}`}
      >
        {/* Icon - Label */}
        {(icon || label) && (
          <div className="fc-flexCenter fc--gap-1  f-icon-label">
            {icon && (
              <div className="fc--w4 fc--h4 fc-flexCenter-Center">{icon}</div>
            )}

            {label ? (
              <label className="Text12-400-16 f-label" htmlFor={name}>
                {label}
              </label>
            ) : null}
          </div>
        )}

        {/* Input InputTime */}
        <input
          id={name}
          name={name}
          ref={ref}
          className={`Text-14-400-20 fc-text-gray-900 fc--border fc--border-gray-200 fc-py-1 fc-px-1 fc--radius-md f-time `}
          type="time"
          value={data}
          onChange={handleChange}
          disabled={disabled}
          min={min}
          max={max}
          step={showSeconds ? "1" : "0"}
        />
      </div>
    );
  }
);
InputTime.displayName = "InputTime";

interface InputDateProps {
  name: string;
  className?: string;
  label?: string;
  value: string;
  onChange?: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  orientation?: string;
  min?: string;
  max?: string;
  dateIcon?: boolean;
}
export const InputDate = React.forwardRef<HTMLInputElement, InputDateProps>(
  (
    {
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
      dateIcon = true,
    }: InputDateProps,
    ref
  ) => {
    const [data, setData] = useState<string>(value);

    useEffect(() => {
      setData(value);
    }, [value]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setData(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };
    const getFlexDirection: any = {
      vertical: "fc--flex-col",
      horizontal_reverse: "fc--flex-row-rev",
      vertical_reverse: "fc--flex-col-rev",
    };
    const flexDirection: any = getFlexDirection[orientation] || "fc--flex-row";

    return (
      <div
        className={`fc--w-Full fc--h-Full  fc-flexCenter-Between fc-py-1.5 fc-px-1.5  ${className}
        ${flexDirection}`}
      >
        {/* Icon - Label */}
        {(icon || label) && (
          <div className="fc-flexCenter fc--gap-1 fc--w-50 f-icon-label">
            {icon && (
              <div className="fc--w4 fc--h4 fc-flexCenter-Center">{icon}</div>
            )}

            {label ? (
              <label className="Text12-400-16  f-label" htmlFor={name}>
                {label}
              </label>
            ) : null}
          </div>
        )}

        {/* Input InputDate */}
        <input
          id={name}
          name={name}
          ref={ref}
          className={`Text-14-400-20 text-Gray-900    fc--border fc-py-1 fc-px-1 fc--gap-1 f-date `}
          type="date"
          value={data}
          onChange={handleChange}
          disabled={disabled}
          min={min}
          max={max}
        />
      </div>
    );
  }
);
InputDate.displayName = "InputDate";

interface InputColorProps {
  name: string;
  className?: string;
  label?: string;
  value: string | number;
  onChange?: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  orientation?: string;
}
export const Color = React.forwardRef<HTMLInputElement, InputColorProps>(
  (
    {
      name,
      className = "",
      label,
      value,
      onChange,
      disabled = false,
      orientation = "horizontal",
    }: InputColorProps,
    ref
  ) => {
    const [data, setData] = useState(value ?? '#ff0000');
    
    useEffect(() => {
      setData(value);
    }, [value]);

    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const reff = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      reff?.current?.click();
    };
    const getFlexDirection: any = {
      vertical: "fc--flex-col",
      horizontal_reverse: "fc--flex-row-rev",
      vertical_reverse: "fc--flex-col-rev",
    };
    const flexDirection: any = getFlexDirection[orientation] || "fc--flex-row";
    return (
      <div
        className={`fc--w-Full fc--h-Full  fc-flexCenter-Between fc-py-1.5 fc-px-1.5  ${className}
        ${flexDirection} `}
      >
        {/* Icon - Label */}
        {label ? (
          <div className="fc-flexCenter fc--gap-1 fc--w-50 f-icon-label">
            <label className="Text12-400-16 f-label" htmlFor={name}>
              {label}
            </label>
          </div>
        ) : null}

        {/* Input color */}
        <Fragment>
          <div className="fc--w4 fc--h4 fc--relative  fc-px-1 f-color">

              <div
                onClick={ColorIconClick}
                style={{ backgroundColor: `${data}` }}
                className={`fc--w4 fc--h4 fc-px-1 fc--border  `}
              ></div>

            <input
              id={name}
              name={name}
              ref={reff}
              className={`fc--w4 fc--h4 Text-14-400-20 text-Gray-900  fc--border fc-py-1 fc-px-1 fc--radius-md   `}
              type="color"
              value={data}
              onChange={handleChange}
              style={{ visibility: "hidden", position: "absolute" }}
              disabled={disabled}
            />
          </div>
        </Fragment>
      </div>
    );
  }
);
Color.displayName = "InputColor";

interface InputFileProps {
  name: string;
  className?: string;
  label: string;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  orientation?: string;
  accept?: string;
}
export const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  (
    {
      name,
      className,
      label,
      onChange,
      icon,
      disabled = false,
      orientation = "horizontal",
      accept = "*.*",
    }: InputFileProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [data, setData] = useState<File | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const file = e.target.files[0];
        if (!file) return;

        setData(file);
        // if (onChange) {
        //   onChange(name, file);
        // }
      }
    };
    const getFlexDirection: any = {
      vertical: "fc--flex-col",
      horizontal_reverse: "fc--flex-row-rev",
      vertical_reverse: "fc--flex-col-rev",
    };
    const flexDirection: any = getFlexDirection[orientation] || "fc--flex-row";
    return (
      <div
        className={`fc--w-Full fc--h-Full fc-flexCenter-Between fc-py-1.5 fc-px-1.5 ${className}
        ${flexDirection} `}
      >
        {label ? (
          <div className="fc-flexCenter fc--gap-1 fc--w-50">
            <label className="Text12-400-16 f-label">{label}</label>
          </div>
        ) : null}

        <div className="fc-flexCenter fc--w-50 fc--gap-1">
          <input
            value={data?.name || "No File Chosen"}
            readOnly={true}
            className=" Text12-400-16 text-Gray-1000 fc--w-80   fc--bg-gray-200 fc--border fc--h7 fc-py-1.5 fc-px-2 fc--radius-md"
          />
          <input
            id={name}
            name={name}
            ref={ref}
            className="fc-none"
            type="file"
            onChange={handleChange}
            disabled={disabled}
            accept={accept}
          />

          {icon ? (
            <label
              htmlFor={name}
              className="fc-flexCenter  fc--bg-gray-200 fc--h7 fc--p-6 fc--radius-sm fc--border  f-inputIcon"
            >
              <div className="fc--w4 fc--h4 fc-flexCenter-Center">{icon}</div>
            </label>
          ) : null}
        </div>
      </div>
    );
  }
);
InputFile.displayName = "InputFile";
