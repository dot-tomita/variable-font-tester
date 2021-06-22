<script lang="ts">
  import '../styles/app.scss';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  import { theme } from '../stores/stores';

  let isDarkTheme = $theme === 'dark';
</script>

<div class={isDarkTheme ? 'dark' : ''}>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style lang="scss">
</style>
