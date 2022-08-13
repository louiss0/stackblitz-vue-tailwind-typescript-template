<script setup lang="ts">
import Gap from "@/components/Gap.vue"
</script>

<template>
    <div class="flex h-24">
    <div class="bg-blue-900 w-24 h-full"></div>
    <Gap :spaces="3" class="bg-red-500" />
    <div class="bg-blue-900 w-24 h-full"></div>
    <Gap :spaces="3" class="bg-red-500" />
    <div class="bg-blue-900 w-24 h-full"></div>
    <Gap :spaces="3" class="bg-red-500" />
    </div>
</template>

