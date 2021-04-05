export const api = axios.create({
  baseURL: "https://opentdb.com/api.php?amount=5&category=17&type=multiple",
  timeout: 10000,
});
