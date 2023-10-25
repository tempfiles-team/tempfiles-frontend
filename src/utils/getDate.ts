const today = new Date();

export const getDate = (date: string) => {
  return date.split('T')[0];
};

export const getElapsed = (date: string) => {
  const createdTime = new Date(date);
  const differenceTime = today.getTime() - createdTime.getTime();

  const minute = Math.floor(differenceTime / 1000 / 60);
  const { day, hour, minute: min } = getTime(minute);

  if (day >= 7) {
    return `${Math.floor(day / 7)}주 전`;
  } else if (day >= 1) {
    return `${day}일 전`;
  } else if (hour >= 1) {
    return `${hour}시간 전`;
  } else if (min < 1) {
    return '방금 전';
  } else {
    return `${min}분 전`;
  }
};

export const getExpireTime = (date: string) => {
  const expireTime = new Date(date);
  const differenceTime = expireTime.getTime() - today.getTime();

  const minute = Math.floor(differenceTime / 1000 / 60);
  const { day, hour, minute: min } = getTime(minute);

  if (day >= 7) {
    return `${Math.floor(day / 7)}주 ${day % 7}일`;
  } else if (day >= 1) {
    return `${day}일 ${hour}시간`;
  } else if (hour >= 1) {
    return `${hour}시간 ${min}분`;
  } else if (min < 1) {
    return '시간이 안남았고';
  } else {
    return `${min}분`;
  }
};

export const getTime = (minute: number) => ({
  day: Math.floor(minute / 1440),
  hour:
    Math.floor(minute / 60) % Math.floor(minute % 1440) >= 0
      ? Math.floor(Math.floor(minute % 1440) / 60)
      : Math.floor(minute / 60),
  minute: minute % Math.floor(minute / 60) >= 0 ? Math.floor(minute % 60) : minute,
});
