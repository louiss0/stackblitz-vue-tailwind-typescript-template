

interface CustomEvent<T extends EventTarget> extends Event {
  target:T 
  currentTarget:T

}


export default CustomEvent