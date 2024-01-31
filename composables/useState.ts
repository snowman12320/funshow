export const useSelectedListStore = () =>
  useState('selectedListStore', () => {
    const selectedListStore = reactive([{ label: 1, color: '#000' }]);
    return selectedListStore;
  });
