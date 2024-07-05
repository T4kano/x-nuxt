<script lang="ts" setup>
interface Props {
  notifications: number
  label: string
  icon: string
}

defineProps({
  notifications: { type: Number, default: null },
  label: { type: String, required: true },
  icon: { type: String, required: true }
})
</script>

<template>
  <div
    class="flex gap-2 items-center text-xl hover:text-green-400 cursor-pointer hover:ring-1 ring-green-400 ring-opacity-20 p-2 px-3 rounded-lg transition hover:translate-x-1"
  >
    <UChip v-if="notifications" :text="notifications" size="2xl">
      <UIcon :name="icon" class="text-2xl" />
    </UChip>

    <UIcon v-else :name="icon" class="text-2xl" />
    {{ label }}
  </div>
</template>

<style scoped>
.slat {
  animation: x-grow 300ms ease;
}

@keyframes x-grow {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
