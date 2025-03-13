import type { Meta, StoryObj } from "@storybook/react";
import Polaroid from "./Polaroid";

const meta: Meta<typeof Polaroid> = {
  title: "Components/Polaroid",
  component: Polaroid,
};

export default meta;

type Story = StoryObj<typeof Polaroid>;

export const SquareWithCaption: Story = {
    args: {
        filename: '/picture.jpg',
        caption: 'Lewis Inches',
    }
};

export const SquareWithCaptionAndLinks: Story = {
    args: {
        filename: '/picture.jpg',
        caption: 'Lewis Inches',
        links: [
            { href: '/link1', text: 'Link 1' },
            { href: '/link2', text: 'Link 2' },
            { href: '/link3', text: 'Link 3' },
        ],
    }
};

export const SquareWithoutCaption: Story = {
    args: {
        filename: '/picture.jpg',
    }
};

export const SixteenByNineWithCaption: Story = {
    args: {
        filename: '/landscape.webp',
        caption: 'Lewis Inches',
    }
};

export const SixteenByNineWithoutCaption: Story = {
    args: {
        filename: '/landscape.webp',
    }
};

export const NineBySixteenWithCaption: Story = {
    args: {
        filename: '/portrait.webp',
        caption: 'Lewis Inches',
    }
};

export const NineBySixteenWithoutCaption: Story = {
    args: {
        filename: '/portrait.webp',
    }
};