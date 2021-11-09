/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/navbar/navbar'
import style from '../home/style.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#ff0000"
				/>
				<meta name="msapplication-TileColor" content="#3e3e3e" />
				<meta name="theme-color" content="#ffffff" />
				<title>Indesfer</title>
				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
					integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className={style.body}>
				{/*NAVBAR*/}
				<main>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 10000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						className="mySwiper"
					>
						<SwiperSlide>
							<img
								className={style.imagemFundo}
								src="/001_112338.webp"
								alt="Picture of the author"
							/>
							<div className={style.txtslide}>
								<h2>VIGAS ENRIJECIDAS</h2>
								<p>
									As construções feitas com perfil U
									enrijecido, em comparação a outros
									materiais, oferecem redução de peso de até
									1/3 das estruturas
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className={style.imagemFundo}
								src="/002_112425.webp"
								alt="Picture of the author"
							/>
							<div className={style.txtslide}>
								<h2>METALONS</h2>
								<p>
									O metalon é um tubo de aço carbono
									largamente utilizado na construção civil.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className={style.imagemFundo}
								src="/004_112530.webp"
								alt="Picture of the author"
							/>
							<div className={style.txtslide}>
								<h2>CANTONEIRAS</h2>
								<p>
									Cantoneiras para todos as necessidades você
									encontra aqui na Indesfer.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className={style.imagemFundo}
								src="/012_113543.webp"
								alt="Picture of the author"
							/>
							<div className={style.txtslide}>
								<h2>FERROS CHATOS</h2>
								<p>
									Toda a diversidade de ferros chatos você
									encontra aqui na Indesfer.
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
					<section>
						<div className={style.sobretitle}>
							<h1>Sobre</h1>
						</div>
						<div className={style.bg}>
							<p>
								A Indesfer atua no mercado de corte e dobra de
								chapas, fabricação de telhas galvanizadas e
								termoacústica, além de perfis estruturais que
								atendem as mais variadas necessidades do
								mercado. A cada ano, a indesfer tem se
								aperfeiçoado através de lançamentos de novos
								produtos e adaptações às normas técnicas de
								qualidade exigidas pelo mercado. A Indesfer atua
								no mercado de corte e dobra de chapas,
								fabricação de telhas galvanizadas e
								termoacústica, além de perfis estruturais que
								atendem as mais variadas necessidades do
								mercado. A cada ano, a indesfer tem se
								aperfeiçoado através de lançamentos de novos
								produtos e adaptações às normas técnicas de
								qualidade exigidas pelo mercado.
							</p>
						</div>
					</section>
				</main>
				<section>
					<div className={style.catalogo}>
						<div id="catalogo" className={style.title}>
							<h2>Catálogo</h2>
						</div>
					</div>
				</section>
			</body>
		</>
	)
}

export default Home
