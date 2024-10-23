/**
 * Sanitize input to prevent XSS attacks.
 * @param input - The input string to sanitize.
 * @returns The sanitized string.
 */
export const sanitizeInput = (input: string) => {
  const sanitized = input.replace(/[^a-zA-Z0-9-_]/g, '');
  return sanitized;
}

/**
 * Prevent reentrancy attack by disabling buttons after the action is initiated.
 * @param button - The button element to disable.
 */
export const disableButton = (button: HTMLButtonElement) => {
  if (button) {
    button.disabled = true;
    button.innerText = "Processing...";
  }
}

/**
 * Re-enable the button after the action is completed.
 * @param button - The button element to enable.
 */
export const enableButton = (button: HTMLButtonElement) => {
  if (button) {
    button.disabled = false;
    button.innerText = "Submit";
  }
}