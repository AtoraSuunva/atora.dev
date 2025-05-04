/**
 * Helper function to delay functions (if necessary) that rely on the DOM being loaded
 * @param callback The function to call immediately if the DOM is already loaded, or on DOMContentLoaded
 */
export function onDOMLoaded(callback: () => void) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback)
  } else {
    callback()
  }
}
