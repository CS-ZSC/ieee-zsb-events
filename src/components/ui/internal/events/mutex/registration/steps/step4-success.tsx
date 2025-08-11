import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  role: string;
  competitorType: string;
  teamName: string;
  competition: string;
  teamMemberId: string;
}

export default function Step4Success({
  role,
  competitorType,
  teamName,
  competition,
  teamMemberId,
}: Props) {
  return (
    <Box textAlign="center">
      <Heading size="lg" mb={4}>
        🎉 Registration Successful! 🎉
      </Heading>
      {role === "attendee" && (
        <Text>You are now registered as an attendee.</Text>
      )}
      {competitorType === "leader" && (
        <Text>
          Team &quot;{teamName}&quot; registered for {competition}.
          <br /> Share your generated Team Member ID with teammates.
        </Text>
      )}
      {competitorType === "member" && (
        <Text>
          You have successfully joined the team with ID: {teamMemberId}.
        </Text>
      )}
    </Box>
  );
}
