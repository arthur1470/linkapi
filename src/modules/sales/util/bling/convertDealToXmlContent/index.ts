import { Deal } from "../../../entities/Deal";

export default function convertDealToXmlContent(order: Deal): string {
    return `
        <?xml version="1.0" encoding="ISO-8859-1"?>
        <pedido>
            <data>${order.wonDate}</data>            
            <vendedor>${order.seller}</vendedor>
            <cliente>
                <nome>${order.client}</nome>        
                <fone>${order.clientNumber}</fone>
                <email>${order.clientEmail}</email>
            </cliente>    
            <itens>
                <item>
                    <codigo>${order.dealId}</codigo>
                    <descricao>${order.title}</descricao>                
                    <qtde>1</qtde>
                    <vlr_unit>${order.value}</vlr_unit>
                </item>        
            </itens>  
            <transporte>
                <tipo_frete>S</tipo_frete>
            </transporte>              
        </pedido>`;
}
