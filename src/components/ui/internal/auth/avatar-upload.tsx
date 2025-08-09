import React, { useRef, useState } from 'react';
import { Box, FileUpload, Image, Stack, Text, VStack, Field, InputElementProps, IconButton, HStack } from '@chakra-ui/react';
import { IoCameraOutline } from 'react-icons/io5';
import { HiOutlineDocument, HiX } from 'react-icons/hi';

interface AvatarUploadProps extends InputElementProps {
  value?: File | null;
  isRequired?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  label?: string;
  setFile?: (file: File | null) => void;
}


const shortenFileName = (fileName: string, maxLength: number = 15): string => {
  if (!fileName || fileName.length <= maxLength) return fileName;
  const ext = fileName.split('.').pop();
  const nameWithoutExt = fileName.split('.').slice(0, -1).join('.');
  return `${nameWithoutExt.slice(0, maxLength)}...${ext ? `.${ext}` : ''}`;
};

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};


const AvatarUpload = ({
  value,
  isRequired,
  isInvalid,
  errorMessage,
  setFile,
  label,
}: AvatarUploadProps) => {
  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(undefined);
  const ref = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState<{ name: string; size: number } | null>(null);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0] && setFile) {
      const reader = new FileReader();
      const file = e.target.files[0];
      setFile(file);
      setFileInfo({ name: file.name, size: file.size });
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      return;
    }
    setAvatarPreview(undefined);
  }

  const clearFile = () => {
    setFileInfo(null);
    if (setFile) setFile(null);
    if (ref && ref.current)
      ref.current.value = "";

    setAvatarPreview(undefined);
  };

  return (
    <Field.Root invalid={isInvalid}>
      <FileUpload.Root
        maxFiles={1}
        accept={["image/jpg", "image/jpeg", "image/png"]}
      >
        <VStack gap={4} width="full" alignItems="center">
          <FileUpload.HiddenInput
            onChange={handleOnChange}
            multiple={false}
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
                  p={2}
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
          {fileInfo && (
            <Box
              p={3}
              borderRadius="md"
              border="1px solid"
              borderColor="primary-3"
              bg="primary-12"
              w="full"
              maxW="250px"
            >
              <Stack>
                <HStack justify="space-between" align="center">
                  <HStack gap={3}>
                    <HiOutlineDocument size={24} />
                    <Stack gap={0}>
                      <Text fontSize="sm" color="neutral-1">
                        {shortenFileName(fileInfo.name)}
                      </Text>
                      <Text fontSize="xs" color="neutral-3">
                        {formatFileSize(fileInfo.size)}
                      </Text>
                    </Stack>
                  </HStack>
                  <IconButton
                    aria-label="Clear file"
                    size="xs"
                    variant="ghost"
                    colorScheme="red"
                    onClick={clearFile}
                  >
                    <HiX />
                  </IconButton>
                </HStack>
              </Stack>
            </Box>
          )}
          {errorMessage && <Field.ErrorText color="red.400">{errorMessage}</Field.ErrorText>}
        </VStack>
      </FileUpload.Root>
    </Field.Root>
  );
};

export default AvatarUpload;