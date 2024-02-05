export const useBtnListStore = () => {
  let btnListState = reactive([{ label: 1, color: '#000' }]);

  const delItem = (label: number) => {
    btnListState = btnListState.filter(
      (item: { label: number }) => item.label !== label
    );
  };

  const addItem = () => {
    let label: number = btnListState.length + 1;
    let color: string = btnListState.length % 2 === 0 ? '#000' : '#fff';
    btnListState.push({ label, color });
  };

  const itemCount = computed(() => btnListState);

  return [btnListState, delItem, addItem, itemCount];
};
