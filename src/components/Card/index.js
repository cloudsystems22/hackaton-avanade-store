import { CardPrincipal, ImagPrincipal, DetailsProduto, SpanPreco, TituloProduto, ButtonAdd } from './style';

function Card(){
    return (
        <CardPrincipal>
            <ImagPrincipal></ImagPrincipal>
            <DetailsProduto>
            <TituloProduto>Vera bradley <SpanPreco>R$ 1000,00</SpanPreco></TituloProduto>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras ac posuere justo. Ut neque nunc, facilisis sagittis consequat a, venenatis at massa. 
            Vivamus tincidunt ligula at interdum feugiat. Fusce eu vulputate sapien. 
            Suspendisse et est nec orci venenatis vehicula ac at tortor. Vestibulum suscipit consequat dictum. 
            Maecenas id nisi quis purus rutrum vulputate nec quis mauris.
            </p>
            <ButtonAdd>Add ao carrinho</ButtonAdd>
            </DetailsProduto>
          
        </CardPrincipal>
    )
}

export default Card;
