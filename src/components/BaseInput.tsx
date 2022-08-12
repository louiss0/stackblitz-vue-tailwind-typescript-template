import { Fragment, FunctionalComponent, ObjectEmitsOptions } from "vue";

type Props = Record<"label"
| "labelClasss"
|"modelValue"
| "inputClass"
| "name"
, string> & {errorMessage:string}

interface Emits extends ObjectEmitsOptions{

  "update:modelValue"(payload:string):void 
}

const BaseInput:FunctionalComponent<Props, Emits> = (props, {}) => {

  return (
    <Fragment>

      <label for={props.name}>{props.label} </label>
      <input type="text" 
      id={props.name} 
      name={props.name} 
      value={props.modelValue}
      onInput={event => }
      />
      { props.errorMessage && <p>{props.errorMessage}</p>}

    </Fragment>
  )

}  

export default BaseInput