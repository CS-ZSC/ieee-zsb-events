"use client";

import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Card from "@/components/ui/internal/card";
import Step1RoleSelection from "./step1-role-selection";
import Step2Attendee from "./step2-attendee";
import Step2CompetitorType from "./step2-competitor-type";
import Step3Attendee from "./step3-attendee";
import Step3Leader from "./step3-leader";
import Step3Member from "./step3-member";
import Step4Leader from "./step4-leader";
// import Step4Success from "./step4-success";

export default function RegistrationWizard() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [competitorType, setCompetitorType] = useState("");

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  console.log(step, role);

  return (
    <Flex
      flexDir="column"
      width="fit-content"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      color="neutral-1"
      mb={10}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Mutex Registration
      </Text>

      <Card padding={5}>
        {step === 1 && (
          <Step1RoleSelection setRole={setRole} handleNext={handleNext} />
        )}

        {step === 2 && role === "attendee" && (
          <Step2Attendee handleBack={handleBack} handleNext={handleNext} />
        )}

        {step === 2 && role === "competitor" && (
          <Step2CompetitorType
            setCompetitorType={setCompetitorType}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}

        {step === 3 && role === "attendee" && <Step3Attendee />}

        {step === 3 && role === "competitor" && competitorType === "leader" && (
          <Step3Leader
            handleBack={handleBack}
            handleNext={handleNext}
          />
        )}

        {step === 3 && role === "competitor" && competitorType === "member" && (
          <Step3Member handleBack={handleBack} />
        )}

        {step === 4 && role === "cometitor" && competitorType === "leader" && (
          <Step4Leader />
        )}

        {/* {step === 4 && (
          <Step4Success
            role={role}
            competitorType={competitorType}
            teamName={teamName}
            competition={competition}
            teamMemberId={teamMemberId}
          />
        )} */}
      </Card>
    </Flex>
  );
}
