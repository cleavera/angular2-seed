export function $snakeCase(input) {
  return input.replace(/[A-Z]/g, '-$&').toLowerCase();
}
