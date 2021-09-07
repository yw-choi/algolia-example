<script setup lang="ts">
const searchBoxClassNames = {
  "ais-SearchBox": "",
  "ais-SearchBox-form": "",
  "ais-SearchBox-input": "",
};
</script>
<template>
  <header class="w-full bg-blue-500">
    <nav class="flex flex-row justify-between w-full px-6 py-2">
      <div class="flex">
        <a href="#" class="flex items-center">
          <img src="./assets/logo.svg" alt="instamade" class="h-8 mr-3" />
          <span class="font-bold text-xl text-white">instamade</span>
        </a>
      </div>
      <a href="https://github.com/yw-choi/instamade" target="_blank">
        <img
          src="./assets/GitHub-Mark-Light-64px.png"
          alt="GitHub"
          class="h-6 mt-1"
        />
      </a>
    </nav>
  </header>

  <ais-instant-search
    :search-client="searchClient"
    index-name="instant_search"
    class="w-full p-6"
  >
    <div class="w-full flex flex-row justify-between">
      <div class="w-1/6">
        <ais-refinement-list attribute="brand" />
      </div>

      <div class="w-5/6 flex flex-col items-stretch">
        <div class="w-full">
          <ais-search-box
            placeholder="Search..."
            submit-title="Submit"
            reset-title="Reset"
            autofocus
            :class-names="searchBoxClassNames"
          >
            <template v-slot:submit-icon></template>
            <template v-slot:reset-icon></template>
          </ais-search-box>
        </div>
        <ais-hits>
          <template v-slot:item="{ item }">
            <article>
              <h1>
                <ais-highlight :hit="item" attribute="name" />
              </h1>
            </article>
          </template>
        </ais-hits>

        <div class="pagination">
          <ais-pagination />
        </div>
      </div>
    </div>
  </ais-instant-search>
</template>

<script lang="ts">
import algoliasearch from "algoliasearch/lite";

export default {
  data() {
    return {
      searchClient: algoliasearch(
        "latency",
        "6be0576ff61c053d5f9a3225e2a90f76"
      ),
    };
  },
};
</script>

<style>
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
