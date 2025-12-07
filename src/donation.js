export const onSubmission = (donation) => {
  if (donation === "") {
    return "Want to donate?";
  }
  const amount = Number(donation);
  if (isNaN(amount) || amount < 0) {
    return "Invalid input";
  } else if (amount === 0) {
    return "No donation, no problem";
  } else if (amount > 0) {
    return "Thanks for donation";
  }
};
