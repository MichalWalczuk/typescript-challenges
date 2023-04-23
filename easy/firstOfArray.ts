import type { Equal, Expect } from "@type-challenges/utils";

type First<T extends any[]> = T extends {
  ["0"]: unknown;
}
  ? T["0"]
  : never;

type Head = First<["a", "b", "c"]>;

type Headless = First<[]>;

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];
