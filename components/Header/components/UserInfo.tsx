import { Avatar, AvatarFallback, AvatarImage } from "@/ui/components/avatar";

export default function UserInfo() {
  return (
    <Avatar className="size-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
