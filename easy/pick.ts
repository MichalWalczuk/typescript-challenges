type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

type ThreeDimension = {
  x: number;
  y: number;
  z: number;
};

type TwoDimension = MyPick<ThreeDimension, "x" | "y">;

const twod: TwoDimension = {
  x: 10,
  y: 5,
};

const threed: ThreeDimension = {
  x: 10,
  y: 5,
  z: 10,
};
