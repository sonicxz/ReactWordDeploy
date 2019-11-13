import React from "react";
import AppCss from "./App.module.css";
import TextEditor from "./TextEditor/TextEditor";
// import Aux from "../../HOC/Auxiliary/Aux";
function App() {
  return (
    <div className={AppCss.App}>
      <h1 className={AppCss.Head}>React Text Editor</h1>
      <TextEditor></TextEditor>
    </div>
  );
}

export default App;
