import styled from "styled-components";

export const CriarEventoSC = styled.section`
.mainContent {
    min-height: 100vh;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    padding: 3rem 0px;
    color: #202020;
    justify-content: center;


    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-top: 2.5rem;

        input[type=checkbox]:focus {
            box-shadow: none !important;
        }

        .wrapCheckbox {
            margin-bottom: 2.5rem;

            .container {
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 1rem;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                }

                .oneCheck {
                    margin: 0 !important;
                }
    
                /* Hide the browser's default checkbox */
                .container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }
    
                /* Create a custom checkbox */
                .checkmark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 21px;
                    width: 21px;
                    background-color: #fff;
                }
    
                /* On mouse-over, add a grey background color */
                .container:hover input ~ .checkmark {
                    background-color: #ccc;
                }
    
                /* When the checkbox is checked, add a blue background */
                .container input:checked ~ .checkmark {
                    background-color: #B78860;
                }
    
                /* Create the checkmark/indicator (hidden when not checked) */
                .checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                }
    
                /* Show the checkmark when checked */
                .container input:checked ~ .checkmark:after {
                    display: block;
                }
    
                /* Style the checkmark/indicator */
                .container .checkmark:after {
                    left: 7px;
                    top: 2px;
                    width: 5px;
                    height: 10px;
                    border: solid white;
                    border-width: 0 3px 3px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
        }

        .labelTitle {
            font-weight: 800;
            margin-bottom: .5rem;
        }

        input[type=text], input[type=date], select  {
            width: 400px;
            height: 2.5rem;
            font-size: .9rem;
            padding: 0 12px;
            margin-bottom: 2.5rem;
            border: none;
            border-bottom: 1px solid #B78860;
            background-color: #fff;
        }
        #selectDia {
            width: 400px;
            height: 2.5rem;
            font-size: .9rem;
            border: none;
            border-bottom: 1px solid #B78860;
            background-color: #fff;
            margin-bottom: 2.5rem;
        }

        input:focus, select:focus {
            outline: 0;
            box-shadow: 0 0 10px rgba(20, 20, 20, .3);
            border-bottom: 3px solid #B78860;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active{
            -webkit-transition: background-color 9999s ease-out;
        }

        button[type=submit] {
            height: 3rem;
            width: 100%;
            max-width: 400px;
            color: #fff;
            border: 1px solid #B78860;
            border-radius: 50px;
            font-size: 1.5rem;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 400;
            box-shadow: 0 0 10px rgba(0, 0, 0, .4);
            background-color: #B78860;
            transition: all .2s;
            cursor: pointer;
        }

        button[type=submit]:hover{
            background-color: transparent;
            color: #B78860
        }

    }

    h2 {
        width: 100%;
        height: auto;
        font-size: 2.5rem;
        font-weight: 900;
        text-align: center;
        padding: 0 24px;
        color: #202020;
    }
    
}

@media (max-width: 800px) {
    h2 {
        font-size: 2rem;
    }

    .mainContent {

        form {
            width: 100%;
            padding: 0 2rem;
            margin-top: 1rem 0 2rem 0;
            
            input, label, select, h2,  #selectDia, .check {
                width: 100% !important;
            }
        }
    }
}
`