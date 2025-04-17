function getSizeOfFile(bit: number): string | null {
  if (isNaN(bit) || !isFinite(bit)) {
    return null;
  }

  const units = ['bytes', 'KB', 'MB'];
  let unitIndex = 0;
  let size = bit;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

export default getSizeOfFile;
