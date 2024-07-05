export type Tab = {
  key: string;
  text: string;
  view: JSX.Element;
};

export type Item = {
  key: number;
  title: string;
  description: string;
  date?: string;
};
