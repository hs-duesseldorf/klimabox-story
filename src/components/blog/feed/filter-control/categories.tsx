import cn from "classnames";
import { useCategories } from "../../wp/categories";
import { useFilteredCategories } from "../fitering";

const Button: React.FC<{ onClick(): void; active: boolean }> = ({
  children,
  onClick,
  active,
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 m-1 bg-em2  rounded-2xl transition",
        !active
          ? "text-text-muted bg-opacity-0 hover:bg-opacity-20"
          : "text-white"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export function CategoriesFilterControl() {
  const { loading, error, data } = useCategories();
  const {
    items: selectedCategories,
    add: select,
    remove: deselect,
    clear: unselectAll,
  } = useFilteredCategories();

  if (loading || error || !data) return null;

  return (
    <div className="flex flex-wrap justify-center -m-1">
      <Button active={!selectedCategories.length} onClick={unselectAll}>
        Alle Kategorien
      </Button>
      {data.categories.nodes.map((category, i) => {
        const isSelected = selectedCategories.indexOf(category) >= 0;

        return (
          <Button
            key={i}
            active={isSelected}
            onClick={() => (isSelected ? deselect : select)(category)}
          >
            {category.name}
          </Button>
        );
      })}
    </div>
  );
}
