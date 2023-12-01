import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CheckBox, ListItem} from '@ui-kitten/components';
import {useAppDispatch} from '@redux/store';
import {setDoneJob} from '@redux/todoSlice';
interface itemProps {
  item?: any;
}
const Job: React.FC<itemProps> = ({item}) => {
  const dispatch = useAppDispatch();
  return (
    <ListItem
      style={{marginTop: 10}}
      title={item.title}
      description={`Mô tả: ${item.description}.\nHết hạn: ${item.duration}`}
      accessoryRight={() => {
        const [done, setDone] = useState(item.isDone);
        const handlerDone = () => {
          dispatch(setDoneJob(item.id));
          setDone(!done);
        };
        return (
          <CheckBox
            status="warning"
            checked={done}
            onChange={handlerDone}
            disabled={done}>
            Đã hoàn thành
          </CheckBox>
        );
      }}
    />
  );
};

export default Job;

const styles = StyleSheet.create({});
