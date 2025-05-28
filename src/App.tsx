import { SequenceConnect } from "@0xsequence/connect";
import { config } from "./config";

import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import {
  Select,
  SequenceBoilerplate,
} from "@0xsequence-demos/boilerplate-design-system";
import View3D from "./components/3d/View3D";
import ItemViewer3D from "./components/3d/ItemViewer3D";
import DynamicItem from "./components/3d/DynamicItem";
import { useLocalStorage } from "@uidotdev/usehooks";

import { modelsList } from "./modelsList";
import CopyableText from "./components/CopyableText";
import { Toaster } from "sonner";
export default function Layout() {
  return (
    <SequenceConnect config={config}>
      <App />
      <Toaster />
    </SequenceConnect>
  );
}

function App() {
  const [modelName, setModelName] = useLocalStorage("modelName", "chest.glb");
  return (
    <SequenceBoilerplate
      githubUrl="https://github.com/0xsequence-demos/demo-adventure-assets"
      name="Demo Adventure Assets"
      description="Embedded Wallet"
      wagmi={{ useAccount, useDisconnect, useSwitchChain }}
    >
      <Select
        defaultValue={modelName}
        options={modelsList}
        onValueChange={(opt) => setModelName(opt)}
      ></Select>
      <CopyableText value={`${window.location.origin}/${modelName}`} />
      <View3D>
        <ItemViewer3D>
          <DynamicItem gltfUrl={`/${modelName}`} />
        </ItemViewer3D>
      </View3D>
    </SequenceBoilerplate>
  );
}
