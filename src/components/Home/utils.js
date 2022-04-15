export function trim_text(text, length) {
  /**
   * shorted text to given length
   */
  let short_text =
    text.length > length ? text.substring(0, length) + "..." : text;

  return short_text;
}
