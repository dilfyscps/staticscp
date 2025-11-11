<template>
  <ais-instant-search :search-client="searchClient" index-name="posters">
    <!-- Search Box -->
    <ais-search-box placeholder="Search posters..." />

    <!-- Search Results -->
    <ais-hits>
      <template #item="{ item }">
        <div class="poster-result">
          <!-- Render your poster as a link with image and title -->
          <a
            class="poster"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="item.img" :alt="item.title" />
            <p class="poster-title">{{ item.title }}</p>
          </a>
        </div>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script setup>
import algoliasearch from 'algoliasearch/lite'
import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch/vue3'

// Replace these with your Algolia credentials
const APP_ID = '58JO3XHRWM'               // Your Application ID
const SEARCH_KEY = 'd60c88800c8830d60aec5a4948af7e95' // Search-Only API Key

const searchClient = algoliasearch(APP_ID, SEARCH_KEY)
</script>

<style scoped>
.poster-result {
  display: inline-block;
  margin: 0.5rem;
  text-align: center;
}

.poster-result img {
  width: 150px;
  height: auto;
  display: block;
  border-radius: 4px;
}

.poster-title {
  margin-top: 0.25rem;
  font-weight: bold;
  font-size: 0.9rem;
}
</style>
