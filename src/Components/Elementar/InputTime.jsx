import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

const DEFAULT_COLON = ":";

function useRunAfterUpdate() {
  const afterPaintRef = useRef(null);
  useLayoutEffect(() => {
    if (afterPaintRef.current) {
      afterPaintRef.current();
      afterPaintRef.current = null;
    }
  });
  const runAfterUpdate = fn => (afterPaintRef.current = fn);
  return runAfterUpdate;
}

const formatTimeItem = v => `${v || ""}00`.substr(0, 2);

const isNumber = value => {
  const number = Number(value);
  return !isNaN(number) && String(value) === String(number);
};

const validateTimeNCursor = (
  value,
  colon,
  defaultValue = "",
  cursorPosition = 0
) => {
  let newCursorPosition = Number(cursorPosition);
  let [oldH, oldM] = String(defaultValue).split(colon);
  let [newH, newM] = String(value).split(colon);

  newH = formatTimeItem(newH);
  if (Number(newH[0]) > 2) {
    newH = oldH;
    newCursorPosition -= 1;
  } else if (Number(newH[0]) === 2) {
    if (Number(oldH[0]) === 2 && Number(newH[1]) > 3) {
      newH = `2${oldH[1]}`;
      newCursorPosition -= 2;
    } else if (Number(newH[1]) > 3) {
      newH = "23";
    }
  }

  newM = formatTimeItem(newM);
  if (Number(newM[0]) > 5) {
    newM = oldM;
    newCursorPosition -= 1;
  }

  const validatedValue = `${newH}${colon}${newM}`;
  return [validatedValue, newCursorPosition];
};

