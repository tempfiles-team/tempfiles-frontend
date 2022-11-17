export const getDate = (date: string) => {
  const NewDate = date.split('T')[0].split('-');
  return { year: Number(NewDate[0]), month: Number(NewDate[1]), day: Number(NewDate[2]) };
};
