import styled from 'styled-components'

export const Section = styled.section`
    height: 90vh;
    width: 100vw;
    position: relative;
    .background {
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(60%);
        }
    }
    .content {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 100%;

        .sale {
            position: relative;
            left: 10%;
            img {
                height: 70vh;
            }
            h1 {
                color: white;
                position: absolute;
                top: 25vh;
                left: 15vh;
                font-size: 4.5rem;
                span {
                    display: block;
                    font-size: 5vw;
                }
            }
        }
        .info {
            position: absolute;
            top: 40%;
            right: 10%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            h2 {
                color: #f9c74f;
                font-size: 4rem;
                letter-spacing: 0.5rem;
            }
            em {
                color: white;
                width: 60%;
                text-align: end;
                font-display: 1.1rem;
                letter-spacing: 0.1rem;
            }
            button {
                padding: 1rem 2rem;
                font-size: 1.4rem;
                background-color: #fc4958;
                border: none;
                color: white;
                font-weight: 800;
                letter-spacing: 0cap.2rem;
                cursor: pointer;
                transition: 0.3s ease-in-out;

                &:hover {
                    background-color: #f9c74f;
                }
            }
        }
    }
`