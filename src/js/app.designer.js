/** Class representing a app designer. */
export class AppDesigner {
  /**
 * Create a app designer.
 * @param {Object} controller - The controller logic bushiness.
 * @param {Function} controller.Increment - logic bushiness.
 * @param {Function} controller.Decrement - logic Decrement.
 * @param {Function} controller.IncrementIfOdd - logic IncrementIfOdd.
 * @param {Function} controller.IncrementAsync - logic IncrementAsync.
 */
  constructor(controller) {
    this.Controller = controller;
    this.#Initialize();
  }

  /**
 * Initialize designer.
 * @return {void}
 */
  #Initialize() {
    this.#LoadHTML()
    this.#AddEventHandler();
  }

  /**
   * Load HTML in properties.
   * @return {void}
   */
  #LoadHTML() {
    this.value = document.getElementById("value")
    this.Increment = document.getElementById("increment")
    this.Decrement = document.getElementById("decrement")
    this.IncrementIfOdd = document.getElementById("incrementIfOdd")
    this.IncrementAsync = document.getElementById("incrementAsync")
  }

  /**
   * Add event handler in controller.
   * @return {void}
   */
  #AddEventHandler() {
    this.Increment.addEventListener('click', this.Controller.Increment.bind(this.Controller))
    this.Decrement.addEventListener('click', this.Controller.Decrement.bind(this.Controller))
    this.IncrementIfOdd.addEventListener('click', this.Controller.IncrementIfOdd.bind(this.Controller))
    this.IncrementAsync.addEventListener('click', this.Controller.IncrementAsync.bind(this.Controller))
  }

  /**
 * Render designer.
 * @return {void}
 */
  Render(value) {
    this.value.innerText = value;
  }
}