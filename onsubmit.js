export const onSubmit = (donation) => {
  const amount = Number(donation);
  if (donation === "" || isNaN(amount) || amount < 0) {
    return "Want to donate?";
  } else if (donation === 0) {
    return "No donation, no problem";
  } else if (donation > 0) {
    return "Thanks for donation";
  }
};
