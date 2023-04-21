import type { Equal, Expect } from "@type-challenges/utils";

type TupleToObject<T extends readonly any[]> = {
  [Property in T[number]]: Property;
};

// T[number] is just union string 'tesla' | 'model 3' | ...

// ['tesla', 'model 3', 'model X', 'model Y']
type TypeofTuple = typeof tuple;

// 'tesla'
type IndexOf = (typeof tuple)[0];

// T[number] - union of strings of array, e.g.:
// typeof arr[number] -> 'a' | 'b' | 'c'

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, "2", 3, "4"] as const;

type Keys = (typeof tuple)[number];

const keys: Keys = "tesla";

const index: (typeof tuple)["0"] = "tesla";

const testobj: TupleToObject<typeof tuple> = {
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
  tesla: "tesla",
};

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; "2": "2"; 3: 3; "4": "4" }>
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
