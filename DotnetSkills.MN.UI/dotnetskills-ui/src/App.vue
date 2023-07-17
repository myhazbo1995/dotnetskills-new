<template>
  <div id="app">
    <AppHeader />
    <ContentBlock />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import ContentBlock from './components/ContentBlock.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    ContentBlock,
    AppFooter
  }
}
</script>

<style>
/* Global styles can be added here */
</style>