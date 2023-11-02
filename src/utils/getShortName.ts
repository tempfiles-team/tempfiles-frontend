const getFullName = (fileName: string) => {
  var lastDot = fileName.lastIndexOf('.');
  if (lastDot === -1) {
    lastDot = fileName.length;
  }
  const fileFullName = fileName.substring(0, lastDot);
  return fileFullName;
};

const getFileExtension = (fileName: string) => {
  var lastDot = fileName.lastIndexOf('.');
  const fileLength = fileName.length;
  const fileExtension = fileName.substring(lastDot + 1, fileLength);
  if (lastDot === -1) {
    return '';
  }
  return '.' + fileExtension;
};

export const getShortName = (fileName: string) => {
  const fileFullName = getFullName(fileName);
  if (fileFullName.length >= 9) {
    return fileFullName.substring(0, 10) + '(...)' + getFileExtension(fileName);
  }
  return fileName;
};
