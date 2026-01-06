"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { avatarFromString } from "@/lib/gradients";

type Props = {
  seed: string;
  size?: number;
  name?: string;
};

export function GradientAvatar({ seed, size = 40, name }: Props) {
  const svgUrl = avatarFromString(seed, size * 3); // render bigger for crispness

  const initials = name
    ? name
        .split(" ")
        .map(word => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "U";

  return (
    <Avatar
      className="border border-white/10 shadow-sm"
      style={{ width: size, height: size }}
    >
      <AvatarImage src={svgUrl} alt={name || seed} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
