import { StatusBar } from 'expo-status-bar';

import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import StackNavigator from "./StackNavigator";
import store from "./store";


export default function App() {
  return (
    <>
  
      <Provider store={store} className=' flex-1 bg-white '>
      <StatusBar style="auto" />
        <StackNavigator />
        
        <ModalPortal />
      </Provider>

    </>
  );
}

