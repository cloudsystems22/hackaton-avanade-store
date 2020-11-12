
import { Container, Row, Column } from './style';
import hero_page_01 from '../../assets/hero_page_01.png';
import hero_page_02 from '../../assets/hero_page_02.png';
import hero_page_03 from '../../assets/hero_page_02.png';
import hero_side_01 from '../../assets/hero_side_01.png';
import hero_side_02 from '../../assets/hero_side_02.png';

function Home(){
    return(
       <> 
        <h1>Header</h1>
            <Container>
                <Row>

                    <Column grid='12'>
                        <img src={hero_page_01}style={{width:'100%'}}alt="Hero page"/>
                    </Column>

                    <Column grid='3'>
                       <img src={hero_side_01} alt="Hero page"/>
                    </Column>
                    <Column grid='9'>
                       <img src={hero_page_02} alt="Hero page"/>
                    </Column>

                    <Column grid='3'>
                       <img src={hero_side_02} alt="Hero page"/>
                    </Column>
                    <Column grid='9'>
                       <img src={hero_page_03 } alt="Hero page"/>
                    </Column>
                </Row>
            </Container>
        <h4>Footer</h4>
       </>
    )
}

export default Home