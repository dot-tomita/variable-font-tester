<script lang="ts">
  import '../styles/app.scss';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  import { theme } from '../stores/stores';

</script>

<div class={$theme === 'dark' ? 'dark' : ''}>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style lang="scss">
</style>
