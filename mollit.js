// Example usage
let source = "Hello, world!";

if (typeof source === 'string' && typeof document !== 'undefined') {
    // Manipulate the DOM using the document object
    document.getElementById('output').innerText = source;
}
