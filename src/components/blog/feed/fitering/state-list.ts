import { SetState, UseStore } from "zustand";

export type StateList<T> = {
  items: T[];
  add(term: T): void;
  remove(term: T): void;
  clear(): void;
};

export function createStateList<T extends { id: string }, State extends object>(
  name: string,
  set: SetState<State>
): StateList<T> {
  function create(items: T[]): StateList<T> {
    return { items, ...actions };
  }

  function innerSet(fn: (items: T[]) => T[]) {
    set(
      (state) =>
        ({
          [name]: create(fn((state[name] as StateList<T>).items)),
        } as State)
    );
  }

  const actions: Omit<StateList<T>, "items"> = {
    add: (item) =>
      innerSet((items) =>
        !items.find((other) => item.id === other.id) ? [...items, item] : items
      ),
    remove: (item) =>
      innerSet((items) => items.filter((other) => item.id !== other.id)),
    clear: () => innerSet(() => []),
  };

  return create([]);
}

export function createStateListHook<T>(
  name: string,
  useStore: UseStore<any>
): () => StateList<T> {
  function selector(state: any): StateList<T> {
    return state[name];
  }

  return () => useStore(selector);
}
