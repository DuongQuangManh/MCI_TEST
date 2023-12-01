import { getCurrentRouter, goBack, navigate } from "@navigations";

export const helper = {
    showErrorMsg: (
        message: string,
        onPress: () => void = goBack,
        title: string = 'Message',
      ) => {
        helper.hideLoading();
        navigate('message', {message, msgType: 'error', title, onOk: onPress});
      },
      showSuccessMsg: (
        message: string,
        onPress: () => void = goBack,
        title: string = 'Message',
      ) => {
        navigate('message', {message, msgType: 'success', title, onOk: onPress});
      },
      showConfirmMsg: (
        message: string,
        onOk: () => void = goBack,
        onCancel: () => void = goBack,
        title: string = 'Message',
      ) => {
        navigate('confirmMessage', {message, onOk, onCancel, title});
      },
      showLoading: () => {
        navigate('loading');
      },
      hideLoading: () => {
        if (getCurrentRouter() == 'loading') goBack();
      },
}