export let useBtnListStore = () =>
  useState('btnListState', () => {
    const btnListState = ref<Array<{ label: number; color: string }>>([
      { label: 1, color: '#000' },
    ]);
    return btnListState;
  });
