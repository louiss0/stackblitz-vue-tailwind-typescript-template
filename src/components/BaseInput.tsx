import { Fragment, FunctionalComponent, ObjectEmitsOptions } from "vue";

type Props = Record<"label"
| "labelClasss"
|"modelValue"
| "inputClass"
| "name"
, string> & {errorMessage?:string}

interface Emits  {

  "update:modelValue":(payload:string) => void 
}

const BaseInput:FunctionalComponent<Props, Readonly<Emits>> = (props, {emit}) => {

  return (
    <Fragment>

      <label for={props.name} class={props.labelClasss} >{props.label} </label>
      <input type="text" 
      id={props.name} 
      name={props.name} 
      value={props.modelValue}
      class={`py-1 px-3 ${props.inputClass}`}
      onInput={event => 
        emit("update:modelValue", (event.target as HTMLInputElement).value) }
      />
      { props.errorMessage && <p>{props.errorMessage}</p>}

    </Fragment>
  )

}  

export default BaseInput