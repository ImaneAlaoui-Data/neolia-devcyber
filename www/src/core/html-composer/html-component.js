export class HTMLComponent {
    #_parent! = null
    #_componentType = ''
    #_content = ''
    #_args = []

    constructor(componentType, ...args) {
        this.#_componentType = componentType
        this.#_args = args
    }
    
    set parent(parent = null) {
        this.#_parent = parent
    }

    get parent() {
        return this.#_parent
    }

    set content(content) {
        this.#_content = content;
    }

    set componentType(type) {
        this.#_componentType = type;
    }

    set args(attributes) {
        this.#_args.push(attributes)
    }

    addComponent(component) {}

    build() {
        throw new Error(`Method have to be implemented in children class`)
    }
}
