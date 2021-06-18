<script lang="ts">
  import '../styles/app.scss';
  import Header from '$lib/Header/index.svelte';
  import Footer from '$lib/Footer/index.svelte';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="scss">
</style>