export const InputTime = ({
    colon,
    value: valueProps,
    onChange,
    step,
    name,
    ...props
  }) => {
    console.log("name", name);
    // const [defaultColon] = useState(colon.length === 1 ? colon : DEFAULT_COLON);
    const [defaultValidatedValue] = validateTimeNCursor(valueProps, colon, "", 0);
    const [defaultValue, setDefaultValue] = useState(defaultValidatedValue);
    const [positionCursor, setPositionCursor] = useState(null);
    const inputElA = useRef(null);
  
    const runAfterUpdate = useRunAfterUpdate();
  
    const onInputChange = (event, cb) => {
      const oldValue = defaultValue;
  
      const inputEl = event.target;
      const inputValue = inputEl.value;
      const position = inputEl.selectionEnd || 0;
      const isTyped = inputValue.length > oldValue.length;
      const cursorCharacter = inputValue[position - 1];
      const addedCharacter = isTyped ? cursorCharacter : null;
      const removedCharacter = isTyped ? null : oldValue[position];
      const replacedSingleCharacter =
        inputValue.length === oldValue.length ? oldValue[position - 1] : null;
      console.log(
        "test",
        position,
        isTyped,
        cursorCharacter,
        addedCharacter,
        removedCharacter,
        replacedSingleCharacter
      );
      let newValue = oldValue;
      let newPosition = position;
  
      if (addedCharacter !== null) {
        if (position > oldValue.length) {
          newPosition = oldValue.length;
        } else if (position === 3 && addedCharacter === colon) {
          newValue = `${inputValue.substr(
            0,
            position - 1
          )}${colon}${inputValue.substr(position + 1)}`;
        } else if (position === 3 && isNumber(addedCharacter)) {
          newValue = `${inputValue.substr(
            0,
            position - 1
          )}${colon}${addedCharacter}${inputValue.substr(position + 2)}`;
          newPosition = position + 1;
        } else if (isNumber(addedCharacter)) {
          // user typed a number
          newValue =
            inputValue.substr(0, position - 1) +
            addedCharacter +
            inputValue.substr(position + 1);
          if (position === 2 || position === 5) {
            newPosition = position + 1;
          }
        } else {
          // if user typed NOT a number, then keep old value & position
          newPosition = position - 1;
        }
      } else if (replacedSingleCharacter !== null) {
        // user replaced only a single character
        if (isNumber(cursorCharacter)) {
          if (position - 1 === 2 || position - 1 === 5) {
            newValue = `${inputValue.substr(
              0,
              position - 1
            )}${colon}${inputValue.substr(position)}`;
          } else {
            newValue = inputValue;
          }
        } else {
          // user replaced a number on some non-number character
          newValue = oldValue;
          newPosition = position - 1;
        }
      } else if (
        typeof cursorCharacter !== "undefined" &&
        cursorCharacter !== colon &&
        !isNumber(cursorCharacter)
      ) {
        // set of characters replaced by non-number
        newValue = oldValue;
        newPosition = position - 1;
      } else if (removedCharacter !== null) {
        if ((position === 2 || position === 5) && removedCharacter === colon) {
          newValue = `${inputValue.substr(
            0,
            position - 1
          )}-${colon}${inputValue.substr(position)}`;
          newPosition = position - 1;
        } else {
          // user removed a number
          newValue = `${inputValue.substr(0, position)}-${inputValue.substr(
            position
          )}`;
        }
      }
      console.log("newPosition", newPosition);
      const [validatedTime, validatedCursorPosition] = validateTimeNCursor(
        newValue,
        colon,
        oldValue,
        newPosition
      );
  
      setDefaultValue(validatedTime);
      setPositionCursor(validatedCursorPosition);
      // console.log("validatedCursorPosition", validatedCursorPosition);
      runAfterUpdate(() => {
        // inputEl.selectionStart = validatedTime;
        inputEl.selectionStart = validatedCursorPosition;
        inputEl.selectionEnd = validatedCursorPosition;
      });
      // console.log("inputEl.selectionEnd", inputEl.selectionEnd);
      cb(event, validatedTime);
      event.persist();
    };
  
    useEffect(() => {
      const [validatedTime] = validateTimeNCursor(
        valueProps,
        colon,
        defaultValue,
        positionCursor
      );
      setDefaultValue(validatedTime);
    }, [valueProps, colon, defaultValue, positionCursor]);
  
    const onChangeHandler = event =>
      onInputChange(event, (e, v) => onChange && onChange(e, v));
  
    const onClickHandler = event =>
      handlePlusOrMinus(event, (e, v) => onChange && onChange(e, v));
  
    const handlePlusOrMinus = (e, cb) => {
      const eventValue = e.target.value;
      let newStringValue;
      const value = inputElA.current.value;
      const [HH, mm] = String(value).split(colon);
      const pos = inputElA.current.selectionStart || positionCursor;
  
      if (pos < 3) {
        const newValuePlus =
          (eventValue === "+" ? Number(HH) + 1 : Number(HH) - 1) % 24;
        const formatNewValue = newValuePlus === -1 ? 23 : newValuePlus;
        newStringValue =
          formatNewValue < 10
            ? `0${formatNewValue}${value.substr(2)}`
            : `${formatNewValue}${value.substr(2)}`;
  
        setDefaultValue(newStringValue);
        setPositionCursor(pos);
      } else {
        const newValuePlus =
          (eventValue === "+"
            ? Number(mm) + Number(step)
            : Number(mm) - Number(step)) % 60;
        const formatNewValue =
          newValuePlus < 0 ? 60 + newValuePlus : newValuePlus;
        newStringValue =
          formatNewValue < 10
            ? `${HH}${colon}0${formatNewValue}`
            : `${HH}${colon}${formatNewValue}`;
        setDefaultValue(newStringValue);
        setPositionCursor(pos);
      }
  
      runAfterUpdate(() => {
        inputElA.current.selectionStart = pos;
        inputElA.current.selectionEnd = pos;
      });
  
      cb(e, newStringValue);
    };
    return (
      <div style={{ dispaly: "flex", flexDirection: "row", background: "red" }}>
        <input
          ref={inputElA}
          {...props}
          value={defaultValue}
          onChange={onChangeHandler}
        />
        <button
          style={{ color: "green", dispaly: "flex" }}
          onClick={e => onClickHandler(e)}
          value="+"
        >
          +
        </button>
        <button onClick={e => onClickHandler(e)} value="-">
          -
        </button>
      </div>
    );
  };
  