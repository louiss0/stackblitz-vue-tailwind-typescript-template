<script lang="ts" setup>

\import {onMounted, useAttrs, shallowRef, } from "vue"

interface Props {
  spaces:number 
}

const gapRef = shallowRef<HTMLDivElement | null>(null)

const attrs = useAttrs()
  const id = `gap${Math.ceil( Math.random() * Date.now())}`

onMounted(()=>{
  
  
  
  const parentElement = gapRef?.value?.parentElement
  
  if(parentElement && gapRef.value){
  
   const {
     display:parentElementDisplay, 
     fontSize: parentElementFontSize,
     gridAutoFlow:parentElementGridAutoFlow,
     flexDirection:parentElementFlexDirection,
    } = getComputedStyle(parentElement)
  
  
    const {value:element} = gapRef
  
    const parentElementsDisplayIncludesInline = 
    parentElementDisplay.includes("inline")
  
  
    const parentElementsDisplayIsFlex =
   parentElementDisplay.includes("flex")
  
   const parentElementStyleFlexDirectionIsRow= 
   parentElementFlexDirection.includes("row")
  
   const parentElementStyleFlexDirectionIsColumn= 
   parentElementFlexDirection.includes("column")
  
  
   const parentElementsDisplayIsGrid =
   parentElementDisplay.includes("grid")
  
  
   const parentElementStyleGridAutoFlowIsRow= 
    parentElementGridAutoFlow.includes("row")
  
   const parentElementStyleGridAutoFlowIsColumn= 
    parentElementGridAutoFlow.includes("column")
    
  
   const anyOfTheConditionsRequiredToSetTheHeightOfTheElementAreTrue = [
     parentElementsDisplayIsGrid && parentElementStyleGridAutoFlowIsRow,
     parentElementsDisplayIsFlex && parentElementStyleFlexDirectionIsColumn
    ].some((value)=> value) 
    
    const anyOfTheConditionsRequiredToSetTheWidthOfTheElementAreTrue =  [
      parentElementsDisplayIncludesInline,
      parentElementsDisplayIsFlex && parentElementStyleFlexDirectionIsRow,
    parentElementsDisplayIsGrid && parentElementStyleGridAutoFlowIsColumn
  ].some((value)=> value) 
  
    if(anyOfTheConditionsRequiredToSetTheWidthOfTheElementAreTrue) {
  
  
    element.style.width = `${parseInt(parentElementFontSize) * props.spaces}px`
  
    element.style.height = "auto"
  
    } else if(anyOfTheConditionsRequiredToSetTheHeightOfTheElementAreTrue) {
      
      
      element.style.width = "auto"
      element.style.height = 
      `${parseInt(parentElementFontSize) * props.spaces}px`
  
  
    }
  
  
    
  }
  
  }
)
</script>



<template>
 <div :ref="gapRef" :id="id" v-bind="{...attrs}"> </div>
</template>


