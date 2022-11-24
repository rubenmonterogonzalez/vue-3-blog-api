<template>
  <div class="spin"></div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #22c55e;
  animation: spin 1s infinite ease;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
