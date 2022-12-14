<script lang="ts" setup>
import { onMounted, useAttrs, shallowRef } from 'vue';

interface Props {
  spaces: number;
  color?: string;
}

const props = defineProps<Props>();

const gapRef = shallowRef<HTMLDivElement | null>(null);

const id = `gap${Math.ceil(Math.random() * Date.now())}`;

onMounted(() => {
  const parentElement = gapRef?.value?.parentElement;

  if (!parentElement && !gapRef.value) return;

  const parentElementStyle = getComputedStyle(parentElement);

  const { value: element } = gapRef;

  changeElementWidthIfTheParentElementFulfilsTheseCOnditions(
    parentElementStyle,
    element
  );

  changeHeightIfTheFollowingConditionsAreTrue(parentElementStyle, element);

  element.style.backgroundColor = props.color;
  
});

function changeElementWidthIfTheParentElementFulfilsTheseCOnditions(
  parentElementStyle,
  element: HTMLElement
) {
  const {
    display: parentElementDisplay,
    fontSize: parentElementFontSize,
    gridAutoFlow: parentElementGridAutoFlow,
    flexDirection: parentElementFlexDirection,
  } = parentElementStyle;

  const parentElementsDisplayIsFlex = parentElementDisplay.includes('flex');

  const parentElementsDisplayIsGrid = parentElementDisplay.includes('grid');

  const parentElementsDisplayIncludesInline =
    parentElementDisplay.includes('inline');

  const parentElementStyleFlexDirectionIsRow =
    parentElementFlexDirection.includes('row');

  const parentElementStyleGridAutoFlowIsColumn =
    parentElementGridAutoFlow.includes('column');

  const anyOfTheConditionsRequiredToSetTheWidthOfTheElementAreTrue = [
    parentElementsDisplayIncludesInline,
    parentElementsDisplayIsFlex && parentElementStyleFlexDirectionIsRow,
    parentElementsDisplayIsGrid && parentElementStyleGridAutoFlowIsColumn,
  ].some((value) => value);

  if (anyOfTheConditionsRequiredToSetTheWidthOfTheElementAreTrue) {
    element.style.width = `${parseInt(parentElementFontSize) * props.spaces}px`;

    element.style.height = 'auto';
  }
}

function changeHeightIfTheFollowingConditionsAreTrue(
  parentElementStyle,
  element: HTMLElement
) {
  const {
    display: parentElementDisplay,
    fontSize: parentElementFontSize,
    gridAutoFlow: parentElementGridAutoFlow,
    flexDirection: parentElementFlexDirection,
  } = parentElementStyle;
  const parentElementsDisplayIsFlex = parentElementDisplay.includes('flex');

  const parentElementsDisplayIsGrid = parentElementDisplay.includes('grid');

  const parentDisplayIsBlock = parentElementDisplay.includes('block');
  const parentElementStyleFlexDirectionIsColumn =
    parentElementFlexDirection.includes('column');

  const parentElementStyleGridAutoFlowIsRow =
    parentElementGridAutoFlow.includes('row');

  const anyOfTheConditionsRequiredToSetTheHeightOfTheElementAreTrue = [
    parentDisplayIsBlock,
    parentElementsDisplayIsGrid && parentElementStyleGridAutoFlowIsRow,
    parentElementsDisplayIsFlex && parentElementStyleFlexDirectionIsColumn,
  ].some((value) => value);

  if (anyOfTheConditionsRequiredToSetTheHeightOfTheElementAreTrue) {
    element.style.width = 'auto';
    element.style.height = `${
      parseInt(parentElementFontSize) * props.spaces
    }px`;
  }
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div ref="gapRef" :id="id"></div>
</template>
