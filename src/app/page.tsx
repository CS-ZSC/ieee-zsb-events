"use client"
import { Stack } from "@chakra-ui/react";
import Container from "@/components/ui/internal/container";
import PageTitle from "@/components/ui/internal/page-title";
import { EventCard } from "@/components/ui/internal/home/event-card";
import { eventsData } from "@/data/events";
import dynamic from "next/dynamic";
import { MoonLoader } from "react-spinners";

const Hero  = dynamic(() => import("@/components/ui/internal/hero"), {
  loading: () => <MoonLoader size={50} />,
  ssr: false
});


export default function Home() {
  return (
    <Stack align={"center"}>
      <Hero />
      <Container>
        <PageTitle title="Our events and competitions" />
        <Stack spaceY={4} mt={8} alignItems="center">
          {eventsData.map((event) => (
            <EventCard
              key={event.name}
              name={event.name}
              description={event.description}
              image={event.image}
              link={event.link}
            />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}
