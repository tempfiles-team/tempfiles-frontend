import React from 'react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type FileFindProps = {
  handleChangeFile: React.ChangeEventHandler<HTMLInputElement>;
  handleDrop: React.DragEventHandler<HTMLLabelElement>;
  handleDragOver: React.DragEventHandler<HTMLLabelElement>;
  fileProps: {
    files: {
      filename: string;
      size: string;
      fileType: string;
      fileData: Blob;
    }[];
  };
  hideBoolean: boolean;
};

export function FileFind({
  handleChangeFile,
  handleDrop,
  handleDragOver,
  fileProps,
  hideBoolean,
}: FileFindProps) {
  const [dropReady, setDropReady] = React.useState(false);

  return (
    <>
      <Input
        type="file"
        id="input-file-upload"
        multiple={true}
        className="hidden"
        onChange={handleChangeFile}
      />
      <label
        htmlFor="input-file-upload"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnterCapture={() => setDropReady(true)}
        onDragLeaveCapture={() => setDropReady(false)}
        className={cn('border border-gray-300 border-dashed rounded-md', 'block py-10 px-12')}
      >
        {hideBoolean ? `🔒️${' '}` : ''}
        {fileProps.files[0].fileData === null
          ? dropReady
            ? '파일을 놓아주세요.'
            : '파일을 드롭하거나 클릭하여 파일을 선택해주세요.'
          : fileProps.files.length + '개의 파일이 선택되었습니다.'}
      </label>
    </>
  );
}
