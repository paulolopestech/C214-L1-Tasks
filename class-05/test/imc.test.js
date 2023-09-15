import { expect } from 'chai';
import { IMC, calculateIMC, validateInputs } from '../src/imc.js';


const pesoKG = 80;
const alturaCM = 180;
const negativePesoInput = -80;
const negativeAlturaInput = -180;
const mockIMC = (pesoKG / ((alturaCM/100)**2)).toFixed(2);

const invalidInputs = {
    objectInput:{property: ''},
    arrayInput: [0],
    stringInput: '80',
    emptyStringInput: '',
}

const mockValidValidateResponse = () => true;
const mockInvalidValidateResponse = () => false;
const mockCalculateIMC = () => mockIMC;

describe('TESTING - VALIDATE INPUTS', () => {
  it('Should return true if input is valid', () => {
    const response = validateInputs(pesoKG, alturaCM);
    expect(response).to.equal(true);
  });

  it('Should return false if input is not a number', () => {
    const response = validateInputs(invalidInputs.stringInput, invalidInputs.objectInput);
    expect(response).to.equal(false);
  });

  it('Should return false if input is a negative number', () => {
    const response = validateInputs(negativePesoInput, negativeAlturaInput);
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
        const measures = { pesoKG, alturaCM }
        const response = IMC.handle(mockValidValidateResponse, mockCalculateIMC, measures);
        expect(response).to.equal(mockIMC);
    });

    it('Should return ERROR when input is invalid', () => {
        const measures = { negativePesoInput, negativeAlturaInput }
        const response = IMC.handle(mockInvalidValidateResponse, mockCalculateIMC, measures);
        expect(response.error).to.equal('INVALID INPUTS');
    });
});