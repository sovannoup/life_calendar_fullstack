import {
    Container,
    Separator,
    SettingContainer,
    Title,
    Description,
    AvatarContainer,
    AvatarText,
    AvatarAndButton,
    Avatar,
    Footer

} from './SettingAccountStyle'
import { useFormik } from 'formik'
import CollapsibleComp from './CollapsibleComp/CollapsibleComp'
import InputField from './InputField/InputField'
import Button from '../../../Utils/Components/Button/Button'
import * as Yup from 'yup';


export default function SettingAccount() {
    // const oldPassword = '12345678'
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    const initialValues = {
        firstName: 'Eng',
        lastName: 'Sopha',
        currentPassword: '',
        newPassword: '',
        birthday: '1999-11-11'
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            currentPassword: Yup.string()
                .min(8, 'Must be 8 character or more')
                .max(20, 'Must be 20 characters or less')
                .test('is_current_pass_error', 'Required', () => isPassordError() || formik.values.currentPassword !== ""),
            newPassword: Yup.string()
                .min(8, "Must be 8 characters or more")
                .max(20, 'Must be 20 characters or less')
                .matches(passwordRules, { message: "Please create a stronger password" })
                // .when('currentPassword', {
                //     is: (currentPassword) => currentPassword !== '' && currentPassword !== undefined,
                //     // is: (currentPassword) => console.log("sdhfjshf",currentPassword !== undefined),
                //     then: Yup.string().required('Required')
                // })
                .test('is_new_pass_error', 'Required', () => isPassordError() || formik.values.newPassword !== "" ),
            birthday: Yup.date()
        }),
        onSubmit: values => {
                alert(JSON.stringify(values, null, 2))
        }
    })

    function isPassordError(){
        const a = formik.values.currentPassword !== ""
        const b = formik.values.newPassword !== ""
        const result = !(( a || b ) && !( a && b ))
        return result
    }

    function isDisable() {
        const isChange = !(JSON.stringify(formik.values) === JSON.stringify(initialValues))
        const isError = !(Object.keys(formik.errors).length === 0)
        // const isTouch = Object.keys(formik.touched).length === 0
        console.log(isChange, isError, isPassordError())
        console.log('Is Error: ', formik.errors)
        return !(isChange || isError) || isError
    }

    // console.log(JSON.stringify(formik, null, 2))

    return (
        <Container>
            <Separator></Separator>
            <SettingContainer>
                <Title>Account</Title>
                <Description>Personal Information</Description>
                <AvatarContainer>
                    <AvatarText>Avatar</AvatarText>
                    <AvatarAndButton>
                        <Avatar></Avatar>
                        <Button
                            label="Change"
                            size='lg'
                            style={{marginRight: 16}} />
                        <Button 
                            label="Remove"
                            size='lg'
                            noBorder={true} />
                    </AvatarAndButton>
                </AvatarContainer>
                <CollapsibleComp label="Profile" description='Name, Surname, Email address'>
                    <InputField
                        id="firstName"
                        name="firstName"
                        type="text"
                        label="First Name"
                        {...formik.getFieldProps('firstName')}
                        errorText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}
                    ></InputField>
                    <InputField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        {...formik.getFieldProps('lastName')}
                        errorText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}
                    ></InputField>
                    <InputField label="Email" type="email" value="engsopha18@kit.edu.kh" disable={true}></InputField>
                </CollapsibleComp>

                <CollapsibleComp label="Password" description='Your email address is annesherley@gmail.com'>
                    <InputField
                        id="currentPassword"
                        name="currentPassword"
                        label="Current Password"
                        type="password"
                        {...formik.getFieldProps('currentPassword')}
                        errorText={formik.touched.currentPassword && formik.errors.currentPassword ? formik.errors.currentPassword : null}
                    ></InputField>
                    <InputField
                        id="newPassword"
                        name="newPassword"
                        label="New Password"
                        type="password"
                        // disable={formik.values.currentPassword === ""}
                        {...formik.getFieldProps('newPassword')}
                        errorText={formik.touched.newPassword && formik.errors.newPassword ? formik.errors.newPassword : null}
                    ></InputField>
                </CollapsibleComp>

                <CollapsibleComp label="DOB" description='Change of your date of birth'>
                    <InputField
                        id="birthday"
                        name="birthday"
                        label="Birthday"
                        placeholder="15/02/2000"
                        type="date"
                        {...formik.getFieldProps('birthday')}
                        errorText={formik.touched.birthday && formik.errors.birthday ? formik.errors.birthday : null} ></InputField>
                </CollapsibleComp>

                <CollapsibleComp label="Notification" description='90. will send you notifications'>
                    {/* <p>{formik}</p> */}
                </CollapsibleComp>


                <Footer>
                    <Button
                        disabled={isDisable()}
                        onClick={formik.handleSubmit}
                        label="Save Change"
                        size="lg"
                    />
                </Footer>
            </SettingContainer>
        </Container>
    )
}