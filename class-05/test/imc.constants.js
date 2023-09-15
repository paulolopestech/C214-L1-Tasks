export const alturaCM = 180;
export const pesoKG = 80;
export const mockIMC = (pesoKG / (alturaCM / 100) ** 2).toFixed(2);

export const constants = {
  negativePesoInput: -80,
  negativeAlturaInput: -180,

  invalidInputs: {
    objectInput: { property: "" },
    arrayInput: [0],
    stringInput: "80",
    emptyStringInput: "",
  },

  mockValidValidateResponse: () => true,
  mockInvalidValidateResponse: () => false,
  mockCalculateIMC: () => mockIMC,
};
