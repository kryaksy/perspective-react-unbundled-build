import perspective_viewer from '@finos/perspective-viewer';
import perspective from '@finos/perspective';

import * as SERVER_WASM from '@finos/perspective/dist/wasm/perspective-server.wasm';
import * as CLIENT_WASM from '@finos/perspective-viewer/dist/wasm/perspective-viewer.wasm';

await Promise.all([
  perspective.init_server(SERVER_WASM),
  perspective_viewer.init_client(CLIENT_WASM),
]);

export function App() {
  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

export default App;
