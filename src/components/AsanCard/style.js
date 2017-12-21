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
    height: 425px;
    max-width: 250px;
    margin: 15px;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: ghostwhite;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 20px -5px rgba(255,140,0,0.2);

    &:hover {
        box-shadow: 0px 0px 20px -2px rgba(255,140,0,0.16);
    }
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
    top: 0;
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

let AsanComplexity = AsanDelay.extend`
    ${props => props.theme.complexity[props.complexity]}
`;

let AsanStart = styled.button`
    height: 30px;
    font-weight: 900;
    background-color: darkorange;
    cursor: pointer;
    border: none;
`;

export {
    AsanDetailsWrap,
    AsanPreviw,
    AsanCardWrap,
    AsanLabel,
    AsanDescription,
    AsanDelay,
    AsanComplexity,
    AsanStart
};