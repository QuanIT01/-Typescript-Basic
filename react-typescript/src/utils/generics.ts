function simpleUseState<T>(val: T): [() => T, (v: T) => void] {
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}
const [strGetter, strSetter] = simpleUseState("evondev");
console.log(strGetter); //evondev
strSetter("developer");
console.log(strGetter); //developer
const [strGetter2, strSetter2] = simpleUseState(100);
console.log(strGetter2); //100
strSetter2(100);
console.log(strGetter2); //200
// const [strGetter3, strSetter3] = simpleUseState(true);

interface Ranks<RankItem> {
  item: RankItem;
  rank: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rankCallBack: (v: RankItem) => number
): RankItem[] {
  const ranks: Ranks<RankItem>[] = items.map((item) => ({
    item: item,
    rank: rankCallBack(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}
const languages: {
  name: string;
  deficutly: number;
}[] = [
  {
    name: "ReactJS",
    deficutly: 60,
  },
  {
    name: "Angular",
    deficutly: 80,
  },
  {
    name: "VueJS",
    deficutly: 70,
  },
];
// console.log(ranker([1, 2, 3, 4, 5], (number) => number * 5));
const rank = ranker(languages, ({ deficutly }) => deficutly);
console.log(rank);
//[1,2,3,4,5] (v) => v *5
