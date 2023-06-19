import React from 'react';
import {View} from 'react-native';
import SplashPage from './component/SplashPage';
import Slide1 from './component/Slide1';

const App = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return(
    <View style={{flex : 1}}>
    {showSplash ? (
      <SplashPage navigation={{replace: () => {} }}/>
    ): (
      <Slide1 />
    )}
    </View>
  )
};

export default App;