import React from 'react';

import * as S from './styled';

type ExpireTimeProps = {
  expireTimePlusButton: string[];
  time: { day: number; hour: number; minute: number };
  expireTime: number;
  setExpireTime: (expireTime: number) => void;
};

export const ExpireTime: React.FC<ExpireTimeProps> = ({
  expireTimePlusButton,
  setExpireTime,
  expireTime,
  time,
}) => (
  <S.ExpireTimeContainer>
    <S.ExpireTimeText>
      {time.day}일 {time.hour}시간 {time.minute}분
    </S.ExpireTimeText>
    <section style={{ display: 'flex' }}>
      {expireTimePlusButton.map((i) => (
        <S.ExpireTimeButton
          key={i}
          onClick={() => {
            const item =
              i.split(i.replace(/[^0-9]/g, ''))[1] === '시간'
                ? Number(i.replace(/[^0-9]/g, '')) * 60
                : i.split(i.replace(/[^0-9]/g, ''))[1] === '일'
                ? Number(i.replace(/[^0-9]/g, '')) * 1440
                : Number(i.replace(/[^0-9]/g, ''));
            setExpireTime(expireTime + item);
          }}
        >
          +{i}
        </S.ExpireTimeButton>
      ))}
    </section>
  </S.ExpireTimeContainer>
);
//i.replace(/[^0-9]/g, '')
