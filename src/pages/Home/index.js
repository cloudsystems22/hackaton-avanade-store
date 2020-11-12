
import { Container, Row, Column } from './style';
import hero_page_01 from '../../assets/images/hero_page_01.png';
import hero_page_02 from '../../assets/images/hero_page_02_full.png';
import hero_page_03 from '../../assets/images/hero_page_03.png';
import hero_side_01 from '../../assets/images/hero_side_01.png';
import hero_side_02 from '../../assets/images/hero_side_02.png';

function Home(){
    return(
       <> 
        <h1>Header</h1>
            <Container>
                <Row>

                    <Column grid='12'>
                        <img src={hero_page_01} style={{width:'100%'}}alt="Hero page"/>
                    </Column>
                </Row>
                <Row style={{flexDirection:'row', padding: '30px'}}> 
                    <Column grid='3'  >
                       <img src={hero_side_01} style={{width:'120%',height:'400px' ,padding: '10px 0'}} alt="Hero page"/>
                       <img src={hero_side_02} style={{width:'120%' ,height:'400px' ,padding: '10px 0'}}  alt="Hero page"/>
                    </Column>
                   
                    <Column grid='9'>
                       <img src={hero_page_02} style={{width:'90%', height: '75%', padding: '30px'}} alt="Hero page"/>
                    </Column>
                </Row>

                    <Column grid='12'>
                       <img src={hero_page_03 } style={{width:'100%'}} alt="Hero page"/>
                    </Column>
            </Container>
        <h4>Footer</h4>
       </>
    )
}

export default Home