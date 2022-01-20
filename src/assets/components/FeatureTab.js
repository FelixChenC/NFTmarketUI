import styled from 'styled-components';
import { BiChevronDown } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import Colors from '../Colors';
import Img from './styled/Img.styled';

const items =[
    {id:1, title:'Universo 34', subTitle: 'Maketi', image: image1},
    {id:2, title:'Holy', subTitle: 'Lea Kovaseva', image: image2},
    {id:3, title:'title3', subTitle: 'subtitle3', image: image3},
    {id:4, title:'title4', subTitle: 'subtitle4', image: image4},

]

const FeatureTabEl = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
    height: 400px;
`;

const Item = styled.div`
    background-color:${Colors.CardBackground};
    padding: 0 .4rem;
    border-radius: 12px;
    display: flex;
    cursor: pointer;
    flex-direction: column;
`;
const Title = styled.span`
    font-size: 1.1rem;
    margin-top: .5rem;

`;

const Subtitle = styled.span`
    color: ${Colors.Gray};
    font-size: 1rem;
`;

const ShowMore = styled.span`
    text-align: center;
    position: absolute;
    cursor: pointer;    
    left: 0;
    bottom: 0;
    width: 100%;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.32);
    padding: 1rem;
    border: 1px solid ${Colors.GrayBorder};
    backdrop-filter: blur(17px);
    border-radius: 12px;
`;

const ButtonFade = styled.span`
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 25%;
    background-image: linear-gradient(rgba(255, 255, 255, 0), ${Colors.Background})
`;

export default function FeatureTab() {
    const nav = useNavigate()
    return (
    <FeatureTabEl>
{items.map((item) => {
    return<Item
        onClick={() => {
            nav("/product")
        }}
    >
        <Img src={item.image}/>
        <Title>{item.title}</Title>
        <Subtitle>{item.subTitle}</Subtitle>
    </Item>
})}
<ButtonFade />
<ShowMore>
    <BiChevronDown /> Show More
</ShowMore>
    </FeatureTabEl>
    )
}
