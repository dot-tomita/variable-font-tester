import { derived, writable } from 'svelte/store';
import { createMarkdown } from 'safe-marked';
const markdown = createMarkdown();

export const theme = writable('normal');
export const defaultFontWeight = writable(500);
export const defaultSampleText = writable(`
  # 問わずがたりの洋酒外史
  洋酒といえば、誰でも最初に思い浮かべるのが**ウイスキー**。いわば洋酒のシンボル的な存在なのだが、英語表記が**［一般に〔米〕では Whiskey,〔英〕では Whisky.］**であることはあまり知られていない。米英両国では、このスペルの差で自国産と輸入品を区別しているという。わが和製ウイスキーの“Whisky”という英国式表示は、手本にしたスコッチのフォルムに倣ったものであり、それ以上の意味はないようだ。カナ表記にしても、ごくまれに**〈ウヰスキー〉**という書き方を見かけるが、これとて差別化を意図したものではなく単にカナづかいの時代性にすぎない。
  　現在、カナ表記は**〈ウイスキー〉**に一本化しており、そこに国産・舶来の区別はない。最近は価格面での差もちぢまり、20年前に ￥10,000 だった本場のスコッチが半値近くになるなど、ウイスキーは一層ポピュラーなものになってきた。**しかし、消費量についていえば、洋酒のトップは何といってもビールだろう。**よっぽどの下戸はともかく、まず誰でもタシナミ程度には口にする。
  　そのビールも明治中期には、せいぜい好事家が味わう程度だったらしい。当時流行した川上音二郎の《おっぺけぺ節》では、まるでゲテモノ扱い。**「むやみに西洋を鼻にかけ／日本酒なんぞは飲まれない／ビールにブランデーベルモット／腹にも馴れない洋食を／やたらに喰うのも負け惜しみ／ないしょで後架でヘドついて／まじめな顔してコーヒのむ」**と、特権階級をギューの目にあわせるネタにしている。観客も**「ざまぁみやがれ！」**とばかり同調して西洋カブレをオチョクり、日々のうっぷんを晴らしていた。
`);

export const sampleTextHtml = derived(defaultSampleText, ($defaultSampleText) => {
  return markdown($defaultSampleText);
});
