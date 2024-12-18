export function generateRandomPakistaniNumber() {
    const prefixes = ['030', '031', '032', '033', '034', '035', '036', '037', '038', '039'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomDigits = Math.floor(Math.random() * 1000000000); // Generate a 7-digit number
    return prefix + randomDigits.toString().padStart(7, '0'); // Ensure 7 digits after the prefix
}
