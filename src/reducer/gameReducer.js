import * as React from "react";
import { createContext, useReducer, useContext } from "react";
import prize1 from "../assets/images/prizes/beauregard.png";
import prize2 from "../assets/images/prizes/helen.png";
import prize3 from "../assets/images/prizes/matthew.png";
import prize4 from "../assets/images/prizes/mr-sam.png";
import prize5 from "../assets/images/prizes/sohan.png";
import prize6 from "../assets/images/prizes/teddy.png";

export const prizes = [
  {
    prizeName: "beauregard",
    prizeImage: prize1,
    prizeApiUrl: "www.penhaligons.com",
  },
  {
    prizeName: "helen",
    prizeImage: prize2,
    prizeApiUrl: "www.penhaligons.com",
  },
  {
    prizeName: "matthew",
    prizeImage: prize3,
    prizeApiUrl: "www.penhaligons.com",
  },
  {
    prizeName: "mr sam",
    prizeImage: prize4,
    prizeApiUrl: "www.penhaligons.com",
  },
  {
    prizeName: "sohan",
    prizeImage: prize5,
    prizeApiUrl: "www.penhaligons.com",
  },
  {
    prizeName: "teddy",
    prizeImage: prize6,
    prizeApiUrl: "www.penhaligons.com",
  },
];

let initialGameContext = {
  firstPrize: "",
  secondPrize: "",
  currentPrize: null,
};

const GameStateContext = createContext(initialGameContext);
const GameDispatchContext = createContext();

const gameReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PRIZE": {
      return {
        ...state,
        currentPrize: action.prize,
      };
    }
    case "UPDATE_BACKUP_PRIZE": {
      return {
        ...state,
        previousPrize: action.prize,
      };
    }
    case "UPDATE_FIRST_PRIZE": {
      return {
        ...state,
        firstPrize: action.first,
      };
    }
    case "UPDATE_SECOND_PRIZE": {
      return {
        ...state,
        secondPrize: action.second,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameContext);

  return (
    <GameDispatchContext.Provider value={dispatch}>
      <GameStateContext.Provider value={state}>
        {children}
      </GameStateContext.Provider>
    </GameDispatchContext.Provider>
  );
};

export const useGameStateContext = () => useContext(GameStateContext);
export const useGameDispatchContext = () => useContext(GameDispatchContext);