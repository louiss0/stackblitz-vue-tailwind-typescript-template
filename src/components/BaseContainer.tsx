import { SetupContext } from "vue";


export default function Container(_:never, {slots, attrs}:SetupContext) {

  const {class:$class=""} = attrs 



  return (
    <div class={`mx-auto max-w-screen-lg ${$class}`}> 

    {slots.default ? slots.default(): "Noting to contain "}

    </div>
  )


}