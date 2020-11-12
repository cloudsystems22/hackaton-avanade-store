import { CardPrincipal, ImagPrincipal, DetailsProduto } from './style';

function Card(){
    return (
        <CardPrincipal>
            <ImagPrincipal></ImagPrincipal>
            <DetailsProduto>
            <h1>Vera bradley <span>R$ 1000,00</span></h1>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Cras ac posuere justo. Ut neque nunc, facilisis sagittis consequat a, venenatis at massa. 
           Vivamus tincidunt ligula at interdum feugiat. Fusce eu vulputate sapien. 
           Suspendisse et est nec orci venenatis vehicula ac at tortor. Vestibulum suscipit consequat dictum. 
           Maecenas id nisi quis purus rutrum vulputate nec quis mauris.
           </p>
            </DetailsProduto>
          
        </CardPrincipal>
    )
}

export default Card;
