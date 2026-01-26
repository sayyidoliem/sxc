"use client";

import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/hooks/use-gemini-chat";

export default function MessageBubble({ role, content }: ChatMessage) {
  const isUser = role === "user";

  return (
    <div
      className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm",
          isUser
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-gray-100 text-gray-900 rounded-bl-md",
        )}
      >
        {content}
      </div>
    </div>
  );
}
