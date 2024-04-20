import { test , expect } from 'vitest';
import {transformer} from "../src/stringTransformer";

test('Transformer une chaîne vide', () => {
    const chaineVide = '';
    expect(transformer(chaineVide)).toBe('');
    expect(transformer(chaineVide)).not.toBeNull();
    expect(transformer(chaineVide)).not.toBeUndefined();
});

test('Transformer une chaîne en minuscules en majuscules', () => {
    const chaineMinuscules = 'hello world';
    expect(transformer(chaineMinuscules)).toEqual('HELLO WORLD');
});


test('Transformer une chaîne avec des caractères spéciaux', () => {
    const chaineSpeciale = 'éà$#@&!';
    expect(transformer(chaineSpeciale)).toBe('ÉÀ$#@&!'); // Utilisation de toBe pour vérifier l'égalité stricte
    expect(transformer(chaineSpeciale)).not.toBe('éà$#@&!'); // Utilisation de not.toBe pour vérifier l'inégalité stricte
});