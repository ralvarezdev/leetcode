class EventEmitter {
    #map
    #lastId

    constructor() {
        this.#map = new Map()
        this.#lastId = new Map()
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        const id = this.#map.has(eventName) ? this.#lastId.get(eventName) + 1 : 0

        if (id !== 0)
            this.#lastId.set(eventName, id)

        else {
            this.#lastId.set(eventName, id)
            this.#map.set(eventName, new Map())
        }

        this.#map.get(eventName).set(id, callback)

        return {
            unsubscribe: () => this.#map.get(eventName).delete(id)
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const results = new Array()
        const callbacks = this.#map.get(eventName)

        if (callbacks) {
            const iter = callbacks.values()
            let value

            while (value = iter.next().value)
                results.push(value(...args))
        }

        return results
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */