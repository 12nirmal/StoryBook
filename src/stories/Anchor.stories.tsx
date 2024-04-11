import { Anchor } from "@/app/components/Anchor";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Anchor,
  parameters: {
    docsStyles: true,
  },
} as Meta<typeof Anchor>;

export default meta;

export const Default: StoryObj<typeof Anchor> = {
  args: {
    children: 'This is an anchor for storyId: "default"',
    storyId: "default",
  },
};