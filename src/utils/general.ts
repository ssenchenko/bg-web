/**
 * Make string a title by upper-casing the first symbol.
 *
 * @param str - string
 */
function toTitle(str?: string | null): string | null | undefined {
  return str && str[0].toUpperCase() + str.slice(1);
}

export default toTitle;
