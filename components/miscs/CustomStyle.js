import styled from "styled-components"

export const ButtonStyleOne = styled.button`
    letter-spacing:0.2px;
    background-color:${props=>props.facebook?'#3b5998':props.theme.buttonColor};
    color:white;
    font-weight:500;
    border:none;
    padding:${props=>props.facebook?`10px 15px`:`8px 15px`} ;
    margin-right: 12px;
    flex:1 1 40%;
    // border-radius:5px;
    outline:none;
    height: 40px;
    outline: 1px solid #ffffff;
    transition: outline-offset 250ms ease;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    svg{
        font-size:22px;
    }
    &:hover,
    &:focus{
        outline-offset: -6px;
    }  
`
export const ButtonStyleTwo = styled.button`
    width:100%;
    letter-spacing:0.2px;
    font-weight:500;
    border:none;
    padding: 8px 20px;
    margin-right: 12px;
    flex:1 1 40%;
    outline:none;
    height: 40px;
    background-color:#ffffff;
    color:rgb(21, 58, 91);
    box-shadow:0px 0px 0px 2px ${props=>props.theme.buttonColor} inset;
    outline: 1px solid ${props=>props.theme.buttonColor};
    transition: outline-offset 250ms ease;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    svg{
        font-size:22px;
    }
    &:hover,
    &:focus{
        outline-offset: -6px;
    }  
`

export const InputStyle = styled.div`
        transition:all 0.3s ease;
        position:relative;
        display:flex;
        flex-direction:column;
        align-items:start;
        overflow:hidden;
        width:100%;
        margin-bottom:15px;
        font-size:13px;
        color:#212529;
        .label{
            opacity:0.9;
            margin-bottom:8px;
        }
        input{
            box-shadow:1px 1px 13px -8px #21659f;
            border-radius: 4px;
            align-self:flex-end;
            width:100%;
            border:1px solid rgba(0,0,0,0.2);
            padding:8px 0px;
            padding-left:10px;
            transition:all 0.3s ease;
            color:#212529;
            &:hover{
                border:1px solid rgba(33, 101, 159, 0.4);
            }
            &:focus{
                border:1px solid #21659f;
                outline-width: 0;
            }
        }
        .RedPar{
            border-bottom:1px solid red;
        }
        select{
            color:rgba(0,0,0,0.75);
            font-size:14px;
            transition:all 0.3s ease;
            -webkit-appearance: none;
            -moz-appearance: none;
            -ms-appearance: none;
            appearance: none;
            width:100%;
            border-radius: 4px;
            align-self:flex-end;
            border:1px solid rgba(0,0,0,0.2);
            padding:6px 0px;
            padding-left:5px;
            transition:all 0.3s ease;
            option[value=""][disabled] {
                display: none;
            }
            option {
                color:rgba(0,0,0,0.8);;
            }
            &:hover{
                border:1px solid rgba(33, 101, 159, 0.4);
            }
            &:focus{ 
                border:1px solid #21659f;
                outline-width: 0;
            }
            &:focus ~ .SelectArr{ 
                background-color:rgba(0,0,0,0.1);
                svg{
                    transform: rotate(180deg);
                }
            }
            &::-ms-expand{
                display: none;
            }
            & > option[value=""][disabled] {
                color: red;
            }
        }
        .SelectArr{
            transition:all 0.3s ease;
            position:absolute;
            top:2%;
            right:0.5%;
            background-color:white;
            height:95%;
            width:24px;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:2px;
            z-index:1;
            svg{
                transition:all 0.3s ease;
                font-size:14px;
                color:rgba(0,0,0,0.8);
            }
        }
        
        textarea{
            color:#212529;
            min-height:180px;
            border-radius: 4px;
            align-self:flex-end;
            width:100%;
            border:1px solid rgba(0,0,0,0.2);
            padding:8px 10px;
            padding-left:10px;
            transition:all 0.3s ease;
            &:hover{
                border:1px solid rgba(33, 101, 159, 0.3);
            }
            &:focus{ 
                outline-width: 0;
                border:1px solid #21659f;
            }
        }
        .red{
            border:1px solid rgba(255,0,0,0.8);
            &:focus{
                border:1px solid rgba(255,0,0,0.8);
            }
        }
        .cash{
            padding-right:10px;
            text-align:right;
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
            background: transparent;
            bottom: 0;
            color: transparent;
            cursor: pointer;
            height: auto;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: auto;
        }
`