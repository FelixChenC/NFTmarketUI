import styled from 'styled-components';

const Img = styled.img`
    width:${(p) => (p.width ? p.width : '100%')};
    ${(p) => (p.height ? `height:${p.height}` : "")};
    ${(p) => (p.borderRadius ? `border-radius:${p.borderRadius}` : "")};
    ${p => p.padding? 'padding: 0.5rem;' : ''}
    
    
`

export default Img;