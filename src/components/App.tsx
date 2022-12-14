import { ReactLogo } from "@assets";
import "./App.css";
import Card from "@components/card";
import { URLWrapper } from "@commonComponents";
import { ViteLogo } from "@assets";

const App = () => {
  return (
    <div className="App">
      <div>
        <URLWrapper href="https://vitejs.dev">
          <ViteLogo className="logo" width={144} height={144} />
        </URLWrapper>
        <URLWrapper href="https://reactjs.org">
          <ReactLogo width={144} height={156} className="react logo" />
        </URLWrapper>
      </div>
      <h1>Vite + React</h1>
      <Card />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
