import {useState, createContext, useContext} from 'react';

const ModalsContext = createContext();

const ModalsContextProvider = ({children}) => {
  const [addGroupMadalVsb, setAddGroupModalVsb] = useState(false);
  const toggleAddGroup = () => setAddGroupModalVsb(!addGroupMadalVsb);

  const [addNewMessageMadalVsb, setAddNewMessageGroupModalVsb] =
    useState(false);
  const toggleAddNewMessage = () =>
    setAddNewMessageGroupModalVsb(!addNewMessageMadalVsb);

  const [showImageModalVsb, setShowImageModalVsb] = useState(false);
  const toggleImageModal = () => setShowImageModalVsb(!showImageModalVsb);

  const [showMenuModalVsb, setShowMenuModalVsb] = useState(false);
  const toogleMenuModal = () => {
    setShowMenuModalVsb(!showMenuModalVsb);
  };

  const values = {
    addGroupMadalVsb,
    toggleAddGroup,
    addNewMessageMadalVsb,
    toggleAddNewMessage,
    showImageModalVsb,
    toggleImageModal,
    showMenuModalVsb,
    toogleMenuModal,
  };

  return (
    <ModalsContext.Provider value={values}>{children}</ModalsContext.Provider>
  );
};

const useModalsContext = () => useContext(ModalsContext);

export {ModalsContextProvider, useModalsContext};
