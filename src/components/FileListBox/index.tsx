type FileListBoxProps = {
  filename: string;
  size: string;
  downloadUrl: string;
};

export function FileListBox({ filename, size, downloadUrl }: FileListBoxProps) {
  return (
    <div onClick={() => window.open(downloadUrl, '_blank', 'noopener')}>
      {filename} / {size}
    </div>
  );
}
