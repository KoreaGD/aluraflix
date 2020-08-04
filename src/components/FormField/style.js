import styled, { css } from 'styled-components';

export const FormFieldWrapper = styled.div`
    position: relative;
    textarea {
      min-height: 150px;
    }
    input[type="color"] {
      padding-left: 56px;
    }
`;
export const Label = styled.label`

`;
Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute; 
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
`;
export const Input = styled.input`
    background: #535750;
    color: #f5f5f5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;
    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #535750;
    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;
    &:focus {
        border-bottom-color: var(--primary)
    }

    ${({ hasValue }) => hasValue && css`
        &:not([type='color']) + span{
            transform: scale(.7) translateY(-13px);
        }
    `}
`;
