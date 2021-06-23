<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import { defaultFontWeight } from '../stores/stores';
  import TextBlock from '../lib/TextBlock.svelte';
  import MenuBtn from '../lib/MenuBtn.svelte';
  import Modal from '../lib/Modal.svelte';

  let modalOpen = false;
  const openModal = () => {
    modalOpen = true;
  }
  const closeModal = () => {
    modalOpen = false;
  }
</script>

<svelte:head>
  <title>NotoSansJp variable font tester</title>
</svelte:head>

<section
  class="dark:bg-gray-800 text-black dark:text-white"
  style="font-weight: {$defaultFontWeight};"
>
  <div class="w-10/12 mx-auto py-7">
    <p class="mb-10">
      デフォルトのfont-weightは<strong style="font-weight: {$defaultFontWeight};"
        >{$defaultFontWeight}</strong
      >として設定中。<br
      />サンプル文章のh1〜3タグと太字（b,strongタグ）にした部分は見出しのweightで設定される。{modalOpen}
    </p>
    <TextBlock fontWeight={100} />
    <TextBlock fontWeight={200} />
    <TextBlock fontWeight={300} />
    <TextBlock fontWeight={400} />
    <TextBlock fontWeight={500} />
    <TextBlock fontWeight={600} />
    <TextBlock fontWeight={700} />
    <TextBlock fontWeight={800} />
    <TextBlock fontWeight={900} />
  </div>
</section>
<MenuBtn on:open={openModal} />

{#if modalOpen}
  <Modal on:close={closeModal} />
{/if}

<style lang="scss">
</style>
