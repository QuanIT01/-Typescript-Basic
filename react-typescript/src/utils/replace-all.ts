//ReplaceAll<S,From,To>
//REplaceAll<'demo item demo' ,'demo ,'item> => 'item item item'
//REplaceAll<'demo item demo' ,'' ,'item> => 'demo item demo'

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${ReplaceAll<Right, From, To>}`
  : S;
type ResultReplace = ReplaceAll<"demo item demo", "demo", "item">;
//'demo item demo'
// left :""
//right: " item demo"
//From: "demo"
