<template>
<div class="login">
    Login
</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Login',
  props: {
  },
  setup: () => {
    const userInfo = ref()
    return { userInfo }
  }
})
</script>

<style lang="scss" scoped>
</style>
