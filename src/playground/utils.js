console.log('utils.js is running');

export const square = (x) => x * x;
export const add = (a, b) => a + b;

// const subtract = (a, b) => a - b;
// export default subtract;
export default (a, b) => a - b;

// Exports - default export - named export
// it's not an object definition => punem referinte la ce vrem sa exportam

// Name export 
// export {square, add}; or export const add = (a, b) => a + b;

// Default export (-> poti avea doar un singur argument default in export default)
// export {square, add, subtract as default}; OR
// const subtract = (a, b) => a - b;
// export default subtract; OR
// export default (a, b) => a - b;
