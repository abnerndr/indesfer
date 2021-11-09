/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import style from './style.module.css'

export default function Navbar() {
	const [shownav, setShowNav] = useState(false)
	const onClick = () => setShowNav(!shownav)

	return (
		<nav className={style.nav}>
			{shownav ? (
				<div className={style.navdiv}>
					<ul>
						<li></li>
						<li>
							<img
								className={style.invertImage}
								src="arrow.png"
								alt="Arrow"
								height="30"
								onClick={e => setShowNav(!shownav)}
							/>
						</li>
						<li>
							<img src="logo.webp" alt="Indesfer Logo" />
						</li>
						<li>
							<a href="#">Inicio</a>
						</li>
						<li>
							<a href="#catalogo">Catálogo</a>
						</li>
						<li>
							<a href="">clientes</a>
						</li>
						<li>
							<a href="">contato</a>
						</li>
					</ul>
					<div className={style.border}></div>
				</div>
			) : (
				<>
					<div className={style.center}>
						<button onClick={onClick}>
							<img src="arrow.png" alt="Arrow" height="30" />
						</button>
						<img src="logo.webp" alt="Indesfer Logo" />
					</div>
				</>
			)}
		</nav>
	)
}
