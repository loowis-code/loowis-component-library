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

export const SixteenByNineWithCaptionandLinksContainerised: Story = {
    args: {
        filename: '/landscape.png',
        title: 'Lewis Inches',
        caption: 'A beautiful landscape',
        links: [
            { href: '/link1', text: 'Link 1' },
            { href: '/link2', text: 'Link 2' },
            { href: '/link3', text: 'Link 3' },
        ],
    },
    render: (args) => {
        return (
            <div style={{ width: '400px', height: '400px', border: '10px solid red' }}>
                <Polaroid {...args} />
            </div>
        );
    }
};

export const SquareWithCaptionAndLinksContainerised: Story = {
    args: {
        filename: '/picture2.jpg',
        title: 'Lewis Inches',
        caption: 'A beautiful square image',
        links: [
            { href: '/link1', text: 'Link 1' },
            { href: '/link2', text: 'Link 2' },
            { href: '/link3', text: 'Link 3' },
        ],
    },
    render: (args) => {
        return (
            <div style={{ width: '650px', height: '400px', border: '10px solid red' }}>
                <Polaroid {...args} />
            </div>
        );
    }
};