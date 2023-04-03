import beach from "../assets/images/beach.webp";
import { Link } from "react-router-dom";

import styled from "styled-components";

const About = () => {

    return (
        <AboutWrapper>
            <header></header>
            <h1>About Me</h1>
            <div id="aboutText">
                <AboutSection>
                    <h3><span>Who am I?</span></h3>
                    <p>
                        I am a motivated, and quality driven person. Furthermore, I have an aptitude for learning and am passionate about design and problem-solving. Inspired in school to create and have a passion for technology and coding which led me into an apprenticeship opportunity at Code Nation.<br/><br/>
                        I am currently a Lead Instructor at Code Nation, one of the UK's leading independent training providers and proud to have contributed to the development of our successful curricula and led the training of over 70 students in the last 9 months, and involved in changing the lives of over 200 since starting at Code Nation. <br/><br/>
                        Whilst I've enjoyed the process of imparting knowledge to others, I'm now at the point where my passion for animation and creativity is where I want to spend the majority of my time.
                    </p>
                </AboutSection>
                <AboutSection>
                    <h3><span>The journey so far</span></h3>
                    <p>
                        <h4>Lead Instructor</h4>
                        <b>Code Nation - UK Digital Training Provider</b><br/>
                        Lead Instructor for the front end section of the software development course and have trained over 70 students<br/>
                        Coaching and mentoring new Code Nation Instructors on the curriculum and content<br/>
                        Involved in the curriculum development of our Software courses<br/>
                        Developing a Code Nation app for hosting video content for students<br/><br/>

                        <h4>Apprentice / Junior Developer</h4>
                        <b>Code Nation - UK Digital Training Provider</b><br/>
                        Supported the delivery of the software development bootcamp<br/><br/>

                        <h4>School / Pre-Work</h4>
                        I and a small team spent a month in Swaziland, Africa, where we worked on a number of conservation projects as well as building a kitchen for a primary school in a remote area<br/>
                        I spent a week in a structural engineering company where I picked up basic metal work skills such as welding and office support functions<br/>
                        I was drawn to product and design during A-levels and whilst at school I set up a business which designed, developed and manufactured innovative mobile Phone stands (www.easi-stand.com)<br/>
                        I was a Chorister in the Chester Cathedral Choir for 7 years and ended with me being the Head Chorister
                    </p>
                </AboutSection>
                <AboutSection>
                    <h3><span>Education</span></h3>
                    <p>
                        Level 4 Software Development Methodologies BCS <br/> 
                        <b>Code Nation</b><br/><br/>
                        Level 2 IT User Skills Software Develpoment TLM <br/> 
                        <b>Code Nation</b><br/><br/>
                        A-Levels Maths (C), Business Studies (B), Design & Technology: Product Design (A)<br/>
                        <b>Abbey Gate College</b><br/><br/>
                        10 GCSEs A-C Maths (7), English (6), Physics (A), Chemistry (C)<br/>
                        <b>Abbey Gate College</b>
                    </p>
                </AboutSection>
                <SocialsSection>
                    <a href="https://github.com/johnmuir2001" target="_blank" rel="noopener noreferrer">
                        <svg width="800px" height="800px" viewBox="2 2 20 20">
                            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/john.r.muir/" target="_blank" rel="noopener noreferrer">
                        <svg width="800px" height="800px" viewBox="0 0 169.063 169.063">
                            <g>
                                <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                                    c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                                    c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                                    c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
                                <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                                    C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                                    c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
                                <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                                    c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                                    C135.661,29.421,132.821,28.251,129.921,28.251z"/>
                            </g>
                        </svg>
                    </a>
                    <a href="https://codepen.io/john_r_muir" target="_blank" rel="noopener noreferrer">
                        <svg width="800px" height="800px" viewBox="0 0 24 24">
                            <path d="m2.893 15.656 8.076 5.384v-4.808l-4.474-2.986zm-.831-1.928 2.585-1.728-2.585-1.728zm10.969 7.312 8.076-5.384-3.6-2.41-4.476 2.986zm-1.031-6.602 3.643-2.438-3.643-2.438-3.643 2.438zm-5.505-3.68 4.474-2.99v-4.808l-8.076 5.384zm12.858 1.242 2.585 1.728v-3.456zm-1.848-1.246 3.6-2.41-8.074-5.384v4.808zm6.495-2.41v7.312.03c0 .346-.18.651-.452.825l-.004.002-10.969 7.313c-.162.109-.361.174-.576.174s-.414-.065-.58-.176l.004.002-10.969-7.312c-.276-.176-.456-.481-.456-.827 0-.011 0-.021.001-.032v.002-7.312c0-.009 0-.02 0-.031 0-.346.18-.651.452-.825l.004-.002 10.969-7.312c.162-.109.361-.174.576-.174s.414.065.58.176l-.004-.002 10.969 7.312c.276.176.456.481.456.827 0 .011 0 .021-.001.032z"/>
                        </svg>
                    </a>
                    <Link to="www.linkedin.com/in/john-muir-proflie" target="_blank" rel="noopener noreferrer">
                        <svg width="800px" height="800px" viewBox="4 4 16 16">
                            <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"/>
                        </svg>
                    </Link>
                </SocialsSection>
            </div>
        </AboutWrapper>
    )
}

