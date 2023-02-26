import { createContext } from 'react';

export const INITIAL_STATE = {}

const AppContext = createContext({ state: INITIAL_STATE });

export default AppContext;