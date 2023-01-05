function truncateText(text: string, characters: number) {
  const ellipsis = '\u2026';
  return text.length <= characters ? text : `${text.slice(0, characters)}${ellipsis}`;
}

export default truncateText;
