import { SetupContext } from "vue";

export default function BaseButton (props:never, {slots, attrs}:SetupContext){


const {class:$class, ...rest} = attrs

return (
  <button class={`rounded-sm py-1 px-3 ${$class}`} {...rest}>

    {slots.default ?slots.default() : "No content here..." }

  </button>
)

}