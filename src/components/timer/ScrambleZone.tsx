import { useSettingsModalStore } from "@/store/SettingsModalStore";
import { useTimerStore } from "@/store/timerStore";
import translation from "@/translations/global.json";

export function ScrambleZone() {
  const { selectedCube, scramble } = useTimerStore();
  const { lang, settings } = useSettingsModalStore();
  return (
    <>
      <div
        className={`h-auto text-balance p-2 overflow-auto text-2xl sm:text-3xl font-semilight text-center rounded-md min-w-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md max-h-28 md:max-h-full ${
          settings.features.scrambleBackground.status
            ? "dark:bg-zinc-900 light:bg-neutral-200"
            : "bg-transparent"
        }`}
      >
        {selectedCube ? scramble : translation.timer["empty-scramble"][lang]}
      </div>
    </>
  );
}
