import React from 'react';
import './style.scss';

function Blog() {
  let posts = [
    {
      title: 'Será que empreender é tão arriscado assim?',
      body: 'Quem já não pensou em empreender? se você esta lendo este' +
        'esse texto, você provavelmente faz parte dos 66% da população que' +
        'ja considerou...',
      href: ''
    },
    {
      title: 'Como gerar ideias para startups',
      body: 'Quando você estiver tentando pensar em ideias para startups' +
        'é útil ter um processo que lhe ajude a idear. Aqui vamos revisar...',
      href: ''
    },
    {
      title: 'Como precificar o produto de sua startup?',
      body: 'Resumo: 1. cobre de seus usuários, 2. Precifique com base no' +
        'valor que você traz e não no seu custo. 3. Sua startup provavelmente...',
      href: ''
    }
  ]

  return(
    <section className="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h1 className='bold text-center'>Nosso Blog</h1>
                <p className='text-center'>Postagens recentes sobre startups, economia e o mundo de empreendedorismo.</p>
                <br />

                { posts.map((post, index) => {
                  return(
                    <div className='col-md-4' key={index}>
                      <h4 className="bold post-title">{post.title}</h4>
                      <p className='post-body'>{post.body}</p>

                      <a href={post.href}>
                        Leia mais
                        <i className="fa-solid fa-arrow-right ico"></i>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog;