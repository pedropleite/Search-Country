import { FooterContainer, ContainerImgs, Logo, Contact, Information, Rights, BtnMap } from './styles';

const Footer = () => {
    return (
        <FooterContainer>
            <ContainerImgs>
                <button>
                    <img src={require('../../../assets/icons/facebook.png')} alt={'facebook'} />
                </button>
                <button>
                    <img src={require('../../../assets/icons/instagram.png')} alt={'instagram'} />
                </button>
                <button>
                    <img src={require('../../../assets/icons/twitter.png')} alt={'twitter'} />
                </button>
                <button>
                    <img src={require('../../../assets/icons/whatsapp.png')} alt={'whatsapp'} />
                </button>
            </ContainerImgs>
            <Logo>WEBCARS</Logo>
            <Contact>
                <Information>
                    <span>Pizzaria Restaurant</span>
                    <span>901-947 Lest Drive, Massachussets, TX 757, USA </span>
                    <span>Telephone: +1 555 123 456 789 </span>
                    <span>Fax: +1 555 2342</span>
                </Information>
                <Rights>Copyright © 2022. All rights reserved.</Rights>
            </Contact>
            <BtnMap>
                <img src={require('../../../assets/icons/local.png')} />
                Find us on Map
            </BtnMap>
        </FooterContainer>
    );
};

export default Footer;
