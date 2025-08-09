import { Box, Button, FileUpload as ChakraFileUpload, Text, Stack, Field, HStack, IconButton } from "@chakra-ui/react"
import { HiUpload, HiX } from "react-icons/hi"
import { HiOutlineDocument } from "react-icons/hi2"
import { useRef, useState } from "react"

const shortenFileName = (fileName: string, maxLength: number = 5): string => {
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

export default function FileUpload({
    label,
    setFile,
    isRequired,
    isInvalid,
    errorMessage,
}: {
    label: string,
    setFile?: (file: File | null) => void,
    isRequired?: boolean,
    isInvalid?: boolean,
    errorMessage?: string,
}) {
    const [fileInfo, setFileInfo] = useState<{ name: string; size: number } | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0] && setFile) {
            const file = e.target.files[0];
            setFile(file);
            setFileInfo({ name: file.name, size: file.size });
        }
    }

    const clearFile = () => {
        setFileInfo(null);
        if (setFile) setFile(null);
        if (ref && ref.current)
            ref.current.value = "";
    };

    return (
        <Field.Root invalid={isInvalid}>
            <ChakraFileUpload.Root
                accept={["image/png", "image/jpeg"]}
                w="fit-content"
                alignItems="center"
                justifyContent={"center"}
                maxFiles={1}
            >
                <Stack gap={2} align="center">
                    <ChakraFileUpload.HiddenInput onChange={handleOnChange} required={isRequired} multiple={false} ref={ref} />
                    <ChakraFileUpload.Trigger asChild>
                        {!fileInfo ? <Button
                            variant="outline"
                            borderColor={isInvalid ? "red.500" : "primary-3"}
                            bg="primary-12"
                            mt={2}
                            color="natural-2"
                            size="sm"
                            w="full"
                            borderRadius={"md"}
                        >
                            <HiUpload /> {label} {isRequired && "*"}
                        </Button> : <div />
                        }
                    </ChakraFileUpload.Trigger>

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
                                <Button
                                    size="xs"
                                    variant="outline"
                                    w="full"
                                    onClick={() => ref?.current?.click()}
                                >
                                    Replace File <HiUpload />
                                </Button>
                            </Stack>
                        </Box>
                    )}
                </Stack>
                {errorMessage && <Field.ErrorText color="red.400">{errorMessage}</Field.ErrorText>}
            </ChakraFileUpload.Root>
        </Field.Root>
    );
}
