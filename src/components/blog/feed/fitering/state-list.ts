import { SetState, UseStore } from "zustand";

export type StateList<T> = {
  items: T[];
  add(term: T): void;
  remove(term: T): void;
};

export function createStateList<T extends { id: string }, State extends object>(
  name: string,
  set: SetState<State>
): StateList<T> {
  function create(items: T[]): StateList<T> {
    return { items, ...actions };
  }

  const actions: Omit<StateList<T>, "items"> = {
    add: (item) =>
      set((state) => {
        const { items } = state[name] as StateList<T>;
        return {
          [name]: create(
            !items.find((other) => item.id === other.id)
              ? [...items, item]
              : items
          ),
        } as State;
      }),
    remove: (item) =>
      set(
        (state) =>
          ({
            [name]: create(
              (state[name] as StateList<T>).items.filter(
                (other) => item.id !== other.id
              )
            ),
          } as State)
      ),
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
