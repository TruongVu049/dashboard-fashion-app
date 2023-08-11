import { createContext, useContext, useReducer } from "react";

const OptionsContext = createContext(null);

const OptionsDispatchContext = createContext(null);

export function OptionsProvider({ children }) {
  const [options, dispatch] = useReducer(optionsReducer, initialOptions);

  return (
    <OptionsContext.Provider value={options}>
      <OptionsDispatchContext.Provider value={dispatch}>
        {children}
      </OptionsDispatchContext.Provider>
    </OptionsContext.Provider>
  );
}

export function useOptions() {
  return useContext(OptionsContext);
}

export function useOptionsDispatch() {
  return useContext(OptionsDispatchContext);
}

function optionsReducer(options, action) {
  switch (action.type) {
    case "added": {
      return [
        ...options,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
    case "changed": {
      return options.map((t) => {
        if (t.id === action.option.id) {
          return action.option;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return options.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialOptions = [
  { id: 0, text: "red" },
  { id: 1, text: "blu" },
];
