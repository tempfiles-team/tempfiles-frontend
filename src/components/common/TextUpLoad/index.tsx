import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { useUploadCNP } from '../../../api/query';
import { uploadState } from '../../../atom';
import { getTime } from '../../../utils';
import { CheckBox } from '../CheckBox';
import { DownloadCountSlider } from '../DownLoadCountSlider';
import { ExpireTime } from '../ExpireTime';
import { UpLoadButton } from '../UpLoadButton';
import * as S from './styled';

export const TextUpLoad: React.FC = () => {
  const setUpload = useSetRecoilState(uploadState);
  const [expireTimeBoolean, setExpireTimeBoolean] = useState(false);
  const [downloadCountBoolean, setDownloadCountBoolean] = useState(false);
  const [expireTime, setExpireTime] = useState(1);
  const [downloadCount, setDownloadCount] = useState(100);
  const [textData, setTextData] = useState('');

  const onTextDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextData(event.target.value);
  };

  const { mutate } = useUploadCNP({
    textData,
    downloadCount: downloadCountBoolean ? downloadCount : 100,
    expireTime: expireTimeBoolean ? expireTime : 180,
  });
  return (
    <S.TextUpLoadContainer>
      <S.TextUploadCheckBoxSection>
        <CheckBox
          click={() => {
            setExpireTimeBoolean(!expireTimeBoolean);
          }}
          isCheck={expireTimeBoolean}
          label={'유지기간'}
        />
        <CheckBox
          click={() => {
            setDownloadCountBoolean(!downloadCountBoolean);
            setDownloadCount(1);
          }}
          isCheck={downloadCountBoolean}
          label={'다운로드 횟수'}
        />
      </S.TextUploadCheckBoxSection>
      {expireTimeBoolean && (
        <ExpireTime
          expireTime={Number(expireTime)}
          setExpireTime={setExpireTime}
          expireTimePlusButton={['1분', '10분', '1시간', '1일']}
          time={getTime(Number(expireTime))}
        />
      )}
      {downloadCountBoolean && (
        <DownloadCountSlider downloadCount={downloadCount} setDownloadCount={setDownloadCount} />
      )}
      <S.TextUploadInput
        placeholder="텍스트를 입력하세요..."
        onChange={onTextDataChange}
        value={textData}
      />
      <div>
        <UpLoadButton
          type={'button'}
          value={'← 뒤로가기'}
          onClick={() => setUpload({ file: false, text: false })}
          style={{ marginRight: '4rem', marginTop: '0' }}
        />
        <UpLoadButton
          type={'button'}
          value={'업로드'}
          onClick={() => {
            mutate({}), setTextData('');
          }}
          style={{ marginTop: '0' }}
        />
      </div>
    </S.TextUpLoadContainer>
  );
};
