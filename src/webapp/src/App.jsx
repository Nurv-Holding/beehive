import { useEffect, useState } from "react";
import * as React from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./appRoutes";

function App() {
  const [screen, setScreen] = useState(null)

  useEffect(() => {
    const getScreen = () => {
      return window.innerWidth
    }
  
    const handleScreen = () => {
      setScreen(getScreen())
    }

    handleScreen()
    window.addEventListener('resize', handleScreen);
    return () => {
      window.removeEventListener('resize', handleScreen);
    };
  }, [])

  return (
    <>

      {
        screen < 1024 ?
          <main className="main-login w-full">
            <div className="flex flex-col items-center justify-center bg-white rounded-md shadow-md p-4 gap-4 w-[80%] md:w-2/4">
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/no-verify-phone-number-icon.svg"
                alt="Incompatible Device"
                className="w-20 aspect-square"
              />

              <h1 className="text-2xl text-red-500 font-bold text-center">
                Este dispositivo não é compatível
                </h1>
            </div>
          </main>

          :

        <HashRouter>
          <AppRoutes />
      </HashRouter>
      }

    </>
  );
}

export default App;
