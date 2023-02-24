import React, { ReactNode, useState } from 'react';
import AppContext from '..';

function ContextProvide({ children }: { children: ReactNode }): JSX.Element {
  const [infoProject, setInfoProject] = useState({
    title: '',
    describe: '',
  })

  const contextValue = {
    infoProject,
    setInfoProject,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvide;