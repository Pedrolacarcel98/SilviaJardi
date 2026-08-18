const fs = require('fs');
const content = fs.readFileSync('./src/data/mockProducts.ts', 'utf8');

// Find the start of the array
const startIndex = content.indexOf('export const mockProducts: Product[] = [');
const startArray = content.indexOf('[', startIndex);

// Find the end of the array (before the next export function)
const endIndex = content.indexOf('export function getProductsByCategory');

if (startIndex > -1 && endIndex > -1) {
    let arrayStr = content.substring(startArray, endIndex).trim();
    // Remove the trailing semicolon
    if (arrayStr.endsWith(';')) {
        arrayStr = arrayStr.slice(0, -1);
    }
    
    // Evaluate the array string to a JS object
    // We need to wrap it in a function to avoid syntax errors and eval safely
    try {
        const arr = eval(`(${arrayStr})`);
        fs.writeFileSync('./src/data/products.json', JSON.stringify(arr, null, 2));
        console.log('products.json created successfully');
    } catch (e) {
        console.error('Failed to parse array:', e);
    }
} else {
    console.log('Could not find array boundaries');
}
