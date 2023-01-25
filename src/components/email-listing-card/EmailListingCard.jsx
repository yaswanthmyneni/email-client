import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmailDetails, setSelectedEmail } from "../../redux-store";
import { Avatar } from "../avatar/Avatar";

const EmailListingCard = ({ emailDetails, setReadEmails, isRead }) => {
  const {
    date,
    from: { email, name },
    short_description,
    subject,
    id,
  } = emailDetails;
  const { selectedEmail, favMailIds } = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const dateInString = new Date(date)?.toLocaleDateString();
  const time = new Date(date)?.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const openMailHandler = (
    dispatch,
    setReadEmails,
    getEmailDetails,
    setSelectedEmail,
    isRead
  ) => {
    !isRead && setReadEmails((prev) => [...prev, id]);
    dispatch(getEmailDetails(id));
    dispatch(setSelectedEmail(emailDetails));
  };

  const isFavorite = favMailIds.includes(id);

  return (
    <section
      className={`flex gap-4 flex-wrap cursor-pointer py-2 px-4 border rounded-md border-border ${
        selectedEmail?.id === id ? "border-red-color" : ""
      }
      ${isFavorite ? "bg-border" : ""}
      `}
      onClick={() =>
        openMailHandler(
          dispatch,
          setReadEmails,
          getEmailDetails,
          setSelectedEmail,
          isRead
        )
      }
    >
      <Avatar />
      <div
        className={`flex flex-col gap-2 text-text ${isRead ? "" : "font-bold"}`}
      >
        <p>
          From: <span className="font-bold">{name}</span> {"<"}
          <span className="font-bold">{email}</span>
          {">"}
        </p>
        <p>
          Subject: <span>{subject}</span>
        </p>
        <p className="truncate w-60 lg:w-96">{short_description}</p>
        <div className={`${isFavorite ? "flex gap-4" : ""}`}>
          <p>
            {dateInString} {time}
          </p>
          {isFavorite && <p className="text-red-color">Favorite</p>}
        </div>
      </div>
    </section>
  );
};

export { EmailListingCard };
