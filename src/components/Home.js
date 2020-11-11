import React from 'react';
import Divider from '@material-ui/core/Divider'
import keitos from '../keitos.png'
import pandemic from '../pandemic.mp4'
 
const home = () => {
    return (
       <div style={{marginLeft:'10%', marginRight:'10%', marginBottom:'10%'}}>
          <h1 style={{textAlign:'center'}}>Katja W:n portfolio</h1>
           <p>Tämä sivusto on toteutettu Reactilla. 
               Hampurilaisvalikosta pääset näkemään React-harjoituksiani.
            </p>
            <Divider />
            <h2>
                Muita projekteja
            </h2>
            <h3>
                <a href="https://keitos.uta.fi/">Keitos - 9 juttua sotesta</a>
            </h3>
            <p>
                Keitos on 9 jutusta koostuva verkkojulkaisu, joka kertoo Suomesta suuren sote-uudistuksen alla. Keitos on tehty keväällä 2018 Tampereen yliopistossa, journalistiikan opetuksessa.
            </p>
            <p>
                Tässä projektissa vastasin isolta osin sivuston teknisestä toteutuksesta Wordpressillä.
            </p>
            <a href="https://keitos.uta.fi/">
                <img src={keitos} alt="Kaappaus sivustolta" style={{maxWidth: '100%'}}/>
            </a>
            <h3>The Pandemic</h3>
            <p>
                Kahden opiskelukaverin kanssa suunniteltu ja toteutettu interaktiivinen dashboard, joka kuvaa koronapandemian avainlukuja.
            </p> 
            <p> 
                Tässä projektissa suunnittelin käyttöliittymän ja ohjelmoin sen kokeneemman opiskelijan kanssa TypeScriptillä toteutettuna React-sovelluksena. 
            </p>
            <p>
                Sovelluksen kehitystä ei ole jatkettu, joten siitä ei ole demoa saatavilla. 
                GitHubista käyttöliittymän koodi löytyy <a href="https://github.com/mariannesiren/the-pandemic-ui">täältä</a>. 
            </p>
            <video controls style={{maxWidth: '100%'}}>
                <source src={pandemic} type="video/mp4" />
            </video>
       </div>
    )
}
 
export default home;