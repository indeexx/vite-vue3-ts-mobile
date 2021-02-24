<template>
额呵呵
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  props: {
  },
  setup: () => {
    const msg = ref("哇哈哈")
    return { msg }
  }
})
</script>

<style lang="scss" scoped>
</style>
