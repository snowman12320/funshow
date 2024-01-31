export const useBtnListStore = () =>
  useState('btnListState', () => {
    const btnListState = reactive([{ label: 1, color: '#000' }]);
    return btnListState;
  });
