import createStore from "zustand";

import { createStateList, createStateListHook, StateList } from "./state-list";
import type { TagData, CategoryData } from "../../wp";

type State = {
  tags: StateList<TagData>;
  categories: StateList<CategoryData>;
};

const useStore = createStore<State>((set) => ({
  tags: createStateList("tags", set),
  categories: createStateList("categories", set),
}));

export const useFilteredTags = createStateListHook<TagData>("tags", useStore);
export const useFilteredCategories = createStateListHook<CategoryData>(
  "categories",
  useStore
);