export default About;

const AboutWrapper = styled.div`
    height: calc(100vh - 50px);
    overflow-x: hidden;
    perspective: 300px;
    perspective-origin: center top;
    transform-style: preserve-3d;

    header {
        height: 70vh;
        background: url(${beach});
        background-size: cover;
        background-position: center center;
        position: relative;
        vertical-align: top;
        transform-origin: center top;
        transform: translateZ(-300px) scale(2);
    }

    h1 {
        position: absolute;
        top: 0;
        left: 0;
        height: 70vh;
        width: 100%;
        display: grid;
        place-items: center;
        font-size: 80px;
        margin: 0;
        color: white;
    }

    #aboutText {
        padding: 50px 100px;
        box-sizing: border-box;
        min-height: 100vh;
        background-color: var(--primary-background);
        transform: translateZ(0);
    }

    @media screen and (max-width:830px){
        header {
            height: 100vh;
            background-size: auto 100%;
            background-position: 35% 50%;
        }

        h1 {
            height: 100vh;
            width: 100%;
            display: flex;
            font-size: 60px;
            margin: 0 10px;
        }

        #aboutText {
            padding: 50px 30px;
            box-sizing: border-box;
            min-height: 100vh;
            background-color: var(--primary-background);
            transform: translateZ(0);
        }
    }
`;

const AboutSection = styled.div`
    display: flex;
    margin: 70px 0;

    h3 {
        width: 40%;
        font-size: 50px;
        margin: 0;
    }

    span {
        position: relative;
    }

    span::before {
        position: absolute;
        content: '';
        height: 2px;
        width: 100px;
        background-color: var(--text-color);
        top: 24px;
        transform: translateX(-110%);
    }

    p {
        margin: 10px 0 0 0;
        width: 60%;
    }

    h4 {
        margin: 0;
        font-size: 20px;
    }

    b {
        font-weight: 400;
        color: var(--accent-color);
    }

    @media screen and (max-width:830px){
        & {
            flex-direction: column;
            margin: 30px 0;
        }

        h3 {
            width: 100%;
            font-size: 40px;
        }

        p {
            width: 100%;
        }
    }
`;

const SocialsSection = styled.div`
    display: flex;
    justify-content: center;

    a {
        margin: 10px;
        height: 35px;
    }
    svg {
        width: 100%;
        height: 100%;
        transition: fill 0.3s;
        fill: var(--text-color);
    }

    a:hover svg {
        fill: var(--accent-color);
    }
`;