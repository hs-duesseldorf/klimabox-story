type SortItem = { date: string; title: string };

export type SortMethod<T extends SortItem> = {
  name: string;
  fn: (a: T, b: T) => number;
};

const functions: Array<SortMethod<SortItem>> = [
  {
    name: "Neueste zuerst",
    fn: (a, b) => b.date.localeCompare(a.date),
  },
  {
    name: "Älteste zuerst",
    fn: (a, b) => a.date.localeCompare(b.date),
  },
  {
    name: "Alphabetisch",
    fn: (a, b) => a.title.localeCompare(b.title),
  },
];

export const [defaultSortMethod] = functions;

export function SortMethodSelection<T extends SortItem>({
  setSortMethod,
}: {
  setSortMethod(method: SortMethod<T>): void;
}) {
  return (
    <select
      onChange={(evt) => {
        setSortMethod(functions[parseInt(evt.target.value)]);
      }}
      className="border-2 border-black px-3 py-2 rounded-xl font-bold cursor-pointer"
    >
      {functions.map(({ name }, i) => (
        <option value={i} key={i}>
          {name}
        </option>
      ))}
    </select>
  );
}
