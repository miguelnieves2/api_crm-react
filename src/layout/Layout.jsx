import {Outlet, Link, useLocation} from 'react-router-dom' 

const Layout = () => {

  // De useLocation se puede obtener:
    // pathname: Detectar en que pagina se encuentra el usuario
    // search: Detectar lo que se pasa como Query - Ejemplo el id de usuario: pagina.com/edit?id=10
  const location = useLocation();
  // console.log(location);
  const urlActual = location.pathname;

  return (
    // En un tamaño mediano va a aplicar Flexbox y que a su tamaño minimo de pantalla tiene que ser toda la altura que tengamos
    <div className='md:flex md:min-h-screen'>
      {/* Barra lateral va a tener un width 1 de 4 */}
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">

        <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
        
        <nav className='mt-10'>
          {/* Link en vez de usar 'a' de html para que al cambiar de ruta, no se vea en el navegador una especie de recarga */}
          <Link 
            className={`
              ${urlActual === '/clientes' ? 'text-blue-300' : 'text-white'} 
              text-2xl block mt-2 hover:text-blue-300`
            }
            to="/clientes">
              Clientes
          </Link>
          <Link 
            className={`
              ${urlActual === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} 
              text-2xl block mt-2 hover:text-blue-300`
            }
            to="/clientes/nuevo">
              Nuevo cliente
          </Link>
        </nav>
      </div>

      {/* ultimos valores del siguiente className, se pusieron para que el menu no tenga scroll */}
      <div className='md:w-3/4 p-10 bg-slate-100 md:h-screen overflow-scroll'>
        <Outlet>
                    {/* Contenido del otro componente de React Route */}
        </Outlet>
      </div>

    </div>
  )
}

export default Layout