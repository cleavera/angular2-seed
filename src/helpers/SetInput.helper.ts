export function $setInput(model: any, property: string, value: any) {
  model[property] = null;

  window.setTimeout(() => {
    model[property] = value;
  }, 50);
}
