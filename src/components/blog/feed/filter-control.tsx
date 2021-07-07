import { useFilterTags, useFilterActions } from "./filtering";

export function FilterControl() {
  const tags = useFilterTags();
  const { removeTag } = useFilterActions();

  return (
    <div className="mb-8 flex -m-1 text-lg">
      {!tags.length ? (
        <div className="py-0.5 m-1 select-none">&nbsp;</div>
      ) : (
        tags.map((term, i) => (
          <div
            className="m-1 px-3 py-0.5 bg-em2 text-white rounded-xl mr-2"
            key={i}
          >
            {term.name}
            <button
              className="inline-block ml-3 font-bold select-none"
              onClick={() => removeTag(term)}
            >
              X
            </button>
          </div>
        ))
      )}
    </div>
  );
}
