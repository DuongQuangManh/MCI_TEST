export type ScreensName = keyof StackParamList;
export type StackParamList = {
  splash:undefined;
    login: {email?: string; password?: string};
    home: undefined;
    register:undefined;
    message: {
      onOk: () => void;
      title: string;
      message: string;
      msgType: 'error' | 'success';
    };
    loading: undefined;
    confirmMessage: {
      title: string;
      message: string;
      onOk: () => void;
      onCancel: () => void;
    };
    bottomNavigation:undefined
  };