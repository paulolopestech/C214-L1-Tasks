import { expect } from 'chai';
import { IMC, calculateIMC, validateInputs } from '../src/imc.js';
import { alturaCM, mockIMC, pesoKG, constants } from './imc.constants.js';

describe('TESTING - VALIDATE INPUTS', () => {
  it('Should return true if input is valid', () => {
    const response = validateInputs(pesoKG, alturaCM);
    expect(response).to.equal(true);
  });

  it('Should return false if input is not a number', () => {
    const response = validateInputs(constants.stringInput, constants.invalidInputs.objectInput);
    expect(response).to.equal(false);
  });

  it('Should return false if input is a negative number', () => {
    const response = validateInputs(constants.negativePesoInput, constants.negativeAlturaInput);
    expect(response).to.equal(false);
  });

  it('Should return false if input is a falsy value', () => {
    const response0 = validateInputs(0, '');
    const response1 = validateInputs(false, null);
    const response2 = validateInputs(undefined, NaN);
    expect(response0).to.equal(false);
    expect(response1).to.equal(false);
    expect(response2).to.equal(false);
  });
});

describe('TESTING - CALCULATE IMC', () => {
    it('Should calculate expected IMC', () => {
        const response = calculateIMC(pesoKG, alturaCM);
        expect(response).to.equal(mockIMC);
    });
});

describe('TESTING - HANDLE', () => {
    it('Should return IMC when input is valid', () => {
        const measures = { pesoKG, alturaCM };
        const validate = constants.mockValidValidateResponse;
        const calculate = constants.mockCalculateIMC;
        const response = IMC.handle(validate, calculate, measures);
        expect(response).to.equal(mockIMC);
    });

    it('Should return ERROR when input is invalid', () => {
        const measures = { 
          pesoKG: constants.negativePesoInput, 
          alturaCM: constants.negativeAlturaInput
        }
        const validate = constants.mockInvalidValidateResponse;
        const calculate = constants.mockCalculateIMC;
        const response = IMC.handle(validate, calculate, measures);
        expect(response.error).to.equal('INVALID INPUTS');
    });
});