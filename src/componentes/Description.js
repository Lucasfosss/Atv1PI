import styled from "styled-components";

const Description = styled.p`
    font-size: 1em;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    margin:0;
    display:-webkit-box;
    -webkit-line-clamp: 3; //limite de linhas 
    -webkit-box-orient: vertical; //orientação
`

export default Description;