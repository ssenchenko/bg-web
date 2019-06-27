const toTitle = (str?: string | null): string | null | undefined =>
  str && str[0].toUpperCase() + str.slice(1);

export default toTitle;
