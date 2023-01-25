import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EmailListingCard, EmailCard, FilterCard } from "../../components";
import { getEmails } from "../../redux-store";
import { filterMails } from "../../utils";

const Home = () => {
  const [readEmails, setReadEmails] = useState([]);
  const { emailList, selectedEmail, favMailIds, filter } = useSelector(
    (state) => state.email
  );
  const dispatch = useDispatch();

  const [favoriteMails, allMails] = filterMails(filter, emailList, favMailIds, readEmails);

  useEffect(() => {
    dispatch(getEmails());
  }, [dispatch]);

  return (
    <>
      <FilterCard />
      <section className={`${selectedEmail?.id ? "grid grid-cols-12" : ""}`}>
        <div
          className={`${
            selectedEmail?.id ? "col-start-1 col-end-7" : ""
          } flex flex-col gap-6 w-[90%] mx-auto`}
        >
          {favoriteMails.map((email) => {
            const isRead = readEmails.includes(email.id);
            return (
              <EmailListingCard
                key={email.id}
                emailDetails={email}
                setReadEmails={setReadEmails}
                isRead={isRead}
              />
            );
          })}
          {allMails.map((email) => {
            const isRead = readEmails.includes(email.id);
            return (
              <EmailListingCard
                key={email.id}
                emailDetails={email}
                setReadEmails={setReadEmails}
                isRead={isRead}
              />
            );
          })}
        </div>
        {selectedEmail && <EmailCard />}
      </section>
    </>
  );
};

export { Home };
