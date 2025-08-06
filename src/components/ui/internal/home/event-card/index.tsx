"use client"
import { useWindowType } from "@/hooks/use-window-type";
import { EventCardMobile } from "./event-card-mobile";
import { EventCardDesktop } from "./event-card-desktop";

interface EventCardProps {
  name: string;
  link: string;
  image: string;
  description: string;
}
export function EventCard({ name, link, image, description }: EventCardProps) {
  const { isDesktop } = useWindowType();
  if (isDesktop) {
    return <EventCardDesktop name={name} link={link} image={image} description={description} />;
  } else {
    return <EventCardMobile name={name} link={link} image={image} description={description} />;
  }
}