import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {HomeCard} from '../../components';
import {data} from '../../data';
import {useSharedValue} from 'react-native-reanimated';
import {colors} from '../../../../theme';

const HomeTabs = () => {
  const [newData, setNewData] = useState([...data, ...data]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useSharedValue(0);
  const MAX = data.length;
  return (
    <>
      <View style={styles.cardContainer}>
        {newData.map((item, index) => {
          if (index > currentIndex + MAX || index < currentIndex) {
            return null;
          }
          return (
            <HomeCard
              newData={newData}
              setNewData={setNewData}
              maxVisibleItems={MAX}
              item={item}
              index={index}
              dataLength={newData.length}
              animatedValue={animatedValue}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              key={index}
            />
          );
        })}
      </View>
    </>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greyB,
  },
});
