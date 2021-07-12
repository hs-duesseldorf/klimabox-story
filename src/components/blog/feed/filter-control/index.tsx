import { TagsFilterControl } from "./tags";
import { CategoriesFilterControl } from "./categories";

export function FilterControl() {
  return (
    <>
      <div className="mb-4">
        <CategoriesFilterControl />
      </div>
      <TagsFilterControl />
    </>
  );
}
