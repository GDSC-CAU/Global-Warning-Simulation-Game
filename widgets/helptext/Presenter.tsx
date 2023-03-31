import {
  Text,
  Button,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure, Divider
} from "@chakra-ui/react";

interface Props {}

const Presenter = ({}: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const statHelpText = "You can check current state of green house gases on your top left!";
    const timeHelpText = "You can check current year on your top right!";
    const itemHelpText = "You can check current items you activated on your bottom right!";
    return (
      <>
        <Button position={"fixed"} left={"5%"} right={"5%"} onClick={() => {onOpen()}}>
          Help!!!
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
          />
          <ModalContent>
            <ModalHeader>How To Play?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{statHelpText}</Text>
              <Divider/>
              <Text>{timeHelpText}</Text>
              <Divider/>
              <Text>{itemHelpText}</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Back To Game</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default Presenter