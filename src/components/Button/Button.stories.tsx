import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        buttonText: 'VIEW MORE',
        buttonLink: '/view-more',
        disabled: true,
    }
};

export const NoLink: Story = {
    args: {
        buttonText: 'VIEW MORE',
        clickHandler: () => console.log('Button clicked'),
        disabled: true,
    }
};