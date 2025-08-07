import { Stack } from "@chakra-ui/react";
import { Hero } from "@/components/ui/internal/hero";
import Container from "@/components/ui/internal/container";
import PageTitle from "@/components/ui/internal/page-title";
import { EventCard } from "@/components/ui/internal/home/event-card";
import { events } from "@/data/events";

export default function Home() {
  return (
    <Stack align={"center"}>
      <Hero />
      <Container>
        <PageTitle title="Our events and competitions" />
        <Stack spaceY={4} mt={8} alignItems="center">
          {events.map((event) => (
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
