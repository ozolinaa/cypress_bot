import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Counter from "src/common/components/Counter";

export default {
  title: "Common/Counter",
  component: Counter,
} as Meta;

const Template: Story = () => <Counter />;

export const Default = Template.bind({});
Default.args = {};
