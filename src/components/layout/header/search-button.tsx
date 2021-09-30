import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FeedItemData, useFeed } from "../../blog/wp";

function SearchInput({
  htmlRef,
}: {
  htmlRef: React.MutableRefObject<HTMLInputElement | null>;
}) {
  React.useEffect(() => {
    htmlRef.current!.focus();
  }, [htmlRef]);

  return (
    <input
      type="text"
      style={{ color: "black", borderWidth: "2px" }}
      ref={htmlRef}
    />
  );
}

function Search() {
  const { loading, data } = useFeed();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const items = React.useMemo<FeedItemData[] | undefined>(
    () => data && data.posts.edges.map((edge) => edge.node),
    [data]
  );
  const [searchResult, setSearchResult] = useState<FeedItemData[]>([]);

  const cleanTitles = React.useMemo<Record<string, string> | null>(() => {
    if (!items) return null;
    const res: Record<string, string> = {};
    items.forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = item.title;
      res[item.slug] = div.textContent || div.innerText;
    });
    return res;
  }, [items]);

  React.useEffect(() => {
    if (!items) return;

    const input = inputRef.current;
    if (!input) return;

    const handleInput = () => {
      setSearchResult(
        items.filter((item) =>
          item?.title
            .toLocaleLowerCase()
            .includes(input.value.toLocaleLowerCase())
        )
      );
    };

    input.addEventListener("input", handleInput);
    return () => input.removeEventListener("input", handleInput);
  }, [items]);

  return (
    <>
      {!loading && <SearchInput htmlRef={inputRef} />}
      <div
        className="absolute"
        style={{
          margin: "20px",
          top: "100%",
          maxHeight: "300px",
          minWidth: "250px",
          height: "auto",
          overflow: "auto",
          fontFamily: "inherit",
          borderStyle: "solid",
          borderWidth: "2px",
          padding: "5px",
          background: "#EFEFEF",
          opacity: "0.9",
          borderRadius: "15px",
          boxShadow: "-3px 4px 47px -11px rgba(0,0,0,0.49)",
        }}
      >
        {searchResult.map(
          (feedEntry) =>
            feedEntry && (
              <div
                key={"feed-search-" + feedEntry.id}
                className="entry"
                style={{
                  borderRadius: "1px",
                  borderColor: "black",
                  borderBottom: "1px solid gray",
                }}
              >
                <Link to={"/blog/" + feedEntry.slug}>
                  {cleanTitles![feedEntry.slug]}
                </Link>
              </div>
            )
        )}
      </div>
    </>
  );
}

export const SearchButton: React.FC = () => {
  const [isInputVisible, setInputVisible] = useState<boolean>(false);

  return (
    <div
      className="flex relative"
      style={{ borderRadius: "5px", fontSize: "15px", borderColor: "black" }}
    >
      <button
        className="cursor-pointer"
        onClick={() => setInputVisible(!isInputVisible)}
      >
        <svg
          width="31.479"
          height="31"
          viewBox="0 0 31.479 31"
          className="w-10"
          fill="currentColor"
        >
          <path
            id="Icon_map-search"
            d="M24.474,20a12.022,12.022,0,0,0,1.8-6.325A12.323,12.323,0,0,0,13.858,1.44,12.327,12.327,0,0,0,1.44,13.673,12.323,12.323,0,0,0,13.862,25.9a12.483,12.483,0,0,0,6.422-1.774L28.73,32.44l4.189-4.127ZM13.86,21.24a7.635,7.635,0,0,1-7.683-7.559,7.684,7.684,0,0,1,15.366,0A7.641,7.641,0,0,1,13.86,21.24Z"
            transform="translate(-1.44 -1.44)"
          />
        </svg>
      </button>
      {isInputVisible && (
        <>
          <div
            className="fixed inset-0"
            onClick={() => setInputVisible(false)}
          />
          <div className="z-10">
            <Search />
          </div>
        </>
      )}
    </div>
  );
};
