import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSelectedEmail } from "../../redux-store";

const FilterCard = () => {
  const { filter } = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const filterHandler = (string) => {
    dispatch(setFilter(string));
    dispatch(setSelectedEmail(null));
  };

  return (
    <section className="flex gap-6 my-4 ml-10">
      <p className="px-2 py-1">Filter By:</p>
      <p
        className={`cursor-pointer px-2 py-1 ${
          filter === "unread"
            ? "bg-filter-btn-background border border-border text-text rounded-full"
            : ""
        }`}
        onClick={() => filterHandler("unread")}
      >
        Unread
      </p>
      <p
        className={`cursor-pointer px-2 py-1 ${
          filter === "read"
            ? "bg-filter-btn-background border border-border text-text rounded-full"
            : ""
        }`}
        onClick={() => filterHandler("read")}
      >
        Read
      </p>
      <p
        className={`cursor-pointer px-2 py-1 ${
          filter === "favorite"
            ? "bg-filter-btn-background border border-border text-text rounded-full"
            : ""
        }`}
        onClick={() => filterHandler("favorite")}
      >
        Favorite
      </p>
      <p
        className={`cursor-pointer px-2 py-1 ${
          filter === null
            ? "bg-filter-btn-background border border-border text-text rounded-full"
            : ""
        }`}
        onClick={() => filterHandler(null)}
      >
        All
      </p>
    </section>
  );
};

export { FilterCard };
