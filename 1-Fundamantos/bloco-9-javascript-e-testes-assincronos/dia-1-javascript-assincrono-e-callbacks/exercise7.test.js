const uppercase = require('./exercise7');

describe('Testa a função uppercase', () => {
    it('Retorna corretamente as letras em maiusculas', (done) => {
        
        const expected = 'FRASE TESTE';

        function callback(phrase) {
            expect(phrase).toBe(expected);
            done();
        };
        
        uppercase('Frase teste', callback);
    });
});