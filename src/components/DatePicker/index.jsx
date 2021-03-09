import React, {
  useState,
  useCallback,
  Fragment,
  useEffect,
  useRef,
} from "react";
import calendarIcon from "src/assets/calendar.png";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";

const DatePicker = React.memo((props) => {
  const { placeholder, value, ...passProps } = props;
  const [focus, setFocus] = useState(false);
  const dayPickerEl = useRef(null);

  const _handleClickInputContainer = useCallback(() => {
    _doFocus(focus);
  }, [focus]);

  const _handleBlur = useCallback(() => {
    _doBlur(focus);
  }, [focus]);

  const _handleFocus = useCallback(() => {
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

  useEffect(() => {
    if (focus) {
      const showingDayPicker = dayPickerEl.current.getDayPicker();
      if (!showingDayPicker) {
        dayPickerEl.current.showDayPicker();
      }
    }
  }, [focus]);
  // console.log("Render datepicker");
  return (
    <div
      className={`${
        focus ? "border-primary ring-1 ring-light-blue-500" : "border-gray-300"
      } flex flex-row items-center border rounded-md bg-white py-3 px-4`}
      onClick={_handleClickInputContainer}
    >
      <div className="flex flex-1 flex-col">
        {!value && !focus ? (
          <div className="flex flex-col justify-center h-10">
            <label className="text-base text-appBlack">{placeholder}</label>
          </div>
        ) : (
          <Fragment>
            <label className="text-xs text-appGray">{placeholder}</label>
            <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              format="DD/MM/yyyy"
              placeholder={null}
              style={{
                outline: "1px solid transparent",
                flex: 1,
                flexDirection: "row",
              }}
              inputProps={{
                style: {
                  outline: "1px solid transparent",
                  flex: 1,
                  width: "100%",
                },
                onBlur: _handleBlur,
                onFocus: _handleFocus,
              }}
              ref={dayPickerEl}
              {...passProps}
            />
          </Fragment>
        )}
      </div>
      <img
        src={calendarIcon}
        className="object-cover"
        style={{ width: "14.5px", height: "15px" }}
        alt={"calendar"}
      />
    </div>
  );
});

export default DatePicker;
