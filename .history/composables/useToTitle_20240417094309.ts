export const usetoTitleCase = () => {
  function toTitleCase(str: any): string {
    return str.replace(/\w\S*/g, function (txt: any) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};