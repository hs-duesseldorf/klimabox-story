import createStore from "zustand";

import { createStateList, createStateListHook, StateList } from "./state-list";
import type { TagData } from "../../wp";

type State = {
  tags: StateList<TagData>;
};

const useStore = createStore<State>((set) => ({
  tags: createStateList("tags", set),
}));

export const useFilteredTags = createStateListHook<TagData>("tags", useStore);
