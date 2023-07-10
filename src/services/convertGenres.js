export const convertGenres = genres => {
  return genres.map(genre => genre.name).join(' ');
};
