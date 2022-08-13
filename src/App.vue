<script setup lang="ts">
import Gap from './components/Gap.vue';
</script>

<template>
  <div>
    <div class="bg-blue-900 w-24 h-24"></div>
    <Gap :spaces="3" />
    <div class="bg-blue-900 w-24 h-32"></div>
    <Gap :spaces="6" />
    <div class="bg-blue-900 w-24 h-24"></div>
  </div>
</template>
