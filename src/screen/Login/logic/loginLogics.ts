export const checkIfRequiredFieldFilled = (
  ident: String,
  pw: String,
): boolean => {
  return ident.length > 0 && pw.length > 0;
};
