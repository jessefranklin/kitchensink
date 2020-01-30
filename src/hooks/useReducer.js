function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);
  
    function dispatch(action) {
      const nextState = reducer(state, action);
      setState(nextState);
    }
  
    return [state, dispatch];
  }


  // function Todos() {
  //   const [todos, dispatch] = useReducer(todosReducer, []);
  
  //   function handleAddClick(text) {
  //     dispatch({ type: 'add', text });
  //   }
  
  //   // ...
  // }

  function Counter() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
    return <h1>Now: {count}, before: {prevCount}</h1>;
  }
  
  // Previous state
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

//use memo
  function Parent({ a, b }) {
    // Only re-rendered if `a` changes:
    const child1 = useMemo(() => <Child1 a={a} />, [a]);
    // Only re-rendered if `b` changes:
    const child2 = useMemo(() => <Child2 b={b} />, [b]);
    return (
      <>
        {child1}
        {child2}
      </>
    )
  }

  <input
  type="text"
  aria-label={labelText}
  aria-required="true"
  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>