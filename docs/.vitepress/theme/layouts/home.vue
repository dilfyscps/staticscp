<template>
  <div class="hero">
    <h1>{{ hero.name }}</h1>
    <p>{{ hero.tagline }}</p>

    <div class="actions">
      <a
        v-for="(action, index) in hero.actions"
        :key="index"
        :href="action.link"
        :class="['button', action.theme]"
      >
        {{ action.text }}
      </a>
    </div>
  </div>

  <div class="features">
    <div
      v-for="(feature, index) in features"
      :key="index"
      class="feature"
    >
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.details }}</p>
      <a :href="feature.link">{{ feature.link }}</a>
    </div>
  </div>

  <!-- Last Updated Section -->
  <div v-if="$page.git && $page.git.lastUpdated" class="last-updated">
    Last Updated: {{ new Date($page.git.lastUpdated).toLocaleString() }}
  </div>
</template>

<script setup>
const { hero, features } = defineProps(['hero', 'features'])
</script>

<style>
.hero {
  margin-bottom: 2rem;
}

.features {
  display: grid;
  gap: 1.5rem;
}

.last-updated {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #888;
}
</style>
