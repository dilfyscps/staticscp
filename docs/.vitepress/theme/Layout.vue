<template>
  <div class="home-centered">
    <!-- Dismissible Warning Banner -->
    <div
      v-if="showWarning"
      class="search-warning"
      style="background: #ffcc00; color: #000; text-align: center; padding: 0.5em; font-weight: bold; position: relative;"
    >
      ⚠️ Search is temporarily down. We’re working to fix it!
      <button
        @click="dismiss"
        style="position: absolute; right: 10px; top: 5px; background: none; border: none; font-weight: bold; cursor: pointer;"
      >
        ✕
      </button>
    </div>

    <!-- Existing content -->
    <Content />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Content from '@theme/Layout.vue'

export default defineComponent({
  components: { Content },
  setup() {
    const showWarning = ref(true)

    const dismiss = () => {
      showWarning.value = false
    }

    return { showWarning, dismiss }
  }
})
</script>
