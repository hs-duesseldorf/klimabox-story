import { useFilteredTags } from "../fitering";

export function TagsFilterControl() {
  const { items: tags, remove: removeTag } = useFilteredTags();

  return !tags.length ? null : (
    <div className="mb-8 flex justify-center -m-1 text-lg">
      {tags.map((term, i) => (
        <div
          className="m-1 px-3 py-0.5 bg-em2 text-white rounded-xl mr-2"
          key={i}
        >
          {term.name}
          <button
            className="ml-3 font-bold select-none"
            onClick={() => removeTag(term)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
