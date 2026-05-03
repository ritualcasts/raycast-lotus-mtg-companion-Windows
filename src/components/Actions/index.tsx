import { Action, Icon, KeyboardShortcut, LaunchType, launchCommand } from "@raycast/api";
import { ScryfallCard } from "../../types";

export function SharedCardActions({ card }: { card: ScryfallCard }) {
    return (
        <>
            <Action.OpenInBrowser url={card.scryfall_uri} />
            <Action
                onAction={async () => {
                    launchCommand({
                        name: "searchCards",
                        type: LaunchType.UserInitiated,
                        context: { data: `s:${card.set}` },
                    });
                }}
                title="View All Cards in Set"
                icon={Icon.Tag}
            />
            <Action.CopyToClipboard
                title="Copy Card Name"
                content={card.name}
                shortcut={{
                    macOS: { modifiers: ["cmd", "shift"], key: "c" },
                    Windows: { modifiers: ["ctrl", "shift"], key: "c" },
                } as unknown as KeyboardShortcut}
            />
            <Action.CopyToClipboard title="Copy Card for Scryfall Slackbot" content={`[[${card.name}]]`} />
        </>
    );
}
