// badge.stories.tsx

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Badge from "@/app/components/badge";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta;

const Template: StoryFn = (args) => <Badge count={0} {...args} />;

export const BadgeIcon = Template.bind({});
BadgeIcon.args = {
  count: 0,
};
