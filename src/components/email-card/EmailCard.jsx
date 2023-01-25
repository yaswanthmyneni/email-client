import React from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { Avatar } from "../avatar/Avatar";
import { setFavMailIds } from "../../redux-store";
// import {
//   setFavMailIds,
//   setReadedMail,
//   setMails,
// } from "../../redux-store/slice/emailSlice";

const EmailCard = () => {
  const { singleEmailDetails, selectedEmail, favMailIds } = useSelector(
    (state) => state.email
  );
  const dispatch = useDispatch();
  const date = new Date(selectedEmail?.date)?.toLocaleDateString();
  const time = new Date(selectedEmail?.date)?.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <section className="col-start-7 col-end-13">
      <div className="flex flex-wrap gap-4 p-4 border rounded-md border-border w-[95%] mx-auto">
        <Avatar />
        <section className="flex flex-col gap-6 text-text">
          <div className="flex justify-between">
            <h3>{selectedEmail.subject}</h3>
            <p
              className="rounded-full border-0 cursor-pointer px-2 py-1 bg-red-color text-white"
              onClick={() => {
                if (!favMailIds.includes(selectedEmail.id)) {
                  dispatch(setFavMailIds(selectedEmail.id));
                }
              }}
            >
              Mark as Favorite
            </p>
          </div>
          <p>
            {date} {time}
          </p>
          {singleEmailDetails?.body &&
            parse(singleEmailDetails?.body).props.children.map((para) => (
              <p>{para.props.children}</p>
            ))}
        </section>
      </div>
      {/* parse(singleEmailDetails?.body) */}
    </section>
  );
};

export { EmailCard };
