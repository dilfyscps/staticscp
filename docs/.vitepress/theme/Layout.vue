<template>
  <div class="home-centered">
    <Content/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Content from '@theme/Layout.vue'

export default defineComponent({
  components: { Content }
})
</script>