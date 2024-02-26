import { Card } from '@/components/ui/card';

type FileListBoxProps = {
  filename: string;
  size: string;
  downloadUrl: string;
};

export function FileListBox({ filename, size, downloadUrl }: FileListBoxProps) {
  return (
    // <div onClick={() => window.open(downloadUrl, '_blank', 'noopener')}>
    //   {filename} / {size}
    // </div>
    <Card
      onClick={() => window.open(downloadUrl, '_blank', 'noopener')}
      className="cursor-pointer p-4 flex justify-between gap-4"
    >
      <div>{filename}</div>
      <div>{size}</div>
    </Card>
  );
}
