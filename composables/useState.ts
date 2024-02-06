// 1.
export let useBtnListStore = () =>
  useState('btnListState', () => {
    const btnListState = ref<Array<{ label: number; color: string }>>([{ label: 1, color: '#000' }]);
    return btnListState;
  });

// 2.
// export const useBtnListStore = () => {
//   let btnListState = reactive([{ label: 1, color: '#000' }]);

//   const delItem = (label: number) => {
//     btnListState = btnListState.filter(
//       (item: { label: number }) => item.label !== label
//     );
//   };

//   const addItem = () => {
//     let label: number = btnListState.length + 1;
//     let color: string = btnListState.length % 2 === 0 ? '#000' : '#fff';
//     btnListState.push({ label, color });
//   };

//   const itemCount = computed(() => btnListState); // 嘗試用compute去同步狀態，但是沒有成功

// return [btnListState, delItem, addItem, itemCount]; //! 要依照順序引用
// };

// 3. how to use useState ,let useState is have same status
