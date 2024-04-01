import { getFileSize } from '../../utils';
import { Backend, downloadFile } from '../../utils/axios';
import * as S from './styled';
import { useState } from 'react';

export type FileListBoxProps = {
  filename: string;
  size: number;
  folderId: string;
  downloadUrl: string;
  downloading: boolean;
  setDownloading: (downloading: boolean) => typeof downloading;
};

export function FileListBox({
  filename,
  size,
  downloadUrl,
  folderId,
  downloading,
  setDownloading,
}: FileListBoxProps) {
  const [view, setView] = useState(false);

  const isImage = filename.match(/\.(jpeg|jpg|gif|png|svg)$/) !== null;
  const isVideo = filename.match(/\.(mp4|webm|ogg|mov)$/) !== null;
  const isAudio = filename.match(/\.(mp3|wav|ogg)$/) !== null;
  const isText =
    filename.match(
      /\.(txt|md|html|css|js|ts|json|xml|yml|yaml|csv|tsv|go|py|java|php|rb|sh|bat|cmd|ps1|psm1|psd1|ps1xml|psc1|pssc|pl|pm|tcl|lua|coffee|scss|less|sass|styl|cs|vb|fs|fsx|fsi|swift|kt|kts|clj|cljs|cljc|edn|scala|groovy|rs|toml|hs|lhs|purs|erl|hrl)$/
    ) !== null;

  const isPreviewable = isImage || isVideo || isAudio || isText;

  const ViewUrl = Backend('/view/' + folderId + '/' + filename);

  return (
    <>
      <S.PreviewContainer style={{ display: view ? 'flex' : 'none' }}>
        <div style={{ position: 'relative' }}>
          {isImage && (
            <img src={ViewUrl} alt={filename} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          )}

          {isVideo && (
            <video
              controls
              autoPlay
              muted
              src={ViewUrl}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          )}

          {isAudio && (
            <audio
              controls
              autoPlay
              muted
              src={ViewUrl}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          )}

          {isText && (
            <pre style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'auto' }}>
              <iframe
                src={ViewUrl}
                title={filename}
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </pre>
          )}

          <S.CloseButton onClick={() => setView(false)}>X (close)</S.CloseButton>
        </div>
      </S.PreviewContainer>

      <S.FileListBoxContainer>
        <a
          style={{ color: 'inherit', textDecoration: 'none' }}
          href={Backend(downloadUrl)}
          onClick={async (e) => {
            e.preventDefault();
            setDownloading(true);
            await downloadFile(downloadUrl, filename);
            setDownloading(false);
          }}
        >
          {filename} / {getFileSize(size)}
          {downloading && size >= 2000_000 ? ' / 다운로드 중...' : ''}
        </a>

        {isPreviewable && (
          <S.FileListBoxButton
            onClick={(e) => {
              e.preventDefault();
              setView(true);
            }}
          >
            📷
          </S.FileListBoxButton>
        )}
      </S.FileListBoxContainer>
    </>
  );
}
