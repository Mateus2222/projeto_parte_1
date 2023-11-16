import opcoes_planos from './plans/planos.js';


const plans_cards = document.querySelector(".pricing") 

function colocar_planos(planos){
    if(planos.dados_moveis == '' && planos.redes_sociais == ''){
        return `        
            <div class="pricing-plan">
                <h2 class="pricing-plan__title">Basico</h2>
                <p><span class="pricing-plan__price">R$ 90</span> por/mês</p>
                <ul class="pricing-plan__benefits">
                    <li>${planos.internet_residencial}</li>
                    <li>${planos.tv}</li>
                    <li>${planos.ligacoes}</li>
                </ul>
                <a href="#" class="pricing-plan__cta">Assine agora</a>
            </div>`
    }
    else if(planos.redes_sociais == ''){
        return `        
            <div class="pricing-plan">
                <h2 class="pricing-plan__title">Intermediario</h2>
                <p><span class="pricing-plan__price">R$ 90</span> por/mês</p>
                <ul class="pricing-plan__benefits">
                    <li>${planos.internet_residencial}</li>
                    <li>${planos.tv}</li>
                    <li>${planos.ligacoes}</li>
                    <li>${planos.dados_moveis}</li>
                </ul>
                <a href="#" class="pricing-plan__cta">Assine agora</a>
            </div>`
    }
    else{
        return `        
            <div class="pricing-plan">
                <h2 class="pricing-plan__title">Premium</h2>
                <p><span class="pricing-plan__price">R$ 90</span> por/mês</p>
                <ul class="pricing-plan__benefits">
                    <li>${planos.internet_residencial}</li>
                    <li>${planos.tv}</li>
                    <li>${planos.ligacoes}</li>
                    <li>${planos.dados_moveis}</li>
                    <li>${planos.redes_sociais}</li>
                </ul>
                <a href="#" class="pricing-plan__cta">Assine agora</a>
            </div>`
    }
}


opcoes_planos.map((opcao) => plans_cards.insertAdjacentHTML('beforeend',colocar_planos(opcao)))
