import styled from "styled-components";

const LoadingPage = () => {

    return (
        <LoadWrapper>
            <DotsBox>
                <div></div>
                <div></div>
                <div></div>
            </DotsBox>
        </LoadWrapper>
    )
}

export default LoadingPage;

const LoadWrapper = styled.div`
    background-color: #2F2E2F;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DotsBox = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100px;

    div {
        background-color: #f5b32f;
        height: 25px;
        width: 25px;
        border-radius: 100%;
        animation: grow 3s ease-in-out infinite;
    }
    div:nth-child(2) {
       animation-delay: 0.4s;
    }
    div:nth-child(3) {
        animation-delay: 0.8s;
    }

    @keyframes grow {
        0%, 80% {
            transform: scale(1);
        }
        40% {
            transform: scale(0.2);
        }
    }
`;