import { Fragment, FunctionalComponent } from "vue";

type Props = Record<"label"
| "labelClasss"
|"modelValue"
| "inputClass"
| "name"
|"errorMessage", string>

const BaseInput:FunctionalComponent<Props> = (props, ) => {

  return (
    <Fragment>

      <label for={props.name}>{props.label} </label>
      <input type="text" 
      id={props.name} 
      name={props.name} 
      value={props.modelValue}
      />
      <p></p>

    </Fragment>
  )

}  

export default BaseInput