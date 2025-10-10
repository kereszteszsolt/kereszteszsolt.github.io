<template>
  <div class="w-full flex justify-center py-8">
    <div class="section-divider"></div>
  </div>
</template>

<style scoped>
.section-divider {
  width: 90%;
  max-width: 800px;
  height: 2px;
  background: linear-gradient(to bottom,
    rgba(0, 0, 0, 0.08) 0%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(0, 0, 0, 0.08) 100%
  );
  box-shadow:
    inset 0 1px 2px rgba(0, 0, 0, 0.12),
    0 1px 1px rgba(255, 255, 255, 0.25);
  border-radius: 2px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .section-divider {
    background: linear-gradient(to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(255, 255, 255, 0.08) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
    box-shadow:
      inset 0 1px 2px rgba(0, 0, 0, 0.3),
      0 1px 1px rgba(255, 255, 255, 0.08);
  }
}
</style>
