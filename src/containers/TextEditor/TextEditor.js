import React, { useState, useEffect, useRef } from "react";
import TextCss from "./TextEditor.module.css";
import Button from "../../components/Button/Button";

const TextEditor = () => {
  const content = useRef(null);
  useEffect(() => {
    content.current.contentEditable = true;
  });

  const [select = false, setSelect] = useState();
  const [text = "", setText] = useState();
  // const [index = [], setIndex] = useState();
  const [classCss = "", setClassCss] = useState();

  const selectHandler = () => {
    // const text = content.current;
    console.log(window.getSelection().toString());
    setText(window.getSelection().toString());
  };

  const changeHandler = event => {
    if (select) {
      setText(<span className={classCss}>{text}</span>);
    }
  };
  const addClassHandler = event => {
    if (select) {
      console.log(text);
      setClassCss(TextCss.bold);
    }
  };
  return (
    <div className={TextCss.container} onMouseUp={selectHandler}>
      <nav>
        <Button check={select} click={addClassHandler}>
          Bold
        </Button>
        <Button check={select}>Italics</Button>
        <Button check={select}>Underline</Button>
        <Button check={select}>Text Align</Button>
      </nav>
      {/* Placeholder Attribute does not set the value of a textarea. Rather "The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value" [and it disappears as soon as user clicks into the textarea]. It will never act as "the default value" for the control. If you want that, you must put the desired text inside the Here is the actual default value, as per other answers here */}
      <div
        className={TextCss.text}
        type="text"
        placeholder="Write Here 😊"
        ref={content}
        onChange={changeHandler}
      ></div>
    </div>
  );
};
export default TextEditor;
