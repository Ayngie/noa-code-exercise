import axios from "axios";

export const getData = async <T>(repoToGet: string) => {
  const response = await axios.get<T>(
    `https://api.github.com/repos/${repoToGet}`
  );
  return response.data;
};
