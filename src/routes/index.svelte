<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import { defaultFontWeight } from '../stores/stores';
  import TextBlock from '../lib/TextBlock.svelte';
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
      />サンプル文章のh1〜3タグと太字（b,strongタグ）にした部分は見出しのweightで設定される。
    </p>
    <TextBlock />
    <TextBlock fontWeight={600} />
    <TextBlock fontWeight={700} />
    <TextBlock fontWeight={800} />
    <TextBlock fontWeight={900} />
  </div>
</section>

<style lang="scss">
</style>
