export const setBackgroundColor = (type: string | undefined) => {
  const backgroundColor = type || "";
  return `bg-${backgroundColor}`;
};
