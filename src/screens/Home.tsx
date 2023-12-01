import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  Card,
  CheckBox,
  Datepicker,
  Icon,
  Input,
  Layout,
  List,
  ListItem,
  Modal,
  Text,
} from '@ui-kitten/components';
import {WINDOW_HEIGHT, WINDOW_WIDTH, helper, theme} from '@utils';
import {Job} from '@items';
import {useAppDispatch, useAppSelector} from '@redux/store';
import {setJob} from '@redux/todoSlice';

const Home = () => {
  const [visible, setVisible] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [state, setState] = useState({
    title: '',
    description: '',
  });

  const id = useAppSelector(state => state.userSlice.user.id);
  const countJob = useAppSelector(state => state.todoSlice.countJob);
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => {
    return state.todoSlice.data.filter(job => job.id_user === id);
  });

  const handlerAdd = () => {
    dispatch(
      setJob({
        id: countJob,
        ...state,
        duration: date.toLocaleDateString(),
        isDone: false,
        id_user: id,
      }),
    );
    setVisible(false);
    helper.showSuccessMsg('Thêm công việc thành công');
    setState({title: '', description: ''});
  };
  return (
    <Layout style={styles.container}>
      <List
        data={data}
        renderItem={({item}) => <Job item={item} />}
        ListEmptyComponent={() => (
          <Layout
            style={{
              width: WINDOW_WIDTH,
              height: WINDOW_HEIGHT,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Chưa có công việc</Text>
          </Layout>
        )}
      />

      <TouchableOpacity style={styles.btnAdd} onPress={() => setVisible(true)}>
        <Icon
          name="plus-outline"
          width={22}
          height={22}
          fill={theme['color-basic']}
        />
      </TouchableOpacity>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Layout style={{width: WINDOW_WIDTH - 100}}>
            <Text category="h5" style={{alignSelf: 'center'}}>
              Thêm công việc
            </Text>
            <Input
              size="medium"
              placeholder="Tiêu đề"
              style={{marginTop: 20}}
              value={state.title}
              onChangeText={title => setState(pre => ({...pre, title}))}
            />
            <Input
              style={{marginTop: 10}}
              multiline={true}
              placeholder="Mô tả"
              textStyle={{minHeight: 64}}
              value={state.description}
              onChangeText={description =>
                setState(pre => ({...pre, description}))
              }
            />
            <Text style={{marginTop: 10, paddingStart: 5}}>Hạn đến:</Text>
            <Datepicker
              style={{marginTop: 5}}
              date={date}
              onSelect={nextDate => setDate(nextDate)}
            />
            <Button
              onPress={handlerAdd}
              style={{marginTop: 10, backgroundColor: theme['color-basic']}}
              disabled={!state.title || !state.description}>
              Thêm
            </Button>
          </Layout>
        </Card>
      </Modal>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnAdd: {
    width: 50,
    height: 50,
    backgroundColor: theme['color-backgroud'],
    borderRadius: 180,
    position: 'absolute',
    bottom: 80,
    end: 20,
    borderColor: theme['color-basic'],
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
