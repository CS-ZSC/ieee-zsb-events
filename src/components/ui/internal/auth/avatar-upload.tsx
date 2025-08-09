import React, { useState } from 'react';
import { Box, FileUpload, Image, Stack, Text, VStack, FormControl, FormErrorMessage, FormLabel, Field, InputElementProps } from '@chakra-ui/react';
import { IoCameraOutline } from 'react-icons/io5';

interface AvatarUploadProps extends InputElementProps {
  value?: File | null;
  isRequired?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  label?: string;
  setFile?: (file: File) => void;
}

const AvatarUpload = ({
  value,
  isRequired,
  isInvalid,
  errorMessage,
  setFile,
  label,
  ...props
}: AvatarUploadProps) => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleProfileImageChange = (file: File) => {
    console.log("Selected file:", file);

    if (file) {
    } else {
      setAvatarPreview(null);
    }
  };
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0] && setFile) {
      const reader = new FileReader();
      const file = e.target.files[0];
      setFile(file);
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      return;
    }
    setAvatarPreview(null);
  }




  return (
    <Field.Root invalid={isInvalid}>
      <FileUpload.Root
        maxFiles={1}
        multiple={false}
        accept={["image/jpg", "image/jpeg", "image/png"]}
      >
        <VStack gap={4} width="full" alignItems="center">
          <FileUpload.HiddenInput
            onChange={handleOnChange}
            required={isRequired}
          />
          <FileUpload.Trigger>
            <Box
              width="150px"
              height="150px"
              borderRadius="full"
              borderWidth="2px"
              borderStyle="dashed"
              borderColor={isInvalid ? "red.500" : "inherit"}
              position="relative"
              overflow="hidden"
            >
              {value !== null ? (
                <Stack position="relative" width="full" height="full" align="center" justify="center">
                  <Image
                    src={avatarPreview}
                    alt="Avatar preview"
                    width="full"
                    height="full"
                    objectFit="cover"
                  />
                  <Box position={"absolute"}>
                    <IoCameraOutline size={44} color='white' opacity={0.4} />
                  </Box>
                </Stack>
              ) : (
                <VStack
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  spacing={2}
                  textAlign="center"
                >
                  <Text fontSize="xs" textTransform={"capitalize"} color="gray.500">
                    Click or drag your avatar
                  </Text>
                </VStack>
              )}
            </Box>
          </FileUpload.Trigger>
          {label && <FileUpload.Label>{label}</FileUpload.Label>}
          <FileUpload.List showSize clearable />
          {errorMessage && <Field.ErrorText color="red.400">{errorMessage}</Field.ErrorText>}
        </VStack>
      </FileUpload.Root>
    </Field.Root>
  );
};

export default AvatarUpload;