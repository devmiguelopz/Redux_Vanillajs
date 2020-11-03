/** Class representing a app store redux. */
export class AppStore {
  /**
  * Create a app designer.
  * @return {AppStore}
  */
  constructor() {
    this.Data = null;
    this.EnumActionType = {
      Increment: {
        _String: "INCREMENT", _Int: 1
      },
      Decrement: {
        _String: "DECREMENT", _Int: 2
      },

    }
    this.#Initialize();
  }

  /**
  * Initialize designer.
  * @return {void}
  */
  #Initialize() {
    this.#Create();
  }

  /**
  * Create store redux.
  * @return {void}
  */
  #Create() {
    this.Data = Redux.createStore(this.#ReducerCounter.bind(this));
  }

  /**
  * Functionality reducer counter.
  * @return {void}
  */
  #ReducerCounter(state = 0, action) {
    switch (action.type) {
      case this.EnumActionType.Increment._String:
        return state + 1
      case this.EnumActionType.Decrement._String:
        return state - 1
      default:
        return state
    }
  }

}