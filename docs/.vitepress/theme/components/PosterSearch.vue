<template>
  <ais-instant-search :search-client="searchClient" index-name="posters">
    <ais-search-box placeholder="Search scene packs..." />

    <div class="poster-grid">
      <ais-hits>
        <template #item="{ item }">
          <a class="poster" :href="item.link" target="_blank">
            <img :src="item.img" :alt="item.title" />
            <p class="poster-title">{{ item.title }}</p>
          </a>
        </template>
      </ais-hits>
    </div>
  </ais-instant-search>
</template>

<script setup>
import algoliasearch from 'algoliasearch/lite'
import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch/vue3'

const searchClient = algoliasearch(
  '58JO3XHRWM', // Your Algolia App ID
  'd60c88800c8830d60aec5a4948af7e95' // Search-only API Key
)
</script>

<style scoped>
.poster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
.poster img {
  width: 100%;
  display: block;
}
.poster-title {
  text-align: center;
  margin-top: 0.5rem;
}
</style>
