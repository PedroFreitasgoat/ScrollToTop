import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "../ReusableStyles";


export const Section = styled.div`
    margin-top: 20px;
    border: none;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    ${TitleStyles}
    .container {
        background: linear-gradient(to right, #fc4958, #e85d05, #fc4958);
        padding: 0.3vw;
        input {
            border: none;
            padding: 1.5rem 8rem 1.5rem 1rem;
            font-size: 1.3rem;

            &:focus {
                outline: none;
            }
        }
        button {
            padding: 1rem 5rem;
            background-color: transparent;
            border: none;
            font-size: 1.3rem;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.5rem;
            transition: 0.3s ease-in-out;
            cursor: pointer;

            &:hover {
                letter-spacing: 0.6rem;
                padding: 1rem 4.7rem;
            }
        }
    }
`