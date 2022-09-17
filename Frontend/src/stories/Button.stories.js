// import Button from "../Components/SettingCompCon/Button/Button";
import Button from "../Utils/Components/Button/Button"

export default {
    title: 'Life Calendar/Button',
    component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
    label: 'Save Change',
    disabled: false,
    noBorder: false,
    size: 'lg',
    onClick: () => console.log('Clicked')
}