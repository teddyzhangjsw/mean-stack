const toAlphaOrder = items => items.split('').sort().join('');

console.log(`The output is: ${toAlphaOrder('supercalifragilisticexpialidocious')}`);