import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        className="text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M50 5L10 30V70L50 95L90 70V30L50 5ZM50 15L80 32.5V67.5L50 85L20 67.5V32.5L50 15Z M45 35H55V65H45V35Z M25 40H35V60H25V40Z M65 40H75V60H65V40Z"
        ></path>
      </svg>
      <span className="text-xl font-bold text-foreground">OneArch</span>
    </div>
  );
}
