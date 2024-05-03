export const themeValues = [
  "synthwave",
  "valentine",
  "forest",
  "aqua",
  "pastel",
  "lemonade",
  "nord",
];

export const firtLetterUppercase = (text) => {
  return text[0].toUpperCase() + text.substring(1);
};

export const apiKey = "8ec910b45a99b1f4729dd91ef25902a7";
export const baseUrl = "https://api.themoviedb.org/3/movie/";

export const getImagePath = (path) => {
  return `https://image.tmdb.org/t/p/w1280${path}`;
};

export const dateConvert = (date) => {
  if (!date) return "Data desconhecida"; // Adiciona uma verificação aqui
  return date.split("-").reverse().join("/");
};
