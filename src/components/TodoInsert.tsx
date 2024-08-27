import {MdAdd} from 'react-icons/md';
import styled, {keyframes} from 'styled-components';

export default function TodoInsert({newtodoRef, onsubmit} : {newtodoRef: React.RefObject<HTMLInputElement>; onsubmit: Function}){
    return (
        <StyledDiv>
            <StyledInput ref={newtodoRef} placeholder="할 일을 입력하세요."/>
            <StyledButton type="submit" onClick={() => onsubmit(newtodoRef)}>
                <MdAdd/>
            </StyledButton>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    display: flex;
    background: #495057
`;

const fadein = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1:
        transform: none;
    }
`;

const StyledInput = styled.input`
    background: none;
    animation: ${fadein} 1.5s linear;
    outline: none;
    width: 100%;
    display: flex;
    font-size: 1rem;
    &::placeholder {
        color: #dee2e6;
    }
`;

const StyledButton = styled.button`
    background: none;
    outline: none;
    background: #868e96;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background: #adb5bd;
    }
`;