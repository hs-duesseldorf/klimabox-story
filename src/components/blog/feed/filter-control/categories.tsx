import cn from "classnames";
import React, { useEffect, useState } from "react";
import { getTopics } from "../../../../users_api/UserAPI";
import TopicInterface from "../../../user-dashboard";
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
  const [user, setUser] = useState(undefined);
  const [userTopicsSelected, setUserTopicsSelected] = useState<boolean>(false);
  const [topics, setTopics] = useState<TopicInterface[]>([]);


  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      setUser(undefined);
    }
    fetchTopics();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('user')]);

  const { loading, error, data } = useCategories();

  const selectUserAll = () => {
    if (data) {
      topics.forEach((topic) => {
        const foundCategory = data.categories.nodes.find((category) => category.name === topic.name);
        if (foundCategory) {
          select(foundCategory);
        }
      })
    }
  }

  const fetchTopics = async () => {
    let response;
    try {
      response = await getTopics()
    } catch(error) {
      setTopics([])
    }
    let responseTopics: Array<TopicInterface> = []
    if (response) {
      // @ts-ignore
      response.forEach(element => {
        responseTopics.push(element)
      });
      setTopics(responseTopics)
    }
  }

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
      { user && (
        <Button active={userTopicsSelected} onClick={() => {
          if (!userTopicsSelected) {
            selectUserAll();
            setUserTopicsSelected(true);
          } else {
            unselectAll();
            setUserTopicsSelected(false);
          }
        }}>
          Meine Kategorien
        </Button>
      )}
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
