const today = new Date();

export const getDate = (date: string) => {
  const NewDate = date.split('T')[0].split('-');
  return { year: Number(NewDate[0]), month: Number(NewDate[1]), day: Number(NewDate[2]) };
};

export const getExpireTime = (date: string) => {
  const expireTime = new Date(date);
  const differenceTime = expireTime.getTime() - today.getTime();
  const differenceTimeDay =
    differenceTime / (1000 * 60 * 60 * 24) >= 0 ? differenceTime / (1000 * 60 * 60 * 24) : 0;

  let differenceTimeHour = differenceTime / (1000 * 60 * 60);
  while (true) {
    differenceTimeHour %= 24;
    if (differenceTimeHour <= 24) {
      break;
    }
  }
  let differenceTimeMinute = differenceTime / (1000 * 60);
  while (true) {
    differenceTimeMinute %= 60;
    if (differenceTimeMinute <= 60) {
      break;
    }
  }
  return {
    day: Math.floor(differenceTimeDay),
    hour: Math.floor(differenceTimeHour),
    minute: Math.floor(differenceTimeMinute),
  };
};

export const getTime = (minute: number) => ({
  day: Math.floor(minute / 1440),
  hour:
    Math.floor(minute / 60) % Math.floor(minute % 1440) >= 0
      ? Math.floor(Math.floor(minute % 1440) / 60)
      : Math.floor(minute / 60),
  minute: minute % Math.floor(minute / 60) >= 0 ? Math.floor(minute % 60) : minute,
});
