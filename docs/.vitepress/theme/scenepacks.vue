<template>
  <div class="scene-packs-layout">
    <!-- Hero -->
    <div class="VPHomeHero" v-if="frontmatter.hero">
      <h1 class="name">{{ frontmatter.hero.name }}</h1>
      <div class="actions" v-if="frontmatter.hero.actions?.length">
        <a
          v-for="(action, i) in frontmatter.hero.actions"
          :key="i"
          :href="action.link"
          class="hero-link-button"
        >
          {{ action.text }}
        </a>
      </div>
    </div>

    <!-- Scene Packs -->
    <main class="scene-packs-content">
      <div
        v-for="(pack, i) in frontmatter.scenePacks || []"
        :key="i"
        class="scene-pack"
      >
        <img v-if="pack.image" :src="pack.image" :alt="pack.title" class="scene-pack-image" />
        <div class="scene-pack-text">
          <h3>{{ pack.title }}</h3>
          <p>{{ pack.details }}</p>
          <a v-if="pack.link" :href="pack.link" target="_blank">MEGA</a>
        </div>
      </div>
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { page } = useData()
const frontmatter = page.value.frontmatter
</script>

<style scoped>
/* Layout */
.scene-packs-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  gap: 2rem;
}

/* Hero */
.VPHomeHero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.name {
  font-size: 3rem;
  font-weight: 800;
  color: transparent;
  background: linear-gradient(120deg, #ffffff, #7df0ff, #ffffff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 4s linear infinite;
}

@keyframes shine {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

/* Hero link-buttons */
.actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-link-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(120deg, #23b4e4, #95e4ff);
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
}

.hero-link-button:hover {
  background: linear-gradient(120deg, #95e4ff, #23b4e4);
  transform: translateY(-2px);
}

/* Scene Packs */
.scene-packs-content {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.scene-pack {
  display: flex;
  gap: 1rem;
  background: var(--vp-c-bg-alt);
  padding: 1rem;
  border-radius: 8px;
  align-items: center;
}

.scene-pack-image {
  width: 150px;
  object-fit: cover;
  border-radius: 6px;
}

.scene-pack-text h3 {
  margin: 0;
  font-size: 1.1rem;
}
.scene-pack-text p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
.scene-pack-text a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.scene-pack-text a:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .scene-pack {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .scene-pack-image {
    width: 80%;
    max-width: 300px;
    margin-bottom: 0.5rem;
  }
  .actions {
    justify-content: center;
  }
}
</style>
