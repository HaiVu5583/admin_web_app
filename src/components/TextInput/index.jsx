import React, { useState, useCallback, Fragment } from "react";

const TextInput = React.memo((props) => {
  const { placeholder, value, ...passProps } = props;
  const [focus, setFocus] = useState(false);

  const _handleFocus = useCallback(() => {
    _doFocus(focus);
  }, [focus]);

  const _handleBlur = useCallback(() => {
    _doBlur(focus);
  }, [focus]);

  const _handleClickInputContainer = useCallback(() => {
    _doFocus(focus);
  }, [focus]);

  const _doFocus = (isFocus) => {
    if (!isFocus) {
      setFocus(true);
    }
  };

  const _doBlur = (isFocus) => {
    if (isFocus) {
      setFocus(false);
    }
  };
  // console.log("Render TextInput", placeholder);
  return (
    <div
      className={`${
        focus ? "border-primary ring-1 ring-light-blue-500" : "border-gray-300"
      } flex flex-col justify-center border rounded-md bg-white py-3 px-4`}
      onClick={_handleClickInputContainer}
    >
      {!value && !focus ? (
        <div className="flex flex-col justify-center h-10">
          <label className="text-base text-appBlack">{placeholder}</label>
        </div>
      ) : (
        <Fragment>
          <label className="text-xs text-appGray">{placeholder}</label>
          <input
            {...passProps}
            className="focus:outline-none"
            onFocus={_handleFocus}
            onBlur={_handleBlur}
            autoFocus={true}
          />
        </Fragment>
      )}
    </div>
  );
});

export const useTextInputValue = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  return [value, onChange];
};

export default TextInput;
