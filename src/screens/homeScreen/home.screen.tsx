import {useWindowDimensions} from 'react-native';
import React from 'react';
import {CTWrapperContainer} from '../../components';
import {colors, metrics} from '../../theme';

import {HomeHeader} from './components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {HomeTabs} from './tabs';
import CTVIcons from '../../components/common/CTVIcons';
const renderScene = SceneMap({
  1: HomeTabs,
  2: HomeTabs,
  3: HomeTabs,
  4: HomeTabs,
  5: HomeTabs,
  6: HomeTabs,
});
const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 1, title: 'First'},
    {key: 2, title: 'Second'},
    {key: 3, title: 'Second'},
    {key: 4, title: 'Second'},
    {key: 5, title: 'Second'},
    {key: 6, title: 'Second'},
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: colors.white}}
      renderIcon={({focused}) => (
        <CTVIcons
          iconType="Entypo"
          name="home"
          color={focused ? colors.white : colors.grey400}
        />
      )}
      style={{backgroundColor: colors.greyB, ...metrics.paddings.pT15}}
      renderLabel={() => <></>}
    />
  );

  return (
    <CTWrapperContainer
      viewContainer={{
        ...metrics.paddings.pL0,
        ...metrics.paddings.pR0,
        ...metrics.paddings.pB0,
      }}>
      <>
        <HomeHeader />

        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
        />
      </>
    </CTWrapperContainer>
  );
};

export default HomeScreen;
