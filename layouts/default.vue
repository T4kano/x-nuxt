<script setup></script>

<template>
  <div id="main">
    <div class="flex gap-6 container m-auto p-8">
      <div class="glassy w-2/5 h-fit sticky top-8">
        <Sidenav />
      </div>
      <slot />
      <div class="glassy w-2/5 h-fit sticky top-8" />
    </div>
  </div>
</template>

<style>
#main {
  background: url('/public/bg.png');
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  animation: asw 300ms ease;
}

.glassy {
  @apply bg-gray-800/40 rounded-xl p-6 ring-1 ring-gray-700 backdrop-blur-md;
}

@keyframes asw {
  from {
    filter: opacity(0);
  } to {
    filter: opacity(1);
  }
}
</style>
