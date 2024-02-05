export const useBtnListStore = () => {
  let btnListState = ref([{ label: 1, color: '#000' }]);

  const delItem = (label: number) => {
    btnListState.value = btnListState.value.filter(
      (item: { label: number }) => item.label !== label
    );
  };

  const addItem = () => {
    let label: number = btnListState.value.length + 1;
    let color: string = btnListState.value.length % 2 === 0 ? '#000' : '#fff';
    btnListState.value.push({ label, color });
  };

  const itemCount = computed(() => btnListState.value);

  return [btnListState, delItem, addItem, itemCount];
};
