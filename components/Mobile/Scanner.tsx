import { Box, Center, Flex, IconButton, useBoolean, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { MdQrCodeScanner } from 'react-icons/md';
import { QrReader } from 'react-qr-reader';

const Scanner = () => {
  const [scan, setScan] = useBoolean(false);
  const [result, setResult] = useState('');
  const ref = useRef<any>(null);

  const handleResult = (res: any) => {
    if (res?.text) {
      setResult(res.text);
    }
  };

  return (
    <Center>
      {scan ? (
        <Box textAlign="center">
          <Box
            as={QrReader}
            ref={ref}
            onResult={handleResult}
            width="257px"
            height="257px"
            constraints={{ facingMode: 'user' }}
          />
          <Button onClick={setScan.off}>Stop Scanning</Button>
        </Box>
      ) : (
        <Flex
          position="relative"
          width="257px"
          height="257px"
          background="gradient.card"
          justifyContent="center"
          alignItems="center"
          border="1px"
          borderColor="brand.blue"
          rounded="lg"
        >
          <Flex
            position="absolute"
            width="60%"
            height="60%"
            borderRadius="full"
            zIndex={2}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              size="lg"
              icon={<MdQrCodeScanner />}
              fontSize="2xl"
              aria-label="Scan"
              onClick={setScan.on}
            />
          </Flex>
        </Flex>
      )}
    </Center>
  );
};

export default Scanner;
