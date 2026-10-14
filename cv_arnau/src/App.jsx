import { useState } from 'react'
import './App.css'

/* ============================================================
   EDITA SOLO ESTA PARTE CON TUS DATOS
   ============================================================ */

const perfil = {
  nombre: 'Arnau Martín Giol',
  titulo: 'Graduado en Ingeniería Informática de Gestión y Sistemas de Información',
  resumen:
      'Desarrollador full stack (React Native y Spring Boot) formado en TecnoCampus Mataró-Maresme (UPF). Conozco el sector de la hostelería desde dentro tras cinco años trabajando en él, y lo usé como punto de partida para construir mi TFG.',
  contacto: [
    { etiqueta: 'Email', texto: 'arnaugranja@gmail.com', url: 'mailto:arnaugranja@gmail.com' },
    { etiqueta: 'GitHub', texto: 'github.com/Arnaumg03', url: 'https://github.com/Arnaumg03' },
    { etiqueta: 'LinkedIn', texto: 'linkedin.com/in/arnau-martín-giol', url: 'https://linkedin.com/in/arnau-martín-giol' },
  ],
  tecnologias: ['React Native', 'Spring Boot', 'PostgreSQL', 'Java', 'JavaScript', 'REST API', 'JWT', 'Git'],
}

// Tu otro proyecto personal
const proyecto = {
  nombre: 'Frame Sound Studio',
  descripcion:
      'Web para generar imágenes de álbumes de artistas, con un script en Python que automatiza la creación de las imágenes. Lo desarrollé yo de principio a fin, desde el código hasta la publicación del sitio.',
  puntos: [
    'Script en Python que genera automáticamente imágenes de álbumes de artistas.',
    'Sitio web publicado en framesoundstudio.com.',
    'Proyecto propio: diseño, desarrollo y puesta en producción.',
  ],
  tecnologias: ['Python', 'HTML', 'CSS', 'JavaScript'],
  enlaces: [
    { texto: 'Ver web', url: 'https://framesoundstudio.com' },
    // { texto: 'Ver código', url: 'https://github.com/Arnaumg03/tu-repositorio' },
  ],
}

const tfg = {
  titulo: 'Aplicació per a la gestió de bars i restaurants',
  meta: 'TecnoCampus Mataró-Maresme (UPF) · Curso 2024-2025 · Tutor: Jordi López Galera',
  descripcion:
      'Aplicación móvil multiplataforma para digitalizar la gestión de bares y restaurantes pequeños y medianos, que a menudo siguen trabajando con procesos manuales o con TPV caros y complejos. Cubre el servicio completo: pedidos, mesas, cobros, personal, productos y estadísticas.',
  puntos: [
    'Pedidos para llevar y asignación posterior a mesa, con extras, notas y suplemento de terraza.',
    'Cobro de la mesa completa o por separado, cancelación de ventas y buscador de pedidos activos.',
    'Editor visual de plantas y mesas, gestión de productos, categorías y personal por roles (propietario con PIN y camareros).',
    'Estadísticas con calendario de ingresos diarios y gráficos de ingresos y beneficio mensual.',
    'Backend modular con API REST, autenticación JWT, autorización por roles y transacciones ACID sobre PostgreSQL.',
    'Desarrollo con metodología Kanban en Jira, pruebas unitarias y de integración (JUnit y Mockito) y pruebas con usuarios reales.',
  ],
  tecnologias: [
    'React Native',
    'Redux',
    'Axios',
    'Spring Boot',
    'Spring Security',
    'Spring Data JPA',
    'PostgreSQL',
    'JUnit',
    'Mockito',
    'Kanban / Jira',
  ],
  // Pon los PDF en la carpeta /public con estos nombres (o cambia las rutas)
  documentos: [
    { id: 'memoria', etiqueta: 'Memoria', archivo: '/tfg-memoria.pdf' },
    { id: 'viabilidad', etiqueta: 'Estudio de viabilidad', archivo: '/tfg-viabilidad.pdf' },
    // Cuando quieras añadir la presentación oral:
    // { id: 'presentacion', etiqueta: 'Presentación oral', archivo: '/tfg-presentacion.pdf' },
  ],
}

/* ============================================================ */

function App() {
  const [docActivo, setDocActivo] = useState(tfg.documentos[0].id)
  const doc = tfg.documentos.find((d) => d.id === docActivo)

  return (
      <div className="cv">
        <aside className="perfil">
          <h1>{perfil.nombre}</h1>
          <p className="titulo">{perfil.titulo}</p>
          <p className="resumen">{perfil.resumen}</p>

          <nav aria-label="Secciones">
            <a href="#tfg">Trabajo de fin de grado</a>
            <a href="#proyecto">Proyecto personal</a>
          </nav>

          <ul className="contacto">
            {perfil.contacto.map((c) => (
                <li key={c.etiqueta}>
                  <span>{c.etiqueta}</span>
                  <a href={c.url} target="_blank" rel="noreferrer">
                    {c.texto}
                  </a>
                </li>
            ))}
          </ul>

          <ul className="tags">
            {perfil.tecnologias.map((t) => (
                <li key={t}>{t}</li>
            ))}
          </ul>
        </aside>

        <main className="contenido">
          <section id="tfg">
            <h2>Trabajo de fin de grado</h2>
            <h3>{tfg.titulo}</h3>
            <p className="meta">{tfg.meta}</p>
            <p>{tfg.descripcion}</p>
            <ul className="puntos">
              {tfg.puntos.map((p) => (
                  <li key={p}>{p}</li>
              ))}
            </ul>
            <ul className="tags">
              {tfg.tecnologias.map((t) => (
                  <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="tabs" role="tablist" aria-label="Documentos del TFG">
              {tfg.documentos.map((d) => (
                  <button
                      key={d.id}
                      type="button"
                      role="tab"
                      aria-selected={d.id === docActivo}
                      className={d.id === docActivo ? 'tab activa' : 'tab'}
                      onClick={() => setDocActivo(d.id)}
                  >
                    {d.etiqueta}
                  </button>
              ))}
            </div>

            <div className="visor">
              <iframe key={doc.id} src={`${doc.archivo}#view=FitH`} title={doc.etiqueta} />
            </div>

            <div className="enlaces">
              <a href={doc.archivo} target="_blank" rel="noreferrer">
                Abrir en pestaña nueva
              </a>
              <a href={doc.archivo} download>
                Descargar PDF
              </a>
            </div>
            <p className="nota-movil">
              Si el visor no se ve en tu móvil, usa «Abrir en pestaña nueva».
            </p>
          </section>

          <section id="proyecto">
            <h2>Proyecto personal</h2>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <ul className="puntos">
              {proyecto.puntos.map((p) => (
                  <li key={p}>{p}</li>
              ))}
            </ul>
            <ul className="tags">
              {proyecto.tecnologias.map((t) => (
                  <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="enlaces">
              {proyecto.enlaces.map((e) => (
                  <a key={e.url} href={e.url} target="_blank" rel="noreferrer">
                    {e.texto}
                  </a>
              ))}
            </div>
          </section>
        </main>
      </div>
  )
}

export default App
