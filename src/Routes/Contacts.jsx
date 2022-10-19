import React, { useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import * as S from '../Styles/RoutesStyles/contactsStyles';

export default function Contacts(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m0svz8l', 'template_5dndcvv', form.current, 'Vo4tMeC9Rr6NKKpRs')
            .then((result) => {
                console.log("E-mail enviado com sucesso!");
            }, (error) =>{
                console.log("Erro ao tentar enviar o e-mail, tente novamente.");
        });
        form.current.reset()
    }

    return(
        <S.Section>
            <S.Title>
                <S.ContactTitle>Contatos</S.ContactTitle>
                <S.Dash></S.Dash>
            </S.Title>
            <S.ContainerContacts>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.ContactsBox>
                        <S.LabelContact for="name">Nome</S.LabelContact>
                        <S.InputContact id="name" type="text" name="name" placeholder="Digite seu nome" required/>
                    </S.ContactsBox>
                    <S.ContactsBox>
                        <S.LabelContact for="email">Email</S.LabelContact>
                        <S.InputContact id="email" type="email" name="email" placeholder=" Digite seu e-mail" required/>
                    </S.ContactsBox>
                    <S.ContactsBox>
                        <S.LabelContact for="message">Mensagem</S.LabelContact>
                        <S.TextMessage id="message" type="text" name="message" placeholder="Digite a mensagem" required/>
                    </S.ContactsBox>
                    <S.Button>Enviar</S.Button>
                </S.Form>
                <S.ContainerSocials>
                    <a href="https://github.com/thayssa-souza" target="_blank">
                        <S.btnGithub>Github</S.btnGithub>
                    </a> 

                    <a href="https://www.linkedin.com/in/thayssa-souza/" target="_blank">
                        <S.btnLinkedin>Linkedin</S.btnLinkedin>
                    </a> 
            </S.ContainerSocials>
        </S.ContainerContacts>
        </S.Section>
    )
}