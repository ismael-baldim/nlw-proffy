import React from 'react';


import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt=""/>
                            <div>
                                <strong>Diego Fernandes</strong>
                                <span>Química</span>
                            </div>
                        </header>
                        <p>
                        Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Sapien in monti palavris qui num significa nadis i pareci latim. Aenean aliquam molestie leo, vitae iaculis nisl. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

    Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si num tem leite então bota uma pinga aí cumpadi! Paisis, filhis, espiritis santis.
                        </p>
                        <footer>
                            <p>
                                Preço/hora
                                <strong>R$ 20,00</strong>
                            </p>
                            <button type="button">
                                <img src={whatsAppIcon} alt="WhatsApp"/>
                                Entrar em contato
                            </button>
                        </footer>
                    </article>
    );
}

export default TeacherItem;