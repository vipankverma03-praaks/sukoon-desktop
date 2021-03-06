import styled, { css } from 'styled-components';
import Anchor from '../shared/anchor'
// import { themeGet } from '@styled-system/theme-get';

export const PaginationWrap = styled.div`
    position: relative;
`;

export const PaginationList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
`;

export const PaginationItem = styled.li`
    &:not(:last-child){
        margin-right: 8px;
    }
    ${props => props.disabled && css`
        display: none;
    `}
`;

export const PaginationLink = styled(Anchor)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    min-height: 48px;
    line-height: 48px;
    border-radius: 3px;
    border: 1px solid rgb(171, 171, 171);;
    color: rgb(171, 171, 171);;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    &:hover{
        color: rgb(248, 119, 124); 
        border-color: rgb(248, 119, 124); 
    }
    ${props => props.active && css`
        color: rgb(9, 6, 6);;
        border-color: rgb(248, 119, 124);
        background-color: rgb(248, 119, 124);
        &:hover{
            color: #333;
            border-color: rgb(248, 119, 124); 
        }
    `}
    &.prev,
    &.next{
        padding: 0 20px;
    }
    svg{
        width: 18px;
        height: 18px;
    }
`;