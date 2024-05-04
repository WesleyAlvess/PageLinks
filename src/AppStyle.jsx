import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    height: 470px;
    background-color: #0099ff;
    border: 2px solid white;
    color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 0;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 768px) {
        width: 350px;
    }

    h1{
        margin-top: -18px;
    }

    p{
        margin: -10px;
    }
    
    ul{
        margin-top: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;

        li{
            background-color: white;
            width: 80%;
            height: 40px;
            font-size: 22px;
            border-radius: 20px;
            //box-shadow: 0 0 20px 0;

            display: flex;
            align-items: center;
            justify-content: center;


            a{
                color: #6e6d6d;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
        }

        li:hover{
            box-shadow: 0 0 20px 0;
        }
    }

`

export const ContainerImg = styled.div`
    width: 110px;
    height: 110px;
    background-color: #00ffd5;
    border-radius: 50%;
    margin-top: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        border-radius: 50%;
        width: 100px;
        box-shadow: 0 0 40px 0;
        
    }
`