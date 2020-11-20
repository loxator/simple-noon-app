const trimString = (str) =>
  str.length > 30 ? str.substring(0, 30) + "..." : str;

export default trimString;
