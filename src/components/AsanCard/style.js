import styled from 'styled-components';

let AsanPreviw = styled.div`
    height: 300px;
    background-image: url(${props => props.preview});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

let AsanCardWrap = styled.div`
    width: 100%;
    max-width: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: lemonchiffon;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
`;

let AsanLabel = styled.p`
    font-weight: bold;
    font-size: 18px;
    margin: 5px 5px;
`;

let AsanDescription = styled.p`
    font-weight: light;
    font-size: 16px;
    margin: 5px 5px;    
`;

let AsanDetailsWrap = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`;

let AsanDelay = styled.div`
    color: black;
    background-color: khaki;
    padding: 2px 5px;
    margin: 3px 3px;
    border-radius: 10px;   
`;

let AsanComplexity = styled(AsanDelay)`
    color: ${props => props.theme.complexity[props.complexity].color};
    background-color: ${props => props.theme.complexity[props.complexity].backgroundColor};
`;

export {
    AsanDetailsWrap,
    AsanPreviw,
    AsanCardWrap,
    AsanLabel,
    AsanDescription,
    AsanDelay,
    AsanComplexity
};