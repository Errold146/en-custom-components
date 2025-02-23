import type { Meta, StoryObj } from "@storybook/react";
import MyLabel from "../components/MyLabel";

const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'inline-radio' },
        color: { control: 'inline-radio'}
    },
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof MyLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Default Label',
    }
}

export const AllCaps: Story = {
    args: {
        label: 'All Caps Label',
        allCasp: true
    }
}

export const Secondary: Story = {
    args: {
       label: 'Secondary Label',
       color: 'text-primary'
    }
}

export const CustomColor: Story = {
    args: {
       label: 'Custom Color Label',
       fontColor: '#5517ac'
    }
}