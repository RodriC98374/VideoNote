import React from 'react'

const AboutUs = () => (
    <section class="conteiner main-content-page col py-5 d-flex acercaDe d-flex align-items-center mb-5">
            <div class="conteiner col-lg-6 offset-lg-1 flex-column my-5 pt-5">
                <h2>VideoNote</h2>
                <p>Tenemos el objetivos de brindar una gran variedad de videos para ayudar a otros estudiantes como yo
                    si quisieras sugerir algun video puedes hacerlo escribiendo a nuestro correo adjuntando el link y
                    una vez revisado sera añadido a la pagina</p>
                <h4>Desarrollado por:</h4>
                <p>Rodrigo Mauricio Cespedes Paredes</p>
                <h4>Correo:</h4>
                <p>video_note@gmail.com</p>
            </div>
            <form class="col-lg-4 my-5 pt-5">
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </section>
)

export default AboutUs