export function validateInputs(pesoKG, alturaCM) {
    if(isNaN(pesoKG) || isNaN(alturaCM)) return false;
    if(!pesoKG || !alturaCM) return false;
    if(pesoKG < 0 || alturaCM < 0) return false;
    return true;
}

export function calculateIMC(pesoKG, alturaCM) {
    const alturaM = alturaCM/100;
    return (pesoKG / (alturaM**2)).toFixed(2);
}

export class IMC {
    static handle(validateInputs, calculateIMC, measures) {
        const { pesoKG, alturaCM } = measures;
        return validateInputs(pesoKG, alturaCM) ? calculateIMC(pesoKG, alturaCM) : {error: 'INVALID INPUTS'};
    }
}