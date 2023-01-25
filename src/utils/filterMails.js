const filterMails = (filter, emailList, favMailIds, readEmails) => {
  let favoriteMails;
  let allMails;
  if (filter === "read") {
    favoriteMails = emailList.filter(
      (mail) => favMailIds.includes(mail.id) && readEmails.includes(mail.id)
    );
    allMails = emailList.filter(
      (mail) => !favMailIds.includes(mail.id) && readEmails.includes(mail.id)
    );
  } else if (filter === "unread") {
    favoriteMails = emailList.filter(
      (mail) => favMailIds.includes(mail.id) && !readEmails.includes(mail.id)
    );
    allMails = emailList.filter(
      (mail) => !favMailIds.includes(mail.id) && !readEmails.includes(mail.id)
    );
  } else if (filter === "favorite") {
    favoriteMails = emailList.filter((mail) => favMailIds.includes(mail.id));
    allMails = [];
  } else {
    favoriteMails = emailList.filter((mail) => favMailIds.includes(mail.id));
    allMails = emailList.filter((mail) => !favMailIds.includes(mail.id));
  }
  return [favoriteMails, allMails];
};

export { filterMails };
