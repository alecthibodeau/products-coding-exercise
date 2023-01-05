function truncateText(text: string, characters: number) {
  return text.length <= characters ? text : `${text.slice(0, characters)}\u2026`;
}

export default truncateText;
