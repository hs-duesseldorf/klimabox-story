import createStore from "zustand";
import shallow from "zustand/shallow";
import type { TagData } from "../wp";

type State = {
  tags: TagData[];
  addTag(tag: TagData): void;
  removeTag(tag: TagData): void;
};

const useStore = createStore<State>((set) => ({
  tags: [],
  addTag: (tag) =>
    set(({ tags }) => ({
      tags: !tags.find((other) => tag.slug === other.slug)
        ? [...tags, tag]
        : tags,
    })),
  removeTag: (tag) =>
    set(({ tags }) => ({
      tags: tags.filter((other) => tag.slug !== other.slug),
    })),
}));

const actionsSelector = ({ addTag, removeTag }: State) => ({
  addTag,
  removeTag,
});
export const useFilterActions = () => useStore(actionsSelector, shallow);

const tagsSelector = ({ tags }: State) => tags;
export const useFilterTags = () => useStore(tagsSelector, shallow);
