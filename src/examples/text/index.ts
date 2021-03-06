export const sliceName = (text: string | undefined) => {
  if (!text) return '';
  const nameArray = text.split(' ');
  const [firstName, lastName] = nameArray;
  const firstSlice = firstName.slice(0, 1);
  if(!lastName){
    return  firstSlice + '.';
  }
  return firstSlice + '. ' + lastName;
};

//John Doe => J. Doe

// TODO
export const sliceString = (text: string, count: number) => {
  if (text.length > count) {
    const firstSlice = text.slice(0, count);
    const lastSpace = firstSlice.lastIndexOf(' ');
    if (lastSpace > -1) {
      const lastSlice = text.slice(0, lastSpace);
      return lastSlice + '...';
    } else {
      return firstSlice + '...';
    }
  }
  return text;
};
