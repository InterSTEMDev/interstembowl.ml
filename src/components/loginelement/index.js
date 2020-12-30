import React from "react"
import {Inner, ContainerZero, Container, Label, Info, Input, ButtonContainer} from "./styles/loginelement"
function LoginElement({children}) {
    return (
        {children}
    )
}
export default LoginElement
LoginElement.ContainerZero = function LoginElementContainerZero({children, ...restProps}) {
    return (
        <ContainerZero {...restProps}>
            {children}
        </ContainerZero>
    )
}
LoginElement.Inner = function LoginElementInner({children, direction}) {
    return (
        <Inner direction={direction}>
            {children}
        </Inner>
    )
}
LoginElement.Info = function LoginElementInfo({children}) {
    return (
        <Info>
            {children}
        </Info>
    )
}
LoginElement.Label = function LoginElementLabel({children}) {
    return (
        <Label>{children}</Label>
    )
}
LoginElement.Input = function LoginElementInput({children, ...restProps}) {
    return (
        <Input {...restProps}>{children}</Input>
    )
}
LoginElement.ButtonContainer = function LoginElementButtonContainer({children, ...restProps}) {
    return (
        <ButtonContainer {...restProps}>{children}</ButtonContainer>
    )
}