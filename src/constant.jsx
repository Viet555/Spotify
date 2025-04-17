export const genderOption = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];
export const roleIdOption = [
  { value: "User", label: "User" },
  { value: "Admin", label: "Admin" },
];
export const isPublicOption = [
  { value: "true", label: "True" },
  { value: "false", label: "False" },
];
export const genreOption = [
  { value: "Pop", label: "Pop" },
  { value: "Acoustic", label: "Acoustic" },
  { value: "Ballad", label: "Ballad" },
  { value: "Rock", label: "Rock" },
  { value: "EDM", label: "EDM" },
  { value: "Chil", label: "Chill" },
  { value: "Remix", label: "Remix" },
];

///
export const formatDuration = (seconds) => {
  if (!seconds) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};
