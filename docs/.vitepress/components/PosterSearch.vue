<template>
  <div class="poster-search">
    <input
      v-model="query"
      placeholder="Search posters..."
      class="search-box"
    />

    <div class="results">
      <div
        v-for="hit in hits"
        :key="hit.objectID"
        v-html="hit.html"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import algoliasearch from 'algoliasearch/lite';

// --- YOUR ALGOLIA KEYS ---
const APP_ID = '58JO3XHRWM'; // Application ID
const SEARCH_KEY = 'd60c88800c8830d60aec5a4948af7e95'; // Search-Only API Key
const INDEX_NAME = 'posters'; // Name of your index

const client = algoliasearch(APP_ID, SEARCH_KEY);
const index = client.initIndex(INDEX_NAME);

const query = ref('');
const hits = ref([]);

// Watch the search box and query Algolia
watch(query, async (q) => {
  if (!q) {
    hits.value = [];
    return;
  }
  try {
    const res = await index.search(q);
    hits.value = res.hits;
  } catch (err) {
    console.error('Algolia search error:', err);
  }
});
</script>

<style>
.poster-search {
  max-width: 800px;
  margin: auto;
}

.search-box {
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  margin-bottom: 1em;
}

.results .poster {
  margin-bottom: 1em;
}
</style>
