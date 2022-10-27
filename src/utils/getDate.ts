export const getDate = (date: string) => {
  const NewDate = new Date(date);
  return { year: NewDate.getFullYear(), month: NewDate.getMonth() + 1, day: NewDate.getDay() };
};
