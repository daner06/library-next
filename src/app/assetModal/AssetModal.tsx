import { useContext } from "react";
import MainContext from "../contexts/mainContext";
import {
  StyledCloseButtonIcon,
  StyledCloseButtonWrapper,
  StyledCloseIcon,
  StyledModal,
  StyledModalContent,
} from "./AssetModal.styles";
import ModalContent from "./AssetModalContent";

export default function AssetModal() {
  const { showAssetModal, setShowAssetModal } = useContext(MainContext);

  const closeModal = () => setShowAssetModal(false);

  return (
    <StyledModal isOpen={showAssetModal}>
      <StyledModalContent>
        <StyledCloseButtonWrapper>
          <StyledCloseButtonIcon onClick={closeModal}>
            <StyledCloseIcon />
          </StyledCloseButtonIcon>
        </StyledCloseButtonWrapper>
        <ModalContent />
      </StyledModalContent>
    </StyledModal>
  );
}
