import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/LeoNerd23.png" alt="LEoNerd23" />
      <AvatarFallback>LN23</AvatarFallback>
    </Avatar>
  )
}
