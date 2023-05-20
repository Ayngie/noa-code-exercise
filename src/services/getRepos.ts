import axios from "axios";
import { IRepo } from "../models/IRepo";

export const getRepos = async (url: string) => {
  try {
    const repo = await axios.get<IRepo>(url);
    console.log("repo.data: ", repo.data);
    // console.log("repo ", repo);
    // localStorage.setItem("storedRepo", JSON.stringify(repo.data));
    return repo.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
