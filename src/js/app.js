
import { AppDesigner } from "./app.designer.js";
import { AppStore } from "./app.store.js";

/** Class representing a app controller. */
export class App {
  /**
  * Create a app designer.
  * @return {App}
  */
  constructor() {
    this.Designer = null;
    this.Store = null;
    this.#Initialize();
  }

  /**
  * Initialize app controller.
  * @return {void}
  */
  #Initialize() {
    this.#LoadStore();
    this.#LoadDesigner();
  }

  /**
  * Load store redux.
  * @return {void}
  */
  #LoadStore() {
    this.Store = new AppStore();
    this.Store.Data.subscribe(this.#Render.bind(this))
  }

  /**
  * Load designer.
  * @return {void}
  */
  #LoadDesigner() {
    this.Designer = new AppDesigner(this);
    this.#Render();
  }

  /**
  * Render app designer.
  * @return {void}
  */
  #Render() {
    this.Designer.Render(this.Store.Data.getState().toString())
  }

  /**
  * Logic Increment.
  * @return {void}
  */
  Increment() {
    try {
      this.Store.Data.dispatch({ type: this.Store.EnumActionType.Increment._String })
    } catch (error) {
      console.error("app.js/Increment =>", error)
    }
  }

  /**
  * Logic Decrement.
  * @return {void}
  */
  Decrement() {
    try {
      this.Store.Data.dispatch({ type: this.Store.EnumActionType.Decrement._String })
    } catch (error) {
      console.error("app.js/Decrement =>", error)
    }
  }

  /**
  * Logic IncrementIfOdd.
  * @return {void}
  */
  IncrementIfOdd() {
    try {
      this.Store.Data.getState() % 2 !== 0 && this.Store.Data.dispatch({ type: this.Store.EnumActionType.Increment._String })
    } catch (error) {
      console.error("app.js/IncrementIfOdd =>", error)
    }
  }

  /**
  * Logic IncrementAsync.
  * @return {void}
  */
  IncrementAsync() {
    try {
      setTimeout(() => this.Increment(), 1000)
    } catch (error) {
      console.error("app.js/IncrementAsync =>", error)
    }
  }
}