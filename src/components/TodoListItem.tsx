import {useState} from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md';
import styled, {css, keyframes} from 'styled-components';
import Todo from '../constants';

const TodoListItem = ({todo, onremove}: {todo: Todo; onremove: Function}) => {
    const [selected, setSelected] = useState<Boolean>(todo.selected);
    return (
        <StyledArticle id={todo.id}>
            <StyledSection state={selected}>
                {selected ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <StyledText onClick={() => setSelected(!selected)}>{todo.text}</StyledText>
            </StyledSection>
            <StyledSelectedSection onClick={() => onremove()}>
                <MdRemoveCircleOutline />
            </StyledSelectedSection>
        </StyledArticle>
    );
};

const fadein = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform: none;
    }
`;

const StyledArticle = styled.article`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(even) {
        background-color: #f8f9fa;
    }
    gap: 10px;
`;

const StyledText = styled.div`
    font-weight: 700;
    cursor: pointer;
`;

const StyledSection = styled.section<{state: Boolean}>`
    display: flex;
    width: 100%;
    align-items: center;
    animation: ${fadein} 2s linear;
    svg {
        font-size: 1.5rem
        cursor: pointer;
    }
    border-bottom: 1px solid #dee2e6
    ${({state}) => state === true && selectedStyle}
`;

const selectedStyle = css`
    svg {
        color: #22b8cf;
    }
    color: #adb5bd;
    text-decoration: line-through;
`;

const StyledSelectedSection =styled.section`
    display: flex;
    align-items: center;
    color: #ff6b6b;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
        color: #ff8787;
    }
`;

export default TodoListItem;