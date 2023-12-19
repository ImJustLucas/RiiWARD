// profile.ts

interface ProfileResult {
  success: boolean;
  message?: string;
}

export const Profile = (
  _firstName?: string,
  _lastName?: string,
  _description?: string,
  _avatar?: string,
  _sector?: string,
  _grade?: string,
  _school?: string,
  linkedin?: string,
  github?: string,
  behance?: string,
  dribble?: string,
): ProfileResult => {
  if (linkedin !== undefined && !isLinkedInURL(linkedin)) {
    return { success: false, message: "LinkedIn URL is invalid" };
  }
  if (github !== undefined && !isGitHubURL(github)) {
    return { success: false, message: "GitHub URL is invalid" };
  }
  if (behance !== undefined && !isBehanceURL(behance)) {
    return { success: false, message: "Behance URL is invalid" };
  }
  if (dribble !== undefined && !isDribbleURL(dribble)) {
    return { success: false, message: "Dribble URL is invalid" };
  }
  return { success: true }; // Return a default success result for now
};

const isLinkedInURL = (url: string) =>
  /^(ftp|http|https):\/\/[^ "]+$/ &&
  /^(ftp|http|https):\/\/(www\.)?linkedin\.com\/.*$/.test(url);
const isGitHubURL = (url: string) =>
  /^(ftp|http|https):\/\/[^ "]+$/ &&
  /^(ftp|http|https):\/\/(www\.)?github\.com\/.*$/.test(url);
const isBehanceURL = (url: string) =>
  /^(ftp|http|https):\/\/[^ "]+$/ &&
  /^(ftp|http|https):\/\/(www\.)?behance\.net\/.*$/.test(url);
const isDribbleURL = (url: string) =>
  /^(ftp|http|https):\/\/[^ "]+$/ &&
  /^(ftp|http|https):\/\/(www\.)?dribble\.com\/.*$/.test(url);
